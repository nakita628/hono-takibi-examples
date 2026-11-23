import { OpenAPIHono } from '@hono/zod-openapi'
import { postHscerCertificateRoute } from './routes'
import { postHscerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postHscerCertificateRoute, postHscerCertificateRouteHandler)

export default app
