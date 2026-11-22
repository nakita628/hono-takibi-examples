import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCustomersInvoicesInvoiceIdRoute,
  deleteAccountingCustomersPaymentsPaymentIdRoute,
  getAccountingCustomersInvoicesIdsRoute,
  getAccountingCustomersInvoicesInvoiceIdDatesRoute,
  getAccountingCustomersInvoicesInvoiceIdDocumentRoute,
  getAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
  getAccountingCustomersInvoicesInvoiceIdPaymentTermsRoute,
  getAccountingCustomersInvoicesInvoiceIdRoute,
  getAccountingCustomersInvoicesRoute,
  postAccountingCustomersInvoicesDocumentsRoute,
  postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRoute,
  postAccountingCustomersInvoicesInvoiceIdDuplicateRoute,
  postAccountingCustomersInvoicesInvoiceIdPaymentsRoute,
  postAccountingCustomersInvoicesInvoiceIdSendReminderRoute,
  postAccountingCustomersInvoicesRoute,
  postAccountingCustomersInvoicesSendRemindersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientInvoicesHandler = app
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
