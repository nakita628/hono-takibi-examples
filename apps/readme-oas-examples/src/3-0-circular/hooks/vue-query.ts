import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingQueryKey() {
  return ['anything', '/anything'] as const
}

export function getAnythingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnything<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
          >,
          ReturnType<typeof getAnythingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
