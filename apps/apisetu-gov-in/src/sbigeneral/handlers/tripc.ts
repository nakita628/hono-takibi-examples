import { OpenAPIHono } from '@hono/zod-openapi'
import { postTripcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tripcHandler = app.openapi(postTripcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
