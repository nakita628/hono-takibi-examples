import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSIESnowballJobManagementServiceCancelClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCancelJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateAddressKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListClustersKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListJobsKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateJobKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState'] as const
}

export function getXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingKey() {
  return ['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing'] as const
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCancelClusterKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCancelCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCancelClusterKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCancelJobKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCancelJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCancelJobKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddressKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCreateAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCreateAddressKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateClusterKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCreateCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCreateClusterKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateJobKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCreateJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCreateJobKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddresses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceDescribeCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJobKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceDescribeJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeJobKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListClustersKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceListClusters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceListClustersKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListJobsKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceListJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceListJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceUpdateCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceUpdateJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingKey() {
  return [
    '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing',
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingKey()
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
            (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
