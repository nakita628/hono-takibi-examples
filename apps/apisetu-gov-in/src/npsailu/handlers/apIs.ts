import { OpenAPIHono } from '@hono/zod-openapi'
import { postNdcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postNdcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
