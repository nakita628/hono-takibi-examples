import { OpenAPIHono } from '@hono/zod-openapi'
import { postPalcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const palcsHandler = app.openapi(postPalcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
