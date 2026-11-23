import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHpcerCertificateRoute,
  postHscerCertificateRoute,
  postSpcerCertificateRoute,
  postSscerCertificateRoute,
} from './routes'
import {
  postHpcerCertificateRouteHandler,
  postHscerCertificateRouteHandler,
  postSpcerCertificateRouteHandler,
  postSscerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHpcerCertificateRoute, postHpcerCertificateRouteHandler)
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postSpcerCertificateRoute, postSpcerCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)

export default app
