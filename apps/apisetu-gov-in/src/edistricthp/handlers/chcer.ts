import { OpenAPIHono } from '@hono/zod-openapi'
import { postChcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const chcerHandler = app.openapi(postChcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
