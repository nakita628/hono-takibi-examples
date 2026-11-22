import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonForecastRuntimeQueryForecastKey() {
  return ['#X-Amz-Target=AmazonForecastRuntime.QueryForecast'] as const
}

export function getXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastKey() {
  return ['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast'] as const
}

export function getPostXAmzTargetAmazonForecastRuntimeQueryForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecastRuntime.QueryForecast',
    '/#X-Amz-Target=AmazonForecastRuntime.QueryForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastRuntimeQueryForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastRuntimeQueryForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecastRuntime.QueryForecast'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonForecastRuntimeQueryForecast<
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
                  (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonForecastRuntimeQueryForecastMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastMutationKey() {
  return [
    '#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast',
    '/#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecast<
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
                  (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
