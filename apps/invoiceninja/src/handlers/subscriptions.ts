import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SubscriptionsIdRoute,
  getApiV1SubscriptionsCreateRoute,
  getApiV1SubscriptionsIdEditRoute,
  getApiV1SubscriptionsIdRoute,
  getApiV1SubscriptionsRoute,
  postApiV1SubscriptionsBulkRoute,
  postApiV1SubscriptionsRoute,
  putApiV1SubscriptionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getApiV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
