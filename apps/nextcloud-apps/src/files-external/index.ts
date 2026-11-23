import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsFilesExternalApiV1MountsRoute } from './routes'
import { getOcsV2PhpAppsFilesExternalApiV1MountsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getOcsV2PhpAppsFilesExternalApiV1MountsRoute,
  getOcsV2PhpAppsFilesExternalApiV1MountsRouteHandler,
)

export default app
