import { OpenAPIHono } from '@hono/zod-openapi'
import { postHscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const hscerHandler = app.openapi(postHscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
