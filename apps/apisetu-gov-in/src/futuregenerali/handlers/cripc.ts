import { OpenAPIHono } from '@hono/zod-openapi'
import { postCripcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cripcHandler = app.openapi(postCripcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
