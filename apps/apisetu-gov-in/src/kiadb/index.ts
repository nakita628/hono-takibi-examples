import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAlltrCertificateRoute,
  postBknocCertificateRoute,
  postBpcerCertificateRoute,
  postCfltrCertificateRoute,
  postLcsagCertificateRoute,
  postPscerCertificateRoute,
  postPsnocCertificateRoute,
  postWtrblCertificateRoute,
} from './routes'
import {
  postAlltrCertificateRouteHandler,
  postBknocCertificateRouteHandler,
  postBpcerCertificateRouteHandler,
  postCfltrCertificateRouteHandler,
  postLcsagCertificateRouteHandler,
  postPscerCertificateRouteHandler,
  postPsnocCertificateRouteHandler,
  postWtrblCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAlltrCertificateRoute, postAlltrCertificateRouteHandler)
  .openapi(postBknocCertificateRoute, postBknocCertificateRouteHandler)
  .openapi(postBpcerCertificateRoute, postBpcerCertificateRouteHandler)
  .openapi(postCfltrCertificateRoute, postCfltrCertificateRouteHandler)
  .openapi(postLcsagCertificateRoute, postLcsagCertificateRouteHandler)
  .openapi(postPscerCertificateRoute, postPscerCertificateRouteHandler)
  .openapi(postPsnocCertificateRoute, postPsnocCertificateRouteHandler)
  .openapi(postWtrblCertificateRoute, postWtrblCertificateRouteHandler)

export default app
