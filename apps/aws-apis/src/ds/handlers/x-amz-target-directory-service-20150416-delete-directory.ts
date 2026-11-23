import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeleteDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DeleteDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeleteDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
