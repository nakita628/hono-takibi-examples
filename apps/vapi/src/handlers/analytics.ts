import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnalyticsRoute } from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app.openapi(postAnalyticsRoute, (c) => {
  throw new Error('Not implemented')
})
