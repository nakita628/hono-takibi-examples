import { OpenAPIHono } from '@hono/zod-openapi'
import { postNchscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nchscHandler = app.openapi(postNchscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
