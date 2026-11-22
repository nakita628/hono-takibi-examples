import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
