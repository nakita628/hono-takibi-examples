import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscriptionsSubscriptionIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsSubscriptionHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
