import { OpenAPIHono } from '@hono/zod-openapi'
import { postErcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ercerHandler = app.openapi(postErcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
