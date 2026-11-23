import { OpenAPIHono } from '@hono/zod-openapi'
import { postDipcrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dipcrHandler = app.openapi(postDipcrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
