import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSShield20160616AssociateDRTLogBucket(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616AssociateDRTRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616AssociateHealthCheck(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616AssociateProactiveEngagementDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSShield20160616CreateProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.CreateProtection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616CreateProtectionGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616CreateSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.CreateSubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DeleteProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DeleteProtection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DeleteProtectionGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DeleteSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DeleteSubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeAttack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeAttack'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeAttackStatistics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeDRTAccess(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeEmergencyContactSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeProtection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeProtectionGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DescribeSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DescribeSubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponse(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSShield20160616DisableProactiveEngagement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DisassociateDRTLogBucket(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DisassociateDRTRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616DisassociateHealthCheck(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponse(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSShield20160616EnableProactiveEngagement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616GetSubscriptionState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616ListAttacks(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.ListAttacks'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616ListProtectionGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616ListProtections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.ListProtections'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616ListResourcesInProtectionGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponse(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSShield20160616UpdateEmergencyContactSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616UpdateProtectionGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSShield20160616UpdateSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSShield_20160616.UpdateSubscription'].$post(args, options),
  )
}
