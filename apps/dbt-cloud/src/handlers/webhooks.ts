import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute,
  getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsRoute,
  getApiV3AccountsAccountIdWebhooksEventEventIdRoute,
  getApiV3AccountsAccountIdWebhooksReceiptReceiptIdRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionsRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestRoute,
  postApiV3AccountsAccountIdWebhooksSubscriptionsRoute,
  putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getApiV3AccountsAccountIdWebhooksEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksReceiptReceiptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
