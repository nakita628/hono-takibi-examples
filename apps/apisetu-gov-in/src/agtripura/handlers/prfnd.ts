import { OpenAPIHono } from '@hono/zod-openapi'
import { postPrfndCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const prfndHandler = app.openapi(postPrfndCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
