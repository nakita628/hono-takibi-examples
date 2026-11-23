import { OpenAPIHono } from '@hono/zod-openapi'
import { postNsescCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nsescHandler = app.openapi(postNsescCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
