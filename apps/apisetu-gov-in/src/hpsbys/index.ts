import { OpenAPIHono } from '@hono/zod-openapi'
import { postRsbycCertificateRoute } from './routes'
import { postRsbycCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postRsbycCertificateRoute, postRsbycCertificateRouteHandler)

export default app
