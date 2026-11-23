import { OpenAPIHono } from '@hono/zod-openapi'
import { postMripcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mripcHandler = app.openapi(postMripcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
