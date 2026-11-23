import { OpenAPIHono } from '@hono/zod-openapi'
import { postEgipcCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const egipcHandler = app.openapi(postEgipcCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
