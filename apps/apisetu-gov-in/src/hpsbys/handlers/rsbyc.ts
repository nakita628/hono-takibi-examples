import { OpenAPIHono } from '@hono/zod-openapi'
import { postRsbycCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rsbycHandler = app.openapi(postRsbycCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
