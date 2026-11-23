import { OpenAPIHono } from '@hono/zod-openapi'
import { postPdfCertificateRoute } from './routes'
import { postPdfCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPdfCertificateRoute, postPdfCertificateRouteHandler)

export default app
