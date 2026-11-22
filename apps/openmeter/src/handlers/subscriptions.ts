import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SubscriptionsSubscriptionIdRoute,
  getApiV1SubscriptionsSubscriptionIdAddonsRoute,
  getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute,
  getApiV1SubscriptionsSubscriptionIdRoute,
  patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute,
  patchApiV1SubscriptionsSubscriptionIdRoute,
  postApiV1SubscriptionsRoute,
  postApiV1SubscriptionsSubscriptionIdAddonsRoute,
  postApiV1SubscriptionsSubscriptionIdCancelRoute,
  postApiV1SubscriptionsSubscriptionIdChangeRoute,
  postApiV1SubscriptionsSubscriptionIdMigrateRoute,
  postApiV1SubscriptionsSubscriptionIdRestoreRoute,
  postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postApiV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsSubscriptionIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRoute, (c) => {
    throw new Error('Not implemented')
  })
