/** 正则匹配相关信息  */

// 是否邮箱
export const isEmail = (s) => {
    return /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-]+(.[0-9a-zA-Z_-]{2,3}){1,2})/.test(s)
}

// 是否手机号码
export const isMobile = (s) => {
    return /^1[0-9]{10}$/.test(s)
}

// 是否大陆有效手机号码
export const isStrictMobile = (s) => {
    return /^[0]?1[3|5][0-9]{10}$/.test(s)
}

// 是否电话号码
export const isPhone = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 是否Url地址
export const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
}

// 是否字符串
export const isString = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

// 是否数字
export const isNumber = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

// 是否Boolean
export const isBoolean = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

// 是否函数
export const isFunction = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

// 是否为Null
export const isNull = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

// 是否为undefined
export const isUndefined = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

// 是否对象
export const isObj = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

// 是否数组
export const isArray = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

// 是否时间
export const isDate = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

// 是否正则
export const isRegExp = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

// 是否为错误对象
export const isError = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

// 是否为Symbol函数
export const isSymbol = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

// 是否为Promise对象
export const isPromise = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

// 是否为Set对象
export const isSet = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

/**  浏览器设备相关  */

// 是否为移动端
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(window.navigator.userAgent.toLowerCase())
}

// 是否为IOS
export const isIOS = () => {
    var u = window.navigator.userAgent
    if (u.indexOf('iPhone') !== -1) return true
    else return false
}

// 是否为PC端
export const isPC = () => {
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
export const isWeiXinBrowser = () => {
    window.navigator.userAgent.toLowerCase().match(/microMessenger/i) === 'micromessenger'
}

// 是否为QQ浏览器
export const isQQBrowser = () => {
    return !!window.navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

// 是否为IE浏览器
export const isIEBrowser = () => {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}

// 获取IE浏览器版本号
export const getIEVersions = () => {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        var str = window.navigator.userAgent
        if (str.indexOf("MSIE 6.0") != "-1") return "IE6";
        if (str.indexOf("MSIE 7.0") != "-1") return "IE7";
        if (str.indexOf("MSIE 8.0") != "-1") return "IE8";
        if (str.indexOf("MSIE 9.0") != "-1") return "IE9";
        if (str.indexOf("MSIE 10.0") != "-1") return "IE10";
        return "IE11";
    } else {
        return false;
    }
}

// 获取浏览器类型
export const getBrowserType = () => {
    var str = window.navigator.userAgent;
    if (str.indexOf("QQBrowser") != "-1") {
        return "QQ";
    } else if (str.indexOf("LBBROWSER") != "-1") {
        return "liebao";
    } else if (str.indexOf("SE") != "-1") {
        return "sougou";
    } else if (str.indexOf("Firefox") != "-1") {
        return "firefox";
    } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return "IE";
    } else if (str.indexOf("OPR") != "-1") {
        return "opera";
    } else if (str.indexOf("Chrome") != "-1") {
        return "chrome";
    } else if (str.indexOf("Safari") != "-1") {
        return "safari";
    }
}

/**  BOM 操作相关 */

// 获取url参数
export const getUrlParam = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = window.location.href.split('?')[1] || '';
    const r = search.match(reg) || [];
    return r[2];
}

// 追加url参数
export const appendUrlParam = (url, key, value) => {
    var options = key;
    if (typeof options == 'string') {
        options = {};
        options[key] = value;
    }
    options = $.param(options);
    if (url.includes('?')) {
        url += '&' + options
    } else {
        url += '?' + options
    }
    return url;
}


/** DOM相关  */

// el是否包含某个class
export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

// el添加某个class
export const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

// el去除某个class
export const removeClass = (el, className) => {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

// 去除Html标签
export const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}

