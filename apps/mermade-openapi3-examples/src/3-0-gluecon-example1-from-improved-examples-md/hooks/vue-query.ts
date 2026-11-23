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

export function getNamesKey() {
  return ['names'] as const
}

export function getNamesQueryKey() {
  return ['names', '/names'] as const
}

export function getNamesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNamesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNames<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
          ReturnType<typeof getNamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNamesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.names.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
