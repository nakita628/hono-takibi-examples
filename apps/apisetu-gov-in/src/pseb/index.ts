import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCemstCertificateRoute,
  postCfmstCertificateRoute,
  postHscerCertificateRoute,
  postMicerCertificateRoute,
  postSscerCertificateRoute,
} from './routes'
import {
  postCemstCertificateRouteHandler,
  postCfmstCertificateRouteHandler,
  postHscerCertificateRouteHandler,
  postMicerCertificateRouteHandler,
  postSscerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCemstCertificateRoute, postCemstCertificateRouteHandler)
  .openapi(postCfmstCertificateRoute, postCfmstCertificateRouteHandler)
  .openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)
  .openapi(postMicerCertificateRoute, postMicerCertificateRouteHandler)
  .openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)

export default app
