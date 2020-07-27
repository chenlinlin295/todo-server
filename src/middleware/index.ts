import Koa from 'koa'
import encryption from './encryption'
import request from './request'
import response from './response'

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
    // 唯一标识
    app.use(encryption)
    // 请求封装
    app.use(request)
    // 响应封装
    app.use(response)
}