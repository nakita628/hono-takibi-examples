import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NutritionQueryKey(args: InferRequestType<typeof client.v1.nutrition.$get>) {
  return ['v1', '/v1/nutrition', args] as const
}

export function getV1NutritionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nutrition.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.nutrition.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nutrition.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1NutritionQueryKey>
  >({
    queryKey: getV1NutritionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.nutrition.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Nutrition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nutrition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.nutrition.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.nutrition.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1NutritionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NutritionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
