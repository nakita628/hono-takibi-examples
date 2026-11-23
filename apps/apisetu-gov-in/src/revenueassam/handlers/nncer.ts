import { OpenAPIHono } from '@hono/zod-openapi'
import { postNncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nncerHandler = app.openapi(postNncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
