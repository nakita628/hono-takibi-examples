import { OpenAPIHono } from '@hono/zod-openapi'
import { postArcmwCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const arcmwHandler = app.openapi(postArcmwCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
