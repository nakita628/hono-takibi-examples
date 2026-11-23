import { OpenAPIHono } from '@hono/zod-openapi'
import { postTdcerCertificateRoute } from './routes'
import { postTdcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postTdcerCertificateRoute, postTdcerCertificateRouteHandler)

export default app
