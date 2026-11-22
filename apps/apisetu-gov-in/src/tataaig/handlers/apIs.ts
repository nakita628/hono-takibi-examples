import { OpenAPIHono } from '@hono/zod-openapi'
import { postPodocCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postPodocCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
