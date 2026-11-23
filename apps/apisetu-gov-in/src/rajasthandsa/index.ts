import { OpenAPIHono } from '@hono/zod-openapi'
import { postDpicrCertificateRoute } from './routes'
import { postDpicrCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postDpicrCertificateRoute, postDpicrCertificateRouteHandler)

export default app
