import { OpenAPIHono } from '@hono/zod-openapi'
import { postSsmgrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ssmgrHandler = app.openapi(postSsmgrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
