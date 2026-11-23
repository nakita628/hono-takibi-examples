import { OpenAPIHono } from '@hono/zod-openapi'
import { postPsprtCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const psprtHandler = app.openapi(postPsprtCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
