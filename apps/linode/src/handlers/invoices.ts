import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountInvoicesInvoiceIdItemsRoute,
  getApiVersionAccountInvoicesInvoiceIdRoute,
  getApiVersionAccountInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getApiVersionAccountInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountInvoicesInvoiceIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
