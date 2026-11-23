import { OpenAPIHono } from '@hono/zod-openapi'
import { postCvcerCertificateRoute } from './routes'
import { postCvcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postCvcerCertificateRoute, postCvcerCertificateRouteHandler)

export default app
