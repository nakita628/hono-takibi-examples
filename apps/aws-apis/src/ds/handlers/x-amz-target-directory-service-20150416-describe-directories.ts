import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeDirectoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DescribeDirectoriesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeDirectoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
