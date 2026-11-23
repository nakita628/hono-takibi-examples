import { OpenAPIHono } from '@hono/zod-openapi'
import { postNdcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ndcerHandler = app.openapi(postNdcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
