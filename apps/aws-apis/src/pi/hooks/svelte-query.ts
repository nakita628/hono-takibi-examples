import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysMutationKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys',
    '/#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsMutationKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails',
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetailsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadataMutationKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata',
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetadataMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetricsMutationKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics',
    '/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetPerformanceInsightsv20180227GetResourceMetrics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetPerformanceInsightsv20180227GetResourceMetricsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsMutationKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions',
    '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions',
    'POST',
  ] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsMutationKey() {
  return [
    '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics',
    '/#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetrics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
