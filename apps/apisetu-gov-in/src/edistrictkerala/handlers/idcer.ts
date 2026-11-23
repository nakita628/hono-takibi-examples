import { OpenAPIHono } from '@hono/zod-openapi'
import { postIdcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const idcerHandler = app.openapi(postIdcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
