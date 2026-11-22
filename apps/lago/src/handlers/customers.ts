import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersExternalCustomerIdRoute,
  getCustomersExternalCustomerIdAppliedCouponsRoute,
  getCustomersExternalCustomerIdAttributedUsageRoute,
  getCustomersExternalCustomerIdCreditNotesRoute,
  getCustomersExternalCustomerIdCurrentUsageRoute,
  getCustomersExternalCustomerIdInvoicesRoute,
  getCustomersExternalCustomerIdPastUsageRoute,
  getCustomersExternalCustomerIdPaymentRequestsRoute,
  getCustomersExternalCustomerIdPaymentsRoute,
  getCustomersExternalCustomerIdPortalUrlRoute,
  getCustomersExternalCustomerIdProjectedUsageRoute,
  getCustomersExternalCustomerIdRoute,
  getCustomersExternalCustomerIdSubscriptionsRoute,
  getCustomersRoute,
  postCustomersExternalCustomerIdCheckoutUrlRoute,
  postCustomersRoute,
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
