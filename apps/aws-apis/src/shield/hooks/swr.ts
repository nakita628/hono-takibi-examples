import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSShield_20160616AssociateDRTLogBucketKey() {
  return ['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket'] as const
}

export function getXAmzTargetAWSShield_20160616AssociateDRTRoleKey() {
  return ['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole'] as const
}

export function getXAmzTargetAWSShield_20160616AssociateHealthCheckKey() {
  return ['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck'] as const
}

export function getXAmzTargetAWSShield_20160616AssociateProactiveEngagementDetailsKey() {
  return ['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails'] as const
}

export function getXAmzTargetAWSShield_20160616CreateProtectionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.CreateProtection'] as const
}

export function getXAmzTargetAWSShield_20160616CreateProtectionGroupKey() {
  return ['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup'] as const
}

export function getXAmzTargetAWSShield_20160616CreateSubscriptionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.CreateSubscription'] as const
}

export function getXAmzTargetAWSShield_20160616DeleteProtectionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DeleteProtection'] as const
}

export function getXAmzTargetAWSShield_20160616DeleteProtectionGroupKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup'] as const
}

export function getXAmzTargetAWSShield_20160616DeleteSubscriptionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DeleteSubscription'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeAttackKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeAttack'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeAttackStatisticsKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeDRTAccessKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeEmergencyContactSettingsKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeProtectionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeProtection'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeProtectionGroupKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup'] as const
}

export function getXAmzTargetAWSShield_20160616DescribeSubscriptionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DescribeSubscription'] as const
}

export function getXAmzTargetAWSShield_20160616DisableApplicationLayerAutomaticResponseKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse'] as const
}

export function getXAmzTargetAWSShield_20160616DisableProactiveEngagementKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement'] as const
}

export function getXAmzTargetAWSShield_20160616DisassociateDRTLogBucketKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket'] as const
}

export function getXAmzTargetAWSShield_20160616DisassociateDRTRoleKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole'] as const
}

export function getXAmzTargetAWSShield_20160616DisassociateHealthCheckKey() {
  return ['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck'] as const
}

export function getXAmzTargetAWSShield_20160616EnableApplicationLayerAutomaticResponseKey() {
  return ['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse'] as const
}

export function getXAmzTargetAWSShield_20160616EnableProactiveEngagementKey() {
  return ['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement'] as const
}

export function getXAmzTargetAWSShield_20160616GetSubscriptionStateKey() {
  return ['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState'] as const
}

export function getXAmzTargetAWSShield_20160616ListAttacksKey() {
  return ['#X-Amz-Target=AWSShield_20160616.ListAttacks'] as const
}

export function getXAmzTargetAWSShield_20160616ListProtectionGroupsKey() {
  return ['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups'] as const
}

export function getXAmzTargetAWSShield_20160616ListProtectionsKey() {
  return ['#X-Amz-Target=AWSShield_20160616.ListProtections'] as const
}

export function getXAmzTargetAWSShield_20160616ListResourcesInProtectionGroupKey() {
  return ['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup'] as const
}

export function getXAmzTargetAWSShield_20160616ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSShield_20160616.ListTagsForResource'] as const
}

export function getXAmzTargetAWSShield_20160616TagResourceKey() {
  return ['#X-Amz-Target=AWSShield_20160616.TagResource'] as const
}

export function getXAmzTargetAWSShield_20160616UntagResourceKey() {
  return ['#X-Amz-Target=AWSShield_20160616.UntagResource'] as const
}

export function getXAmzTargetAWSShield_20160616UpdateApplicationLayerAutomaticResponseKey() {
  return ['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse'] as const
}

export function getXAmzTargetAWSShield_20160616UpdateEmergencyContactSettingsKey() {
  return ['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings'] as const
}

export function getXAmzTargetAWSShield_20160616UpdateProtectionGroupKey() {
  return ['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup'] as const
}

export function getXAmzTargetAWSShield_20160616UpdateSubscriptionKey() {
  return ['#X-Amz-Target=AWSShield_20160616.UpdateSubscription'] as const
}

