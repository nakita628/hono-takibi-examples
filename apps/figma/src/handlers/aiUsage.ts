import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AiUsageDailyRoute } from '../routes'

const app = new OpenAPIHono()

export const aiUsageHandler = app.openapi(getV1AiUsageDailyRoute, (c) => {
  throw new Error('Not implemented')
})
