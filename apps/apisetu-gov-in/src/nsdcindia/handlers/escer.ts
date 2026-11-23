import { OpenAPIHono } from '@hono/zod-openapi'
import { postEscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const escerHandler = app.openapi(postEscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
