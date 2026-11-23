import { OpenAPIHono } from '@hono/zod-openapi'
import { postSecerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const secerHandler = app.openapi(postSecerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
