import { OpenAPIHono } from '@hono/zod-openapi'
import { postTapcnCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tapcnHandler = app.openapi(postTapcnCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
