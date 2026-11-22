import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRoute,
  deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRoute,
  deleteV2InvoicingInvoicesInvoiceIdRoute,
  getV2InvoicingInvoicesInvoiceIdRoute,
  getV2InvoicingInvoicesRoute,
  postV2InvoicingGenerateNextInvoiceNumberRoute,
  postV2InvoicingInvoicesInvoiceIdCancelRoute,
  postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRoute,
  postV2InvoicingInvoicesInvoiceIdPaymentsRoute,
  postV2InvoicingInvoicesInvoiceIdRefundsRoute,
  postV2InvoicingInvoicesInvoiceIdRemindRoute,
  postV2InvoicingInvoicesInvoiceIdSendRoute,
  postV2InvoicingInvoicesRoute,
  putV2InvoicingInvoicesInvoiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(postV2InvoicingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingInvoicesInvoiceIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingInvoicesInvoiceIdRemindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingInvoicesInvoiceIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingInvoicesInvoiceIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingGenerateNextInvoiceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2InvoicingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
