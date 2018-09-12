import axios from 'axios'
import qs from 'qs'

import {
    SUCCESS,
    // SYSTEM_ERROR,
    // PARAMETER_ERROR,
    // NO_DATA,
    // MOBILE_PHONE_ERROR,
    // PHONE_ERROR,
    // EMAIL_ERROR,
    // ACCOUNT_OR_PASSWORD_ERROR,
    // TWO_PWD_DIFFERENT,
    // ACCOUNT_DISABLED,
    // LOGIN_EXPIRED,
    // ORIGIN_PWD_ERROR,
} from './statusCode.js'

let baseUrl = process.env.NODE_ENV === 'production'
    ? 'http://gmchwl.ydcycloud.com/gmfood/'
    // ? 'http://huolikang.free.ngrok.cc/gmfood/'
    // : 'http://192.168.1.25:8080/gmfood/'
    : 'http://192.168.1.18:8080/gmfood/'

let error = {
    handler: (code) => {
        if (!code.status) {
            return
        }
        alert(code.status + code.message)
        switch (this.status) {
        }
    }
}
let ajax = (json) => {
    let conf = {
        url: baseUrl + json.url,
        method: json.method || 'post',
        params: json.params || null,
        data: json.data || null
    }
    conf.data = qs.stringify(conf.data)
    return axios(conf).then((res) => {
        let code = res.data
        return new Promise((resolve, reject) => {
            if (code.status === SUCCESS) {
                json.success && json.success(code.data)
                resolve(code.data)
            } else {
                if (json.error) {
                    json.error(code)
                } else {
                    error.handler(code)
                }
            }
        })
    }).catch((error) => {
        console.log(error)
    })
}
export default ajax
