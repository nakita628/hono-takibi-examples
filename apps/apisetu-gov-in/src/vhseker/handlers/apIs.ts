import { OpenAPIHono } from '@hono/zod-openapi'
import { postVochseCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postVochseCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
