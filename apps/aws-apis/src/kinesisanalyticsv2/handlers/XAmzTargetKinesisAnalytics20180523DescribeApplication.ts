import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DescribeApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DescribeApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DescribeApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
