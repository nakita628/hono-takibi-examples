import { OpenAPIHono } from '@hono/zod-openapi'
import { postApmclCertificateRoute } from './routes'
import { postApmclCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postApmclCertificateRoute, postApmclCertificateRouteHandler)

export default app
