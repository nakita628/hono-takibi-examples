import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BillingCustomersCustomerIdRoute,
  deleteApiV1BillingInvoicesInvoiceIdRoute,
  deleteApiV1BillingProfilesIdRoute,
  getApiV1BillingCustomersCustomerIdRoute,
  getApiV1BillingCustomersRoute,
  getApiV1BillingInvoicesInvoiceIdRoute,
  getApiV1BillingInvoicesRoute,
  getApiV1BillingProfilesIdRoute,
  getApiV1BillingProfilesRoute,
  postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRoute,
  postApiV1BillingCustomersCustomerIdInvoicesSimulateRoute,
  postApiV1BillingInvoicesInvoiceIdAdvanceRoute,
  postApiV1BillingInvoicesInvoiceIdApproveRoute,
  postApiV1BillingInvoicesInvoiceIdRetryRoute,
  postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRoute,
  postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRoute,
  postApiV1BillingInvoicesInvoiceIdVoidRoute,
  postApiV1BillingInvoicesInvoiceRoute,
  postApiV1BillingProfilesRoute,
  putApiV1BillingCustomersCustomerIdRoute,
  putApiV1BillingInvoicesInvoiceIdRoute,
  putApiV1BillingProfilesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getApiV1BillingCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BillingCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BillingCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingCustomersCustomerIdInvoicesSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
