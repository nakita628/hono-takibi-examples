import { OpenAPIHono } from '@hono/zod-openapi'
import { postBtcerCertificateRoute, postDtcerCertificateRoute } from './routes'
import { postBtcerCertificateRouteHandler, postDtcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBtcerCertificateRoute, postBtcerCertificateRouteHandler)
  .openapi(postDtcerCertificateRoute, postDtcerCertificateRouteHandler)

export default app
