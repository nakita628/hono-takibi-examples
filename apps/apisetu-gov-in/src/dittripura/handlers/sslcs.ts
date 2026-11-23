import { OpenAPIHono } from '@hono/zod-openapi'
import { postSslcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const sslcsHandler = app.openapi(postSslcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
