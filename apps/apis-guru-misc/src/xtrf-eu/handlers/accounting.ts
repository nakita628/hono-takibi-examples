import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCustomersInvoicesInvoiceIdRoute,
  deleteAccountingCustomersPaymentsPaymentIdRoute,
  deleteAccountingProvidersInvoicesInvoiceIdRoute,
  deleteAccountingProvidersPaymentsPaymentIdRoute,
  getAccountingCustomersInvoicesIdsRoute,
  getAccountingCustomersInvoicesInvoiceIdDatesRoute,
  getAccountingCustomersInvoicesInvoiceIdDocumentRoute,
  getAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
  getAccountingCustomersInvoicesInvoiceIdPaymentTermsRoute,
  getAccountingCustomersInvoicesInvoiceIdRoute,
  getAccountingCustomersInvoicesRoute,
  getAccountingProvidersInvoicesIdsRoute,
  getAccountingProvidersInvoicesInvoiceIdDocumentRoute,
  getAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
  getAccountingProvidersInvoicesInvoiceIdRoute,
  getAccountingProvidersInvoicesRoute,
  postAccountingCustomersInvoicesDocumentsRoute,
  postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRoute,
  postAccountingCustomersInvoicesInvoiceIdDuplicateRoute,
  postAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
  postAccountingCustomersInvoicesInvoiceIdSendReminderRoute,
  postAccountingCustomersInvoicesRoute,
  postAccountingCustomersInvoicesSendRemindersRoute,
  postAccountingProvidersInvoicesInvoiceIdPaymentsRoute,
  postAccountingProvidersInvoicesInvoiceIdSendRoute,
  postAccountingProvidersInvoicesInvoiceIdStatusRoute,
  postAccountingProvidersInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountingHandler = app
  .openapi(getAccountingCustomersInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersInvoicesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesSendRemindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCustomersInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersInvoicesInvoiceIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersInvoicesInvoiceIdDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesInvoiceIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersInvoicesInvoiceIdPaymentTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersInvoicesInvoiceIdSendReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCustomersPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
