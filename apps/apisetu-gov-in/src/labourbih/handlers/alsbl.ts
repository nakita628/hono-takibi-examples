import { OpenAPIHono } from '@hono/zod-openapi'
import { postAlsblCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const alsblHandler = app.openapi(postAlsblCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
