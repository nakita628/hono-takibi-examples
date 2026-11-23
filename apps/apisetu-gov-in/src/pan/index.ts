import { OpenAPIHono } from '@hono/zod-openapi'
import { postPancrCertificateRoute } from './routes'
import { postPancrCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPancrCertificateRoute, postPancrCertificateRouteHandler)

export default app
