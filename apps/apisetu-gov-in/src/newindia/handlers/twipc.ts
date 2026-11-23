import { OpenAPIHono } from '@hono/zod-openapi'
import { postTwipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const twipcHandler = app.openapi(postTwipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
