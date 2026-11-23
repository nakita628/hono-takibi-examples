import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportReportStatusReportIdRoute,
  getReportSubscriptionsByDateRoute,
  getReportSubscriptionsByStatusRoute,
  getReportSubscriptionsOrderByDateRoute,
  getReportSubscriptionsScheduledRoute,
  getReportSubscriptionsUpdatedRoute,
  getSettingsRoute,
  getSubscriptionsGroupGroupIdAddressesRoute,
  getSubscriptionsGroupGroupIdConfigRoute,
  getSubscriptionsGroupGroupIdConversationMessageRoute,
  getSubscriptionsGroupGroupIdFrequencyOptionsRoute,
  getSubscriptionsGroupGroupIdPaymentSystemsRoute,
  getSubscriptionsGroupGroupIdRoute,
  getSubscriptionsGroupGroupIdWillCreateRoute,
  getSubscriptionsGroupListRoute,
  getSubscriptionsGroupNextPurchaseDateStrRoute,
  getSubscriptionsGroupRoute,
  getSubscriptionsGroupSimulateGroupIdRoute,
  getSubscriptionsListRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdFrequencyOptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchSubscriptionsGroupGroupIdCancelRoute,
  patchSubscriptionsGroupGroupIdRoute,
  patchSubscriptionsSubscriptionIdCancelRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSettingsRoute,
  postSubscriptionsGroupGroupIdAdditemRoute,
  postSubscriptionsGroupGroupIdAddressesRoute,
  postSubscriptionsGroupGroupidInstancesInstanceIdRetryRoute,
  postSubscriptionsSubscriptionIdAddressesRoute,
} from './routes'
import {
  getReportReportStatusReportIdRouteHandler,
  getReportSubscriptionsByDateRouteHandler,
  getReportSubscriptionsByStatusRouteHandler,
  getReportSubscriptionsOrderByDateRouteHandler,
  getReportSubscriptionsScheduledRouteHandler,
  getReportSubscriptionsUpdatedRouteHandler,
  getSettingsRouteHandler,
  getSubscriptionsGroupGroupIdAddressesRouteHandler,
  getSubscriptionsGroupGroupIdConfigRouteHandler,
  getSubscriptionsGroupGroupIdConversationMessageRouteHandler,
  getSubscriptionsGroupGroupIdFrequencyOptionsRouteHandler,
  getSubscriptionsGroupGroupIdPaymentSystemsRouteHandler,
  getSubscriptionsGroupGroupIdRouteHandler,
  getSubscriptionsGroupGroupIdWillCreateRouteHandler,
  getSubscriptionsGroupListRouteHandler,
  getSubscriptionsGroupNextPurchaseDateStrRouteHandler,
  getSubscriptionsGroupRouteHandler,
  getSubscriptionsGroupSimulateGroupIdRouteHandler,
  getSubscriptionsListRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsSubscriptionIdFrequencyOptionsRouteHandler,
  getSubscriptionsSubscriptionIdRouteHandler,
  patchSubscriptionsGroupGroupIdCancelRouteHandler,
  patchSubscriptionsGroupGroupIdRouteHandler,
  patchSubscriptionsSubscriptionIdCancelRouteHandler,
  patchSubscriptionsSubscriptionIdRouteHandler,
  postSettingsRouteHandler,
  postSubscriptionsGroupGroupIdAdditemRouteHandler,
  postSubscriptionsGroupGroupIdAddressesRouteHandler,
  postSubscriptionsGroupGroupidInstancesInstanceIdRetryRouteHandler,
  postSubscriptionsSubscriptionIdAddressesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getReportReportStatusReportIdRoute, getReportReportStatusReportIdRouteHandler)
  .openapi(getReportSubscriptionsByDateRoute, getReportSubscriptionsByDateRouteHandler)
  .openapi(getReportSubscriptionsByStatusRoute, getReportSubscriptionsByStatusRouteHandler)
  .openapi(getReportSubscriptionsOrderByDateRoute, getReportSubscriptionsOrderByDateRouteHandler)
  .openapi(getReportSubscriptionsScheduledRoute, getReportSubscriptionsScheduledRouteHandler)
  .openapi(getReportSubscriptionsUpdatedRoute, getReportSubscriptionsUpdatedRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(postSettingsRoute, postSettingsRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(getSubscriptionsGroupRoute, getSubscriptionsGroupRouteHandler)
  .openapi(getSubscriptionsGroupListRoute, getSubscriptionsGroupListRouteHandler)
  .openapi(
    getSubscriptionsGroupNextPurchaseDateStrRoute,
    getSubscriptionsGroupNextPurchaseDateStrRouteHandler,
  )
  .openapi(
    getSubscriptionsGroupSimulateGroupIdRoute,
    getSubscriptionsGroupSimulateGroupIdRouteHandler,
  )
  .openapi(getSubscriptionsGroupGroupIdRoute, getSubscriptionsGroupGroupIdRouteHandler)
  .openapi(patchSubscriptionsGroupGroupIdRoute, patchSubscriptionsGroupGroupIdRouteHandler)
  .openapi(
    postSubscriptionsGroupGroupIdAdditemRoute,
    postSubscriptionsGroupGroupIdAdditemRouteHandler,
  )
  .openapi(
    getSubscriptionsGroupGroupIdAddressesRoute,
    getSubscriptionsGroupGroupIdAddressesRouteHandler,
  )
  .openapi(
    postSubscriptionsGroupGroupIdAddressesRoute,
    postSubscriptionsGroupGroupIdAddressesRouteHandler,
  )
  .openapi(
    patchSubscriptionsGroupGroupIdCancelRoute,
    patchSubscriptionsGroupGroupIdCancelRouteHandler,
  )
  .openapi(getSubscriptionsGroupGroupIdConfigRoute, getSubscriptionsGroupGroupIdConfigRouteHandler)
  .openapi(
    getSubscriptionsGroupGroupIdConversationMessageRoute,
    getSubscriptionsGroupGroupIdConversationMessageRouteHandler,
  )
  .openapi(
    getSubscriptionsGroupGroupIdFrequencyOptionsRoute,
    getSubscriptionsGroupGroupIdFrequencyOptionsRouteHandler,
  )
  .openapi(
    getSubscriptionsGroupGroupIdPaymentSystemsRoute,
    getSubscriptionsGroupGroupIdPaymentSystemsRouteHandler,
  )
  .openapi(
    getSubscriptionsGroupGroupIdWillCreateRoute,
    getSubscriptionsGroupGroupIdWillCreateRouteHandler,
  )
  .openapi(
    postSubscriptionsGroupGroupidInstancesInstanceIdRetryRoute,
    postSubscriptionsGroupGroupidInstancesInstanceIdRetryRouteHandler,
  )
  .openapi(getSubscriptionsListRoute, getSubscriptionsListRouteHandler)
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(patchSubscriptionsSubscriptionIdRoute, patchSubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    postSubscriptionsSubscriptionIdAddressesRoute,
    postSubscriptionsSubscriptionIdAddressesRouteHandler,
  )
  .openapi(
    patchSubscriptionsSubscriptionIdCancelRoute,
    patchSubscriptionsSubscriptionIdCancelRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdFrequencyOptionsRoute,
    getSubscriptionsSubscriptionIdFrequencyOptionsRouteHandler,
  )

export default app
