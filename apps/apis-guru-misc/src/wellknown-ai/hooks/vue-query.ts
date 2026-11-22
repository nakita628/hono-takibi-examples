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

export function getApiKey() {
  return ['api'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getApiPluginsQueryKey() {
  return ['api', '/api/plugins'] as const
}

export function getApiPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.plugins.$get>>>>
          >,
          ReturnType<typeof getApiPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.plugins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsQueryKey() {
  return ['plugins', '/plugins'] as const
}

export function getPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          ReturnType<typeof getPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
