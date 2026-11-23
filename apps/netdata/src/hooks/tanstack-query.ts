import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2NodesQueryKey(args: InferRequestType<typeof client.api.v2.nodes.$get>) {
  return ['api', '/api/v2/nodes', args] as const
}

export function getApiV2NodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2NodesQueryKey>
  >({
    queryKey: getApiV2NodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2NodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2NodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3NodesQueryKey(args: InferRequestType<typeof client.api.v3.nodes.$get>) {
  return ['api', '/api/v3/nodes', args] as const
}

export function getApiV3NodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3NodesQueryKey>
  >({
    queryKey: getApiV3NodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3NodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3NodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2ContextsQueryKey(
  args: InferRequestType<typeof client.api.v2.contexts.$get>,
) {
  return ['api', '/api/v2/contexts', args] as const
}

export function getApiV2ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContextsQueryKey>
  >({
    queryKey: getApiV2ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.contexts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.contexts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ContextsQueryKey(
  args: InferRequestType<typeof client.api.v3.contexts.$get>,
) {
  return ['api', '/api/v3/contexts', args] as const
}

export function getApiV3ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ContextsQueryKey>
  >({
    queryKey: getApiV3ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.contexts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.contexts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2QQueryKey(args: InferRequestType<typeof client.api.v2.q.$get>) {
  return ['api', '/api/v2/q', args] as const
}

export function getApiV2QQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.q.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2QQueryKey>
  >({
    queryKey: getApiV2QQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.q.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.q.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiV2QQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2QQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.q.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiV2QQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2QQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3QQueryKey(args: InferRequestType<typeof client.api.v3.q.$get>) {
  return ['api', '/api/v3/q', args] as const
}

export function getApiV3QQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.q.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3QQueryKey>
  >({
    queryKey: getApiV3QQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.q.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.q.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiV3QQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.q.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiV3QQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1InfoQueryKey() {
  return ['api', '/api/v1/info'] as const
}

export function getApiV1InfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoQueryKey>
  >({
    queryKey: getApiV1InfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1InfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1InfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ChartsQueryKey() {
  return ['api', '/api/v1/charts'] as const
}

export function getApiV1ChartsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartsQueryKey>
  >({
    queryKey: getApiV1ChartsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.charts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Charts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ChartsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Charts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ChartsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ChartQueryKey(args: InferRequestType<typeof client.api.v1.chart.$get>) {
  return ['api', '/api/v1/chart', args] as const
}

export function getApiV1ChartQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.chart.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartQueryKey>
  >({
    queryKey: getApiV1ChartQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Chart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ChartQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Chart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ChartQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ContextsQueryKey(
  args: InferRequestType<typeof client.api.v1.contexts.$get>,
) {
  return ['api', '/api/v1/contexts', args] as const
}

export function getApiV1ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ContextsQueryKey>
  >({
    queryKey: getApiV1ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.contexts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.contexts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ContextQueryKey(args: InferRequestType<typeof client.api.v1.context.$get>) {
  return ['api', '/api/v1/context', args] as const
}

export function getApiV1ContextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.context.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ContextQueryKey>
  >({
    queryKey: getApiV1ContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.context.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.context.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ContextQueryKey(args: InferRequestType<typeof client.api.v3.context.$get>) {
  return ['api', '/api/v3/context', args] as const
}

export function getApiV3ContextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.context.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ContextQueryKey>
  >({
    queryKey: getApiV3ContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.context.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.context.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ConfigQueryKey(args: InferRequestType<typeof client.api.v1.config.$get>) {
  return ['api', '/api/v1/config', args] as const
}

export function getApiV1ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigQueryKey>
  >({
    queryKey: getApiV1ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ConfigMutationKey() {
  return ['api', '/api/v1/config', 'POST'] as const
}

export function getPostApiV1ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.config.$post>) {
      return parseResponse(client.api.v1.config.$post(args, options))
    },
  })
}

export function usePostApiV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2DataQueryKey(args: InferRequestType<typeof client.api.v2.data.$get>) {
  return ['api', '/api/v2/data', args] as const
}

export function getApiV2DataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.data.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2DataQueryKey>
  >({
    queryKey: getApiV2DataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2DataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2DataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3DataQueryKey(args: InferRequestType<typeof client.api.v3.data.$get>) {
  return ['api', '/api/v3/data', args] as const
}

export function getApiV3DataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.data.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3DataQueryKey>
  >({
    queryKey: getApiV3DataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DataQueryKey(args: InferRequestType<typeof client.api.v1.data.$get>) {
  return ['api', '/api/v1/data', args] as const
}

export function getApiV1DataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.data.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1DataQueryKey>
  >({
    queryKey: getApiV1DataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.data.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.data.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AllmetricsQueryKey(
  args: InferRequestType<typeof client.api.v1.allmetrics.$get>,
) {
  return ['api', '/api/v1/allmetrics', args] as const
}

export function getApiV1AllmetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.allmetrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllmetricsQueryKey>
  >({
    queryKey: getApiV1AllmetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.allmetrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.allmetrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AllmetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AllmetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.allmetrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AllmetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AllmetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1BadgeSvgQueryKey(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
) {
  return ['api', '/api/v1/badge.svg', args] as const
}

export function getApiV1BadgeSvgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BadgeSvgQueryKey>
  >({
    queryKey: getApiV1BadgeSvgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['badge.svg'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BadgeSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1BadgeSvgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BadgeSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1BadgeSvgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3BadgeSvgQueryKey(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
) {
  return ['api', '/api/v3/badge.svg', args] as const
}

export function getApiV3BadgeSvgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BadgeSvgQueryKey>
  >({
    queryKey: getApiV3BadgeSvgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3['badge.svg'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BadgeSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3BadgeSvgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BadgeSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3BadgeSvgQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AllmetricsQueryKey(
  args: InferRequestType<typeof client.api.v3.allmetrics.$get>,
) {
  return ['api', '/api/v3/allmetrics', args] as const
}

export function getApiV3AllmetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.allmetrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllmetricsQueryKey>
  >({
    queryKey: getApiV3AllmetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.allmetrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.allmetrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllmetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AllmetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.allmetrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllmetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AllmetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AlertsQueryKey(args: InferRequestType<typeof client.api.v3.alerts.$get>) {
  return ['api', '/api/v3/alerts', args] as const
}

export function getApiV3AlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertsQueryKey>
  >({
    queryKey: getApiV3AlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alerts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AlertsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alerts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AlertsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AlertTransitionsQueryKey(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
) {
  return ['api', '/api/v3/alert_transitions', args] as const
}

export function getApiV3AlertTransitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertTransitionsQueryKey>
  >({
    queryKey: getApiV3AlertTransitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alert_transitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertTransitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3AlertTransitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertTransitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3AlertTransitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3AlertConfigQueryKey(
  args: InferRequestType<typeof client.api.v3.alert_config.$get>,
) {
  return ['api', '/api/v3/alert_config', args] as const
}

export function getApiV3AlertConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.alert_config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertConfigQueryKey>
  >({
    queryKey: getApiV3AlertConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alert_config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alert_config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AlertConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alert_config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AlertConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3VariableQueryKey(
  args: InferRequestType<typeof client.api.v3.variable.$get>,
) {
  return ['api', '/api/v3/variable', args] as const
}

export function getApiV3VariableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.variable.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3VariableQueryKey>
  >({
    queryKey: getApiV3VariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.variable.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.variable.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3VariableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3VariableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.variable.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3VariableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3VariableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3InfoQueryKey(args: InferRequestType<typeof client.api.v3.info.$get>) {
  return ['api', '/api/v3/info', args] as const
}

export function getApiV3InfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3InfoQueryKey>
  >({
    queryKey: getApiV3InfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3InfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3InfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3NodeInstancesQueryKey(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
) {
  return ['api', '/api/v3/node_instances', args] as const
}

export function getApiV3NodeInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NodeInstancesQueryKey>
  >({
    queryKey: getApiV3NodeInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.node_instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3NodeInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3NodeInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3StreamPathQueryKey(
  args: InferRequestType<typeof client.api.v3.stream_path.$get>,
) {
  return ['api', '/api/v3/stream_path', args] as const
}

export function getApiV3StreamPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.stream_path.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3StreamPathQueryKey>
  >({
    queryKey: getApiV3StreamPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.stream_path.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3StreamPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.stream_path.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3StreamPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3StreamPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3StreamPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.stream_path.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3StreamPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3StreamPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3VersionsQueryKey(
  args: InferRequestType<typeof client.api.v3.versions.$get>,
) {
  return ['api', '/api/v3/versions', args] as const
}

export function getApiV3VersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3VersionsQueryKey>
  >({
    queryKey: getApiV3VersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.versions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3VersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3VersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.versions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3VersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3VersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ProgressQueryKey(
  args: InferRequestType<typeof client.api.v3.progress.$get>,
) {
  return ['api', '/api/v3/progress', args] as const
}

export function getApiV3ProgressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.progress.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ProgressQueryKey>
  >({
    queryKey: getApiV3ProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.progress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.progress.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ProgressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.progress.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ProgressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3FunctionQueryKey(
  args: InferRequestType<typeof client.api.v3.function.$get>,
) {
  return ['api', '/api/v3/function', args] as const
}

export function getApiV3FunctionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.function.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FunctionQueryKey>
  >({
    queryKey: getApiV3FunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.function.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.function.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3FunctionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.function.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3FunctionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3FunctionMutationKey() {
  return ['api', '/api/v3/function', 'POST'] as const
}

export function getPostApiV3FunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.function.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3FunctionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.function.$post>) {
      return parseResponse(client.api.v3.function.$post(args, options))
    },
  })
}

export function usePostApiV3Function<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.function.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3FunctionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3FunctionsQueryKey(
  args: InferRequestType<typeof client.api.v3.functions.$get>,
) {
  return ['api', '/api/v3/functions', args] as const
}

export function getApiV3FunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.functions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FunctionsQueryKey>
  >({
    queryKey: getApiV3FunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.functions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.functions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3FunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.functions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3FunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigQueryKey(args: InferRequestType<typeof client.api.v3.config.$get>) {
  return ['api', '/api/v3/config', args] as const
}

export function getApiV3ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigQueryKey>
  >({
    queryKey: getApiV3ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ConfigMutationKey() {
  return ['api', '/api/v3/config', 'POST'] as const
}

export function getPostApiV3ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.config.$post>) {
      return parseResponse(client.api.v3.config.$post(args, options))
    },
  })
}

export function usePostApiV3Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3SettingsQueryKey(
  args: InferRequestType<typeof client.api.v3.settings.$get>,
) {
  return ['api', '/api/v3/settings', args] as const
}

export function getApiV3SettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SettingsQueryKey>
  >({
    queryKey: getApiV3SettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3SettingsMutationKey() {
  return ['api', '/api/v3/settings', 'PUT'] as const
}

export function getPutApiV3SettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.settings.$put>) {
      return parseResponse(client.api.v3.settings.$put(args, options))
    },
  })
}

export function usePutApiV3Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.settings.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3SettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3StreamInfoQueryKey(
  args: InferRequestType<typeof client.api.v3.stream_info.$get>,
) {
  return ['api', '/api/v3/stream_info', args] as const
}

export function getApiV3StreamInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.stream_info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3StreamInfoQueryKey>
  >({
    queryKey: getApiV3StreamInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.stream_info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3StreamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.stream_info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3StreamInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3StreamInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3StreamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.stream_info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3StreamInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3StreamInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3RtcOfferMutationKey() {
  return ['api', '/api/v3/rtc_offer', 'POST'] as const
}

export function getPostApiV3RtcOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rtc_offer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.rtc_offer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RtcOfferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.rtc_offer.$post>) {
      return parseResponse(client.api.v3.rtc_offer.$post(args, options))
    },
  })
}

export function usePostApiV3RtcOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rtc_offer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.rtc_offer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3RtcOfferMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3ClaimQueryKey(args: InferRequestType<typeof client.api.v3.claim.$get>) {
  return ['api', '/api/v3/claim', args] as const
}

export function getApiV3ClaimQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.claim.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3ClaimQueryKey>
  >({
    queryKey: getApiV3ClaimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.claim.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.claim.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ClaimQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.claim.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ClaimQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3BearerProtectionQueryKey(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
) {
  return ['api', '/api/v3/bearer_protection', args] as const
}

export function getApiV3BearerProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BearerProtectionQueryKey>
  >({
    queryKey: getApiV3BearerProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.bearer_protection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BearerProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3BearerProtectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BearerProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3BearerProtectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3BearerGetTokenQueryKey(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
) {
  return ['api', '/api/v3/bearer_get_token', args] as const
}

export function getApiV3BearerGetTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BearerGetTokenQueryKey>
  >({
    queryKey: getApiV3BearerGetTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.bearer_get_token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BearerGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3BearerGetTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BearerGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3BearerGetTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MeQueryKey() {
  return ['api', '/api/v3/me'] as const
}

export function getApiV3MeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3MeQueryKey>
  >({
    queryKey: getApiV3MeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2WeightsQueryKey(args: InferRequestType<typeof client.api.v2.weights.$get>) {
  return ['api', '/api/v2/weights', args] as const
}

export function getApiV2WeightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.weights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2WeightsQueryKey>
  >({
    queryKey: getApiV2WeightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.weights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.weights.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2WeightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.weights.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2WeightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AlertsQueryKey(args: InferRequestType<typeof client.api.v2.alerts.$get>) {
  return ['api', '/api/v2/alerts', args] as const
}

export function getApiV2AlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertsQueryKey>
  >({
    queryKey: getApiV2AlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alerts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AlertsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alerts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AlertsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2AlertTransitionsQueryKey(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
) {
  return ['api', '/api/v2/alert_transitions', args] as const
}

export function getApiV2AlertTransitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertTransitionsQueryKey>
  >({
    queryKey: getApiV2AlertTransitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.alert_transitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertTransitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV2AlertTransitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertTransitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV2AlertTransitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AlertConfigQueryKey(
  args: InferRequestType<typeof client.api.v2.alert_config.$get>,
) {
  return ['api', '/api/v2/alert_config', args] as const
}

export function getApiV2AlertConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.alert_config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertConfigQueryKey>
  >({
    queryKey: getApiV2AlertConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.alert_config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alert_config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2AlertConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alert_config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2AlertConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2InfoQueryKey(args: InferRequestType<typeof client.api.v2.info.$get>) {
  return ['api', '/api/v2/info', args] as const
}

export function getApiV2InfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2InfoQueryKey>
  >({
    queryKey: getApiV2InfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2InfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2InfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2NodeInstancesQueryKey(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
) {
  return ['api', '/api/v2/node_instances', args] as const
}

export function getApiV2NodeInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NodeInstancesQueryKey>
  >({
    queryKey: getApiV2NodeInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.node_instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2NodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2NodeInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2NodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2NodeInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2VersionsQueryKey(
  args: InferRequestType<typeof client.api.v2.versions.$get>,
) {
  return ['api', '/api/v2/versions', args] as const
}

export function getApiV2VersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionsQueryKey>
  >({
    queryKey: getApiV2VersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.versions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2VersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.versions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2VersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2ProgressQueryKey(
  args: InferRequestType<typeof client.api.v2.progress.$get>,
) {
  return ['api', '/api/v2/progress', args] as const
}

export function getApiV2ProgressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.progress.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProgressQueryKey>
  >({
    queryKey: getApiV2ProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.progress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.progress.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ProgressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.progress.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ProgressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2FunctionsQueryKey(
  args: InferRequestType<typeof client.api.v2.functions.$get>,
) {
  return ['api', '/api/v2/functions', args] as const
}

export function getApiV2FunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.functions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FunctionsQueryKey>
  >({
    queryKey: getApiV2FunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.functions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.functions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2FunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.functions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2FunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV2RtcOfferMutationKey() {
  return ['api', '/api/v2/rtc_offer', 'POST'] as const
}

export function getPostApiV2RtcOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.rtc_offer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.rtc_offer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2RtcOfferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.rtc_offer.$post>) {
      return parseResponse(client.api.v2.rtc_offer.$post(args, options))
    },
  })
}

export function usePostApiV2RtcOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.rtc_offer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.rtc_offer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV2RtcOfferMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2ClaimQueryKey(args: InferRequestType<typeof client.api.v2.claim.$get>) {
  return ['api', '/api/v2/claim', args] as const
}

export function getApiV2ClaimQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.claim.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2ClaimQueryKey>
  >({
    queryKey: getApiV2ClaimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.claim.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.claim.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2ClaimQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.claim.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2ClaimQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2BearerProtectionQueryKey(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
) {
  return ['api', '/api/v2/bearer_protection', args] as const
}

export function getApiV2BearerProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BearerProtectionQueryKey>
  >({
    queryKey: getApiV2BearerProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.bearer_protection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BearerProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV2BearerProtectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BearerProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV2BearerProtectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2BearerGetTokenQueryKey(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
) {
  return ['api', '/api/v2/bearer_get_token', args] as const
}

export function getApiV2BearerGetTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BearerGetTokenQueryKey>
  >({
    queryKey: getApiV2BearerGetTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.bearer_get_token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BearerGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2BearerGetTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BearerGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2BearerGetTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3WeightsQueryKey(args: InferRequestType<typeof client.api.v3.weights.$get>) {
  return ['api', '/api/v3/weights', args] as const
}

export function getApiV3WeightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.weights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WeightsQueryKey>
  >({
    queryKey: getApiV3WeightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.weights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.weights.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3WeightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.weights.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3WeightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1WeightsQueryKey(args: InferRequestType<typeof client.api.v1.weights.$get>) {
  return ['api', '/api/v1/weights', args] as const
}

export function getApiV1WeightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.weights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WeightsQueryKey>
  >({
    queryKey: getApiV1WeightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.weights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.weights.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1WeightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.weights.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1WeightsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1MetricCorrelationsQueryKey(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
) {
  return ['api', '/api/v1/metric_correlations', args] as const
}

export function getApiV1MetricCorrelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
  >({
    queryKey: getApiV1MetricCorrelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metric_correlations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1MetricCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1MetricCorrelationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1MetricCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1MetricCorrelationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1FunctionQueryKey(
  args: InferRequestType<typeof client.api.v1.function.$get>,
) {
  return ['api', '/api/v1/function', args] as const
}

export function getApiV1FunctionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.function.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FunctionQueryKey>
  >({
    queryKey: getApiV1FunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.function.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.function.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FunctionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.function.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FunctionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1FunctionsQueryKey() {
  return ['api', '/api/v1/functions'] as const
}

export function getApiV1FunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FunctionsQueryKey>
  >({
    queryKey: getApiV1FunctionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.functions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FunctionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FunctionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AlarmsQueryKey(args: InferRequestType<typeof client.api.v1.alarms.$get>) {
  return ['api', '/api/v1/alarms', args] as const
}

export function getApiV1AlarmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmsQueryKey>
  >({
    queryKey: getApiV1AlarmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Alarms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarms.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AlarmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Alarms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarms.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AlarmsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AlarmsValuesQueryKey(
  args: InferRequestType<typeof client.api.v1.alarms_values.$get>,
) {
  return ['api', '/api/v1/alarms_values', args] as const
}

export function getApiV1AlarmsValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarms_values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmsValuesQueryKey>
  >({
    queryKey: getApiV1AlarmsValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarms_values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1AlarmsValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarms_values.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmsValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AlarmsValuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AlarmsValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarms_values.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmsValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AlarmsValuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AlarmLogQueryKey(
  args: InferRequestType<typeof client.api.v1.alarm_log.$get>,
) {
  return ['api', '/api/v1/alarm_log', args] as const
}

export function getApiV1AlarmLogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarm_log.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmLogQueryKey>
  >({
    queryKey: getApiV1AlarmLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarm_log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1AlarmLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_log.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmLogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AlarmLogQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AlarmLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_log.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmLogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AlarmLogQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AlarmCountQueryKey(
  args: InferRequestType<typeof client.api.v1.alarm_count.$get>,
) {
  return ['api', '/api/v1/alarm_count', args] as const
}

export function getApiV1AlarmCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarm_count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmCountQueryKey>
  >({
    queryKey: getApiV1AlarmCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarm_count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1AlarmCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AlarmCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AlarmCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AlarmCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AlarmVariablesQueryKey(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
) {
  return ['api', '/api/v1/alarm_variables', args] as const
}

export function getApiV1AlarmVariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmVariablesQueryKey>
  >({
    queryKey: getApiV1AlarmVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarm_variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AlarmVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AlarmVariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AlarmVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AlarmVariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ManageHealthQueryKey(
  args: InferRequestType<typeof client.api.v1.manage.health.$get>,
) {
  return ['api', '/api/v1/manage/health', args] as const
}

export function getApiV1ManageHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.manage.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ManageHealthQueryKey>
  >({
    queryKey: getApiV1ManageHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.manage.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ManageHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.manage.health.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ManageHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ManageHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ManageHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.manage.health.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ManageHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ManageHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AclkQueryKey() {
  return ['api', '/api/v1/aclk'] as const
}

export function getApiV1AclkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AclkQueryKey>
  >({
    queryKey: getApiV1AclkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.aclk.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Aclk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AclkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AclkQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Aclk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AclkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AclkQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1VariableQueryKey(
  args: InferRequestType<typeof client.api.v1.variable.$get>,
) {
  return ['api', '/api/v1/variable', args] as const
}

export function getApiV1VariableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.variable.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VariableQueryKey>
  >({
    queryKey: getApiV1VariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.variable.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.variable.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VariableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1VariableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.variable.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VariableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1VariableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1RegistryQueryKey(
  args: InferRequestType<typeof client.api.v1.registry.$get>,
) {
  return ['api', '/api/v1/registry', args] as const
}

export function getApiV1RegistryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.registry.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RegistryQueryKey>
  >({
    queryKey: getApiV1RegistryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.registry.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Registry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.registry.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RegistryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1RegistryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Registry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.registry.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RegistryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1RegistryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DbengineStatsQueryKey() {
  return ['api', '/api/v1/dbengine_stats'] as const
}

export function getApiV1DbengineStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DbengineStatsQueryKey>
  >({
    queryKey: getApiV1DbengineStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dbengine_stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DbengineStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DbengineStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DbengineStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DbengineStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DbengineStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DbengineStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1MlInfoQueryKey() {
  return ['api', '/api/v1/ml_info'] as const
}

export function getApiV1MlInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MlInfoQueryKey>
  >({
    queryKey: getApiV1MlInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.ml_info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1MlInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MlInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MlInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1MlInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MlInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MlInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
