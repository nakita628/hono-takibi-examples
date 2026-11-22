import { OpenAPIHono } from '@hono/zod-openapi'
import { postNbcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postNbcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
