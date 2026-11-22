import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeUpdateDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DescribeUpdateDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeUpdateDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
