import { OpenAPIHono } from '@hono/zod-openapi'
import { postLlcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postLlcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
