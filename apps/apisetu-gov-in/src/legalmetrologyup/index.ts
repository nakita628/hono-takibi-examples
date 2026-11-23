import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDelcsCertificateRoute,
  postMalcsCertificateRoute,
  postPalcsCertificateRoute,
  postRelcsCertificateRoute,
} from './routes'
import {
  postDelcsCertificateRouteHandler,
  postMalcsCertificateRouteHandler,
  postPalcsCertificateRouteHandler,
  postRelcsCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDelcsCertificateRoute, postDelcsCertificateRouteHandler)
  .openapi(postMalcsCertificateRoute, postMalcsCertificateRouteHandler)
  .openapi(postPalcsCertificateRoute, postPalcsCertificateRouteHandler)
  .openapi(postRelcsCertificateRoute, postRelcsCertificateRouteHandler)

export default app
