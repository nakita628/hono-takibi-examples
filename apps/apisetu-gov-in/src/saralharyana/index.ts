import { OpenAPIHono } from '@hono/zod-openapi'
import { postNbcerCertificateRoute } from './routes'
import { postNbcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postNbcerCertificateRoute, postNbcerCertificateRouteHandler)

export default app
