import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanHandler = app.openapi(
  postXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
