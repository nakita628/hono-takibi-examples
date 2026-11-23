import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postDtcerCertificateRoute,
  postRmcerCertificateRoute,
} from './routes'
import {
  postBtcerCertificateRouteHandler,
  postDtcerCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBtcerCertificateRoute, postBtcerCertificateRouteHandler)
  .openapi(postDtcerCertificateRoute, postDtcerCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)

export default app
