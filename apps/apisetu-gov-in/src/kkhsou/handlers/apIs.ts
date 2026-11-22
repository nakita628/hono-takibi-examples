import { OpenAPIHono } from '@hono/zod-openapi'
import { postPvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postPvcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
