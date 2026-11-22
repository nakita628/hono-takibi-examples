import { OpenAPIHono } from '@hono/zod-openapi'
import { postHpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postHpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
