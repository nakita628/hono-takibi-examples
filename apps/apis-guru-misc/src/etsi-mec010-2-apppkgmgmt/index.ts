import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppPackagesAppPkgIdRoute,
  deleteSubscriptionsSubscriptionIdRoute,
  getAppPackagesAppPkgIdAppdRoute,
  getAppPackagesAppPkgIdPackageContentRoute,
  getAppPackagesAppPkgIdRoute,
  getAppPackagesRoute,
  getOnboardedAppPackagesAppDIdAppdRoute,
  getOnboardedAppPackagesAppDIdPackageContentRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchAppPackagesAppPkgIdRoute,
  postAppPackagesRoute,
  postSubscriptionsRoute,
  postUserDefinedNotificationRoute,
  putAppPackagesAppPkgIdPackageContentRoute,
  putOnboardedAppPackagesAppDIdPackageContentRoute,
} from './routes'
import {
  deleteAppPackagesAppPkgIdRouteHandler,
  deleteSubscriptionsSubscriptionIdRouteHandler,
  getAppPackagesAppPkgIdAppdRouteHandler,
  getAppPackagesAppPkgIdPackageContentRouteHandler,
  getAppPackagesAppPkgIdRouteHandler,
  getAppPackagesRouteHandler,
  getOnboardedAppPackagesAppDIdAppdRouteHandler,
  getOnboardedAppPackagesAppDIdPackageContentRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsSubscriptionIdRouteHandler,
  patchAppPackagesAppPkgIdRouteHandler,
  postAppPackagesRouteHandler,
  postSubscriptionsRouteHandler,
  postUserDefinedNotificationRouteHandler,
  putAppPackagesAppPkgIdPackageContentRouteHandler,
  putOnboardedAppPackagesAppDIdPackageContentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppPackagesRoute, getAppPackagesRouteHandler)
  .openapi(postAppPackagesRoute, postAppPackagesRouteHandler)
  .openapi(deleteAppPackagesAppPkgIdRoute, deleteAppPackagesAppPkgIdRouteHandler)
  .openapi(getAppPackagesAppPkgIdRoute, getAppPackagesAppPkgIdRouteHandler)
  .openapi(patchAppPackagesAppPkgIdRoute, patchAppPackagesAppPkgIdRouteHandler)
  .openapi(getAppPackagesAppPkgIdAppdRoute, getAppPackagesAppPkgIdAppdRouteHandler)
  .openapi(
    getAppPackagesAppPkgIdPackageContentRoute,
    getAppPackagesAppPkgIdPackageContentRouteHandler,
  )
  .openapi(
    putAppPackagesAppPkgIdPackageContentRoute,
    putAppPackagesAppPkgIdPackageContentRouteHandler,
  )
  .openapi(getOnboardedAppPackagesAppDIdAppdRoute, getOnboardedAppPackagesAppDIdAppdRouteHandler)
  .openapi(
    getOnboardedAppPackagesAppDIdPackageContentRoute,
    getOnboardedAppPackagesAppDIdPackageContentRouteHandler,
  )
  .openapi(
    putOnboardedAppPackagesAppDIdPackageContentRoute,
    putOnboardedAppPackagesAppDIdPackageContentRouteHandler,
  )
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(deleteSubscriptionsSubscriptionIdRoute, deleteSubscriptionsSubscriptionIdRouteHandler)
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(postUserDefinedNotificationRoute, postUserDefinedNotificationRouteHandler)

export default app
