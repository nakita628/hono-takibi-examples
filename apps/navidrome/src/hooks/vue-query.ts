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

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getOpenapiYamlKey() {
  return ['openapi.yaml'] as const
}

export function getServerKey() {
  return ['server'] as const
}

export function getServerQueryKey() {
  return ['server', '/server'] as const
}

export function getServerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.$get>>>>>,
          ReturnType<typeof getServerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiJsonQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiYamlQueryKey() {
  return ['openapi.yaml', '/openapi.yaml'] as const
}

export function getOpenapiYamlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiYamlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.yaml'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiYaml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiYamlQueryKey>
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiYamlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiYamlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.yaml'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
