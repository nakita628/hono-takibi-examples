import { OpenAPIHono } from '@hono/zod-openapi'
import { postWwcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const wwcerHandler = app.openapi(postWwcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
