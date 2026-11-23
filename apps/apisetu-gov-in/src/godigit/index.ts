import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postTwipcCertificateRoute,
} from './routes'
import {
  postCripcCertificateRouteHandler,
  postCvipcCertificateRouteHandler,
  postTwipcCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCripcCertificateRoute, postCripcCertificateRouteHandler)
  .openapi(postCvipcCertificateRoute, postCvipcCertificateRouteHandler)
  .openapi(postTwipcCertificateRoute, postTwipcCertificateRouteHandler)

export default app
