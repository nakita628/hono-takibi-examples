import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDInvoiceInvoiceIDInvoiceExportItemIdRoute,
  getUserUserIDInvoiceInvoiceIDInvoiceExportItemIdRoute,
  postUserUserIDInvoiceInvoiceIDInvoiceExportRoute,
  putUserUserIDInvoiceInvoiceIDInvoiceExportItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceExportHandler = app
  .openapi(getUserUserIDInvoiceInvoiceIDInvoiceExportItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDInvoiceInvoiceIDInvoiceExportItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDInvoiceInvoiceIDInvoiceExportItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDInvoiceInvoiceIDInvoiceExportRoute, (c) => {
    throw new Error('Not implemented')
  })
