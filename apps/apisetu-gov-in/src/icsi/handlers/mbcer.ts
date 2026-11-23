import { OpenAPIHono } from '@hono/zod-openapi'
import { postMbcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mbcerHandler = app.openapi(postMbcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
