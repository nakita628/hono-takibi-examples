import { OpenAPIHono } from '@hono/zod-openapi'
import { postApptuCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apptuHandler = app.openapi(postApptuCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
