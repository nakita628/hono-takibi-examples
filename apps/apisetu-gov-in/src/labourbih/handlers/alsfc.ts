import { OpenAPIHono } from '@hono/zod-openapi'
import { postAlsfcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const alsfcHandler = app.openapi(postAlsfcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
