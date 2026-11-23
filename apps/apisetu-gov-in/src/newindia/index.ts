import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postEgipcCertificateRoute,
  postHlipcCertificateRoute,
  postMiipcCertificateRoute,
  postTripcCertificateRoute,
  postTwipcCertificateRoute,
} from './routes'
import {
  postCripcCertificateRouteHandler,
  postCvipcCertificateRouteHandler,
  postEgipcCertificateRouteHandler,
  postHlipcCertificateRouteHandler,
  postMiipcCertificateRouteHandler,
  postTripcCertificateRouteHandler,
  postTwipcCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postCvipcCertificateRoute, postCvipcCertificateRouteHandler)
  .openapi(postEgipcCertificateRoute, postEgipcCertificateRouteHandler)
  .openapi(postHlipcCertificateRoute, postHlipcCertificateRouteHandler)
  .openapi(postMiipcCertificateRoute, postMiipcCertificateRouteHandler)
  .openapi(postTripcCertificateRoute, postTripcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
