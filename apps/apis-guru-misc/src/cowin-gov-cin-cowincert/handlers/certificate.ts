import { OpenAPIHono } from '@hono/zod-openapi'
import { postPdfCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const certificateHandler = app.openapi(postPdfCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
