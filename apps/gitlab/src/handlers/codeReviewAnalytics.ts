import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4AnalyticsCodeReviewRoute } from '../routes'

const app = new OpenAPIHono()

export const codeReviewAnalyticsHandler = app.openapi(getApiV4AnalyticsCodeReviewRoute, (c) => {
  throw new Error('Not implemented')
})
