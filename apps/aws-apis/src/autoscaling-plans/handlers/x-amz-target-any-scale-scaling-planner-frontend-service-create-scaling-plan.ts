import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanHandler = app.openapi(
  postXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
