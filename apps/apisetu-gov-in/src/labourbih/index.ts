import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAlimwCertificateRoute,
  postAlsblCertificateRoute,
  postAlsfcCertificateRoute,
  postApptuCertificateRoute,
  postClcerCertificateRoute,
  postNooclCertificateRoute,
  postSrcerCertificateRoute,
} from './routes'
import {
  postAlimwCertificateRouteHandler,
  postAlsblCertificateRouteHandler,
  postAlsfcCertificateRouteHandler,
  postApptuCertificateRouteHandler,
  postClcerCertificateRouteHandler,
  postNooclCertificateRouteHandler,
  postSrcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAlimwCertificateRoute, postAlimwCertificateRouteHandler)
  .openapi(postAlsblCertificateRoute, postAlsblCertificateRouteHandler)
  .openapi(postAlsfcCertificateRoute, postAlsfcCertificateRouteHandler)
  .openapi(postApptuCertificateRoute, postApptuCertificateRouteHandler)
  .openapi(postClcerCertificateRoute, postClcerCertificateRouteHandler)
  .openapi(postNooclCertificateRoute, postNooclCertificateRouteHandler)
  .openapi(postSrcerCertificateRoute, postSrcerCertificateRouteHandler)

export default app
