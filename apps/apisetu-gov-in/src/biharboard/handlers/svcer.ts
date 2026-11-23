import { OpenAPIHono } from '@hono/zod-openapi'
import { postSvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const svcerHandler = app.openapi(postSvcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
