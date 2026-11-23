import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkcerCertificateRoute } from './routes'
import { postSkcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSkcerCertificateRoute, postSkcerCertificateRouteHandler)

export default app
