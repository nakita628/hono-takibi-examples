import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UpdateRadiusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416UpdateRadiusHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UpdateRadiusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
