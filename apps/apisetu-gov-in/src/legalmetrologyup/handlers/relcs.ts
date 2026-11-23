import { OpenAPIHono } from '@hono/zod-openapi'
import { postRelcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const relcsHandler = app.openapi(postRelcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
