import { OpenAPIHono } from '@hono/zod-openapi'
import { putOcsV2PhpAppsViewerApiV1ConfigKeyRoute } from './routes'
import { putOcsV2PhpAppsViewerApiV1ConfigKeyRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  putOcsV2PhpAppsViewerApiV1ConfigKeyRoute,
  putOcsV2PhpAppsViewerApiV1ConfigKeyRouteHandler,
)

export default app
