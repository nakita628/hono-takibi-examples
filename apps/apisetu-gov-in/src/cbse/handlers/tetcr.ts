import { OpenAPIHono } from '@hono/zod-openapi'
import { postTetcrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const tetcrHandler = app.openapi(postTetcrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
