import { OpenAPIHono } from '@hono/zod-openapi'
import { postInsightImpactGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const insightImpactGraphHandler = app.openapi(postInsightImpactGraphRoute, (c) => {
  throw new Error('Not implemented')
})
