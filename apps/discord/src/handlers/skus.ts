import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSkusSkuIdSubscriptionsRoute,
  getSkusSkuIdSubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skusHandler = app
  .openapi(getSkusSkuIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkusSkuIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
