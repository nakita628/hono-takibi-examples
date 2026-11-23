import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansHandler =
  app.openapi(postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
