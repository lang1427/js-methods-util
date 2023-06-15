// methods_util v0.6.6 Copyright (c) 2023 Wei Zhixiang and contributors
const isEmail$1 = (s) => {
    return /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-]+(.[0-9a-zA-Z_-]{2,3}){1,2})/.test(s)
};

// 是否手机号码
const isMobile$1 = (s) => {
    return /^1[0-9]{10}$/.test(s)
};

// 是否大陆有效手机号码
const isStrictMobile$1 = (s) => {
    return /^[0]?1[3|5][0-9]{10}$/.test(s)
};

// 是否电话号码
const isPhone$1 = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
};

// 是否Url地址
const isURL$1 = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
};

// 是否字符串
const isString$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
};

// 是否数字
const isNumber$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
};

// 是否Boolean
const isBoolean$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
};

// 是否函数
const isFunction$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
};

// 是否为Null
const isNull$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
};

// 是否为undefined
const isUndefined$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
};

// 是否对象
const isObj$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
};

// 是否数组
const isArray$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
};

// 是否时间
const isDate$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
};

// 是否正则
const isRegExp$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
};

// 是否为错误对象
const isError$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
};

// 是否为Symbol函数
const isSymbol$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
};

// 是否为Promise对象
const isPromise$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
};

// 是否为Set对象
const isSet$1 = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
};

// 是否为移动端
const isDeviceMobile$1 = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(window.navigator.userAgent.toLowerCase())
};

// 是否为IOS
const isIOS$1 = () => {
    var u = window.navigator.userAgent;
    if (u.indexOf('iPhone') !== -1) return true
    else return false
};

// 是否为PC端
const isPC$1 = () => {
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
};

// 是否为微信浏览器
const isWeiXinBrowser$1 = () => {
    window.navigator.userAgent.toLowerCase().match(/microMessenger/i) === 'micromessenger';
};

// 是否为QQ浏览器
const isQQBrowser$1 = () => {
    return !!window.navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
};

// 是否为IE浏览器
const isIEBrowser$1 = () => {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
};


const is = {
    isEmail: isEmail$1,
    isMobile: isMobile$1,
    isStrictMobile: isStrictMobile$1,
    isPhone: isPhone$1,
    isURL: isURL$1,
    isString: isString$1,
    isNumber: isNumber$1,
    isBoolean: isBoolean$1,
    isFunction: isFunction$1,
    isNull: isNull$1,
    isUndefined: isUndefined$1,
    isObj: isObj$1,
    isArray: isArray$1,
    isDate: isDate$1,
    isRegExp: isRegExp$1,
    isError: isError$1,
    isSymbol: isSymbol$1,
    isPromise: isPromise$1,
    isSet: isSet$1,
    isDeviceMobile: isDeviceMobile$1,
    isIOS: isIOS$1,
    isPC: isPC$1,
    isWeiXinBrowser: isWeiXinBrowser$1,
    isQQBrowser: isQQBrowser$1,
    isIEBrowser: isIEBrowser$1,
};

// 获取IE浏览器版本号
const getIEVersions$1 = () => {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        var str = window.navigator.userAgent;
        if (str.indexOf("MSIE 6.0") != "-1") return "IE6";
        if (str.indexOf("MSIE 7.0") != "-1") return "IE7";
        if (str.indexOf("MSIE 8.0") != "-1") return "IE8";
        if (str.indexOf("MSIE 9.0") != "-1") return "IE9";
        if (str.indexOf("MSIE 10.0") != "-1") return "IE10";
        return "IE11";
    } else {
        return false;
    }
};

// 获取浏览器类型
const getBrowserType$1 = () => {
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
};

// 获取url参数
const getUrlParam$1 = (name, href) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = href ? href.split('?')[1] : window.location.href.split('?')[1];
    if (!search) {
        return null
    }
    const r = search.match(reg) || [];
    return r[2];
};

// 追加url参数
const appendUrlParam$1 = (url, key, value) => {
    var options = key;
    if (typeof options == 'string') {
        options = {};
        options[key] = value;
    }
    options = $.param(options);
    if (url.includes('?')) {
        url += '&' + options;
    } else {
        url += '?' + options;
    }
    return url;
};


