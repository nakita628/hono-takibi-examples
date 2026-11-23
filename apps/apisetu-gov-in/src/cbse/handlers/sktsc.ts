import { OpenAPIHono } from '@hono/zod-openapi'
import { postSktscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const sktscHandler = app.openapi(postSktscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
