import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postGovidCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
