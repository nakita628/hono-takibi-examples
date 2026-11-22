import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadTlsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadHandler = app.openapi(postUploadTlsCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
