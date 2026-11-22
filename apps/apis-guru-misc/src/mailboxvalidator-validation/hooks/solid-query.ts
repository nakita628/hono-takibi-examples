import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ValidationSingleQueryKey(
  args: InferRequestType<typeof client.v1.validation.single.$get>,
) {
  return ['v1', '/v1/validation/single', args] as const
}

export function getV1ValidationSingleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.validation.single.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ValidationSingleQueryKey>
  >({
    queryKey: getV1ValidationSingleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.validation.single.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ValidationSingle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.validation.single.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ValidationSingleQueryKey>
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
    return { ...getV1ValidationSingleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
