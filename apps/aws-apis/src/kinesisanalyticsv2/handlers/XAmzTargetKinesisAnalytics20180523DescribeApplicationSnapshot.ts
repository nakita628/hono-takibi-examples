import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
