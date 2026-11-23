import { OpenAPIHono } from '@hono/zod-openapi'
import { postIticrCertificateRoute } from './routes'
import { postIticrCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postIticrCertificateRoute, postIticrCertificateRouteHandler)

export default app
