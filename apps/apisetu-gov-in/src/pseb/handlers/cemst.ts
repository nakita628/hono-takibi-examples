import { OpenAPIHono } from '@hono/zod-openapi'
import { postCemstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const cemstHandler = app.openapi(postCemstCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
