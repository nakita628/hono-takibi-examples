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

export function getApiV1StatusBuildinfoQueryKey() {
  return ['api', '/api/v1/status/buildinfo'] as const
}

export function getApiV1StatusBuildinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1StatusBuildinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.status.buildinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusBuildinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
            >
          >,
          ReturnType<typeof getApiV1StatusBuildinfoQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusBuildinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1StatusBuildinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.status.buildinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatusConfigQueryKey() {
  return ['api', '/api/v1/status/config'] as const
}

export function getApiV1StatusConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1StatusConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.status.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>
            >
          >,
          ReturnType<typeof getApiV1StatusConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1StatusConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.status.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatusConfigDefaultQueryKey() {
  return ['api', '/api/v1/status/config/default'] as const
}

export function getApiV1StatusConfigDefaultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1StatusConfigDefaultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.status.config.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusConfigDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatusConfigDefaultQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusConfigDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1StatusConfigDefaultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.status.config.default.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatusConfigDiffQueryKey() {
  return ['api', '/api/v1/status/config/diff'] as const
}

export function getApiV1StatusConfigDiffQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1StatusConfigDiffQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.status.config.diff.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusConfigDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatusConfigDiffQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusConfigDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1StatusConfigDiffQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.status.config.diff.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
