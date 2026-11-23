import { OpenAPIHono } from '@hono/zod-openapi'
import { postTdlcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tdlcsHandler = app.openapi(postTdlcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
