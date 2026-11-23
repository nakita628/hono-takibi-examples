import { OpenAPIHono } from '@hono/zod-openapi'
import { postHmipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const hmipcHandler = app.openapi(postHmipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
