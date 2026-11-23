import { OpenAPIHono } from '@hono/zod-openapi'
import { postPmjayCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const pmjayHandler = app.openapi(postPmjayCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
