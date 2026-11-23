import { OpenAPIHono } from '@hono/zod-openapi'
import { postLvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const lvcerHandler = app.openapi(postLvcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
