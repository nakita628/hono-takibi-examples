import { OpenAPIHono } from '@hono/zod-openapi'
import { postRmcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rmcerHandler = app.openapi(postRmcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
