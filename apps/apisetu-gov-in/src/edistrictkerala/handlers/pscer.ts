import { OpenAPIHono } from '@hono/zod-openapi'
import { postPscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pscerHandler = app.openapi(postPscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
