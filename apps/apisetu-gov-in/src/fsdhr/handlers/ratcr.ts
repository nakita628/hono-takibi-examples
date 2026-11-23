import { OpenAPIHono } from '@hono/zod-openapi'
import { postRatcrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ratcrHandler = app.openapi(postRatcrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
