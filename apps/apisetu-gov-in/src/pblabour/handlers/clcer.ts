import { OpenAPIHono } from '@hono/zod-openapi'
import { postClcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const clcerHandler = app.openapi(postClcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
