import { OpenAPIHono } from '@hono/zod-openapi'
import { postInsightSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const insightSummariesHandler = app.openapi(postInsightSummariesRoute, (c) => {
  throw new Error('Not implemented')
})
