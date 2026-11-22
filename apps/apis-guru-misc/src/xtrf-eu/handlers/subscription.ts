import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscriptionSubscriptionIdRoute,
  getSubscriptionRoute,
  getSubscriptionSupportsRoute,
  postSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionHandler = app
  .openapi(getSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionSupportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
