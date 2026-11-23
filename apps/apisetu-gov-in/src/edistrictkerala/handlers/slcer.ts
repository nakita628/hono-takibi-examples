import { OpenAPIHono } from '@hono/zod-openapi'
import { postSlcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const slcerHandler = app.openapi(postSlcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
