import { OpenAPIHono } from '@hono/zod-openapi'
import { postDtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dtcerHandler = app.openapi(postDtcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
