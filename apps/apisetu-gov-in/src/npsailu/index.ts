import { OpenAPIHono } from '@hono/zod-openapi'
import { postNdcerCertificateRoute } from './routes'
import { postNdcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postNdcerCertificateRoute, postNdcerCertificateRouteHandler)

export default app
