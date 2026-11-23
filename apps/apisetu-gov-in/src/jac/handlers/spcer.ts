import { OpenAPIHono } from '@hono/zod-openapi'
import { postSpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const spcerHandler = app.openapi(postSpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
