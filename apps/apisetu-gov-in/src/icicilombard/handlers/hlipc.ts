import { OpenAPIHono } from '@hono/zod-openapi'
import { postHlipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const hlipcHandler = app.openapi(postHlipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
