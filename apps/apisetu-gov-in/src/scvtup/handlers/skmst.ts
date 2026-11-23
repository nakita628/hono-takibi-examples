import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkmstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const skmstHandler = app.openapi(postSkmstCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
