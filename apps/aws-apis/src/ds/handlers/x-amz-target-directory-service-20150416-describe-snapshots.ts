import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DescribeSnapshotsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
