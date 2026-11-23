import { OpenAPIHono } from '@hono/zod-openapi'
import { postCncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cncerHandler = app.openapi(postCncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
