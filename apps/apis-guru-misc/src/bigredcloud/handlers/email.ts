import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1EmailSendEmailStatementRoute,
  postV1EmailSendQuoteRoute,
  postV1EmailSendSalesInvoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailHandler = app
  .openapi(postV1EmailSendEmailStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailSendQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailSendSalesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
