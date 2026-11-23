import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysKey() {
  return ['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys'] as const
}

export function getXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsKey() {
  return ['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails'] as const
}

export function getXAmzTargetPerformanceInsightsv20180227GetResourceMetadataKey() {
  return ['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata'] as const
}

export function getXAmzTargetPerformanceInsightsv20180227GetResourceMetricsKey() {
  return ['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics'] as const
}

export function getXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsKey() {
  return ['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions'] as const
}

export function getXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsKey() {
  return ['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics'] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys',
    '/#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysKey()
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
            (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails',
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsKey()
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
            (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadataKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata',
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetPerformanceInsightsv20180227GetResourceMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadataKey()
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
            (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetricsKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics',
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetPerformanceInsightsv20180227GetResourceMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetricsKey()
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
            (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions',
    '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions',
    'POST',
  ] as const
}

export function usePostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsKey()
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
            (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics',
    '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsKey()
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
            (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
