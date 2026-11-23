import { OpenAPIHono } from '@hono/zod-openapi'
import { postCocerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cocerHandler = app.openapi(postCocerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
