import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitesSiteIdAnalyticsRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesItemAnalyticsHandler = app.openapi(getSitesSiteIdAnalyticsRoute, (c) => {
  throw new Error('Not implemented')
})
