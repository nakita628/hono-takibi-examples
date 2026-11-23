import { OpenAPIHono } from '@hono/zod-openapi'
import { postTpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tpcerHandler = app.openapi(postTpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
