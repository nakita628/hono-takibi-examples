import { OpenAPIHono } from '@hono/zod-openapi'
import { postSrcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const srcerHandler = app.openapi(postSrcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
