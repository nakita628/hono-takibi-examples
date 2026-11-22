import { OpenAPIHono } from '@hono/zod-openapi'
import { postDpicrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postDpicrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
