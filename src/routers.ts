import { readdirSync } from 'fs'
import { resolve } from 'path'
import Router from 'koa-router'

import mountRouters from './utils/mountRouters'

const router = new Router()

const CONTROLLER_PATH = resolve(__dirname, './controller')
const controllers = readdirSync(CONTROLLER_PATH)

// 批量注册路由
mountRouters(router, controllers, CONTROLLER_PATH)

export default router
