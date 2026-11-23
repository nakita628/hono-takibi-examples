import { OpenAPIHono } from '@hono/zod-openapi'
import { postEpfscCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const epfscHandler = app.openapi(postEpfscCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
