import { OpenAPIHono } from '@hono/zod-openapi'
import { postEtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const etcerHandler = app.openapi(postEtcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
