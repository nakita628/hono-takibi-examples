import { OpenAPIHono } from '@hono/zod-openapi'
import { postLpgtvCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const lpgtvHandler = app.openapi(postLpgtvCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
