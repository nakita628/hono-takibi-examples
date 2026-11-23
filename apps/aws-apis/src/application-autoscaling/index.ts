import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRoute,
  postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute,
  postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRoute,
  postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRoute,
  postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRoute,
  postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRoute,
  postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute,
  postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRoute,
  postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute,
  postXAmzTargetAnyScaleFrontendServicePutScheduledActionRoute,
  postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute,
  postXAmzTargetAnyScaleFrontendServiceTagResourceRoute,
  postXAmzTargetAnyScaleFrontendServiceUntagResourceRoute,
} from './routes'
import {
  postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRouteHandler,
  postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRouteHandler,
  postXAmzTargetAnyScaleFrontendServicePutScheduledActionRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceTagResourceRouteHandler,
  postXAmzTargetAnyScaleFrontendServiceUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRoute,
    postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute,
    postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRoute,
    postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRoute,
    postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRoute,
    postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRoute,
    postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute,
    postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRoute,
    postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute,
    postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServicePutScheduledActionRoute,
    postXAmzTargetAnyScaleFrontendServicePutScheduledActionRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute,
    postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceTagResourceRoute,
    postXAmzTargetAnyScaleFrontendServiceTagResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetAnyScaleFrontendServiceUntagResourceRoute,
    postXAmzTargetAnyScaleFrontendServiceUntagResourceRouteHandler,
  )

export default app
