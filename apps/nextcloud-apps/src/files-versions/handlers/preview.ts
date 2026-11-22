import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsFilesVersionsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const previewHandler = app.openapi(getIndexPhpAppsFilesVersionsPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
