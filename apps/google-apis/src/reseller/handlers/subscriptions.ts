import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getAppsResellerV1SubscriptionsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postAppsResellerV1CustomersCustomerIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsResellerV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
