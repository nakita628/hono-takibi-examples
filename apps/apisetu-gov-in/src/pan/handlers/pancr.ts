import { OpenAPIHono } from '@hono/zod-openapi'
import { postPancrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pancrHandler = app.openapi(postPancrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
