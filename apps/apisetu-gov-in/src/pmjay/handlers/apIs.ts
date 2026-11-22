import { OpenAPIHono } from '@hono/zod-openapi'
import { postPmjayCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app.openapi(postPmjayCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
