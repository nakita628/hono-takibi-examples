import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416AddRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416AddRegionHandler = app.openapi(
  postXAmzTargetDirectoryService20150416AddRegionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
