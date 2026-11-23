import { OpenAPIHono } from '@hono/zod-openapi'
import { postIsoalCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const isoalHandler = app.openapi(postIsoalCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
