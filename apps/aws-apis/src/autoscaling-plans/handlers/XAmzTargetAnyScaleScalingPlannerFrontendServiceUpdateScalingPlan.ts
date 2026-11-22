import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanHandler = app.openapi(
  postXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
