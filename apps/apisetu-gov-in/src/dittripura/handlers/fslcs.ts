import { OpenAPIHono } from '@hono/zod-openapi'
import { postFslcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const fslcsHandler = app.openapi(postFslcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
