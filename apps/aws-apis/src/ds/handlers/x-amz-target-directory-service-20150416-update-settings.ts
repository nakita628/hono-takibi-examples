import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UpdateSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416UpdateSettingsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UpdateSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
