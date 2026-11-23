import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRoute,
  deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRoute,
  deleteV2InvoicingInvoicesInvoiceIdRoute,
  deleteV2InvoicingTemplatesTemplateIdRoute,
  getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute,
  getV2InvoicingAccountingSyncMerchantConnectionsRoute,
  getV2InvoicingInvoicesInvoiceIdRoute,
  getV2InvoicingInvoicesRoute,
  getV2InvoicingTemplatesRoute,
  getV2InvoicingTemplatesTemplateIdRoute,
  postV2InvoicingGenerateNextInvoiceNumberRoute,
  postV2InvoicingInvoicesInvoiceIdCancelRoute,
  postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRoute,
  postV2InvoicingInvoicesInvoiceIdPaymentsRoute,
  postV2InvoicingInvoicesInvoiceIdRefundsRoute,
  postV2InvoicingInvoicesInvoiceIdRemindRoute,
  postV2InvoicingInvoicesInvoiceIdSendRoute,
  postV2InvoicingInvoicesRoute,
  postV2InvoicingSearchInvoicesRoute,
  postV2InvoicingTemplatesRoute,
  putV2InvoicingInvoicesInvoiceIdRoute,
  putV2InvoicingTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
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
  .openapi(postV2InvoicingSearchInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2InvoicingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingAccountingSyncMerchantConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
