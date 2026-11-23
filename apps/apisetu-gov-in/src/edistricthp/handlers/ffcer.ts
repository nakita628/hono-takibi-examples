import { OpenAPIHono } from '@hono/zod-openapi'
import { postFfcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ffcerHandler = app.openapi(postFfcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
