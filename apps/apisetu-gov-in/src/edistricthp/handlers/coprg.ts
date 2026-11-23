import { OpenAPIHono } from '@hono/zod-openapi'
import { postCoprgCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const coprgHandler = app.openapi(postCoprgCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
