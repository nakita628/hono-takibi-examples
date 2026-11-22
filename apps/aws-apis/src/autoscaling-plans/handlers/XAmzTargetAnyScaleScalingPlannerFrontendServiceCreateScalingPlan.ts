import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanHandler = app.openapi(
  postXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
