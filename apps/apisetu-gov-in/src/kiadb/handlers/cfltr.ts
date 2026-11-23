import { OpenAPIHono } from '@hono/zod-openapi'
import { postCfltrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cfltrHandler = app.openapi(postCfltrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
