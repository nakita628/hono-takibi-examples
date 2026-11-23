import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanHandler = app.openapi(
  postXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
