import { OpenAPIHono } from '@hono/zod-openapi'
import { postKecerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const kecerHandler = app.openapi(postKecerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
