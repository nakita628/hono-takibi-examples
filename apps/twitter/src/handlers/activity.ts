import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ActivitySubscriptionsRoute,
  delete2ActivitySubscriptionsSubscriptionIdRoute,
  get2ActivitySubscriptionsRoute,
  post2ActivitySubscriptionsRoute,
  put2ActivitySubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app
  .openapi(delete2ActivitySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ActivitySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ActivitySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ActivitySubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ActivitySubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
