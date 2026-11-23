import { OpenAPIHono } from '@hono/zod-openapi'
import { postAecmwCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const aecmwHandler = app.openapi(postAecmwCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
