import { OpenAPIHono } from '@hono/zod-openapi'
import { postPdfCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pdfHandler = app.openapi(postPdfCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
