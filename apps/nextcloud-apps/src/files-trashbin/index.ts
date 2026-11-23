import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsFilesTrashbinPreviewRoute } from './routes'
import { getIndexPhpAppsFilesTrashbinPreviewRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getIndexPhpAppsFilesTrashbinPreviewRoute,
  getIndexPhpAppsFilesTrashbinPreviewRouteHandler,
)

export default app
