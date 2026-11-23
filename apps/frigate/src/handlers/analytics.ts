import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app.openapi(getAnalyticsPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
