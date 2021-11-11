/** 正则匹配相关信息  */
// 是否邮箱
var isEmail = function isEmail(s) {
  return /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-]+(.[0-9a-zA-Z_-]{2,3}){1,2})/.test(s);
}; // 是否手机号码

var isMobile = function isMobile(s) {
  return /^1[0-9]{10}$/.test(s);
}; // 是否大陆有效手机号码

var isStrictMobile = function isStrictMobile(s) {
  return /^[0]?1[3|5][0-9]{10}$/.test(s);
}; // 是否电话号码

var isPhone = function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
}; // 是否Url地址

var isURL = function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
}; // 是否字符串

var isString = function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}; // 是否数字

var isNumber = function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
}; // 是否Boolean

var isBoolean = function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}; // 是否函数

var isFunction = function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
}; // 是否为Null

var isNull = function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
}; // 是否为undefined

var isUndefined = function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
}; // 是否对象

var isObj = function isObj(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}; // 是否数组

var isArray = function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
}; // 是否时间

var isDate = function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
}; // 是否正则

var isRegExp = function isRegExp(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
}; // 是否为错误对象

var isError = function isError(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
}; // 是否为Symbol函数

var isSymbol = function isSymbol(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
}; // 是否为Promise对象

var isPromise = function isPromise(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
}; // 是否为Set对象

var isSet = function isSet(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};
/**  浏览器设备相关  */
// 是否为移动端

var isDeviceMobile = function isDeviceMobile() {
  return /android|webos|iphone|ipod|balckberry/i.test(window.navigator.userAgent.toLowerCase());
}; // 是否为IOS

var isIOS = function isIOS() {
  var u = window.navigator.userAgent;
  if (u.indexOf('iPhone') !== -1) return true;else return false;
}; // 是否为PC端

var isPC = function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;

  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }

  return flag;
}; // 是否为微信浏览器

var isWeiXinBrowser = function isWeiXinBrowser() {
  window.navigator.userAgent.toLowerCase().match(/microMessenger/i) === 'micromessenger';
}; // 是否为QQ浏览器

var isQQBrowser = function isQQBrowser() {
  return !!window.navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
}; // 是否为IE浏览器

var isIEBrowser = function isIEBrowser() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true;
  } else {
    return false;
  }
}; // 获取IE浏览器版本号

var getIEVersions = function getIEVersions() {
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
}; // 获取浏览器类型

var getBrowserType = function getBrowserType() {
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
/**  BOM 操作相关 */
// 获取url参数

var getUrlParam = function getUrlParam(name, href) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var search = href ? href.split('?')[1] : window.location.href.split('?')[1];
  var r = search.match(reg) || [];
  return r[2];
}; // 追加url参数

var appendUrlParam = function appendUrlParam(url, key, value) {
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
/** DOM相关  */
// el是否包含某个class

var hasClass = function hasClass(el, className) {
  var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}; // el添加某个class

var addClass = function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }

  var newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}; // el去除某个class

var removeClass = function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return;
  }

  var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
  el.className = el.className.replace(reg, ' ');
}; // 去除Html标签

var removeHtmltag = function removeHtmltag(str) {
  return str.replace(/<[^>]+>/g, '');
}; // 动态引入js

var injectScript = function injectScript(src) {
  return new Promise(function (resolve, reject) {
    if (!!src) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = src;
      var t = document.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s, t);

      if (s.readyState) {
        //IE
        s.onreadystatechange = function () {
          if (s.readyState == 'complete' || s.readyState == 'loaded') {
            s.onreadystatechange = null;
            resolve();
          }
        };
      } else {
        //非IE
        s.onload = function () {
          s.onload = null;
          resolve();
        };
      }
    } else {
      reject('The script src property value is null');
    }
  });
}; // 获取滚动的坐标

var getScrollPosition = function getScrollPosition() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
}; // 滚动到顶部

var scrollToTop = function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}; // 获取光标所在位置

var getCursortPosition = function getCursortPosition(dom) {
  // ie
  if (document.selection) {
    var range = document.selection.createRange();
    range.setEndPoint("StartToStart", dom.createTextRange());
    return range.text.length;
  } else {
    return dom.selectionStart;
  }
};
/**  功能函数  */
// 洗牌随机算法

var shuffle = function shuffle(arr) {
  var result = [],
      random;

  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }

  return result;
}; // 类型判断集合

