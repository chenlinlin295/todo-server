import Koa from 'koa'
import session from 'koa-session'
import koaBody from 'koa-body'
import config from 'config'
import routers from './routers'
import mountMiddlewares from './middleware'

const sessionConfig = {
    key: 'todo',
    maxAge: 86400000
}
const port = config.get('Customer.port')
const app = new Koa()

// 设置session
app.use(session(sessionConfig, app))
// 设置body解析
app.use(
    koaBody({
        multipart: true,
        formLimit: '5mb',
    })
)

// 挂载中间件
mountMiddlewares(app)

// 挂载路由
app.use(routers.routes()).use(routers.allowedMethods())

// 设置端口监听
app.listen(port, () => {
    console.log(`服务器运行在 http://127.0.0.1:${port}`)
})
