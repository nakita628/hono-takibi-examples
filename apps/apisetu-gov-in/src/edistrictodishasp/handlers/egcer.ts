import { OpenAPIHono } from '@hono/zod-openapi'
import { postEgcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const egcerHandler = app.openapi(postEgcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
