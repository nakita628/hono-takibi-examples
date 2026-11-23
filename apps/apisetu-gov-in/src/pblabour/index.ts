import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAlsfcCertificateRoute,
  postClcerCertificateRoute,
  postSrcerCertificateRoute,
} from './routes'
import {
  postAlsfcCertificateRouteHandler,
  postClcerCertificateRouteHandler,
  postSrcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAlsfcCertificateRoute, postAlsfcCertificateRouteHandler)
  .openapi(postClcerCertificateRoute, postClcerCertificateRouteHandler)
  .openapi(postSrcerCertificateRoute, postSrcerCertificateRouteHandler)

export default app
