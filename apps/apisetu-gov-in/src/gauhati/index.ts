import { OpenAPIHono } from '@hono/zod-openapi'
import { postSocerCertificateRoute } from './routes'
import { postSocerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSocerCertificateRoute, postSocerCertificateRouteHandler)

export default app
