import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const searchanalyticsHandler = app.openapi(
  postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
