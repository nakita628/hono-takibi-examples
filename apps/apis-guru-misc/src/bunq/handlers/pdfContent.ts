import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDInvoiceInvoiceIDPdfContentRoute } from '../routes'

const app = new OpenAPIHono()

export const pdfContentHandler = app.openapi(getUserUserIDInvoiceInvoiceIDPdfContentRoute, (c) => {
  throw new Error('Not implemented')
})