// 动态引入js
export const injectScript = (src) => {
    return new Promise((resolve, reject) => {
        if (!!src) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = src;
            const t = document.getElementsByTagName('script')[0];
            t.parentNode.insertBefore(s, t);
            if (s.readyState) {   //IE
                s.onreadystatechange = function () {
                    if (s.readyState == 'complete' || s.readyState == 'loaded') {
                        s.onreadystatechange = null;
                        resolve()
                    }
                }
            } else {    //非IE
                s.onload = function () {
                    s.onload = null;
                    resolve()
                }
            }
        } else {
            reject('The script src property value is null')
        }
    })
}

// 获取滚动的坐标
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 滚动到顶部
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

/**  功能函数  */

// 洗牌随机算法
export const shuffle = (arr) => {
    var result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

// 类型判断集合
export const checkStr = (str, type) => {
    switch (type) {
        case 'phone':   //手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        case 'tel':     //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card':    //身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal':  //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ':      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email':   //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money':   //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL':     //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP':      //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date':    //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /[\u4e00-\u9fa5]/g.test(str);
        case 'lower':   //小写
            return /^[a-z]+$/.test(str);
        case 'upper':   //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML':    //HTML标记
            return /<([^]*|[^]*|[^>])*>/.test(str);
        default:
            return true;
    }
}

// 严格的身份证效验
export const isCardID = (sId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        console.log('你输入的身份证长度或格式错误')
        return false
    }
    //身份证城市
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
        console.log('你的身份证地区非法')
        return false
    }
    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
        console.log('身份证上的出生日期非法')
        return false
    }
    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432"
    for (var i = 0; i < sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log('你输入的身份证号非法')
        return false
    }
    return true
}

// 随机数范围
export const randomRange = function (min, max) {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null
    }
}

// 判断元素是否在数组中
export const inArray = (arr, val) => {
    return arr.indexOf(val) != -1 ? true : false
}

// 数组排序 {type} 1：从小到大 2：从大到小
export const sort = (arr, type = 1) => {
    return arr.sort((a, b) => {
        switch (type) {
            case 1:
                return a - b
            case 2:
                return b - a
            default:
                return arr
        }
    })
}

// 数组去重
export const unique = (arr) => {
    if (Array.hasOwnProperty('from')) {
        return Array.from(new Set(arr));
    } else {
        var n = {}, r = [];
        for (var i = 0; i < arr.length; i++) {
            if (!n[arr[i]]) {
                n[arr[i]] = true;
                r.push(arr[i]);
            }
        }
        return r;
    }
}

// 求两个集合的并集
export const union = (arr1, arr2) => {
    var newArr = arr1.concat(arr2)
    return unique(newArr)
}

// 求两个集合的交集
export const intersection = (arr1, arr2) => {
    var arr1_x = unique(arr1)
    var arr2_x = unique(arr2)
    return arr1_x.filter(function (item) {
        return arr2_x.indexOf(item) > -1
    })
}

// 删除集合中其中一个目标元素
export const listRemoveTarget = (list, target) => {
    var index = list.indexOf(target)
    if (index > -1) {
        list.splice(index, 1)
    }
    return list
}

// 求集合中的最大值
export const listMax = list => {
    return Math.max.apply(null, list)
}

// 求集合中的最小值
export const listMin = list => {
    return Math.min.apply(null, list)
}

// 求和
export const sum = arr => {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
}

// 平均值
export const average = arr => {
    return sum(arr) / arr.length
}

// 去除空格 type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str, type = 1) => {
    switch (type) {
        case 1:
            return str.replace(/\s+/g, '')
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, '')
        case 3:
            return str.replace(/(^\s*)/g, '')
        case 4:
            return str.replace(/(\s*$)/g, '')
        default:
            return str
    }
}

// 检测密码强度
export const checkPwd = (str) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
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
    getIEVersions,
    getBrowserType,
    getUrlParam,
    appendUrlParam,
    hasClass,
    addClass,
    removeClass,
    removeHtmltag,
    injectScript,
    getScrollPosition,
    scrollToTop,
    shuffle,
    checkStr,
    isCardID,
    randomRange,
    inArray,
    sort,
    unique,
    union,
    intersection,
    listRemoveTarget,
    listMax,
    listMin,
    sum,
    average,
    trim,
    checkPwd
}
