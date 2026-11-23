import { OpenAPIHono } from '@hono/zod-openapi'
import { postNtmksCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ntmksHandler = app.openapi(postNtmksCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
