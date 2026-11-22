import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DataWebhooksSubscriptionsSubscriptionIdRoute,
  getV2DataWebhooksSubscriptionsRoute,
  getV2DataWebhooksSubscriptionsSubscriptionIdEventsRoute,
  getV2DataWebhooksSubscriptionsSubscriptionIdRoute,
  postV2DataWebhooksSubscriptionsRoute,
  putV2DataWebhooksSubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV2DataWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DataWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataWebhooksSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DataWebhooksSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DataWebhooksSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataWebhooksSubscriptionsSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
