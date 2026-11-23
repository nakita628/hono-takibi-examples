import { OpenAPIHono } from '@hono/zod-openapi'
import { postAlltrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const alltrHandler = app.openapi(postAlltrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
