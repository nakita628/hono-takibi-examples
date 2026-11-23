import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postEgipcCertificateRoute,
  postGicerCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
  postMiipcCertificateRoute,
  postMripcCertificateRoute,
  postPripcCertificateRoute,
  postTwipcCertificateRoute,
} from './routes'
import {
  postCripcCertificateRouteHandler,
  postCvipcCertificateRouteHandler,
  postEgipcCertificateRouteHandler,
  postGicerCertificateRouteHandler,
  postHlipcCertificateRouteHandler,
  postHmipcCertificateRouteHandler,
  postMiipcCertificateRouteHandler,
  postMripcCertificateRouteHandler,
  postPripcCertificateRouteHandler,
  postTwipcCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postCvipcCertificateRoute, postCvipcCertificateRouteHandler)
  .openapi(postEgipcCertificateRoute, postEgipcCertificateRouteHandler)
  .openapi(postGicerCertificateRoute, postGicerCertificateRouteHandler)
  .openapi(postHlipcCertificateRoute, postHlipcCertificateRouteHandler)
  .openapi(postHmipcCertificateRoute, postHmipcCertificateRouteHandler)
  .openapi(postMiipcCertificateRoute, postMiipcCertificateRouteHandler)
  .openapi(postMripcCertificateRoute, postMripcCertificateRouteHandler)
  .openapi(postPripcCertificateRoute, postPripcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
