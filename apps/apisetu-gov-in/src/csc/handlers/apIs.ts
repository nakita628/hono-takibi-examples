import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postSkcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
