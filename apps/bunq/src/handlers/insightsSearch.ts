import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDInsightsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const insightsSearchHandler = app.openapi(getUserUserIDInsightsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
