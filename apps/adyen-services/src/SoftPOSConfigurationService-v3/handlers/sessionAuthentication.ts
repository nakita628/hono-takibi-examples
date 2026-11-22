import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionAuthenticationHandler = app.openapi(postAuthCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
