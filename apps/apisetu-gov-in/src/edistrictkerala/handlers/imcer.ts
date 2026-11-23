import { OpenAPIHono } from '@hono/zod-openapi'
import { postImcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const imcerHandler = app.openapi(postImcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
