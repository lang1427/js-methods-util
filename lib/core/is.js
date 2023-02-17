const isEmail = (s) => {
    return /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-]+(.[0-9a-zA-Z_-]{2,3}){1,2})/.test(s)
}

// 是否手机号码
const isMobile = (s) => {
    return /^1[0-9]{10}$/.test(s)
}

// 是否大陆有效手机号码
const isStrictMobile = (s) => {
    return /^[0]?1[3|5][0-9]{10}$/.test(s)
}

// 是否电话号码
const isPhone = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 是否Url地址
const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
}

// 是否字符串
const isString = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

// 是否数字
const isNumber = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

// 是否Boolean
const isBoolean = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

// 是否函数
const isFunction = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

// 是否为Null
const isNull = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

// 是否为undefined
const isUndefined = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

// 是否对象
const isObj = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

// 是否数组
const isArray = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

// 是否时间
const isDate = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

// 是否正则
const isRegExp = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

// 是否为错误对象
const isError = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

// 是否为Symbol函数
const isSymbol = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

// 是否为Promise对象
const isPromise = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

// 是否为Set对象
const isSet = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

// 是否为移动端
const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(window.navigator.userAgent.toLowerCase())
}

// 是否为IOS
const isIOS = () => {
    var u = window.navigator.userAgent
    if (u.indexOf('iPhone') !== -1) return true
    else return false
}

// 是否为PC端
const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 是否为微信浏览器
const isWeiXinBrowser = () => {
    window.navigator.userAgent.toLowerCase().match(/microMessenger/i) === 'micromessenger'
}

// 是否为QQ浏览器
const isQQBrowser = () => {
    return !!window.navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

// 是否为IE浏览器
const isIEBrowser = () => {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}


export default {
    isEmail,
    isMobile,
    isStrictMobile,
    isPhone,
    isURL,
    isString,
    isNumber,
    isBoolean,
    isFunction,
    isNull,
    isUndefined,
    isObj,
    isArray,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isPromise,
    isSet,
    isDeviceMobile,
    isIOS,
    isPC,
    isWeiXinBrowser,
    isQQBrowser,
    isIEBrowser,
}
