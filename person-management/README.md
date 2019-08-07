# 项目涉及增删改
//  一,配置JSON-SERVER,搭建本地数据接口
//  1,全局安装json-server(也可以不用全局安装):
//     npm install -g json-server
//  2,创建一个JSONSERVER 文件夹
//  3,初始化一个package.json文件
//     npm init
//  4,下载相应的模块
//     npm install json-server --save
//  5, package.json配置更改:
    "scripts": {
      "json:server": "json-server --watch db.json"
    }
//  6,该文件夹下创建db.json数据(json数据根据需要自行输入)
//  7,启动: npm run json:server

//  二,用postman测试

//  三,创建项目
//  1,搭建vue-cli脚手架,如
//     vue init webpack vperson-management
//  2,启动
//     npm run dev
//  3,安装axios
//     npm install axios --save
//  4, 全局配置URL
//     axios.defaults.baseURL = "http://localhost:3000";



//注意: vue用json-server接口时,需要同时启动jsonserver和vue