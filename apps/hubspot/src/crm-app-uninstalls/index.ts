import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAppinstalls202609ExternalInstallRoute } from './routes'
import { deleteAppinstalls202609ExternalInstallRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  deleteAppinstalls202609ExternalInstallRoute,
  deleteAppinstalls202609ExternalInstallRouteHandler,
)

export default app