var checkStr = function checkStr(str, type) {
  switch (type) {
    case 'phone':
      //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);

    case 'tel':
      //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);

    case 'card':
      //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);

    case 'pwd':
      //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);

    case 'postal':
      //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);

    case 'QQ':
      //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);

    case 'email':
      //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);

    case 'money':
      //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);

    case 'URL':
      //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);

    case 'IP':
      //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);

    case 'date':
      //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);

    case 'english':
      //英文
      return /^[a-zA-Z]+$/.test(str);

    case 'chinese':
      //中文
      return /[\u4e00-\u9fa5]/g.test(str);

    case 'lower':
      //小写
      return /^[a-z]+$/.test(str);

    case 'upper':
      //大写
      return /^[A-Z]+$/.test(str);

    case 'HTML':
      //HTML标记
      return /<([^]*|[^]*|[^>])*>/.test(str);

    default:
      return true;
  }
}; // 严格的身份证效验

var isCardID = function isCardID(sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  } //身份证城市


  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };

  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log('你的身份证地区非法');
    return false;
  } // 出生日期验证


  var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday);

  if (sBirthday != d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) {
    console.log('身份证上的出生日期非法');
    return false;
  } // 身份证号码校验


  var sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432";

  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }

  var last = codes[sum % 11]; //计算出来的最后一位身份证号码

  if (sId[sId.length - 1] != last) {
    console.log('你输入的身份证号非法');
    return false;
  }

  return true;
}; // 随机数范围

var randomRange = function randomRange(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}; // 判断元素是否在数组中

var inArray = function inArray(arr, val) {
  return arr.indexOf(val) != -1 ? true : false;
}; // 数组排序 {type} 1：从小到大 2：从大到小

var sort = function sort(arr) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.sort(function (a, b) {
    switch (type) {
      case 1:
        return a - b;

      case 2:
        return b - a;

      default:
        return arr;
    }
  });
}; // 数组去重

var unique = function unique(arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
        r = [];

    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }

    return r;
  }
}; // 求两个集合的并集

var union = function union(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return unique(newArr);
}; // 求两个集合的交集

var intersection = function intersection(arr1, arr2) {
  var arr1_x = unique(arr1);
  var arr2_x = unique(arr2);
  return arr1_x.filter(function (item) {
    return arr2_x.indexOf(item) > -1;
  });
}; // 删除集合中其中一个目标元素

var listRemoveTarget = function listRemoveTarget(list, target) {
  var index = list.indexOf(target);

  if (index > -1) {
    list.splice(index, 1);
  }

  return list;
}; // 求集合中的最大值

var listMax = function listMax(list) {
  return Math.max.apply(null, list);
}; // 求集合中的最小值

var listMin = function listMin(list) {
  return Math.min.apply(null, list);
}; // 求和

var sum = function sum(arr) {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
}; // 平均值

var average = function average(arr) {
  return sum(arr) / arr.length;
}; // 去除空格 type: 1-所有空格 2-前后空格 3-前空格 4-后空格

var trim = function trim(str) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  switch (type) {
    case 1:
      return str.replace(/\s+/g, '');

    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '');

    case 3:
      return str.replace(/(^\s*)/g, '');

    case 4:
      return str.replace(/(\s*$)/g, '');

    default:
      return str;
  }
}; // 检测密码强度

var checkPwd = function checkPwd(str) {
  var Lv = 0;

  if (str.length < 6) {
    return Lv;
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

  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }

  return Lv;
}; // 防抖函数

var debounce = function debounce(fn, delay) {
  var timer = null;
  return function () {
    var that = this,
        arg = arguments;

    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, arg);
    }, delay);
  };
}; // 节流函数

var throttle = function throttle(fn, delay) {
  var oldTime = Date.now();
  return function () {
    var time = Date.now(),
        that = this,
        arg = arguments;

    if (time - oldTime >= delay) {
      oldTime = Date.now();
      return fn.apply(that, arg);
    }
  };
}; // 获取文章中出现次数最多的单词

