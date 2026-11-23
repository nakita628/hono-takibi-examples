import { OpenAPIHono } from '@hono/zod-openapi'
import { postPfdawCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pfdawHandler = app.openapi(postPfdawCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
