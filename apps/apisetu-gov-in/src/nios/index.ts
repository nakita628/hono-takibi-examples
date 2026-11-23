import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postHvcerCertificateRoute,
  postSscerCertificateRoute,
  postSsmgrCertificateRoute,
  postSvcerCertificateRoute,
} from './routes'
import {
  postHscerCertificateRouteHandler,
  postHsmgrCertificateRouteHandler,
  postHvcerCertificateRouteHandler,
  postSscerCertificateRouteHandler,
  postSsmgrCertificateRouteHandler,
  postSvcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postHsmgrCertificateRoute, postHsmgrCertificateRouteHandler)
  .openapi(postHvcerCertificateRoute, postHvcerCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)
  .openapi(postSsmgrCertificateRoute, postSsmgrCertificateRouteHandler)
  .openapi(postSvcerCertificateRoute, postSvcerCertificateRouteHandler)

export default app
