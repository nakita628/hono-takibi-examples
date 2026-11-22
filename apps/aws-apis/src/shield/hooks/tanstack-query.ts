import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostXAmzTargetAWSShield20160616AssociateDRTLogBucketMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket',
    '/#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616AssociateDRTLogBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616AssociateDRTLogBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616AssociateDRTLogBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616AssociateDRTLogBucketMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616AssociateDRTRoleMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateDRTRole',
    '/#X-Amz-Target=AWSShield_20160616.AssociateDRTRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616AssociateDRTRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616AssociateDRTRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616AssociateDRTRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateDRTRole']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616AssociateDRTRoleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616AssociateHealthCheckMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck',
    '/#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616AssociateHealthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616AssociateHealthCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616AssociateHealthCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616AssociateHealthCheckMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails',
    '/#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616CreateProtectionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.CreateProtection',
    '/#X-Amz-Target=AWSShield_20160616.CreateProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616CreateProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616CreateProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.CreateProtection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616CreateProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616CreateProtectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616CreateProtectionGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616CreateProtectionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616CreateProtectionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616CreateProtectionGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616CreateProtectionGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616CreateSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.CreateSubscription',
    '/#X-Amz-Target=AWSShield_20160616.CreateSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616CreateSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616CreateSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.CreateSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616CreateSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.CreateSubscription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616CreateSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DeleteProtectionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DeleteProtection',
    '/#X-Amz-Target=AWSShield_20160616.DeleteProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DeleteProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DeleteProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DeleteProtection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DeleteProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DeleteProtectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DeleteProtectionGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DeleteProtectionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DeleteProtectionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DeleteProtectionGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DeleteProtectionGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DeleteSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DeleteSubscription',
    '/#X-Amz-Target=AWSShield_20160616.DeleteSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DeleteSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DeleteSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DeleteSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DeleteSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DeleteSubscription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DeleteSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeAttackMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeAttack',
    '/#X-Amz-Target=AWSShield_20160616.DescribeAttack',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeAttackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeAttackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeAttack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeAttack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttack']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DescribeAttackMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeAttackStatisticsMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics',
    '/#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeAttackStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeAttackStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeAttackStatistics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616DescribeAttackStatisticsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeDRTAccessMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess',
    '/#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeDRTAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeDRTAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeDRTAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DescribeDRTAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings',
    '/#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeEmergencyContactSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeProtectionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeProtection',
    '/#X-Amz-Target=AWSShield_20160616.DescribeProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeProtection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DescribeProtectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeProtectionGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeProtectionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeProtectionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeProtectionGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DescribeProtectionGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DescribeSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DescribeSubscription',
    '/#X-Amz-Target=AWSShield_20160616.DescribeSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DescribeSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DescribeSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DescribeSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DescribeSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DescribeSubscription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DescribeSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse',
    '/#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DisableProactiveEngagementMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement',
    '/#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DisableProactiveEngagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DisableProactiveEngagementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DisableProactiveEngagement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616DisableProactiveEngagementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DisassociateDRTLogBucketMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket',
    '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DisassociateDRTLogBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DisassociateDRTLogBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DisassociateDRTLogBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616DisassociateDRTLogBucketMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DisassociateDRTRoleMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole',
    '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DisassociateDRTRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DisassociateDRTRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DisassociateDRTRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DisassociateDRTRoleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616DisassociateHealthCheckMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck',
    '/#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616DisassociateHealthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616DisassociateHealthCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616DisassociateHealthCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616DisassociateHealthCheckMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse',
    '/#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616EnableProactiveEngagementMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement',
    '/#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616EnableProactiveEngagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616EnableProactiveEngagementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616EnableProactiveEngagement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616EnableProactiveEngagementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616GetSubscriptionStateMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.GetSubscriptionState',
    '/#X-Amz-Target=AWSShield_20160616.GetSubscriptionState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616GetSubscriptionStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616GetSubscriptionStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616GetSubscriptionState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.GetSubscriptionState']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616GetSubscriptionStateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616ListAttacksMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListAttacks',
    '/#X-Amz-Target=AWSShield_20160616.ListAttacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616ListAttacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616ListAttacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.ListAttacks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616ListAttacks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListAttacks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616ListAttacksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616ListProtectionGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListProtectionGroups',
    '/#X-Amz-Target=AWSShield_20160616.ListProtectionGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616ListProtectionGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616ListProtectionGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616ListProtectionGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtectionGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616ListProtectionGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616ListProtectionsMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListProtections',
    '/#X-Amz-Target=AWSShield_20160616.ListProtections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616ListProtectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616ListProtectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.ListProtections'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616ListProtections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.ListProtections']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616ListProtectionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616ListResourcesInProtectionGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616ListResourcesInProtectionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616ListResourcesInProtectionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616ListResourcesInProtectionGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616ListResourcesInProtectionGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.ListTagsForResource',
    '/#X-Amz-Target=AWSShield_20160616.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616ListTagsForResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.TagResource',
    '/#X-Amz-Target=AWSShield_20160616.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616TagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UntagResource',
    '/#X-Amz-Target=AWSShield_20160616.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616UntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse',
    '/#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings',
    '/#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616UpdateEmergencyContactSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616UpdateProtectionGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup',
    '/#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616UpdateProtectionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616UpdateProtectionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616UpdateProtectionGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616UpdateProtectionGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSShield20160616UpdateSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSShield_20160616.UpdateSubscription',
    '/#X-Amz-Target=AWSShield_20160616.UpdateSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSShield20160616UpdateSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSShield20160616UpdateSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSShield_20160616.UpdateSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSShield20160616UpdateSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSShield_20160616.UpdateSubscription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSShield20160616UpdateSubscriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
