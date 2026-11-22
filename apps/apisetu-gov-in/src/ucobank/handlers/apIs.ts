import { OpenAPIHono } from '@hono/zod-openapi'
import { postTdcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postTdcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
