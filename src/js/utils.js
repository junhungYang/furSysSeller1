/* eslint-disable */

// 获取url参数
function getUrlQuery (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return (r[2])
    return ''
}

// Storage
let Storage = function (storage) {
    return {
        set: (key, val) => {
            let str = typeof val !== 'string' ? JSON.stringify(val) : val
            storage.setItem(key, str)
        },
        get: (key) => {
            return storage.getItem(key)
        },
        getJSON: (key) => {
            return JSON.parse(storage.getItem(key))
        },
        remove: (key) => {
            storage.removeItem(key)
        }
    }
}
const storage = new Storage(window.localStorage)
const session = new Storage(window.sessionStorage)

/**
 * 解决输入文本框获取焦点后，输入法影响fixed布局问题
 * 元素需添加fixed类名
 */
function resolveFixed () {
    let timer
    document.querySelectorAll('input[type=text], textarea').forEach((el) => {
        el.addEventListener('focus', () => {
            clearTimeout(timer)
            document.getElementsByClassName('fixed').forEach((el2) => {
                el2.style.top = el2.offsetTop + 'px'
            })
        })
    })
    document.querySelectorAll('input[type=text], textarea').forEach((el) => {
        el.addEventListener('blur', () => {
            timer = setTimeout(() => {  // 延迟是等待输入法消失
                document.getElementsByClassName('fixed').forEach((el2) => {
                    el2.style.top = ''
                })
            }, 200)
        })
    })
}

// 获取当前时间，格式YYYY-MM-DD
function getNowFormatDate () {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
    }
    let currentdate = year + '-' + month + '-' + strDate
    return currentdate
}

/**
 * 获取上一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getPreMonth (date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

/**
 * 获取下一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getNextMonth (date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

export {
    getUrlQuery,
    resolveFixed,
    storage,
    session,
    getNowFormatDate,
    getNextMonth,
    getPreMonth,
}
