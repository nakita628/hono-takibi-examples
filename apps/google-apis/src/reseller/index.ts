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
} from './routes'
import {
  deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  getAppsResellerV1CustomersCustomerIdRouteHandler,
  getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  getAppsResellerV1ResellernotifyGetwatchdetailsRouteHandler,
  getAppsResellerV1SubscriptionsRouteHandler,
  patchAppsResellerV1CustomersCustomerIdRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRouteHandler,
  postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRouteHandler,
  postAppsResellerV1CustomersRouteHandler,
  postAppsResellerV1ResellernotifyRegisterRouteHandler,
  postAppsResellerV1ResellernotifyUnregisterRouteHandler,
  putAppsResellerV1CustomersCustomerIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAppsResellerV1CustomersRoute, postAppsResellerV1CustomersRouteHandler)
  .openapi(
    getAppsResellerV1CustomersCustomerIdRoute,
    getAppsResellerV1CustomersCustomerIdRouteHandler,
  )
  .openapi(
    patchAppsResellerV1CustomersCustomerIdRoute,
    patchAppsResellerV1CustomersCustomerIdRouteHandler,
  )
  .openapi(
    putAppsResellerV1CustomersCustomerIdRoute,
    putAppsResellerV1CustomersCustomerIdRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsRouteHandler,
  )
  .openapi(
    deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
    deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRoute,
    getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceRouteHandler,
  )
  .openapi(
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRoute,
    postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendRouteHandler,
  )
  .openapi(
    getAppsResellerV1ResellernotifyGetwatchdetailsRoute,
    getAppsResellerV1ResellernotifyGetwatchdetailsRouteHandler,
  )
  .openapi(
    postAppsResellerV1ResellernotifyRegisterRoute,
    postAppsResellerV1ResellernotifyRegisterRouteHandler,
  )
  .openapi(
    postAppsResellerV1ResellernotifyUnregisterRoute,
    postAppsResellerV1ResellernotifyUnregisterRouteHandler,
  )
  .openapi(getAppsResellerV1SubscriptionsRoute, getAppsResellerV1SubscriptionsRouteHandler)

export default app
