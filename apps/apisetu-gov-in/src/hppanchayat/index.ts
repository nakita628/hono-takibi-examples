import { OpenAPIHono } from '@hono/zod-openapi'
import { postFmcerCertificateRoute } from './routes'
import { postFmcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postFmcerCertificateRoute, postFmcerCertificateRouteHandler)

export default app
