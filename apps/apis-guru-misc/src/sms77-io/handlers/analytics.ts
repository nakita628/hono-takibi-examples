import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsRoute } from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app.openapi(getAnalyticsRoute, (c) => {
  throw new Error('Not implemented')
})
