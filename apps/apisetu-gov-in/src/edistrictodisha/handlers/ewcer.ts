import { OpenAPIHono } from '@hono/zod-openapi'
import { postEwcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ewcerHandler = app.openapi(postEwcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
