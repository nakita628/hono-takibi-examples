import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkmstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postSkmstCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
