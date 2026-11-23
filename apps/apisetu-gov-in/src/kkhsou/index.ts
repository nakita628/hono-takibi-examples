import { OpenAPIHono } from '@hono/zod-openapi'
import { postPvcerCertificateRoute } from './routes'
import { postPvcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPvcerCertificateRoute, postPvcerCertificateRouteHandler)

export default app
