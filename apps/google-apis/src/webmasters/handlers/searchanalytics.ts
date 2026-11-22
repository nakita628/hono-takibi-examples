import { OpenAPIHono } from '@hono/zod-openapi'
import { postSitesSiteUrlSearchAnalyticsQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const searchanalyticsHandler = app.openapi(
  postSitesSiteUrlSearchAnalyticsQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
