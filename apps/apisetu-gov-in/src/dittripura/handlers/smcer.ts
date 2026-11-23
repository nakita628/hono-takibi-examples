import { OpenAPIHono } from '@hono/zod-openapi'
import { postSmcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const smcerHandler = app.openapi(postSmcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
