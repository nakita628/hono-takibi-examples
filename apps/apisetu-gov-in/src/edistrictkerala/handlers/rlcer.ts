import { OpenAPIHono } from '@hono/zod-openapi'
import { postRlcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rlcerHandler = app.openapi(postRlcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
