const express = require('express')
const httpProxy = require('http-proxy')

const app = express()

// 代理请求到后台
var proxy = httpProxy.createProxyServer()

app.all('*', function(req, res, next) {
  console.log('被访问了', req.method)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-type')
  res.header(
    'Access-Control-Allow-Methods',
    'PUT,POST,GET,DELETE,OPTIONS,PATCH'
  )
  next()
})

app.all('/*', function(req, res, next) {
  console.log(req.path)
  proxy.web(req, res, {
    target: 'https://extension-ms.juejin.im',
    changeOrigin: true
  })
})

app.listen(3001, () => {
  console.log('代理服务器已启动')
})
