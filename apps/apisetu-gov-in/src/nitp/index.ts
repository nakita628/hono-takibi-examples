import { OpenAPIHono } from '@hono/zod-openapi'
import { postDgcerCertificateRoute } from './routes'
import { postDgcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postDgcerCertificateRoute, postDgcerCertificateRouteHandler)

export default app
