import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postErcerCertificateRoute,
  postPfdawCertificateRoute,
  postTpcerCertificateRoute,
} from './routes'
import {
  postErcerCertificateRouteHandler,
  postPfdawCertificateRouteHandler,
  postTpcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postErcerCertificateRoute, postErcerCertificateRouteHandler)
  .openapi(postPfdawCertificateRoute, postPfdawCertificateRouteHandler)
  .openapi(postTpcerCertificateRoute, postTpcerCertificateRouteHandler)

export default app
