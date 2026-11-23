import { OpenAPIHono } from '@hono/zod-openapi'
import { postRdcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rdcerHandler = app.openapi(postRdcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
