import { OpenAPIHono } from '@hono/zod-openapi'
import { postNooclCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nooclHandler = app.openapi(postNooclCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
