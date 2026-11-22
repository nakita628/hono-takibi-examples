import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SubscriptionsSubscriptionIdEventsRoute,
  getV2SubscriptionsSubscriptionIdRoute,
  postV2SubscriptionsRoute,
  postV2SubscriptionsSearchRoute,
  postV2SubscriptionsSubscriptionIdCancelRoute,
  postV2SubscriptionsSubscriptionIdResumeRoute,
  putV2SubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postV2SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscriptionsSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SubscriptionsSubscriptionIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
