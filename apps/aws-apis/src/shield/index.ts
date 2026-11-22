import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSShield20160616AssociateDRTLogBucketHandler,
  XAmzTargetAWSShield20160616AssociateDRTRoleHandler,
  XAmzTargetAWSShield20160616AssociateHealthCheckHandler,
  XAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsHandler,
  XAmzTargetAWSShield20160616CreateProtectionGroupHandler,
  XAmzTargetAWSShield20160616CreateProtectionHandler,
  XAmzTargetAWSShield20160616CreateSubscriptionHandler,
  XAmzTargetAWSShield20160616DeleteProtectionGroupHandler,
  XAmzTargetAWSShield20160616DeleteProtectionHandler,
  XAmzTargetAWSShield20160616DeleteSubscriptionHandler,
  XAmzTargetAWSShield20160616DescribeAttackHandler,
  XAmzTargetAWSShield20160616DescribeAttackStatisticsHandler,
  XAmzTargetAWSShield20160616DescribeDRTAccessHandler,
  XAmzTargetAWSShield20160616DescribeEmergencyContactSettingsHandler,
  XAmzTargetAWSShield20160616DescribeProtectionGroupHandler,
  XAmzTargetAWSShield20160616DescribeProtectionHandler,
  XAmzTargetAWSShield20160616DescribeSubscriptionHandler,
  XAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseHandler,
  XAmzTargetAWSShield20160616DisableProactiveEngagementHandler,
  XAmzTargetAWSShield20160616DisassociateDRTLogBucketHandler,
  XAmzTargetAWSShield20160616DisassociateDRTRoleHandler,
  XAmzTargetAWSShield20160616DisassociateHealthCheckHandler,
  XAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseHandler,
  XAmzTargetAWSShield20160616EnableProactiveEngagementHandler,
  XAmzTargetAWSShield20160616GetSubscriptionStateHandler,
  XAmzTargetAWSShield20160616ListAttacksHandler,
  XAmzTargetAWSShield20160616ListProtectionGroupsHandler,
  XAmzTargetAWSShield20160616ListProtectionsHandler,
  XAmzTargetAWSShield20160616ListResourcesInProtectionGroupHandler,
  XAmzTargetAWSShield20160616ListTagsForResourceHandler,
  XAmzTargetAWSShield20160616TagResourceHandler,
  XAmzTargetAWSShield20160616UntagResourceHandler,
  XAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseHandler,
  XAmzTargetAWSShield20160616UpdateEmergencyContactSettingsHandler,
  XAmzTargetAWSShield20160616UpdateProtectionGroupHandler,
  XAmzTargetAWSShield20160616UpdateSubscriptionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSShield20160616AssociateDRTLogBucketHandler)
  .route('/', XAmzTargetAWSShield20160616AssociateDRTRoleHandler)
  .route('/', XAmzTargetAWSShield20160616AssociateHealthCheckHandler)
  .route('/', XAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsHandler)
  .route('/', XAmzTargetAWSShield20160616CreateProtectionHandler)
  .route('/', XAmzTargetAWSShield20160616CreateProtectionGroupHandler)
  .route('/', XAmzTargetAWSShield20160616CreateSubscriptionHandler)
  .route('/', XAmzTargetAWSShield20160616DeleteProtectionHandler)
  .route('/', XAmzTargetAWSShield20160616DeleteProtectionGroupHandler)
  .route('/', XAmzTargetAWSShield20160616DeleteSubscriptionHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeAttackHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeAttackStatisticsHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeDRTAccessHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeEmergencyContactSettingsHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeProtectionHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeProtectionGroupHandler)
  .route('/', XAmzTargetAWSShield20160616DescribeSubscriptionHandler)
  .route('/', XAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseHandler)
  .route('/', XAmzTargetAWSShield20160616DisableProactiveEngagementHandler)
  .route('/', XAmzTargetAWSShield20160616DisassociateDRTLogBucketHandler)
  .route('/', XAmzTargetAWSShield20160616DisassociateDRTRoleHandler)
  .route('/', XAmzTargetAWSShield20160616DisassociateHealthCheckHandler)
  .route('/', XAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseHandler)
  .route('/', XAmzTargetAWSShield20160616EnableProactiveEngagementHandler)
  .route('/', XAmzTargetAWSShield20160616GetSubscriptionStateHandler)
  .route('/', XAmzTargetAWSShield20160616ListAttacksHandler)
  .route('/', XAmzTargetAWSShield20160616ListProtectionGroupsHandler)
  .route('/', XAmzTargetAWSShield20160616ListProtectionsHandler)
  .route('/', XAmzTargetAWSShield20160616ListResourcesInProtectionGroupHandler)
  .route('/', XAmzTargetAWSShield20160616ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSShield20160616TagResourceHandler)
  .route('/', XAmzTargetAWSShield20160616UntagResourceHandler)
  .route('/', XAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseHandler)
  .route('/', XAmzTargetAWSShield20160616UpdateEmergencyContactSettingsHandler)
  .route('/', XAmzTargetAWSShield20160616UpdateProtectionGroupHandler)
  .route('/', XAmzTargetAWSShield20160616UpdateSubscriptionHandler)

export default app
