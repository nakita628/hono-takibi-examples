import { OpenAPIHono } from '@hono/zod-openapi'
import { postAemtwCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const aemtwHandler = app.openapi(postAemtwCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
