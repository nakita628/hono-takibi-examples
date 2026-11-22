import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdInvoicesRoute,
  getApiCreditcontrolInvoicesRoute,
  postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRoute,
  putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRoute,
  putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getApiCreditcontrolAccountsCreditAccountIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
