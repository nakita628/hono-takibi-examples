import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdHistoryRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRoute,
  patchSubscriptionsSubscriptionIdPreviewRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSubscriptionsSubscriptionIdActivateRoute,
  postSubscriptionsSubscriptionIdCancelRoute,
  postSubscriptionsSubscriptionIdChargePreviewRoute,
  postSubscriptionsSubscriptionIdChargeRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsSubscriptionIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsSubscriptionIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdChargePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
