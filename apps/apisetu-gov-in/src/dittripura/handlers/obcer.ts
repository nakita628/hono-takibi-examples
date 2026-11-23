import { OpenAPIHono } from '@hono/zod-openapi'
import { postObcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const obcerHandler = app.openapi(postObcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