const bom = {
    getIEVersions: getIEVersions$1,
    getBrowserType: getBrowserType$1,
    getUrlParam: getUrlParam$1,
    appendUrlParam: appendUrlParam$1,
};

// el是否包含某个class
const hasClass$1 = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className)
};

// el添加某个class
const addClass$1 = (el, className) => {
    if (hasClass$1(el, className)) {
        return
    }
    let newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
};

// el去除某个class
const removeClass$1 = (el, className) => {
    if (!hasClass$1(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    el.className = el.className.replace(reg, ' ');
};

// 去除Html标签
const removeHtmltag$1 = (str) => {
    return str.replace(/<[^>]+>/g, '')
};

// 动态引入js
const injectScript$1 = (src) => {
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
                        resolve();
                    }
                };
            } else {    //非IE
                s.onload = function () {
                    s.onload = null;
                    resolve();
                };
            }
        } else {
            reject('The script src property value is null');
        }
    })
};

// 获取滚动的坐标
const getScrollPosition$1 = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 滚动到顶部
const scrollToTop$1 = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop$1);
        window.scrollTo(0, c - c / 8);
    }
};

// 获取光标所在位置
const getCursortPosition$1 = (dom) => {
    // ie
    if (document.selection) {
        let range = document.selection.createRange();
        range.setEndPoint("StartToStart", dom.createTextRange());
        return range.text.length;
    } else {
        return dom.selectionStart
    }
};

const dom = {
    hasClass: hasClass$1,
    addClass: addClass$1,
    removeClass: removeClass$1,
    removeHtmltag: removeHtmltag$1,
    injectScript: injectScript$1,
    getScrollPosition: getScrollPosition$1,
    scrollToTop: scrollToTop$1,
    getCursortPosition: getCursortPosition$1,
};

// 洗牌随机算法
const shuffle$1 = (arr) => {
    var result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random]);
        arr.splice(random, 1);
    }
    return result;
};

// 类型判断集合
const checkStr$1 = (str, type) => {
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
};

// 严格的身份证效验
const isCardID$1 = (sId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        console.log('你输入的身份证长度或格式错误');
        return false
    }
    //身份证城市
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
        console.log('你的身份证地区非法');
        return false
    }
    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday);
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
        console.log('身份证上的出生日期非法');
        return false
    }
    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432";
    for (var i = 0; i < sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log('你输入的身份证号非法');
        return false
    }
    return true
};

// 随机数范围
const randomRange$1 = function (min, max) {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null
    }
};

// 判断元素是否在数组中
const inArray$1 = (arr, val) => {
    return arr.indexOf(val) != -1 ? true : false
};

// 数组排序 {type} 1：从小到大 2：从大到小
const sort$1 = (arr, type = 1) => {
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
};

// 数组去重
const unique$1 = (arr) => {
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
};

// 求两个集合的并集
const union$1 = (arr1, arr2) => {
    var newArr = arr1.concat(arr2);
    return unique$1(newArr)
};

// 求两个集合的交集
const intersection$1 = (arr1, arr2) => {
    var arr1_x = unique$1(arr1);
    var arr2_x = unique$1(arr2);
    return arr1_x.filter(function (item) {
        return arr2_x.indexOf(item) > -1
    })
};

// 删除集合中其中一个目标元素
const listRemoveTarget$1 = (list, target) => {
    var index = list.indexOf(target);
    if (index > -1) {
        list.splice(index, 1);
    }
    return list
};

// 求集合中的最大值
const listMax$1 = list => {
    return Math.max.apply(null, list)
};

// 求集合中的最小值
const listMin$1 = list => {
    return Math.min.apply(null, list)
};

// 求和
const sum$1 = arr => {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
};

// 平均值
const average$1 = arr => {
    return sum$1(arr) / arr.length
};

// 去除空格 type: 1-所有空格 2-前后空格 3-前空格 4-后空格
const trim$1 = (str, type = 1) => {
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
};

