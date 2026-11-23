import { OpenAPIHono } from '@hono/zod-openapi'
import { postDncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dncerHandler = app.openapi(postDncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
