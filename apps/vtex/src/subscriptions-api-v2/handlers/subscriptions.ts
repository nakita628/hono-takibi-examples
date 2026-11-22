import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsListRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdFrequencyOptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchSubscriptionsSubscriptionIdCancelRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSubscriptionsSubscriptionIdAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdFrequencyOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
