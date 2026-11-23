import { OpenAPIHono } from '@hono/zod-openapi'
import { postLccepCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const lccepHandler = app.openapi(postLccepCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
