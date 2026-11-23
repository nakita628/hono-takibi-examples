import { OpenAPIHono } from '@hono/zod-openapi'
import { postPecerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pecerHandler = app.openapi(postPecerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
