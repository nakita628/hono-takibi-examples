import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEpfscCertificateRoute,
  postPecerCertificateRoute,
  postUncrdCertificateRoute,
} from './routes'
import {
  postEpfscCertificateRouteHandler,
  postPecerCertificateRouteHandler,
  postUncrdCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEpfscCertificateRoute, postEpfscCertificateRouteHandler)
  .openapi(postPecerCertificateRoute, postPecerCertificateRouteHandler)
  .openapi(postUncrdCertificateRoute, postUncrdCertificateRouteHandler)

export default app
