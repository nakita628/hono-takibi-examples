import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAlertingV3AvailableAlertsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationAlertTypesHandler = app.openapi(
  getAccountsAccountIdAlertingV3AvailableAlertsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
