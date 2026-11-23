import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postCyipcCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
  postTripcCertificateRoute,
  postTwipcCertificateRoute,
} from './routes'
import {
  postCripcCertificateRouteHandler,
  postCvipcCertificateRouteHandler,
  postCyipcCertificateRouteHandler,
  postHlipcCertificateRouteHandler,
  postHmipcCertificateRouteHandler,
  postTripcCertificateRouteHandler,
  postTwipcCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postCvipcCertificateRoute, postCvipcCertificateRouteHandler)
  .openapi(postCyipcCertificateRoute, postCyipcCertificateRouteHandler)
  .openapi(postHlipcCertificateRoute, postHlipcCertificateRouteHandler)
  .openapi(postHmipcCertificateRoute, postHmipcCertificateRouteHandler)
  .openapi(postTripcCertificateRoute, postTripcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
