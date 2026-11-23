import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DescribeRegionsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeRegionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
