import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthCertificateRoute } from './routes'
import { postAuthCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postAuthCertificateRoute, postAuthCertificateRouteHandler)

export default app
