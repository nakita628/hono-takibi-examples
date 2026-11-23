import { OpenAPIHono } from '@hono/zod-openapi'
import { postCfmstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cfmstHandler = app.openapi(postCfmstCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
