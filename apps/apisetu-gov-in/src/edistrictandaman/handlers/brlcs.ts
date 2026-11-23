import { OpenAPIHono } from '@hono/zod-openapi'
import { postBrlcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const brlcsHandler = app.openapi(postBrlcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
