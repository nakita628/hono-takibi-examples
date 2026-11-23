import { OpenAPIHono } from '@hono/zod-openapi'
import { getSslCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const sslHandler = app.openapi(getSslCertificatesRoute, (c) => {
  throw new Error('Not implemented')
})
