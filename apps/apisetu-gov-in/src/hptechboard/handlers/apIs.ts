import { OpenAPIHono } from '@hono/zod-openapi'
import { postDipcrCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postDipcrCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
