import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAlertingV3DestinationsPagerdutyRoute,
  getAccountsAccountIdAlertingV3DestinationsPagerdutyConnectTokenIdRoute,
  getAccountsAccountIdAlertingV3DestinationsPagerdutyRoute,
  postAccountsAccountIdAlertingV3DestinationsPagerdutyConnectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationDestinationsWithPagerDutyHandler = app
  .openapi(deleteAccountsAccountIdAlertingV3DestinationsPagerdutyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertingV3DestinationsPagerdutyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAlertingV3DestinationsPagerdutyConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertingV3DestinationsPagerdutyConnectTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
