import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const skcerHandler = app.openapi(postSkcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
