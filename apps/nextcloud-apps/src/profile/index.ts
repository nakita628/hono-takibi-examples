import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsProfileApiV1ResourcesUserIdRoute } from './routes'
import { getOcsV2PhpAppsProfileApiV1ResourcesUserIdRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getOcsV2PhpAppsProfileApiV1ResourcesUserIdRoute,
  getOcsV2PhpAppsProfileApiV1ResourcesUserIdRouteHandler,
)

export default app
