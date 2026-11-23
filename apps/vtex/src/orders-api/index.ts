import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrdersFeedConfigRoute,
  deleteApiOrdersHookConfigRoute,
  getApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
  getApiOmsPvtAdminReportsCompletedRoute,
  getApiOmsPvtAdminReportsInprogressRoute,
  getApiOmsPvtFeedOrdersStatusRoute,
  getApiOmsPvtOrdersOrderIdConversationMessageRoute,
  getApiOmsPvtOrdersOrderIdPaymentTransactionRoute,
  getApiOmsPvtOrdersOrderIdRoute,
  getApiOmsPvtOrdersRoute,
  getApiOmsUserOrdersOrderIdRoute,
  getApiOmsUserOrdersRoute,
  getApiOrdersFeedConfigRoute,
  getApiOrdersFeedRoute,
  getApiOrdersHookConfigRoute,
  patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRoute,
  postApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
  postApiOmsPvtOrdersOrderIdCancelRoute,
  postApiOmsPvtOrdersOrderIdChangesRoute,
  postApiOmsPvtOrdersOrderIdInteractionsRoute,
  postApiOmsPvtOrdersOrderIdInvoiceRoute,
  postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRoute,
  postApiOmsPvtOrdersOrderIdStartHandlingRoute,
  postApiOrdersExpressionsJsonataRoute,
  postApiOrdersFeedConfigRoute,
  postApiOrdersFeedRoute,
  postApiOrdersHookConfigRoute,
  putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRoute,
} from './routes'
import {
  deleteApiOrdersFeedConfigRouteHandler,
  deleteApiOrdersHookConfigRouteHandler,
  getApiCheckoutPvtConfigurationWindowToChangeSellerRouteHandler,
  getApiOmsPvtAdminReportsCompletedRouteHandler,
  getApiOmsPvtAdminReportsInprogressRouteHandler,
  getApiOmsPvtFeedOrdersStatusRouteHandler,
  getApiOmsPvtOrdersOrderIdConversationMessageRouteHandler,
  getApiOmsPvtOrdersOrderIdPaymentTransactionRouteHandler,
  getApiOmsPvtOrdersOrderIdRouteHandler,
  getApiOmsPvtOrdersRouteHandler,
  getApiOmsUserOrdersOrderIdRouteHandler,
  getApiOmsUserOrdersRouteHandler,
  getApiOrdersFeedConfigRouteHandler,
  getApiOrdersFeedRouteHandler,
  getApiOrdersHookConfigRouteHandler,
  patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRouteHandler,
  postApiCheckoutPvtConfigurationWindowToChangeSellerRouteHandler,
  postApiOmsPvtOrdersOrderIdCancelRouteHandler,
  postApiOmsPvtOrdersOrderIdChangesRouteHandler,
  postApiOmsPvtOrdersOrderIdInteractionsRouteHandler,
  postApiOmsPvtOrdersOrderIdInvoiceRouteHandler,
  postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRouteHandler,
  postApiOmsPvtOrdersOrderIdStartHandlingRouteHandler,
  postApiOrdersExpressionsJsonataRouteHandler,
  postApiOrdersFeedConfigRouteHandler,
  postApiOrdersFeedRouteHandler,
  postApiOrdersHookConfigRouteHandler,
  putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
    getApiCheckoutPvtConfigurationWindowToChangeSellerRouteHandler,
  )
  .openapi(
    postApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
    postApiCheckoutPvtConfigurationWindowToChangeSellerRouteHandler,
  )
  .openapi(getApiOmsPvtAdminReportsCompletedRoute, getApiOmsPvtAdminReportsCompletedRouteHandler)
  .openapi(getApiOmsPvtAdminReportsInprogressRoute, getApiOmsPvtAdminReportsInprogressRouteHandler)
  .openapi(getApiOmsPvtFeedOrdersStatusRoute, getApiOmsPvtFeedOrdersStatusRouteHandler)
  .openapi(getApiOmsPvtOrdersRoute, getApiOmsPvtOrdersRouteHandler)
  .openapi(getApiOmsPvtOrdersOrderIdRoute, getApiOmsPvtOrdersOrderIdRouteHandler)
  .openapi(postApiOmsPvtOrdersOrderIdCancelRoute, postApiOmsPvtOrdersOrderIdCancelRouteHandler)
  .openapi(postApiOmsPvtOrdersOrderIdChangesRoute, postApiOmsPvtOrdersOrderIdChangesRouteHandler)
  .openapi(
    getApiOmsPvtOrdersOrderIdConversationMessageRoute,
    getApiOmsPvtOrdersOrderIdConversationMessageRouteHandler,
  )
  .openapi(
    postApiOmsPvtOrdersOrderIdInteractionsRoute,
    postApiOmsPvtOrdersOrderIdInteractionsRouteHandler,
  )
  .openapi(postApiOmsPvtOrdersOrderIdInvoiceRoute, postApiOmsPvtOrdersOrderIdInvoiceRouteHandler)
  .openapi(
    patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRoute,
    patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRouteHandler,
  )
  .openapi(
    putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRoute,
    putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRouteHandler,
  )
  .openapi(
    getApiOmsPvtOrdersOrderIdPaymentTransactionRoute,
    getApiOmsPvtOrdersOrderIdPaymentTransactionRouteHandler,
  )
  .openapi(
    postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRoute,
    postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRouteHandler,
  )
  .openapi(
    postApiOmsPvtOrdersOrderIdStartHandlingRoute,
    postApiOmsPvtOrdersOrderIdStartHandlingRouteHandler,
  )
  .openapi(getApiOmsUserOrdersRoute, getApiOmsUserOrdersRouteHandler)
  .openapi(getApiOmsUserOrdersOrderIdRoute, getApiOmsUserOrdersOrderIdRouteHandler)
  .openapi(postApiOrdersExpressionsJsonataRoute, postApiOrdersExpressionsJsonataRouteHandler)
  .openapi(getApiOrdersFeedRoute, getApiOrdersFeedRouteHandler)
  .openapi(postApiOrdersFeedRoute, postApiOrdersFeedRouteHandler)
  .openapi(deleteApiOrdersFeedConfigRoute, deleteApiOrdersFeedConfigRouteHandler)
  .openapi(getApiOrdersFeedConfigRoute, getApiOrdersFeedConfigRouteHandler)
  .openapi(postApiOrdersFeedConfigRoute, postApiOrdersFeedConfigRouteHandler)
  .openapi(deleteApiOrdersHookConfigRoute, deleteApiOrdersHookConfigRouteHandler)
  .openapi(getApiOrdersHookConfigRoute, getApiOrdersHookConfigRouteHandler)
  .openapi(postApiOrdersHookConfigRoute, postApiOrdersHookConfigRouteHandler)

export default app
