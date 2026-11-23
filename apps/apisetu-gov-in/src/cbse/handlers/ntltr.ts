import { OpenAPIHono } from '@hono/zod-openapi'
import { postNtltrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ntltrHandler = app.openapi(postNtltrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
