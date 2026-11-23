import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegriiCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const regriiHandler = app.openapi(postRegriiCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
