import { OpenAPIHono } from '@hono/zod-openapi'
import { postLhcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const lhcerHandler = app.openapi(postLhcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
