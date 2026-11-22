import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AnalyticsLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const analyticsLinkHandler = app.openapi(getV1AnalyticsLinkRoute, (c) => {
  throw new Error('Not implemented')
})
