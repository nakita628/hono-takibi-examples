import { OpenAPIHono } from '@hono/zod-openapi'
import { postHpcerCertificateRoute } from './routes'
import { postHpcerCertificateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postHpcerCertificateRoute, postHpcerCertificateRouteHandler)

export default app
