import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SalesInvoicesIdRoute,
  getV1SalesInvoicesIdRoute,
  getV1SalesInvoicesRoute,
  postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRoute,
  postV1SalesInvoicesRoute,
  putV1SalesInvoicesBatchRoute,
  putV1SalesInvoicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesInvoicesHandler = app
  .openapi(getV1SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesInvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
