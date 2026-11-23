import { OpenAPIHono } from '@hono/zod-openapi'
import { postKeysAndCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const keysAndCertificateHandler = app.openapi(postKeysAndCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
