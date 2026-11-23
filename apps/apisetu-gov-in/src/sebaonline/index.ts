import { OpenAPIHono } from '@hono/zod-openapi'
import { postSscerCertificateRoute } from './routes'
import { postSscerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSscerCertificateRoute, postSscerCertificateRouteHandler)

export default app
