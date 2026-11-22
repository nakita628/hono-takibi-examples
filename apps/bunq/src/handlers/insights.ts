import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDInsightsRoute } from '../routes'

const app = new OpenAPIHono()

export const insightsHandler = app.openapi(getUserUserIDInsightsRoute, (c) => {
  throw new Error('Not implemented')
})
