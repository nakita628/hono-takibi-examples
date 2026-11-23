import { OpenAPIHono } from '@hono/zod-openapi'
import { postDgmstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const dgmstHandler = app.openapi(postDgmstCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
