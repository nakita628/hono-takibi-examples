import { OpenAPIHono } from '@hono/zod-openapi'
import { postSslcrCertificateRoute } from './routes'
import { postSslcrCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSslcrCertificateRoute, postSslcrCertificateRouteHandler)

export default app
