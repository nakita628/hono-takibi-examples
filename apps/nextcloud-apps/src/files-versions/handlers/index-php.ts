import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsFilesVersionsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app.openapi(getIndexPhpAppsFilesVersionsPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
