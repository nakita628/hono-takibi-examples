import { OpenAPIHono } from '@hono/zod-openapi'
import { postSscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postSscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
