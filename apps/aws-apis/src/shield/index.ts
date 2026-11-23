import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsShield20160616AssociateDrtLogBucketHandler,
  xAmzTargetAwsShield20160616AssociateDrtRoleHandler,
  xAmzTargetAwsShield20160616AssociateHealthCheckHandler,
  xAmzTargetAwsShield20160616AssociateProactiveEngagementDetailsHandler,
  xAmzTargetAwsShield20160616CreateProtectionGroupHandler,
  xAmzTargetAwsShield20160616CreateProtectionHandler,
  xAmzTargetAwsShield20160616CreateSubscriptionHandler,
  xAmzTargetAwsShield20160616DeleteProtectionGroupHandler,
  xAmzTargetAwsShield20160616DeleteProtectionHandler,
  xAmzTargetAwsShield20160616DeleteSubscriptionHandler,
  xAmzTargetAwsShield20160616DescribeAttackHandler,
  xAmzTargetAwsShield20160616DescribeAttackStatisticsHandler,
  xAmzTargetAwsShield20160616DescribeDrtAccessHandler,
  xAmzTargetAwsShield20160616DescribeEmergencyContactSettingsHandler,
  xAmzTargetAwsShield20160616DescribeProtectionGroupHandler,
  xAmzTargetAwsShield20160616DescribeProtectionHandler,
  xAmzTargetAwsShield20160616DescribeSubscriptionHandler,
  xAmzTargetAwsShield20160616DisableApplicationLayerAutomaticResponseHandler,
  xAmzTargetAwsShield20160616DisableProactiveEngagementHandler,
  xAmzTargetAwsShield20160616DisassociateDrtLogBucketHandler,
  xAmzTargetAwsShield20160616DisassociateDrtRoleHandler,
  xAmzTargetAwsShield20160616DisassociateHealthCheckHandler,
  xAmzTargetAwsShield20160616EnableApplicationLayerAutomaticResponseHandler,
  xAmzTargetAwsShield20160616EnableProactiveEngagementHandler,
  xAmzTargetAwsShield20160616GetSubscriptionStateHandler,
  xAmzTargetAwsShield20160616ListAttacksHandler,
  xAmzTargetAwsShield20160616ListProtectionGroupsHandler,
  xAmzTargetAwsShield20160616ListProtectionsHandler,
  xAmzTargetAwsShield20160616ListResourcesInProtectionGroupHandler,
  xAmzTargetAwsShield20160616ListTagsForResourceHandler,
  xAmzTargetAwsShield20160616TagResourceHandler,
  xAmzTargetAwsShield20160616UntagResourceHandler,
  xAmzTargetAwsShield20160616UpdateApplicationLayerAutomaticResponseHandler,
  xAmzTargetAwsShield20160616UpdateEmergencyContactSettingsHandler,
  xAmzTargetAwsShield20160616UpdateProtectionGroupHandler,
  xAmzTargetAwsShield20160616UpdateSubscriptionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsShield20160616AssociateDrtLogBucketHandler)
  .route('/', xAmzTargetAwsShield20160616AssociateDrtRoleHandler)
  .route('/', xAmzTargetAwsShield20160616AssociateHealthCheckHandler)
  .route('/', xAmzTargetAwsShield20160616AssociateProactiveEngagementDetailsHandler)
  .route('/', xAmzTargetAwsShield20160616CreateProtectionHandler)
  .route('/', xAmzTargetAwsShield20160616CreateProtectionGroupHandler)
  .route('/', xAmzTargetAwsShield20160616CreateSubscriptionHandler)
  .route('/', xAmzTargetAwsShield20160616DeleteProtectionHandler)
  .route('/', xAmzTargetAwsShield20160616DeleteProtectionGroupHandler)
  .route('/', xAmzTargetAwsShield20160616DeleteSubscriptionHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeAttackHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeAttackStatisticsHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeDrtAccessHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeEmergencyContactSettingsHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeProtectionHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeProtectionGroupHandler)
  .route('/', xAmzTargetAwsShield20160616DescribeSubscriptionHandler)
  .route('/', xAmzTargetAwsShield20160616DisableApplicationLayerAutomaticResponseHandler)
  .route('/', xAmzTargetAwsShield20160616DisableProactiveEngagementHandler)
  .route('/', xAmzTargetAwsShield20160616DisassociateDrtLogBucketHandler)
  .route('/', xAmzTargetAwsShield20160616DisassociateDrtRoleHandler)
  .route('/', xAmzTargetAwsShield20160616DisassociateHealthCheckHandler)
  .route('/', xAmzTargetAwsShield20160616EnableApplicationLayerAutomaticResponseHandler)
  .route('/', xAmzTargetAwsShield20160616EnableProactiveEngagementHandler)
  .route('/', xAmzTargetAwsShield20160616GetSubscriptionStateHandler)
  .route('/', xAmzTargetAwsShield20160616ListAttacksHandler)
  .route('/', xAmzTargetAwsShield20160616ListProtectionGroupsHandler)
  .route('/', xAmzTargetAwsShield20160616ListProtectionsHandler)
  .route('/', xAmzTargetAwsShield20160616ListResourcesInProtectionGroupHandler)
  .route('/', xAmzTargetAwsShield20160616ListTagsForResourceHandler)
  .route('/', xAmzTargetAwsShield20160616TagResourceHandler)
  .route('/', xAmzTargetAwsShield20160616UntagResourceHandler)
  .route('/', xAmzTargetAwsShield20160616UpdateApplicationLayerAutomaticResponseHandler)
  .route('/', xAmzTargetAwsShield20160616UpdateEmergencyContactSettingsHandler)
  .route('/', xAmzTargetAwsShield20160616UpdateProtectionGroupHandler)
  .route('/', xAmzTargetAwsShield20160616UpdateSubscriptionHandler)

export default app
