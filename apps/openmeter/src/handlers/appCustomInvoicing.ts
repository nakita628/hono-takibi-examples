import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRoute,
  postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRoute,
  postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appCustomInvoicingHandler = app
  .openapi(postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
