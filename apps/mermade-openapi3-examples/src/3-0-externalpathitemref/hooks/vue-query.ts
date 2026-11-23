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

export function getTestKey() {
  return ['test'] as const
}

export function getTest2Key() {
  return ['test2'] as const
}

export function getTestQueryKey() {
  return ['test', '/test'] as const
}

export function getTestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.test.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTest<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
          ReturnType<typeof getTestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.test.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTest2QueryKey() {
  return ['test2', '/test2'] as const
}

export function getTest2QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTest2QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.test2.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTest2<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
          ReturnType<typeof getTest2QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTest2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTest2QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.test2.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