// 检测密码强度
const checkPwd$1 = (str) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++;
    }
    if (/[a-z]/.test(str)) {
        Lv++;
    }
    if (/[A-Z]/.test(str)) {
        Lv++;
    }
    if (/[\W|_]/.test(str)) {
        Lv++;
    }
    return Lv;
};

// 防抖函数
const debounce$1 = function (fn, delay) {
    var timer = null;
    return function () {
        var that = this,
            arg = arguments;
        if (timer) {
            window.clearTimeout(timer);
            timer = null;
        }
        timer = window.setTimeout(() => {
            fn.apply(that, arg);
        }, delay);
    }
};

// 节流函数
const throttle$1 = function (fn, delay) {
    var oldTime = Date.now();
    return function () {
        var time = Date.now(),
            that = this,
            arg = arguments;
        if (time - oldTime >= delay) {
            oldTime = Date.now();
            return fn.apply(that, arg)
        }
    }
};

// 获取文章中出现次数最多的单词
const findMostWord$1 = function (article) {
    if (!article) return false
    article = article.trim().toLowerCase();      // 清除两端空字符串并转为小写
    let wordlist = article.match(/[a-z]+/g),   // 将文章中的每个单词转换成数组中的每一项元素
        visited = [],
        maxNum = 0,
        maxWord = '';
    article = " " + wordlist.join(" ") + " ";
    // 遍历判断单词出现次数
    wordlist.forEach(function (item) {
        if (visited.indexOf(item) === -1) {
            visited.push(item);
            let wrod = new RegExp(" " + item + " ", "g"),       // 正则  全局匹配 当前单词                  
                num = article.match(wrod).length;           // 当前单词出现的个数                  
            if (num > maxNum) {
                maxNum = num;
                maxWord = item;
            }
        }
    });
    return maxWord + " " + maxNum
};

// 数组扁平化 （将一个多维数组变成一个一维数组）  [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
const flattenArray$1 = function (array) {
    if (!Array.isArray(array)) return false
    var res = [];
    res = array.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flattenArray$1(cur) : cur)
    }, []);
    return res
};

// 求最大公约数
const getMaxCommonDivisor$1 = function (a, b) {
    if (b == 0) return a
    return getMaxCommonDivisor$1(b, a % b)
};
// 最小公倍数
const getMinCommonMultiple$1 = function (a, b) {
    return a * b / getMaxCommonDivisor$1(a, b)
};

// 判断字符串是否回文字符串
const isPalindrome$1 = function (str) {
    var reg = /[\W_]/g;
    var newStr = str.replace(reg, '').toLowerCase();
    var reverserStr = newStr.split('').reverse().join('');
    return reverserStr === newStr;
};

