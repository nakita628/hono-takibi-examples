import { OpenAPIHono } from '@hono/zod-openapi'
import { postMncerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mncerHandler = app.openapi(postMncerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
