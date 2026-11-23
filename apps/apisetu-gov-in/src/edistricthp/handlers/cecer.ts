import { OpenAPIHono } from '@hono/zod-openapi'
import { postCecerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cecerHandler = app.openapi(postCecerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
