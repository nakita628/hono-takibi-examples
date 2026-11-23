import { OpenAPIHono } from '@hono/zod-openapi'
import { postDgmstCertificateRoute } from './routes'
import { postDgmstCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postDgmstCertificateRoute, postDgmstCertificateRouteHandler)

export default app
