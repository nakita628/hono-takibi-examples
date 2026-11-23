import { OpenAPIHono } from '@hono/zod-openapi'
import { postMalcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const malcsHandler = app.openapi(postMalcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
