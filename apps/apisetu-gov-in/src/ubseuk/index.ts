import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postSscerCertificateRoute,
} from './routes'
import {
  postHscerCertificateRouteHandler,
  postHsmgrCertificateRouteHandler,
  postSscerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postHsmgrCertificateRoute, postHsmgrCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)

export default app
