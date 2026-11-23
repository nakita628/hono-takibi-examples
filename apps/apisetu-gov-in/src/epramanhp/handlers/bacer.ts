import { OpenAPIHono } from '@hono/zod-openapi'
import { postBacerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const bacerHandler = app.openapi(postBacerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
