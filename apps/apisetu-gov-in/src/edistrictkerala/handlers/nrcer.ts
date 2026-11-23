import { OpenAPIHono } from '@hono/zod-openapi'
import { postNrcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nrcerHandler = app.openapi(postNrcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
