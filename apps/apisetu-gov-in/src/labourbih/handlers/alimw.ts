import { OpenAPIHono } from '@hono/zod-openapi'
import { postAlimwCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const alimwHandler = app.openapi(postAlimwCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
