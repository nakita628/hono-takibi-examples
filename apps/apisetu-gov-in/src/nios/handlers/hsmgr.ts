import { OpenAPIHono } from '@hono/zod-openapi'
import { postHsmgrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const hsmgrHandler = app.openapi(postHsmgrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
