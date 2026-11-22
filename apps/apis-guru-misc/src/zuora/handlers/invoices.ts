import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectInvoiceIdRoute,
  getV1InvoicesInvoiceIdApplicationPartsRoute,
  getV1InvoicesInvoiceIdFilesRoute,
  getV1InvoicesInvoiceIdItemsItemIdTaxationItemsRoute,
  getV1InvoicesInvoiceIdItemsRoute,
  getV1ObjectInvoiceIdRoute,
  postV1InvoicesInvoiceIdCreditmemosRoute,
  postV1InvoicesInvoiceIdDebitmemosRoute,
  postV1InvoicesInvoiceIdEmailsRoute,
  postV1InvoicesInvoiceIdFilesRoute,
  postV1InvoicesRoute,
  putV1InvoicesInvoiceIdReverseRoute,
  putV1InvoicesInvoiceIdRoute,
  putV1InvoicesInvoiceIdWriteOffRoute,
  putV1InvoicesRoute,
  putV1ObjectInvoiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(postV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdApplicationPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdCreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdDebitmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesInvoiceIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesInvoiceIdItemsItemIdTaxationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesInvoiceIdReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InvoicesInvoiceIdWriteOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
