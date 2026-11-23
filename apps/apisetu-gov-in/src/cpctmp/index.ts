import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkmstCertificateRoute } from './routes'
import { postSkmstCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSkmstCertificateRoute, postSkmstCertificateRouteHandler)

export default app
