const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
// 接口运行端口
const port = 3000;
// 缓存浏览器、网页实例
let browser,page

/**
 * 设置浏览器ua
 * @param ua string
 * @returns {Promise<*>}
 */
async function setPage(ua){
    if(!page){
        await init()
    }
    // 如果提供了ua 设置ua
    if(ua){
        await page.setUserAgent(ua)
    }
    // 随便打开一个页面
    await page.goto('https://www.baidu.com');
    return page
}


/**
 * 初始化浏览器
 * @returns {Promise<void>}
 */
async function init(){
    // 创建无头浏览器
    browser = await puppeteer.launch({
        headless:true,
        args: ["--no-sandbox",
            "--disable-setuid-sandbox"]
    });
    // 新建页面
    page = await browser.newPage();
    return Promise.resolve()
}


app.get('/',(req,res) =>{
    res.send('ok')
})

app.get('/data',async (req,res) =>{
    const { ua } = req.query
    await setPage(ua)
    const data = await getBrowserData(req.query)
    res.send(data)
})



app.listen(port, async () => {
    console.log(`server run at ${port} success`)
})

/**
 * 获取浏览器执行结果
 * @returns {Promise<*>}
 */
async function getBrowserData(query){
    const dimensions = await page.evaluate( async (query) => {
        _script_
    },query);
    const date = new Date()
    console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}输出内容:`, dimensions);
    return dimensions
}




