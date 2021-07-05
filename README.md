# js-methods-util
 js-methods-util 是一个js常用工具函数集

 ## 安装

```
$ npm install methods-util
```

## 使用demo

> 全局使用

```js
    import methods_util from 'methods-util'

    methods_util.isEmail('xxxx@xxx.xxx')
```

> 单独使用

```js
    import {isEmail} from 'methods-util'

    isEmail('xxxx@xxx.xxx')
```


### 正则匹配相关信息 函数

```js
// 检测是否为邮箱
isEmail('xxxx@xxx.xxx')
```

```js
// 检测是否为手机号码 
isMobile('12345678910')
```

```js
// 检测是否大陆有效手机号码
isStrictMobile(131515151515)
```

```js
// 检测是否电话号码
isPhone(3388438)
```

```js
// 检测是否Url地址
isURL('https://www.baidu.com')
```

```js
// 检测是否字符串
isString('xxx')
```

```js
// 检测是否数字
isNumber(520)
```

```js
// 检测是否Boolean
isBoolean(true)
```

```js
// 检测是否函数
isFunction(()=>{
    console.log('123')
})
```

```js
// 检测是否为Null
isNull(null)
```

```js
// 检测是否为undefined
isUndefined(undefined)
```

```js
// 检测是否对象
isObj({a:'b',c:'d'})
```

```js
// 检测是否数组
isArray([1,2,3])
```

```js
// 检测是否时间
isDate(new Date())
```

```js
// 检测是否正则
isRegExp(/122/)
```

```js
// 检测是否为错误对象
isError(Error('访问错误'))
```

```js
// 检测是否为Symbol函数
isSymbol(Symbol(11))
```

```js
// 检测是否为Promise对象
isPromise(new Promise((resolve,reject)=>{}))
```

```js
// 检测是否为Set对象
isSet(new Set())
```

```js
// 检测是否为移动端
isDeviceMobile()
```

```js
// 检测是否为IOS
isIOS()
```

```js
// 检测是否为PC端
isPC()
```

```js
// 检测是否为微信浏览器
isWeiXinBrowser()
```

```js
// 检测是否为QQ浏览器
isQQBrowser()
```

```js
// 检测是否为IE浏览器
isIEBrowser()
```

### 获取浏览器类型相关

```js
// 获取IE浏览器版本号
getIEVersions()
```

```js
// 获取浏览器类型
getBrowserType()
```

### BOM操作相关

```js
// 获取url参数  假设当前url：https://www.baidu.com/search?name=zhangshan&age=19
getUrlParam('name') // 获取name的值
```

```js
// 追加url参数 第一个参数为当前url   第二个参数为url参数的key值     第三个参数为url参数的value值
appendUrlParam('https://www.baidu.com/','name','zhangshan')
```

### DOM操作相关

```html
<div id="dv" class="active"></div>
```

> 第一个参数为当前DOM，第二个参数为类名

```js
// 当前元素是否包含某个class
hasClass(document.getElementById('dv'),'active')
```

```js
// 当前元素添加某个class
addClass(document.getElementById('dv'),'active')
```

```js
// 当前元素去除某个
removeClass(document.getElementById('dv'),'active')
```

```js
// 去除Html标签
removeHtmltag(<script>alert(123)</script>)
```

```js
// 动态引入js
injectScript('./script.js').then(res=>{
    console.log('引入后执行的操作')
},err=>{
    console.log(err)
})
```

```js
// 获取滚动的坐标   接收参数为dom元素，默认为window
getScrollPosition()
```

```js
// 滚动到顶部
scrollToTop()
```

```js
// 获取光标所在位置 input.type==text  textarea
getCursortPosition(document.getElementsByTagName('input')[0])
```

### 功能函数

```js
// 洗牌随机算法
shuffle([1,2,3,4,5,6,7,8,9,...])
```

```js
// 类型判断集合  第一个参数为要检测的值，第二个参数为验证类型 支持以下
// phone tel card pwd postal QQ email money URL IP date english chinese lower upper HTML
checkStr('xxx@xxx.xxx','email')
```

```js
// 严格的身份证效验
isCardID('******************')
```

```js
// 随机数范围  (第一个参数为随机数的最小值 第二个参数为随机数的最大值)
randomRange(0,100)
```

```js
// 判断元素是否在数组中  (第一个参数为当前数组，第二个参数为需要判断的元素)
inArray([1,2,3,4,5,6],1)
```

```js
// 数组排序 (第一个参数为当前数组，第二个参数为排序类型，1：从小到大 2：从大到小，默认为1)
sort([321,156,126,48,11,77,99,654,331])
```

```js
// 数组去重
unique([11,66,31,11])
```

```js
// 求两个集合的并集
union([1,23,5,16,11,8],[23,5,168,184,63])
```

```js
// 求两个集合的交集
intersection([1,23,5,16,11,8],[23,5,168,184,63])
```

```js
// 删除集合中其中一个目标元素  (第一个参数为当前数组，第二个参数为要删除的元素)
listRemoveTarget(['a','b','c','d'],'b')
```

```js
// 求集合中的最大值
listMax([23,5,168,184,63])
```

```js
// 求集合中的最小值
listMin([23,5,168,184,63])
```

```js
// 求集合中的和
sum([23,5,168,184,63])
```

```js
// 求集合中的平均值
average([23,5,168,184,63])
```

```js
// 去除空格   (第一个参数是当前字符，第二个参数为去除空格的格式 1-所有空格 2-前后空格 3-前空格 4-后空格  默认为1)
trim(' 爱 上咖啡赶上 ')
```

```js
// 检测密码强度   return  长度小于6为0   出现数字+1  出现小写字母+1  出现大写字母+1  出现特殊字符+1
checkPwd('zxcvbnm??123')
```

```js
// 防抖函数      (第一个参数为函数名称，第二个参数为时间间隔)
const f1 = ()=>{
    console.log(222)
}
debounce(f1,3000)
```

```js
// 节流函数     (第一个参数为函数名称，第二个参数为时间间隔)
const f1 = ()=>{
    console.log(222)
}
throttle(f1,3000)
```

```js
// 获取文章中出现次数最多的单词   return 出现次数最大的单词  出现的次数
let word = `　　Everyone's heart have a hero,maybe a person who save the people,maybe a animal who have got good spirit. So far,I can't forget a person who helped plenty of people.His name is Leifeng.I think he was a good person I can't understand why he was so friendly,but I really know,he was a hero in my heart.I looked up upon him.and I will do all things I can do,I want to be the 2nd Leifeng.`
findMostWord(word)
```

```js
// 数组扁平化 （将一个多维数组变成一个一维数组）  [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
flattenArray([1, [2, 3, [4, 5]]])
```

```js
// 求两个数的最大公约数
getMaxCommonDivisor(8,36)
```

```js
// 最两个数的小公倍数
getMinCommonMultiple(8,36)
```

```js
// 判断字符串是否回文字符串
isPalindrome('abccba')
```

```js
// 文件大小转化    接收一个number类型的数字  返回其对应的文件大小 单位为：" Bytes", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"
to_filesize()
```





