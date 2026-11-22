import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2InvoicesInvoiceIdRoute,
  getV2InvoicesInvoiceIdRoute,
  getV2InvoicesRoute,
  postV2InvoicesInvoiceIdCancelRoute,
  postV2InvoicesInvoiceIdPublishRoute,
  postV2InvoicesRoute,
  postV2InvoicesSearchRoute,
  putV2InvoicesInvoiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getV2InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesInvoiceIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicesInvoiceIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
