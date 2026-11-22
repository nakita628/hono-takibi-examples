import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAlertingV3DestinationsWebhooksWebhookIdRoute,
  getAccountsAccountIdAlertingV3DestinationsWebhooksRoute,
  getAccountsAccountIdAlertingV3DestinationsWebhooksWebhookIdRoute,
  postAccountsAccountIdAlertingV3DestinationsWebhooksRoute,
  putAccountsAccountIdAlertingV3DestinationsWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationWebhooksHandler = app
  .openapi(getAccountsAccountIdAlertingV3DestinationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAlertingV3DestinationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAlertingV3DestinationsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertingV3DestinationsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAlertingV3DestinationsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
