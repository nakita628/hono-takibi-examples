import { OpenAPIHono } from '@hono/zod-openapi'
import { postCvipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cvipcHandler = app.openapi(postCvipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
