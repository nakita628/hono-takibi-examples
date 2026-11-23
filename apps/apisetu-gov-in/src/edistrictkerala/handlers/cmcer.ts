import { OpenAPIHono } from '@hono/zod-openapi'
import { postCmcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cmcerHandler = app.openapi(postCmcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
