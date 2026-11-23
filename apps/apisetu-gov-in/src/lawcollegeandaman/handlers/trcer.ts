import { OpenAPIHono } from '@hono/zod-openapi'
import { postTrcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const trcerHandler = app.openapi(postTrcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
