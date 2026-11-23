import { OpenAPIHono } from '@hono/zod-openapi'
import { getInsightsTopQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const insightsHandler = app.openapi(getInsightsTopQueriesRoute, (c) => {
  throw new Error('Not implemented')
})
