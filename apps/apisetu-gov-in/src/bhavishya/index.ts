import { OpenAPIHono } from '@hono/zod-openapi'
import { postPecerCertificateRoute } from './routes'
import { postPecerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPecerCertificateRoute, postPecerCertificateRouteHandler)

export default app
