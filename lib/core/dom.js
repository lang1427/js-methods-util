// el是否包含某个class
const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

// el添加某个class
const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

// el去除某个class
const removeClass = (el, className) => {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

// 去除Html标签
const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}

// 动态引入js
const injectScript = (src) => {
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
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 滚动到顶部
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// 获取光标所在位置
const getCursortPosition = (dom) => {
    // ie
    if (document.selection) {
        let range = document.selection.createRange();
        range.setEndPoint("StartToStart", dom.createTextRange());
        return range.text.length;
    } else {
        return dom.selectionStart
    }
}

export default {
    hasClass,
    addClass,
    removeClass,
    removeHtmltag,
    injectScript,
    getScrollPosition,
    scrollToTop,
    getCursortPosition,
}