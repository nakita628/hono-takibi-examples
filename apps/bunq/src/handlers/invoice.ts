import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDInvoiceItemIdRoute,
  getUserUserIDInvoiceRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDInvoiceItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDInvoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
