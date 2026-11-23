import { OpenAPIHono } from '@hono/zod-openapi'
import { postTrcerCertificateRoute } from './routes'
import { postTrcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postTrcerCertificateRoute, postTrcerCertificateRouteHandler)

export default app
