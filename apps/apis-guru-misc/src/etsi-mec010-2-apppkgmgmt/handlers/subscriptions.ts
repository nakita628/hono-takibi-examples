import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscriptionsSubscriptionIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  postSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
