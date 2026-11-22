import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdEmailSecurityAnalyticsMonthlyReportRoute } from '../routes'

const app = new OpenAPIHono()

export const emailSecurityAnalyticsHandler = app.openapi(
  getAccountsAccountIdEmailSecurityAnalyticsMonthlyReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
