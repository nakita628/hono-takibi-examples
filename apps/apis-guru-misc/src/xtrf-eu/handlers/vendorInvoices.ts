import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingProvidersInvoicesInvoiceIdRoute,
  deleteAccountingProvidersPaymentsPaymentIdRoute,
  getAccountingProvidersInvoicesIdsRoute,
  getAccountingProvidersInvoicesInvoiceIdDocumentRoute,
  getAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
  getAccountingProvidersInvoicesInvoiceIdRoute,
  getAccountingProvidersInvoicesRoute,
  postAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
  postAccountingProvidersInvoicesInvoiceIdSendRoute,
  postAccountingProvidersInvoicesInvoiceIdStatusRoute,
  postAccountingProvidersInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vendorInvoicesHandler = app
  .openapi(getAccountingProvidersInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingProvidersInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingProvidersInvoicesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingProvidersInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingProvidersInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingProvidersInvoicesInvoiceIdDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingProvidersInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingProvidersInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingProvidersInvoicesInvoiceIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingProvidersInvoicesInvoiceIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingProvidersPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
