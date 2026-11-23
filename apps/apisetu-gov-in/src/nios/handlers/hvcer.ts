import { OpenAPIHono } from '@hono/zod-openapi'
import { postHvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const hvcerHandler = app.openapi(postHvcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
