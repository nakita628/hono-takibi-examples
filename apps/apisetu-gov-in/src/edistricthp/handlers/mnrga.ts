import { OpenAPIHono } from '@hono/zod-openapi'
import { postMnrgaCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mnrgaHandler = app.openapi(postMnrgaCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
