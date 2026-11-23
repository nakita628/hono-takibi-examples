import { OpenAPIHono } from '@hono/zod-openapi'
import { postPmjayCertificateRoute } from './routes'
import { postPmjayCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPmjayCertificateRoute, postPmjayCertificateRouteHandler)

export default app
