import { OpenAPIHono } from '@hono/zod-openapi'
import { postRfcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rfcerHandler = app.openapi(postRfcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
