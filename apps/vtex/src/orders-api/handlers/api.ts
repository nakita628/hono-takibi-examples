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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiCheckoutPvtConfigurationWindowToChangeSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPvtConfigurationWindowToChangeSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtAdminReportsCompletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtAdminReportsInprogressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtFeedOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtOrdersOrderIdConversationMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtOrdersOrderIdPaymentTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdStartHandlingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsUserOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsUserOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersExpressionsJsonataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrdersFeedConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersFeedConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersFeedConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrdersHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
