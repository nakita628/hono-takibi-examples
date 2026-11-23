import { OpenAPIHono } from '@hono/zod-openapi'
import { postFmcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const fmcerHandler = app.openapi(postFmcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
