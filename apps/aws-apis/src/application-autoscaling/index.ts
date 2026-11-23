import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyHandler,
  xAmzTargetAnyScaleFrontendServiceDeleteScheduledActionHandler,
  xAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetHandler,
  xAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsHandler,
  xAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesHandler,
  xAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesHandler,
  xAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsHandler,
  xAmzTargetAnyScaleFrontendServiceListTagsForResourceHandler,
  xAmzTargetAnyScaleFrontendServicePutScalingPolicyHandler,
  xAmzTargetAnyScaleFrontendServicePutScheduledActionHandler,
  xAmzTargetAnyScaleFrontendServiceRegisterScalableTargetHandler,
  xAmzTargetAnyScaleFrontendServiceTagResourceHandler,
  xAmzTargetAnyScaleFrontendServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceDeleteScheduledActionHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceListTagsForResourceHandler)
  .route('/', xAmzTargetAnyScaleFrontendServicePutScalingPolicyHandler)
  .route('/', xAmzTargetAnyScaleFrontendServicePutScheduledActionHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceRegisterScalableTargetHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceTagResourceHandler)
  .route('/', xAmzTargetAnyScaleFrontendServiceUntagResourceHandler)

export default app
