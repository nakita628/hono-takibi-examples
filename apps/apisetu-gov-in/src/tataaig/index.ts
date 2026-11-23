import { OpenAPIHono } from '@hono/zod-openapi'
import { postPodocCertificateRoute } from './routes'
import { postPodocCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPodocCertificateRoute, postPodocCertificateRouteHandler)

export default app
