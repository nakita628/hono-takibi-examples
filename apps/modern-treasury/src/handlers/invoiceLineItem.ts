import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
  getApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
  getApiInvoicesInvoiceIdInvoiceLineItemsRoute,
  patchApiInvoicesInvoiceIdInvoiceLineItemsIdRoute,
  postApiInvoicesInvoiceIdInvoiceLineItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceLineItemHandler = app
  .openapi(getApiInvoicesInvoiceIdInvoiceLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoicesInvoiceIdInvoiceLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicesInvoiceIdInvoiceLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInvoicesInvoiceIdInvoiceLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiInvoicesInvoiceIdInvoiceLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
