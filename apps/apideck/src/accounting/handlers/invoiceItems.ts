import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingInvoiceItemsIdRoute,
  getAccountingInvoiceItemsIdRoute,
  getAccountingInvoiceItemsRoute,
  patchAccountingInvoiceItemsIdRoute,
  postAccountingInvoiceItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceItemsHandler = app
  .openapi(getAccountingInvoiceItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingInvoiceItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingInvoiceItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingInvoiceItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingInvoiceItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
