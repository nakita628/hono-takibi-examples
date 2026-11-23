import { OpenAPIHono } from '@hono/zod-openapi'
import { postHpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const hpcerHandler = app.openapi(postHpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
