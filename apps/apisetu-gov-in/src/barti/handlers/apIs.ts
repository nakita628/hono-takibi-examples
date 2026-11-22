import { OpenAPIHono } from '@hono/zod-openapi'
import { postCvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postCvcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
