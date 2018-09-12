import wx from 'weixin-js-sdk'
import Cookies from 'js-cookie'
import ajax from './ajax'
import { getUrlQuery, storage, session } from './utils'

let wechat = {
    appid: 'wx97c624858e7a37d8',
    openid: storage.get('openid'),
    configParam: {
        debug: false,
        timestamp: '',
        nonceStr: '',
        signature: ''
    },
    payParam: {
        appid: this.appid,
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: '',
        paySign: '',
        orderCode: '' // 订单号
    },
    authCode: getUrlQuery('code'),
    getConfigParam (cb) {
        ajax({
            url: 'common/weChat/getweChatInfo',
            success: (data) => {
                this.configParam.timestamp = data.timestamp
                this.configParam.nonceStr = data.nonceStr
                this.configParam.signature = data.signature
                cb()
            }
        })
    },
    getAppid (callback) {
        if (this.appid) {
            return
        }
        ajax({
            url: 'common/weChat/getAppId',
            success: (data) => {
                this.payParam.appid = data.appId
                Cookies.set('appid', data.appId)
                callback()
            }
        })
    },
    setWxConfig ({jsApiList, ready, error}) {
        let set = () => {
            wx.config({
                debug: this.configParam.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: this.appid, // 必填，公众号的唯一标识
                timestamp: this.configParam.timestamp, // 必填，生成签名的时间戳
                nonceStr: this.configParam.nonceStr, // 必填，生成签名的随机串
                signature: this.configParam.signature, // 必填，签名，见附录1
                // jsApiList: ['scanQRCode', 'translateVoice', 'checkJsApi', 'chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                jsApiList: jsApiList
            })
            ready && wx.ready(ready)
            error && wx.fail(error)
        }
        if (this.configParam.timestamp) {
            set()
        } else {
            this.getConfigParam(set)
        }
    },
    /**
     * 获取微信授权的code，
     * @param clearQuery 是否重定向至url没有参数code和state的页面
     * @returns {String} code || ''
     */
    getCode (clearQuery = true) {
        if (clearQuery) {
            if (getUrlQuery('state') === 'wechat') { // 授权后重定向回来，则将code存到session后，重定向至没有参数code和state的页面
                session.set('wechat_code', getUrlQuery('code'))
                let url = window.location.href
                window.location.href = url.substring(0, url.indexOf('?'))
            } else {    // 判断session中是否已经有code
                let code = session.get('wechat_code')
                if (code) {
                    session.remove('wechat_code')
                    return code
                }
            }
        } else {
            if (getUrlQuery('state') === 'wechat') {
                return getUrlQuery('code')
            }
        }
        return ''
    },
    /**
     * 移动端
     * 重定向至 获取微信验证授权的url 并 重定向至reUrl，reUrl带code
     * reUrl默认为当前页
     * @param reUrl
     */
    wechatAuth (reUrl) {
        if (session.get('wechat_code')) return
        let redirectUri = encodeURIComponent(reUrl || window.location.href)
        // let currentUrl = encodeURIComponent('http://16535j5e29.51mypc.cn/anlianExam/mobile/index.html#/signUp');
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.appid +
            '&redirect_uri=' + redirectUri +
            '&response_type=code&scope=snsapi_userinfo' +
            '&state=' + 'wechat' +
            '#wechat_redirect'
    },
    /**
     * 移动端获取openid
     * @param cb
     */
    getOpenid (cb) {
        if (this.openid) {
            if (!Cookies.get('openid')) {
                Cookies.set('openid', this.openid)
            }
            cb && cb()
            return
        }
        let code = this.getCode(true)
        if (!code) {
            this.wechatAuth()
            return
        }
        ajax({
            url: 'common/weChat/getOpenid',
            data: {
                code: code
            },
            success: (data) => {
                this.openid = data.openid
                storage.set('openid', data.openid)
                Cookies.set('openid', data.openid)
                cb && cb()
            },
            error: (e) => {
                alert(e.message)
            }
        })
    },
    scanQrCode (cb) {
        // console.log(this.configParam)
        wx.scanQRCode({
            desc: 'scanQRCode desc',
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            success (res) {
                let result = res.resultStr
                cb && cb(result)
            },
            error (res) {
                if (res.errMsg.indexOf('function_not_exist') > 0) {
                    alert('版本过低请升级')
                }
            }
        })
    },
    paySubmit ({success, error}) {
        wx.chooseWXPay({
            timestamp: this.payParam.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: this.payParam.nonceStr, // 支付签名随机串，不长于 32 位
            package: this.payParam.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: this.payParam.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: this.payParam.paySign, // 支付签名
            success: function (res) {
                if (res.errMsg == 'chooseWXPay:ok') {
                    success && success()
                }
            },
            fail: function () {
                error && error()
            },
            cancel: function () {
                error && error()
            }
        })
    },
    /**
     * 设置微信分享内容
     * @param option
     * @param ways
     * timeline.option {title, link, imgUrl, success, cancel} 朋友圈
     * QQ,weibo,QZone  {title, desc, link, imgUrl,...}
     * appMessage {title, desc, link, imgUrl, type, dataUrl,...} 分享给朋友
     *      type - 分享类型,music、video或link，不填默认为link
     *      dataUrl - 如果type是music或video，则要提供数据链接，默认为空
     * link - 分享链接, timeline, appMessage, 该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
     */
    setShareOption (option, ways = ['timeline', 'appMessage', 'QQ', 'weibo', 'QZone']) {
        ways.indexOf('timeline') > -1 && wx.onMenuShareTimeline(option)
        ways.indexOf('appMessage') > -1 && wx.onMenuShareAppMessage(option)
        ways.indexOf('QQ') > -1 && wx.onMenuShareQQ(option)
        ways.indexOf('weibo') > -1 && wx.onMenuShareWeibo(option)
        ways.indexOf('QZone') > -1 && wx.onMenuShareQZone(option)
    },
}
export default wechat
