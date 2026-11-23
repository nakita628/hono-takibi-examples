import { OpenAPIHono } from '@hono/zod-openapi'
import { postIgcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const igcerHandler = app.openapi(postIgcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
