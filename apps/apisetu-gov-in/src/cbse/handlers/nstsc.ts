import { OpenAPIHono } from '@hono/zod-openapi'
import { postNstscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nstscHandler = app.openapi(postNstscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
