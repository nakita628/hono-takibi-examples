import { OpenAPIHono } from '@hono/zod-openapi'
import { postIticrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postIticrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
