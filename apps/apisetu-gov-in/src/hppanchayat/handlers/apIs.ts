import { OpenAPIHono } from '@hono/zod-openapi'
import { postFmcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postFmcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
