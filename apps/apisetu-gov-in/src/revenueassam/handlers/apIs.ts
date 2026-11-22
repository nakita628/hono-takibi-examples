import { OpenAPIHono } from '@hono/zod-openapi'
import { postNncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postNncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