export function getPostXAmzTargetAWSShield20160616AssociateDRTLogBucketKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket',
    '/#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616AssociateDRTLogBucket<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616AssociateDRTLogBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616AssociateDRTRoleKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateDRTRole',
    '/#X-Amz-Target=AWSShield_20160616.AssociateDRTRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616AssociateDRTRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616AssociateDRTRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616AssociateHealthCheckKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck',
    '/#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616AssociateHealthCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616AssociateHealthCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails',
    '/#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616CreateProtectionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.CreateProtection',
    '/#X-Amz-Target=AWSShield_20160616.CreateProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616CreateProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616CreateProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.CreateProtection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616CreateProtectionGroupKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616CreateProtectionGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616CreateProtectionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616CreateSubscriptionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.CreateSubscription',
    '/#X-Amz-Target=AWSShield_20160616.CreateSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616CreateSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616CreateSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.CreateSubscription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DeleteProtectionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DeleteProtection',
    '/#X-Amz-Target=AWSShield_20160616.DeleteProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DeleteProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DeleteProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DeleteProtection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DeleteProtectionGroupKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DeleteProtectionGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DeleteProtectionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DeleteSubscriptionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DeleteSubscription',
    '/#X-Amz-Target=AWSShield_20160616.DeleteSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DeleteSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DeleteSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DeleteSubscription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeAttackKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeAttack',
    '/#X-Amz-Target=AWSShield_20160616.DescribeAttack',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeAttack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DescribeAttackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeAttack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeAttackStatisticsKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics',
    '/#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeAttackStatistics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DescribeAttackStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeDRTAccessKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess',
    '/#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeDRTAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DescribeDRTAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings',
    '/#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeEmergencyContactSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeProtectionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeProtection',
    '/#X-Amz-Target=AWSShield_20160616.DescribeProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DescribeProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeProtection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeProtectionGroupKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeProtectionGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DescribeProtectionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DescribeSubscriptionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeSubscription',
    '/#X-Amz-Target=AWSShield_20160616.DescribeSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DescribeSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DescribeSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DescribeSubscription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse',
    '/#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DisableProactiveEngagementKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement',
    '/#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DisableProactiveEngagement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DisableProactiveEngagementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DisassociateDRTLogBucketKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket',
    '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DisassociateDRTLogBucket<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DisassociateDRTLogBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DisassociateDRTRoleKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole',
    '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DisassociateDRTRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DisassociateDRTRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616DisassociateHealthCheckKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck',
    '/#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616DisassociateHealthCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616DisassociateHealthCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse',
    '/#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616EnableProactiveEngagementKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement',
    '/#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616EnableProactiveEngagement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616EnableProactiveEngagementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616GetSubscriptionStateKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.GetSubscriptionState',
    '/#X-Amz-Target=AWSShield_20160616.GetSubscriptionState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616GetSubscriptionState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616GetSubscriptionStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616ListAttacksKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListAttacks',
    '/#X-Amz-Target=AWSShield_20160616.ListAttacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616ListAttacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616ListAttacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.ListAttacks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616ListProtectionGroupsKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListProtectionGroups',
    '/#X-Amz-Target=AWSShield_20160616.ListProtectionGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616ListProtectionGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616ListProtectionGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616ListProtectionsKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListProtections',
    '/#X-Amz-Target=AWSShield_20160616.ListProtections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616ListProtections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616ListProtectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.ListProtections'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616ListResourcesInProtectionGroupKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616ListResourcesInProtectionGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616ListResourcesInProtectionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListTagsForResource',
    '/#X-Amz-Target=AWSShield_20160616.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616ListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616TagResourceKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.TagResource',
    '/#X-Amz-Target=AWSShield_20160616.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616TagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UntagResource',
    '/#X-Amz-Target=AWSShield_20160616.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616UntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse',
    '/#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings',
    '/#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616UpdateEmergencyContactSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616UpdateProtectionGroupKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616UpdateProtectionGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616UpdateProtectionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSShield20160616UpdateSubscriptionKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateSubscription',
    '/#X-Amz-Target=AWSShield_20160616.UpdateSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSShield20160616UpdateSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSShield20160616UpdateSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSShield_20160616.UpdateSubscription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
