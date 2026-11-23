import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIncerCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
  postSicrdCertificateRoute,
} from './routes'
import {
  postIncerCertificateRouteHandler,
  postRmcerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postSicrdCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postRmcerCertificateRoute, postRmcerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postSicrdCertificateRoute, postSicrdCertificateRouteHandler)

export default app
