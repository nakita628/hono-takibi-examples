import { OpenAPIHono } from '@hono/zod-openapi'
import { postUncrdCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const uncrdHandler = app.openapi(postUncrdCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
