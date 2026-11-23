import { OpenAPIHono } from '@hono/zod-openapi'
import { postLcsagCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const lcsagHandler = app.openapi(postLcsagCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
