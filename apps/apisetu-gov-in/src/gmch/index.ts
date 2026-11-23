import { OpenAPIHono } from '@hono/zod-openapi'
import { postLabrpCertificateRoute } from './routes'
import { postLabrpCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postLabrpCertificateRoute, postLabrpCertificateRouteHandler)

export default app
