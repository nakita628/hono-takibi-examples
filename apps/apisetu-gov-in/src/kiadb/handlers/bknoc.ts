import { OpenAPIHono } from '@hono/zod-openapi'
import { postBknocCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const bknocHandler = app.openapi(postBknocCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
