import { OpenAPIHono } from '@hono/zod-openapi'
import { postInsightRoute } from '../routes'

const app = new OpenAPIHono()

export const InsightHandler = app.openapi(postInsightRoute, (c) => {
  throw new Error('Not implemented')
})
