import { OpenAPIHono } from '@hono/zod-openapi'
import { postNtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ntcerHandler = app.openapi(postNtcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
