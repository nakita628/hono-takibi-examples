import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getV2CustomersCustomerIdSubscriptionsRoute,
  getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRoute,
  getV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getV2SubscriptionsRoute,
  patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  postV2CustomersCustomerIdSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsAPIHandler = app
  .openapi(postV2CustomersCustomerIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
