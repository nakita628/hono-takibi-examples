import { OpenAPIHono } from '@hono/zod-openapi'
import { postSocerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const socerHandler = app.openapi(postSocerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
