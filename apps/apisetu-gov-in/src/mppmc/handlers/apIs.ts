import { OpenAPIHono } from '@hono/zod-openapi'
import { postSocerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postSocerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
