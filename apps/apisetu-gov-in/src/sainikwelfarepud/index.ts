import { OpenAPIHono } from '@hono/zod-openapi'
import { postDpcerCertificateRoute } from './routes'
import { postDpcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postDpcerCertificateRoute, postDpcerCertificateRouteHandler)

export default app
