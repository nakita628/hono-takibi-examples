import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RemoveRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416RemoveRegionHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RemoveRegionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
