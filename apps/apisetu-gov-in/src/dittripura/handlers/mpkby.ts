import { OpenAPIHono } from '@hono/zod-openapi'
import { postMpkbyCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const mpkbyHandler = app.openapi(postMpkbyCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
