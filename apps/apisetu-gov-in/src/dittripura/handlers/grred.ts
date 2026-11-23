import { OpenAPIHono } from '@hono/zod-openapi'
import { postGrredCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const grredHandler = app.openapi(postGrredCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
