import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute } from './routes'
import { postGovidCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postGovidCertificateRoute, postGovidCertificateRouteHandler)

export default app
