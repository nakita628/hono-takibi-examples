import { OpenAPIHono } from '@hono/zod-openapi'
import { postBpcrdCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const bpcrdHandler = app.openapi(postBpcrdCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
