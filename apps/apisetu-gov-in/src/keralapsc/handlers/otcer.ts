import { OpenAPIHono } from '@hono/zod-openapi'
import { postOtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const otcerHandler = app.openapi(postOtcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
