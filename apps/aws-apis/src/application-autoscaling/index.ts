import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyHandler,
  XAmzTargetAnyScaleFrontendServiceDeleteScheduledActionHandler,
  XAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetHandler,
  XAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsHandler,
  XAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesHandler,
  XAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesHandler,
  XAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsHandler,
  XAmzTargetAnyScaleFrontendServiceListTagsForResourceHandler,
  XAmzTargetAnyScaleFrontendServicePutScalingPolicyHandler,
  XAmzTargetAnyScaleFrontendServicePutScheduledActionHandler,
  XAmzTargetAnyScaleFrontendServiceRegisterScalableTargetHandler,
  XAmzTargetAnyScaleFrontendServiceTagResourceHandler,
  XAmzTargetAnyScaleFrontendServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceDeleteScheduledActionHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceListTagsForResourceHandler)
  .route('/', XAmzTargetAnyScaleFrontendServicePutScalingPolicyHandler)
  .route('/', XAmzTargetAnyScaleFrontendServicePutScheduledActionHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceRegisterScalableTargetHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceTagResourceHandler)
  .route('/', XAmzTargetAnyScaleFrontendServiceUntagResourceHandler)

export default app
