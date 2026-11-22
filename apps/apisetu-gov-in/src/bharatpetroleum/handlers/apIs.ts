import { OpenAPIHono } from '@hono/zod-openapi'
import { postLpgsvCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postLpgsvCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
