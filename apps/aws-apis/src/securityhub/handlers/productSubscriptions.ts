import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProductSubscriptionsProductSubscriptionArnRoute,
  getProductSubscriptionsRoute,
  postProductSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productSubscriptionsHandler = app
  .openapi(deleteProductSubscriptionsProductSubscriptionArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
