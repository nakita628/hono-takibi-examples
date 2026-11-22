import { OpenAPIHono } from '@hono/zod-openapi'
import { postSslcrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postSslcrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
