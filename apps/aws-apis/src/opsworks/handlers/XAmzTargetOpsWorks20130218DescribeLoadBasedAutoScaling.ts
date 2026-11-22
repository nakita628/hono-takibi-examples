import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
