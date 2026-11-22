import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416EnableRadiusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416EnableRadiusHandler = app.openapi(
  postXAmzTargetDirectoryService20150416EnableRadiusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
