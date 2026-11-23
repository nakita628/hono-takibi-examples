import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanHandler,
  xAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanHandler,
  xAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesHandler,
  xAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansHandler,
  xAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataHandler,
  xAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanHandler)
  .route('/', xAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanHandler)
  .route('/', xAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesHandler)
  .route('/', xAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansHandler)
  .route(
    '/',
    xAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataHandler,
  )
  .route('/', xAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanHandler)

export default app
