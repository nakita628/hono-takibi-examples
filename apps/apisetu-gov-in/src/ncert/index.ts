import { OpenAPIHono } from '@hono/zod-openapi'
import { postMrcerCertificateRoute } from './routes'
import { postMrcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postMrcerCertificateRoute, postMrcerCertificateRouteHandler)

export default app
