import { OpenAPIHono } from '@hono/zod-openapi'
import { postVlcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const vlcerHandler = app.openapi(postVlcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
