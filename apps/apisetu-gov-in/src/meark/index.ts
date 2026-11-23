import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdcrdCertificateRoute } from './routes'
import { postAdcrdCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postAdcrdCertificateRoute, postAdcrdCertificateRouteHandler)

export default app
