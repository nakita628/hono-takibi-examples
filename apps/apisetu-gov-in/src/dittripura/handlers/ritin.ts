import { OpenAPIHono } from '@hono/zod-openapi'
import { postRitinCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const ritinHandler = app.openapi(postRitinCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
