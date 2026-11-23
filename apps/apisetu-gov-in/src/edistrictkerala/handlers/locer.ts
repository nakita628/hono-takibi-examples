import { OpenAPIHono } from '@hono/zod-openapi'
import { postLocerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const locerHandler = app.openapi(postLocerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
