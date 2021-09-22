
export type typeList =
    | 'phone'
    | 'tel'
    | 'card'
    | 'pwd'
    | 'postal'
    | 'QQ'
    | 'email'
    | 'money'
    | 'URL'
    | 'IP'
    | 'date'
    | 'english'
    | 'chinese'
    | 'lower'
    | 'upper'
    | 'HTML'


export const isEmail: (emailStr: any) => boolean
export const isMobile: (mobileStr: any) => boolean
export const isStrictMobile: (mobileStr: any) => boolean
export const isPhone: (phoneStr: any) => boolean
export const isURL: (urlStr: any) => boolean
export const isString: (Str: any) => boolean
export const isNumber: (num: any) => boolean
export const isBoolean: (boolean: any) => boolean
export const isFunction: (functionStr: any) => boolean
export const isNull: (nullStr: any) => boolean
export const isUndefined: (undefinedStr: any) => boolean
export const isObj: (obj: any) => boolean
export const isArray: (arr: any) => boolean
export const isDate: (date: any) => boolean
export const isRegExp: (regexpStr: any) => boolean
export const isError: (err: any) => boolean
export const isSymbol: (symbolStr: any) => boolean
export const isPromise: (mobileStr: any) => boolean
export const isSet: (mobileStr: any) => boolean
export const isDeviceMobile: (mobileStr: any) => boolean
export const isIOS: (mobileStr: any) => boolean
export const isPC: (mobileStr: any) => boolean
export const isWeiXinBrowser: (mobileStr: any) => boolean
export const isQQBrowser: (mobileStr: any) => boolean
export const isIEBrowser: (mobileStr: any) => boolean
export const getIEVersions: () => boolean | string
export const getBrowserType: () => string
export const getUrlParam: (name: string, href?: string) => string
export const appendUrlParam: (url: string, key: string, value: string) => string
export const hasClass: (el: HTMLElement, className: string) => boolean
export const addClass: (el: HTMLElement, className: string) => void
export const removeClass: (el: HTMLElement, className: string) => void
export const removeHtmltag: (htmlTag: string) => string
export const injectScript: (src: string) => Promise<any>
export const getScrollPosition: (el: Window | HTMLElement) => { x: number, y: number }
export const scrollToTop: () => void
export const getCursortPosition: (el: HTMLElement) => number
export const shuffle: (arr: any[]) => any[]
export const checkStr: (testCtx: any, type: typeList) => boolean
export const isCardID: (cardCtx: string) => boolean
export const randomRange: (min?: number, max?: number) => number | null
export const inArray: (arr: (string | number | boolean | undefined | null)[], val: string | number | boolean | undefined | null) => boolean
export const sort: (arr: (string | number)[], type?: number) => (string | number)[]
export const unique: (arr: (string | number | boolean | undefined | null)[]) => (string | number | boolean | undefined | null)[]
export const union: (arr1: (string | number | boolean | undefined | null)[], arr2: (string | number | boolean | undefined | null)[]) => (string | number | boolean | undefined | null)[]
export const intersection: (arr1: (string | number | boolean | undefined | null)[], arr2: (string | number | boolean | undefined | null)[]) => (string | number | boolean | undefined | null)[]
export const listRemoveTarget: (list: (string | number | boolean | undefined | null)[], target: string | number | boolean | undefined | null) => (string | number | boolean | undefined | null)[]
export const listMax: (list: (string | number)[]) => number
export const listMin: (list: (string | number)[]) => number
export const sum: (list: number[]) => number
export const average: (list: number[]) => number
export const trim: (str: string, type?: number) => string
export const checkPwd: (pwdStr: string) => number
export const debounce: (funStr: string, delay: number) => Function
export const throttle: (funStr: string, delay: number) => Function
export const findMostWord: (article?: string) => string | false
export const flattenArray: (arr: any[]) => any[]
export const getMaxCommonDivisor: (num1: number, num2: number) => number
export const getMinCommonMultiple: (num1: number, num2: number) => number
export const isPalindrome: (str: string) => boolean
export const to_filesize: (filesize: number) => string


