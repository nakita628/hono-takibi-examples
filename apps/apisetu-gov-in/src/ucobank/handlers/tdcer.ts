import { OpenAPIHono } from '@hono/zod-openapi'
import { postTdcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tdcerHandler = app.openapi(postTdcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
