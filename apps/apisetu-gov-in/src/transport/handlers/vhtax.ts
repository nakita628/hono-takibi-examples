import { OpenAPIHono } from '@hono/zod-openapi'
import { postVhtaxCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const vhtaxHandler = app.openapi(postVhtaxCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
