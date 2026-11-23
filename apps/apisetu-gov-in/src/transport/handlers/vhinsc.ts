import { OpenAPIHono } from '@hono/zod-openapi'
import { postVhinscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const vhinscHandler = app.openapi(postVhinscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
