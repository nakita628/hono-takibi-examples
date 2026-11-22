import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdRealtimeKitAppIdAnalyticsDaywiseRoute } from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app.openapi(
  getAccountsAccountIdRealtimeKitAppIdAnalyticsDaywiseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
