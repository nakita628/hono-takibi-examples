import { OpenAPIHono } from '@hono/zod-openapi'
import { postSicrdCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const sicrdHandler = app.openapi(postSicrdCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
