import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SalesInvoicesSalesInvoiceIdRoute,
  getV2SalesInvoicesRoute,
  getV2SalesInvoicesSalesInvoiceIdRoute,
  patchV2SalesInvoicesSalesInvoiceIdRoute,
  postV2SalesInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesInvoicesAPIHandler = app
  .openapi(postV2SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SalesInvoicesSalesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SalesInvoicesSalesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SalesInvoicesSalesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
