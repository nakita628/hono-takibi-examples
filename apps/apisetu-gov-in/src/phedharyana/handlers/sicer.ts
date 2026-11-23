import { OpenAPIHono } from '@hono/zod-openapi'
import { postSicerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const sicerHandler = app.openapi(postSicerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
