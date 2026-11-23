import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeEventTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DescribeEventTopicsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeEventTopicsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
