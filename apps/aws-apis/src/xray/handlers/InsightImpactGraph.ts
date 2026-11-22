import { OpenAPIHono } from '@hono/zod-openapi'
import { postInsightImpactGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const InsightImpactGraphHandler = app.openapi(postInsightImpactGraphRoute, (c) => {
  throw new Error('Not implemented')
})
