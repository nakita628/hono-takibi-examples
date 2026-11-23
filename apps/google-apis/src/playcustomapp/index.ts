import { OpenAPIHono } from '@hono/zod-openapi'
import { postPlaycustomappV1AccountsAccountCustomAppsRoute } from './routes'
import { postPlaycustomappV1AccountsAccountCustomAppsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postPlaycustomappV1AccountsAccountCustomAppsRoute,
  postPlaycustomappV1AccountsAccountCustomAppsRouteHandler,
)

export default app