// 文件大小转化
const to_filesize$1 = (e) => {
    if (!e) {
        return "-";
    }
    var g = [" Bytes", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
    var f = Math.floor(Math.log(e) / Math.log(1024));
    var h = (f > 1) ? 2 : 0;
    return (f > 1) ? (e / Math.pow(1024, Math.ceil(f))).toFixed(h) + g[f] : Math.ceil(e / Math.pow(1024, Math.ceil(f))).toFixed(h) + g[f];
};

const func = {
    shuffle: shuffle$1,
    checkStr: checkStr$1,
    isCardID: isCardID$1,
    randomRange: randomRange$1,
    inArray: inArray$1,
    sort: sort$1,
    unique: unique$1,
    union: union$1,
    intersection: intersection$1,
    listRemoveTarget: listRemoveTarget$1,
    listMax: listMax$1,
    listMin: listMin$1,
    sum: sum$1,
    average: average$1,
    trim: trim$1,
    checkPwd: checkPwd$1,
    debounce: debounce$1,
    throttle: throttle$1,
    findMostWord: findMostWord$1,
    flattenArray: flattenArray$1,
    getMaxCommonDivisor: getMaxCommonDivisor$1,
    getMinCommonMultiple: getMinCommonMultiple$1,
    isPalindrome: isPalindrome$1,
    to_filesize: to_filesize$1
};

const methods_util = {
    ...is,
    ...bom,
    ...dom,
    ...func
};


methods_util.default = methods_util;

const methods_util$1 = methods_util;

const isEmail = methods_util$1.isEmail;
const isMobile = methods_util$1.isMobile;
const isStrictMobile = methods_util$1.isStrictMobile;
const isPhone = methods_util$1.isPhone;
const isURL = methods_util$1.isURL;
const isString = methods_util$1.isString;
const isNumber = methods_util$1.isNumber;
const isBoolean = methods_util$1.isBoolean;
const isFunction = methods_util$1.isFunction;
const isNull = methods_util$1.isNull;
const isUndefined = methods_util$1.isUndefined;
const isObj = methods_util$1.isObj;
const isArray = methods_util$1.isArray;
const isDate = methods_util$1.isDate;
const isRegExp = methods_util$1.isRegExp;
const isError = methods_util$1.isError;
const isSymbol = methods_util$1.isSymbol;
const isPromise = methods_util$1.isPromise;
const isSet = methods_util$1.isSet;
const isDeviceMobile = methods_util$1.isDeviceMobile;
const isIOS = methods_util$1.isIOS;
const isPC = methods_util$1.isPC;
const isWeiXinBrowser = methods_util$1.isWeiXinBrowser;
const isQQBrowser = methods_util$1.isQQBrowser;
const isIEBrowser = methods_util$1.isIEBrowser;
const getIEVersions = methods_util$1.getIEVersions;
const getBrowserType = methods_util$1.getBrowserType;
const getUrlParam = methods_util$1.getUrlParam;
const appendUrlParam = methods_util$1.appendUrlParam;
const hasClass = methods_util$1.hasClass;
const addClass = methods_util$1.addClass;
const removeClass = methods_util$1.removeClass;
const removeHtmltag = methods_util$1.removeHtmltag;
const injectScript = methods_util$1.injectScript;
const getScrollPosition = methods_util$1.getScrollPosition;
const scrollToTop = methods_util$1.scrollToTop;
const getCursortPosition = methods_util$1.getCursortPosition;
const shuffle = methods_util$1.shuffle;
const checkStr = methods_util$1.checkStr;
const isCardID = methods_util$1.isCardID;
const randomRange = methods_util$1.randomRange;
const inArray = methods_util$1.inArray;
const sort = methods_util$1.sort;
const unique = methods_util$1.unique;
const union = methods_util$1.union;
const intersection = methods_util$1.intersection;
const listRemoveTarget = methods_util$1.listRemoveTarget;
const listMax = methods_util$1.listMax;
const listMin = methods_util$1.listMin;
const sum = methods_util$1.sum;
const average = methods_util$1.average;
const trim = methods_util$1.trim;
const checkPwd = methods_util$1.checkPwd;
const debounce = methods_util$1.debounce;
const throttle = methods_util$1.throttle;
const findMostWord = methods_util$1.findMostWord;
const flattenArray = methods_util$1.flattenArray;
const getMaxCommonDivisor = methods_util$1.getMaxCommonDivisor;
const getMinCommonMultiple = methods_util$1.getMinCommonMultiple;
const isPalindrome = methods_util$1.isPalindrome;
const to_filesize = methods_util$1.to_filesize;

export { addClass, appendUrlParam, average, checkPwd, checkStr, debounce, methods_util$1 as default, findMostWord, flattenArray, getBrowserType, getCursortPosition, getIEVersions, getMaxCommonDivisor, getMinCommonMultiple, getScrollPosition, getUrlParam, hasClass, inArray, injectScript, intersection, isArray, isBoolean, isCardID, isDate, isDeviceMobile, isEmail, isError, isFunction, isIEBrowser, isIOS, isMobile, isNull, isNumber, isObj, isPC, isPalindrome, isPhone, isPromise, isQQBrowser, isRegExp, isSet, isStrictMobile, isString, isSymbol, isURL, isUndefined, isWeiXinBrowser, listMax, listMin, listRemoveTarget, randomRange, removeClass, removeHtmltag, scrollToTop, shuffle, sort, sum, throttle, to_filesize, trim, union, unique };
//# sourceMappingURL=methods_util.js.map
