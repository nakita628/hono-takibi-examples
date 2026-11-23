import { OpenAPIHono } from '@hono/zod-openapi'
import { postPncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pncerHandler = app.openapi(postPncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
