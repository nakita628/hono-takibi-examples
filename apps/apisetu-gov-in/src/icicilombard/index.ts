import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
  postMiipcCertificateRoute,
  postTripcCertificateRoute,
  postTwipcCertificateRoute,
} from './routes'
import {
  postCripcCertificateRouteHandler,
  postCvipcCertificateRouteHandler,
  postHlipcCertificateRouteHandler,
  postHmipcCertificateRouteHandler,
  postMiipcCertificateRouteHandler,
  postTripcCertificateRouteHandler,
  postTwipcCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postCvipcCertificateRoute, postCvipcCertificateRouteHandler)
  .openapi(postHlipcCertificateRoute, postHlipcCertificateRouteHandler)
  .openapi(postHmipcCertificateRoute, postHmipcCertificateRouteHandler)
  .openapi(postMiipcCertificateRoute, postMiipcCertificateRouteHandler)
  .openapi(postTripcCertificateRoute, postTripcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
