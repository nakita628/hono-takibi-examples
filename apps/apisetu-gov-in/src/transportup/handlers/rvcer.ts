import { OpenAPIHono } from '@hono/zod-openapi'
import { postRvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rvcerHandler = app.openapi(postRvcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
