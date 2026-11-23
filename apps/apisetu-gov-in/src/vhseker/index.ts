import { OpenAPIHono } from '@hono/zod-openapi'
import { postVochseCertificateRoute } from './routes'
import { postVochseCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postVochseCertificateRoute, postVochseCertificateRouteHandler)

export default app
