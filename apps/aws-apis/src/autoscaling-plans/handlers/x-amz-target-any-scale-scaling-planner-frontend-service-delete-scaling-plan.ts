import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanHandler = app.openapi(
  postXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
