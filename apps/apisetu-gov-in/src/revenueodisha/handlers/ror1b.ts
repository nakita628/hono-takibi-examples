import { OpenAPIHono } from '@hono/zod-openapi'
import { postRor1bCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ror1bHandler = app.openapi(postRor1bCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
