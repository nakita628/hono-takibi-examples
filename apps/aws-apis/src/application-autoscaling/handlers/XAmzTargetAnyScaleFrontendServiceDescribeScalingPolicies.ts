import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
