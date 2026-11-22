import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonForecastRuntimeQueryForecastKey() {
  return ['#X-Amz-Target=AmazonForecastRuntime.QueryForecast'] as const
}

export function getXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastKey() {
  return ['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast'] as const
}

export function getPostXAmzTargetAmazonForecastRuntimeQueryForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecastRuntime.QueryForecast',
    '/#X-Amz-Target=AmazonForecastRuntime.QueryForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastRuntimeQueryForecast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastRuntimeQueryForecastKey()
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
            (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecastRuntime.QueryForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastKey() {
  return [
    '#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast',
    '/#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecast<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastKey()
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
            (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
