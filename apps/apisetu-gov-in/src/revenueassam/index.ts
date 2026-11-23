import { OpenAPIHono } from '@hono/zod-openapi'
import { postNncerCertificateRoute } from './routes'
import { postNncerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postNncerCertificateRoute, postNncerCertificateRouteHandler)

export default app
