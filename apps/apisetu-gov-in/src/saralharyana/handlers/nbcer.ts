import { OpenAPIHono } from '@hono/zod-openapi'
import { postNbcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const nbcerHandler = app.openapi(postNbcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
