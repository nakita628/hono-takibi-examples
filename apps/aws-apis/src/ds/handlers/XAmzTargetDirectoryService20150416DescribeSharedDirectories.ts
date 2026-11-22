import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeSharedDirectoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DescribeSharedDirectoriesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeSharedDirectoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
