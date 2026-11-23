import { OpenAPIHono } from '@hono/zod-openapi'
import { postDelcsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const delcsHandler = app.openapi(postDelcsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