var findMostWord = function findMostWord(article) {
  if (!article) return false;
  article = article.trim().toLowerCase(); // 清除两端空字符串并转为小写

  var wordlist = article.match(/[a-z]+/g),
      // 将文章中的每个单词转换成数组中的每一项元素
  visited = [],
      maxNum = 0,
      maxWord = '';
  article = " " + wordlist.join(" ") + " "; // 遍历判断单词出现次数

  wordlist.forEach(function (item) {
    if (visited.indexOf(item) === -1) {
      visited.push(item);
      var wrod = new RegExp(" " + item + " ", "g"),
          // 正则  全局匹配 当前单词                  
      num = article.match(wrod).length; // 当前单词出现的个数                  

      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });
  return maxWord + " " + maxNum;
}; // 数组扁平化 （将一个多维数组变成一个一维数组）  [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]

var flattenArray = function flattenArray(array) {
  if (!Array.isArray(array)) return false;
  var res = [];
  res = array.reduce(function (prev, cur) {
    return prev.concat(Array.isArray(cur) ? flattenArray(cur) : cur);
  }, []);
  return res;
}; // 求最大公约数

var getMaxCommonDivisor = function getMaxCommonDivisor(a, b) {
  if (b == 0) return a;
  return getMaxCommonDivisor(b, a % b);
}; // 最小公倍数

var getMinCommonMultiple = function getMinCommonMultiple(a, b) {
  return a * b / getMaxCommonDivisor(a, b);
}; // 判断字符串是否回文字符串

var isPalindrome = function isPalindrome(str) {
  var reg = /[\W_]/g;
  var newStr = str.replace(reg, '').toLowerCase();
  var reverserStr = newStr.split('').reverse().join('');
  return reverserStr === newStr;
}; // 文件大小转化

var to_filesize = function to_filesize(e) {
  if (!e) {
    return "-";
  }

  var g = [" Bytes", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
  var f = Math.floor(Math.log(e) / Math.log(1024));
  var h = f > 1 ? 2 : 0;
  return f > 1 ? (e / Math.pow(1024, Math.ceil(f))).toFixed(h) + g[f] : Math.ceil(e / Math.pow(1024, Math.ceil(f))).toFixed(h) + g[f];
};
var methods = {
  isEmail: isEmail,
  isMobile: isMobile,
  isStrictMobile: isStrictMobile,
  isPhone: isPhone,
  isURL: isURL,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isFunction: isFunction,
  isNull: isNull,
  isUndefined: isUndefined,
  isObj: isObj,
  isArray: isArray,
  isDate: isDate,
  isRegExp: isRegExp,
  isError: isError,
  isSymbol: isSymbol,
  isPromise: isPromise,
  isSet: isSet,
  isDeviceMobile: isDeviceMobile,
  isIOS: isIOS,
  isPC: isPC,
  isWeiXinBrowser: isWeiXinBrowser,
  isQQBrowser: isQQBrowser,
  isIEBrowser: isIEBrowser,
  getIEVersions: getIEVersions,
  getBrowserType: getBrowserType,
  getUrlParam: getUrlParam,
  appendUrlParam: appendUrlParam,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  removeHtmltag: removeHtmltag,
  injectScript: injectScript,
  getScrollPosition: getScrollPosition,
  scrollToTop: scrollToTop,
  getCursortPosition: getCursortPosition,
  shuffle: shuffle,
  checkStr: checkStr,
  isCardID: isCardID,
  randomRange: randomRange,
  inArray: inArray,
  sort: sort,
  unique: unique,
  union: union,
  intersection: intersection,
  listRemoveTarget: listRemoveTarget,
  listMax: listMax,
  listMin: listMin,
  sum: sum,
  average: average,
  trim: trim,
  checkPwd: checkPwd,
  debounce: debounce,
  throttle: throttle,
  findMostWord: findMostWord,
  flattenArray: flattenArray,
  getMaxCommonDivisor: getMaxCommonDivisor,
  getMinCommonMultiple: getMinCommonMultiple,
  isPalindrome: isPalindrome,
  to_filesize: to_filesize
};

export { addClass, appendUrlParam, average, checkPwd, checkStr, debounce, methods as default, findMostWord, flattenArray, getBrowserType, getCursortPosition, getIEVersions, getMaxCommonDivisor, getMinCommonMultiple, getScrollPosition, getUrlParam, hasClass, inArray, injectScript, intersection, isArray, isBoolean, isCardID, isDate, isDeviceMobile, isEmail, isError, isFunction, isIEBrowser, isIOS, isMobile, isNull, isNumber, isObj, isPC, isPalindrome, isPhone, isPromise, isQQBrowser, isRegExp, isSet, isStrictMobile, isString, isSymbol, isURL, isUndefined, isWeiXinBrowser, listMax, listMin, listRemoveTarget, randomRange, removeClass, removeHtmltag, scrollToTop, shuffle, sort, sum, throttle, to_filesize, trim, union, unique };
