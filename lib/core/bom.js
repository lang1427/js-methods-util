// 获取IE浏览器版本号
const getIEVersions = () => {
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
const getBrowserType = () => {
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

// 获取url参数
const getUrlParam = (name, href) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = href ? href.split('?')[1] : window.location.href.split('?')[1];
    const r = search.match(reg) || [];
    return r[2];
}

// 追加url参数
const appendUrlParam = (url, key, value) => {
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


export default {
    getIEVersions,
    getBrowserType,
    getUrlParam,
    appendUrlParam,
}