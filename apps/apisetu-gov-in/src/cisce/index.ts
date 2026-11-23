import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHpcerCertificateRoute,
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postSpcerCertificateRoute,
  postSscerCertificateRoute,
} from './routes'
import {
  postHpcerCertificateRouteHandler,
  postHscerCertificateRouteHandler,
  postHsmgrCertificateRouteHandler,
  postSpcerCertificateRouteHandler,
  postSscerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHpcerCertificateRoute, postHpcerCertificateRouteHandler)
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postHsmgrCertificateRoute, postHsmgrCertificateRouteHandler)
  .openapi(postSpcerCertificateRoute, postSpcerCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)

export default app
