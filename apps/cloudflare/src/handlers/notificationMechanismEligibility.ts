import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAlertingV3DestinationsEligibleRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationMechanismEligibilityHandler = app.openapi(
  getAccountsAccountIdAlertingV3DestinationsEligibleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
