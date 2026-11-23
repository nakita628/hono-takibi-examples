import { OpenAPIHono } from '@hono/zod-openapi'
import { postRscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rscerHandler = app.openapi(postRscerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
