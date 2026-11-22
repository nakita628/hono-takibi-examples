import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeConditionalForwardersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DescribeConditionalForwardersHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeConditionalForwardersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
