import { resolve } from 'path'
import Router from 'koa-router'

export default (router: Router, paths: string[], rootPath: string) => {
    paths.forEach(path => {
        const apiPath = path.split('.')[0].split('Controller')[0]
        const modulePath = resolve(rootPath, path)

        router.use(`/api/${apiPath}`, require(modulePath).default)
    })
}
