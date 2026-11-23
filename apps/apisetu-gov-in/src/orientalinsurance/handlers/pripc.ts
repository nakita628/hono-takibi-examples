import { OpenAPIHono } from '@hono/zod-openapi'
import { postPripcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pripcHandler = app.openapi(postPripcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
