import { OpenAPIHono } from '@hono/zod-openapi'
import { postOtcerCertificateRoute } from './routes'
import { postOtcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postOtcerCertificateRoute, postOtcerCertificateRouteHandler)

export default app
