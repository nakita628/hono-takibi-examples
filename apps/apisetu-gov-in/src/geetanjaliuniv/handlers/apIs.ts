import { OpenAPIHono } from '@hono/zod-openapi'
import { postDgcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postDgcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
