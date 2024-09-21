import Koa from "koa"
import Router from "@koa/router"
import cors from "@koa/cors"
import {fetchJobs, login} from "./infrastructure/external/jobijoba"

const app = new Koa()
app.use(cors())
const router = new Router()

router.get("/jobs", async (ctx) => {
    const {token} = await login()
    ctx.body = await fetchJobs(token, "développeur")
})

app
    .use(router.routes())
    .use(router.allowedMethods())

export default app
