import Koa from "koa"
import Router from "@koa/router"

const app = new Koa()
const router = new Router()

router.get("/jobs", async (ctx) => {
    ctx.body = 'Hello World'
})

app
    .use(router.routes())
    .use(router.allowedMethods())

export default app
