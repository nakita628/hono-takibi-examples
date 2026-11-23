import { OpenAPIHono } from '@hono/zod-openapi'
import { postDccerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dccerHandler = app.openapi(postDccerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
