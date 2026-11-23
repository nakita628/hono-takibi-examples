import { OpenAPIHono } from '@hono/zod-openapi'
import { postMiipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const miipcHandler = app.openapi(postMiipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
