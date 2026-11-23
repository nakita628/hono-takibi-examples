import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdRoute,
  deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRoute,
  deleteCustomersExternalCustomerIdRoute,
  deleteCustomersExternalCustomerIdWalletsCodeRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  getCustomersExternalCustomerIdAppliedCouponsRoute,
  getCustomersExternalCustomerIdAttributedUsageRoute,
  getCustomersExternalCustomerIdCreditNotesRoute,
  getCustomersExternalCustomerIdCurrentUsageRoute,
  getCustomersExternalCustomerIdInvoicesRoute,
  getCustomersExternalCustomerIdPastUsageRoute,
  getCustomersExternalCustomerIdPaymentMethodsRoute,
  getCustomersExternalCustomerIdPaymentRequestsRoute,
  getCustomersExternalCustomerIdPaymentsRoute,
  getCustomersExternalCustomerIdPortalUrlRoute,
  getCustomersExternalCustomerIdProjectedUsageRoute,
  getCustomersExternalCustomerIdRoute,
  getCustomersExternalCustomerIdSubscriptionsRoute,
  getCustomersExternalCustomerIdWalletsCodeRoute,
  getCustomersExternalCustomerIdWalletsRoute,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  getCustomersRoute,
  patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  postCustomersExternalCustomerIdCheckoutUrlRoute,
  postCustomersExternalCustomerIdWalletsRoute,
  postCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  postCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  postCustomersRoute,
  putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRoute,
  putCustomersExternalCustomerIdWalletsCodeRoute,
  putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdAppliedCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdPaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdPortalUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersExternalCustomerIdWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersExternalCustomerIdWalletsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdCurrentUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdProjectedUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdPastUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdAttributedUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersExternalCustomerIdCheckoutUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
