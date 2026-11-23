import { OpenAPIHono } from '@hono/zod-openapi'
import { postLicerCertificateRoute } from './routes'
import { postLicerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postLicerCertificateRoute, postLicerCertificateRouteHandler)

export default app
