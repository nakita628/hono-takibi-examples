import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getAppsResellerV1CustomersCustomerIdRoute,
  getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
  getAppsResellerV1ResellernotifyGetwatchdetailsRoute,
  getAppsResellerV1SubscriptionsRoute,
  patchAppsResellerV1CustomersCustomerIdRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRoute,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRoute,
  postAppsResellerV1CustomersRoute,
  postAppsResellerV1ResellernotifyRegisterRoute,
  postAppsResellerV1ResellernotifyUnregisterRoute,
  putAppsResellerV1CustomersCustomerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(postAppsResellerV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsResellerV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsResellerV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsResellerV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getAppsResellerV1ResellernotifyGetwatchdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsResellerV1ResellernotifyRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsResellerV1ResellernotifyUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsResellerV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
