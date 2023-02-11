const fs = require('fs')
const path = require("path");
const currentPwd = path.join(__dirname,'./')
const filePath = (name) => path.join(currentPwd,name)
const sourceCodeFileName = 'client.js'
const main = 'app.js'
const { execSync } = require('child_process')
if(!fs.existsSync(filePath(sourceCodeFileName))){
    console.error(`当前目录下${sourceCodeFileName}不存在`)
    process.exit(1)
}
// 读取源码
const sourceCode = fs.readFileSync(filePath(sourceCodeFileName),'utf-8')

// 生成服务端代码
function generateScript(){
    let template = fs.readFileSync(filePath('./template.js'),'utf-8')
    template= template.replace('_script_',sourceCode)
    fs.writeFileSync(filePath(main),template)
}
generateScript()
// 执行服务端代码，继承输出流到当前控制台
execSync(`node ${filePath(main)}`,{ stdio: 'inherit',})

