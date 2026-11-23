import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const govidHandler = app.openapi(postGovidCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
