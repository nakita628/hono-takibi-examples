import { OpenAPIHono } from '@hono/zod-openapi'
import { postDscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dscerHandler = app.openapi(postDscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
