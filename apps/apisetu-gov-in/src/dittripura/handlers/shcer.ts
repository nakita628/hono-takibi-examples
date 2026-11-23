import { OpenAPIHono } from '@hono/zod-openapi'
import { postShcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const shcerHandler = app.openapi(postShcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
