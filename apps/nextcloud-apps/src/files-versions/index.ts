import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsFilesVersionsPreviewRoute } from './routes'
import { getIndexPhpAppsFilesVersionsPreviewRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getIndexPhpAppsFilesVersionsPreviewRoute,
  getIndexPhpAppsFilesVersionsPreviewRouteHandler,
)

export default app
