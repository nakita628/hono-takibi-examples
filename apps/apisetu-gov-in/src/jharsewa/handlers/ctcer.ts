import { OpenAPIHono } from '@hono/zod-openapi'
import { postCtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ctcerHandler = app.openapi(postCtcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
