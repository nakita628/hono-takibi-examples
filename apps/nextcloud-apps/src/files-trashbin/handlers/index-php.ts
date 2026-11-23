import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsFilesTrashbinPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app.openapi(getIndexPhpAppsFilesTrashbinPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
