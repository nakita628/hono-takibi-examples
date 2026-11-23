import { OpenAPIHono } from '@hono/zod-openapi'
import { postPodocCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const podocHandler = app.openapi(postPodocCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
