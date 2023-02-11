/**
 * 这里面可以是任意客户端浏览器里的代码
 * 最后 return 语句报错不用管
 */

// 通过接口传递进来的参数都在query中
// query.ua
// query.uid
// query.xxx





/********** 异步代码需要加 await （可以使用顶级await，不用添加async）***********/
/**   const data = await somePromiseFunction()  **/
// return 的内容就是接口返回值,
// return 1
// return {a:1,b:2}
// return document.title
// return navigator.userAgent
// 浏览器的一切api属性均可使用
return {
    userAgent:navigator.userAgent,
    data:await somePromiseFunction()
}
