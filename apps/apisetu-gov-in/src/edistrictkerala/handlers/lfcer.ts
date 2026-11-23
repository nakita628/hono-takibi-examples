import { OpenAPIHono } from '@hono/zod-openapi'
import { postLfcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const lfcerHandler = app.openapi(postLfcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
