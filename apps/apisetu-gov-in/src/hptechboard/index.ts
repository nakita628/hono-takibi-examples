import { OpenAPIHono } from '@hono/zod-openapi'
import { postDipcrCertificateRoute } from './routes'
import { postDipcrCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postDipcrCertificateRoute, postDipcrCertificateRouteHandler)

export default app
