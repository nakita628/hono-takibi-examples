import { OpenAPIHono } from '@hono/zod-openapi'
import { postOscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const oscerHandler = app.openapi(postOscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
