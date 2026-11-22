import { OpenAPIHono } from '@hono/zod-openapi'
import { postInsightSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const InsightSummariesHandler = app.openapi(postInsightSummariesRoute, (c) => {
  throw new Error('Not implemented')
})
