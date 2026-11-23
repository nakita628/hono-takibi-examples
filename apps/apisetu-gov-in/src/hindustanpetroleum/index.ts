import { OpenAPIHono } from '@hono/zod-openapi'
import { postLpgsvCertificateRoute } from './routes'
import { postLpgsvCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postLpgsvCertificateRoute, postLpgsvCertificateRouteHandler)

export default app
