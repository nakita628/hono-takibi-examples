import { OpenAPIHono } from '@hono/zod-openapi'
import { postSslcrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const sslcrHandler = app.openapi(postSslcrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
