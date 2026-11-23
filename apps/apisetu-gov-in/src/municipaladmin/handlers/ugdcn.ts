import { OpenAPIHono } from '@hono/zod-openapi'
import { postUgdcnCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ugdcnHandler = app.openapi(postUgdcnCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
