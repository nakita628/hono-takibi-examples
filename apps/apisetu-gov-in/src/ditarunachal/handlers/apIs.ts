import { OpenAPIHono } from '@hono/zod-openapi'
import { postIlpmtCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postIlpmtCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
