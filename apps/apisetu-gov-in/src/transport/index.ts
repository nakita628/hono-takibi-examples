import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDrvlcCertificateRoute,
  postFitcerCertificateRoute,
  postRvcerCertificateRoute,
  postVhinscCertificateRoute,
  postVhtaxCertificateRoute,
} from './routes'
import {
  postDrvlcCertificateRouteHandler,
  postFitcerCertificateRouteHandler,
  postRvcerCertificateRouteHandler,
  postVhinscCertificateRouteHandler,
  postVhtaxCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDrvlcCertificateRoute, postDrvlcCertificateRouteHandler)
  .openapi(postFitcerCertificateRoute, postFitcerCertificateRouteHandler)
  .openapi(postRvcerCertificateRoute, postRvcerCertificateRouteHandler)
  .openapi(postVhinscCertificateRoute, postVhinscCertificateRouteHandler)
  .openapi(postVhtaxCertificateRoute, postVhtaxCertificateRouteHandler)

export default app
