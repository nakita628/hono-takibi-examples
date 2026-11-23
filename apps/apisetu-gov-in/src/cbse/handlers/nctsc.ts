import { OpenAPIHono } from '@hono/zod-openapi'
import { postNctscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nctscHandler = app.openapi(postNctscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
