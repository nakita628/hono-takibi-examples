import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChcerCertificateRoute,
  postDmcerCertificateRoute,
  postDpcerCertificateRoute,
  postIncerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
} from './routes'
import {
  postChcerCertificateRouteHandler,
  postDmcerCertificateRouteHandler,
  postDpcerCertificateRouteHandler,
  postIncerCertificateRouteHandler,
  postRscerCertificateRouteHandler,
  postShcerCertificateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postChcerCertificateRoute, postChcerCertificateRouteHandler)
  .openapi(postDmcerCertificateRoute, postDmcerCertificateRouteHandler)
  .openapi(postDpcerCertificateRoute, postDpcerCertificateRouteHandler)
  .openapi(postIncerCertificateRoute, postIncerCertificateRouteHandler)
  .openapi(postRscerCertificateRoute, postRscerCertificateRouteHandler)
  .openapi(postShcerCertificateRoute, postShcerCertificateRouteHandler)

export default app
