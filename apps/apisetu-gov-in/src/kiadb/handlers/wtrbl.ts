import { OpenAPIHono } from '@hono/zod-openapi'
import { postWtrblCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const wtrblHandler = app.openapi(postWtrblCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
