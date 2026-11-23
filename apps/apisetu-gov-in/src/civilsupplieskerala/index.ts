import { OpenAPIHono } from '@hono/zod-openapi'
import { postRatcrCertificateRoute } from './routes'
import { postRatcrCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postRatcrCertificateRoute, postRatcrCertificateRouteHandler)

export default app
