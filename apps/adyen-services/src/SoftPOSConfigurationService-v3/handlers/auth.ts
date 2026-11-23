import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postAuthCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
