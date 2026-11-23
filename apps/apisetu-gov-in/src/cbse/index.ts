import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHpcerCertificateRoute,
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postNchscCertificateRoute,
  postNctscCertificateRoute,
  postNsescCertificateRoute,
  postNstscCertificateRoute,
  postNtltrCertificateRoute,
  postNtmksCertificateRoute,
  postSkhscCertificateRoute,
  postSktscCertificateRoute,
  postSpcerCertificateRoute,
  postSscerCertificateRoute,
  postSsmgrCertificateRoute,
  postTetcrCertificateRoute,
  postTetmsCertificateRoute,
} from './routes'
import {
  postHpcerCertificateRouteHandler,
  postHscerCertificateRouteHandler,
  postHsmgrCertificateRouteHandler,
  postNchscCertificateRouteHandler,
  postNctscCertificateRouteHandler,
  postNsescCertificateRouteHandler,
  postNstscCertificateRouteHandler,
  postNtltrCertificateRouteHandler,
  postNtmksCertificateRouteHandler,
  postSkhscCertificateRouteHandler,
  postSktscCertificateRouteHandler,
  postSpcerCertificateRouteHandler,
  postSscerCertificateRouteHandler,
  postSsmgrCertificateRouteHandler,
  postTetcrCertificateRouteHandler,
  postTetmsCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHpcerCertificateRoute, postHpcerCertificateRouteHandler)
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postHsmgrCertificateRoute, postHsmgrCertificateRouteHandler)
  .openapi(postNchscCertificateRoute, postNchscCertificateRouteHandler)
  .openapi(postNctscCertificateRoute, postNctscCertificateRouteHandler)
  .openapi(postNsescCertificateRoute, postNsescCertificateRouteHandler)
  .openapi(postNstscCertificateRoute, postNstscCertificateRouteHandler)
  .openapi(postNtltrCertificateRoute, postNtltrCertificateRouteHandler)
  .openapi(postNtmksCertificateRoute, postNtmksCertificateRouteHandler)
  .openapi(postSkhscCertificateRoute, postSkhscCertificateRouteHandler)
  .openapi(postSktscCertificateRoute, postSktscCertificateRouteHandler)
  .openapi(postSpcerCertificateRoute, postSpcerCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)
  .openapi(postSsmgrCertificateRoute, postSsmgrCertificateRouteHandler)
  .openapi(postTetcrCertificateRoute, postTetcrCertificateRouteHandler)
  .openapi(postTetmsCertificateRoute, postTetmsCertificateRouteHandler)

export default app
