import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DescribeApplicationVersionHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
