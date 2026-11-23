import { OpenAPIHono } from '@hono/zod-openapi'
import { postIlpmtCertificateRoute } from './routes'
import { postIlpmtCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postIlpmtCertificateRoute, postIlpmtCertificateRouteHandler)

export default app
