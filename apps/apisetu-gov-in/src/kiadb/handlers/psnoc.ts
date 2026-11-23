import { OpenAPIHono } from '@hono/zod-openapi'
import { postPsnocCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const psnocHandler = app.openapi(postPsnocCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
