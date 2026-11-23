import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEtcerCertificateRoute,
  postGovidCertificateRoute,
  postSicerCertificateRoute,
} from './routes'
import {
  postEtcerCertificateRouteHandler,
  postGovidCertificateRouteHandler,
  postSicerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEtcerCertificateRoute, postEtcerCertificateRouteHandler)
  .openapi(postGovidCertificateRoute, postGovidCertificateRouteHandler)
  .openapi(postSicerCertificateRoute, postSicerCertificateRouteHandler)

export default app
