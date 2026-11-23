import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute } from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app.openapi(getIndexPhpAppsFilesApiV1ThumbnailXYFileRoute, (c) => {
  throw new Error('Not implemented')
})
