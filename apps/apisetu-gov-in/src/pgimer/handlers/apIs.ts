import { OpenAPIHono } from '@hono/zod-openapi'
import { postLabrpCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postLabrpCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
