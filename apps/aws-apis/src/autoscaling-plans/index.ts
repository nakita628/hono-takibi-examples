import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanHandler,
  XAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanHandler,
  XAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesHandler,
  XAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansHandler,
  XAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataHandler,
  XAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanHandler)
  .route('/', XAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanHandler)
  .route('/', XAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesHandler)
  .route('/', XAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansHandler)
  .route(
    '/',
    XAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataHandler,
  )
  .route('/', XAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanHandler)

export default app
