import { OpenAPIHono } from '@hono/zod-openapi'
import { postDpicrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dpicrHandler = app.openapi(postDpicrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
