import { OpenAPIHono } from '@hono/zod-openapi'
import { postDmcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dmcerHandler = app.openapi(postDmcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
