import wx from 'weixin-js-sdk'

let wechat = {
    configParam: {
        debug: true,
        appid: '',
        timestamp: '',
        nonceStr: '',
        signature: ''
    },
    setWxConfig ({jsApiList, ready, error}) {
        console.log(this.configParam)
        let set = () => {
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: this.configParam.appId, // 必填，公众号的唯一标识
              timestamp: this.configParam.timestamp, // 必填，生成签名的时间戳
              nonceStr: this.configParam.nonceStr, // 必填，生成签名的随机串
              signature: this.configParam.signature, // 必填，签名，见附录1
              jsApiList: ['scanQRCode', 'translateVoice', 'checkJsApi'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              jsApiList: jsApiList
            });
            ready && wx.ready(ready)
            error && wx.fail(error)
        }
            set()
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
}
export default wechat
