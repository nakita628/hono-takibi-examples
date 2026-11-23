import { OpenAPIHono } from '@hono/zod-openapi'
import { postMrcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mrcerHandler = app.openapi(postMrcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
