import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DescribeSettingsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
