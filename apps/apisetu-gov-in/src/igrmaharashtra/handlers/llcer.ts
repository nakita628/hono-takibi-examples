import { OpenAPIHono } from '@hono/zod-openapi'
import { postLlcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const llcerHandler = app.openapi(postLlcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
