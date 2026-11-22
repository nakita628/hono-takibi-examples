import { OpenAPIHono } from '@hono/zod-openapi'
import { postApmclCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postApmclCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
