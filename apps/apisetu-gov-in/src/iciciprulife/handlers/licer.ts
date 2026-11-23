import { OpenAPIHono } from '@hono/zod-openapi'
import { postLicerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const licerHandler = app.openapi(postLicerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
