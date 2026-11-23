import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const phcerHandler = app.openapi(postPhcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
