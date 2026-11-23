import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postEgipcCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
  postMripcCertificateRoute,
  postPodocCertificateRoute,
  postPripcCertificateRoute,
  postTripcCertificateRoute,
  postTwipcCertificateRoute,
} from './routes'
import {
  postCripcCertificateRouteHandler,
  postCvipcCertificateRouteHandler,
  postEgipcCertificateRouteHandler,
  postHlipcCertificateRouteHandler,
  postHmipcCertificateRouteHandler,
  postMripcCertificateRouteHandler,
  postPodocCertificateRouteHandler,
  postPripcCertificateRouteHandler,
  postTripcCertificateRouteHandler,
  postTwipcCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postCvipcCertificateRoute, postCvipcCertificateRouteHandler)
  .openapi(postEgipcCertificateRoute, postEgipcCertificateRouteHandler)
  .openapi(postHlipcCertificateRoute, postHlipcCertificateRouteHandler)
  .openapi(postHmipcCertificateRoute, postHmipcCertificateRouteHandler)
  .openapi(postMripcCertificateRoute, postMripcCertificateRouteHandler)
  .openapi(postPodocCertificateRoute, postPodocCertificateRouteHandler)
  .openapi(postPripcCertificateRoute, postPripcCertificateRouteHandler)
  .openapi(postTripcCertificateRoute, postTripcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
