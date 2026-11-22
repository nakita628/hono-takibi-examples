import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdcrdCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postAdcrdCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
