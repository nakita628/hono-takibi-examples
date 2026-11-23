import { OpenAPIHono } from '@hono/zod-openapi'
import { postGicerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const gicerHandler = app.openapi(postGicerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
