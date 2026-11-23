import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postKecerCertificateRoute,
  postTapcnCertificateRoute,
  postTdlcsCertificateRoute,
  postUgdcnCertificateRoute,
} from './routes'
import {
  postKecerCertificateRouteHandler,
  postTapcnCertificateRouteHandler,
  postTdlcsCertificateRouteHandler,
  postUgdcnCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postKecerCertificateRoute, postKecerCertificateRouteHandler)
  .openapi(postTapcnCertificateRoute, postTapcnCertificateRouteHandler)
  .openapi(postTdlcsCertificateRoute, postTdlcsCertificateRouteHandler)
  .openapi(postUgdcnCertificateRoute, postUgdcnCertificateRouteHandler)

export default app
