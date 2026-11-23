import { OpenAPIHono } from '@hono/zod-openapi'
import { postBpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const bpcerHandler = app.openapi(postBpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
