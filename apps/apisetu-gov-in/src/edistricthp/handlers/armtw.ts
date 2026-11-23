import { OpenAPIHono } from '@hono/zod-openapi'
import { postArmtwCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const armtwHandler = app.openapi(postArmtwCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
