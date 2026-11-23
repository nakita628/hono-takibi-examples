import { OpenAPIHono } from '@hono/zod-openapi'
import { postLlcerCertificateRoute } from './routes'
import { postLlcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postLlcerCertificateRoute, postLlcerCertificateRouteHandler)

export default app
