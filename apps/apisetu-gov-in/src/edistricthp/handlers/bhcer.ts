import { OpenAPIHono } from '@hono/zod-openapi'
import { postBhcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const bhcerHandler = app.openapi(postBhcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
