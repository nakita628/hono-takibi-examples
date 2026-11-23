import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkhscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const skhscHandler = app.openapi(postSkhscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
