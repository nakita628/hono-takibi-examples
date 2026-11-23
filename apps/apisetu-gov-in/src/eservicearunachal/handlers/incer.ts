import { OpenAPIHono } from '@hono/zod-openapi'
import { postIncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const incerHandler = app.openapi(postIncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
