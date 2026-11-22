import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DisableRadiusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DisableRadiusHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DisableRadiusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
