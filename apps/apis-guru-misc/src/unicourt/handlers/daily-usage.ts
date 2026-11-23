import { OpenAPIHono } from '@hono/zod-openapi'
import { getDailyUsageDateRoute } from '../routes'

const app = new OpenAPIHono()

export const dailyUsageHandler = app.openapi(getDailyUsageDateRoute, (c) => {
  throw new Error('Not implemented')
})
