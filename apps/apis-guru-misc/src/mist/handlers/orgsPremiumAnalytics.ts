import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1OrgsOrgIdPmaDashboardsRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsPremiumAnalyticsHandler = app.openapi(getApiV1OrgsOrgIdPmaDashboardsRoute, (c) => {
  throw new Error('Not implemented')
})
