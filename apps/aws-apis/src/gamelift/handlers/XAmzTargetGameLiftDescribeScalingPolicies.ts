import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeScalingPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeScalingPoliciesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeScalingPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
