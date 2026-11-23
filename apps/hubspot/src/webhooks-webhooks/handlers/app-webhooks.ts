import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppWebhooks202609AppIdSettingsRoute,
  deleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute,
  getAppWebhooks202609AppIdSettingsRoute,
  getAppWebhooks202609AppIdSubscriptionsRoute,
  getAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute,
  patchAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute,
  postAppWebhooks202609AppIdSubscriptionsBatchUpdateRoute,
  postAppWebhooks202609AppIdSubscriptionsRoute,
  putAppWebhooks202609AppIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appWebhooksHandler = app
  .openapi(getAppWebhooks202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppWebhooks202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppWebhooks202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppWebhooks202609AppIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppWebhooks202609AppIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppWebhooks202609AppIdSubscriptionsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
