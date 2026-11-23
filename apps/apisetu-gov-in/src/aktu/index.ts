import { OpenAPIHono } from '@hono/zod-openapi'
import { postDgcerCertificateRoute, postDgmstCertificateRoute } from './routes'
import { postDgcerCertificateRouteHandler, postDgmstCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDgcerCertificateRoute, postDgcerCertificateRouteHandler)
  .openapi(postDgmstCertificateRoute, postDgmstCertificateRouteHandler)

export default app
