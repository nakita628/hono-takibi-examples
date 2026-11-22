import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdChannelPricesRoute,
  getSubscriptionsSubscriptionIdFeaturesRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUserLicensesRoute,
  putSubscriptionsSubscriptionIdProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdChannelPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsSubscriptionIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdUserLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