export interface methods {
    isEmail: (emailStr: any) => boolean
    isMobile: (mobileStr: any) => boolean,
    isStrictMobile: (mobileStr: any) => boolean,
    isPhone: (phoneStr: any) => boolean,
    isURL: (urlStr: any) => boolean,
    isString: (Str: any) => boolean,
    isNumber: (num: any) => boolean,
    isBoolean: (boolean: any) => boolean,
    isFunction: (functionStr: any) => boolean,
    isNull: (nullStr: any) => boolean,
    isUndefined: (undefinedStr: any) => boolean,
    isObj: (obj: any) => boolean,
    isArray: (arr: any) => boolean,
    isDate: (date: any) => boolean,
    isRegExp: (regexpStr: any) => boolean,
    isError: (err: any) => boolean,
    isSymbol: (symbolStr: any) => boolean,
    isPromise: (mobileStr: any) => boolean,
    isSet: (mobileStr: any) => boolean,
    isDeviceMobile: (mobileStr: any) => boolean,
    isIOS: (mobileStr: any) => boolean,
    isPC: (mobileStr: any) => boolean,
    isWeiXinBrowser: (mobileStr: any) => boolean,
    isQQBrowser: (mobileStr: any) => boolean,
    isIEBrowser: (mobileStr: any) => boolean,
    getIEVersions: () => boolean | string,
    getBrowserType: () => string,
    getUrlParam: (name: string, href?: string) => string,
    appendUrlParam: (url: string, key: string, value: string) => string,
    hasClass: (el: HTMLElement, className: string) => boolean,
    addClass: (el: HTMLElement, className: string) => void,
    removeClass: (el: HTMLElement, className: string) => void,
    removeHtmltag: (htmlTag: string) => string,
    injectScript: (src: string) => Promise<any>,
    getScrollPosition: (el: Window | HTMLElement) => { x: number, y: number },
    scrollToTop: () => void,
    getCursortPosition: (el: HTMLElement) => number,
    shuffle: (arr: any[]) => any[],
    checkStr: (testCtx: any, type: typeList) => boolean,
    isCardID: (cardCtx: string) => boolean,
    randomRange: (min?: number, max?: number) => number | null,
    inArray: (arr: (string | number | boolean | undefined | null)[], val: string | number | boolean | undefined | null) => boolean,
    sort: (arr: (string | number)[], type?: number) => (string | number)[],
    unique: (arr: (string | number | boolean | undefined | null)[]) => (string | number | boolean | undefined | null)[],
    union: (arr1: (string | number | boolean | undefined | null)[], arr2: (string | number | boolean | undefined | null)[]) => (string | number | boolean | undefined | null)[],
    intersection: (arr1: (string | number | boolean | undefined | null)[], arr2: (string | number | boolean | undefined | null)[]) => (string | number | boolean | undefined | null)[],
    listRemoveTarget: (list: (string | number | boolean | undefined | null)[], target: string | number | boolean | undefined | null) => (string | number | boolean | undefined | null)[],
    listMax: (list: (string | number)[]) => number,
    listMin: (list: (string | number)[]) => number,
    sum: (list: number[]) => number,
    average: (list: number[]) => number,
    trim: (str: string, type?: number) => string,
    checkPwd: (pwdStr: string) => number,
    debounce: (funStr: string, delay: number) => Function,
    throttle: (funStr: string, delay: number) => Function,
    findMostWord: (article?: string) => string | false,
    flattenArray: (arr: any[]) => any[],
    getMaxCommonDivisor: (num1: number, num2: number) => number,
    getMinCommonMultiple: (num1: number, num2: number) => number,
    isPalindrome: (str: string) => boolean,
    to_filesize: (filesize: number) => string
}

export interface methodsUtilStatic extends methods {
}

declare const methodsUtil: methodsUtilStatic;

export default methodsUtil;

