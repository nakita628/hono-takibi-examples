import { OpenAPIHono } from '@hono/zod-openapi'
import { postBtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const btcerHandler = app.openapi(postBtcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
