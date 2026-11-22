import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAlertingV3HistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationHistoryHandler = app.openapi(
  getAccountsAccountIdAlertingV3HistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
