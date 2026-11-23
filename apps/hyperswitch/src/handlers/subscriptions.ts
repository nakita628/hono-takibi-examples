import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsEstimateRoute,
  getSubscriptionsItemsRoute,
  getSubscriptionsSubscriptionIdRoute,
  postSubscriptionsCreateRoute,
  postSubscriptionsRoute,
  postSubscriptionsSubscriptionIdCancelRoute,
  postSubscriptionsSubscriptionIdConfirmRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
  putSubscriptionsSubscriptionIdUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsSubscriptionIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
