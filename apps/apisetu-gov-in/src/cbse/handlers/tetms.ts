import { OpenAPIHono } from '@hono/zod-openapi'
import { postTetmsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tetmsHandler = app.openapi(postTetmsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
