import { OpenAPIHono } from '@hono/zod-openapi'
import { postCyipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cyipcHandler = app.openapi(postCyipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
