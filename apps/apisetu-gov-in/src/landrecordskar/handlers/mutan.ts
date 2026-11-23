import { OpenAPIHono } from '@hono/zod-openapi'
import { postMutanCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mutanHandler = app.openapi(postMutanCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
