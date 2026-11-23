import { OpenAPIHono } from '@hono/zod-openapi'
import { postMicerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const micerHandler = app.openapi(postMicerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
