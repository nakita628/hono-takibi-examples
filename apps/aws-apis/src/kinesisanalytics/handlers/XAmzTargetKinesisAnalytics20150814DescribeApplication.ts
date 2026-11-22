import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DescribeApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814DescribeApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814DescribeApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
