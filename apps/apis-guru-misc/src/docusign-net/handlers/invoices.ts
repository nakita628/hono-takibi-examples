import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdBillingInvoicesInvoiceIdRoute,
  getV21AccountsAccountIdBillingInvoicesPastDueRoute,
  getV21AccountsAccountIdBillingInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getV21AccountsAccountIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingInvoicesPastDueRoute, (c) => {
    throw new Error('Not implemented')
  })
