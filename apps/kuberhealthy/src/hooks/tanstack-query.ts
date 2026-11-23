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

export function getCheckKey() {
  return ['check'] as const
}

export function getHealthzKey() {
  return ['healthz'] as const
}

export function getJsonKey() {
  return ['json'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getOpenapiYamlKey() {
  return ['openapi.yaml'] as const
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >({
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthzQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthzQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJsonQueryKey(args: InferRequestType<typeof client.json.$get>) {
  return ['json', '/json', args] as const
}

export function getJsonQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.json.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJsonQueryKey>
  >({
    queryKey: getJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.json.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.json.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.json.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiEventsQueryKey(args: InferRequestType<typeof client.api.events.$get>) {
  return ['api', '/api/events', args] as const
}

export function getApiEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEventsQueryKey>
  >({
    queryKey: getApiEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiLogsQueryKey(args: InferRequestType<typeof client.api.logs.$get>) {
  return ['api', '/api/logs', args] as const
}

export function getApiLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLogsQueryKey>
  >({
    queryKey: getApiLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiLogsStreamQueryKey(
  args: InferRequestType<typeof client.api.logs.stream.$get>,
) {
  return ['api', '/api/logs/stream', args] as const
}

export function getApiLogsStreamQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.stream.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.logs.stream.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.stream.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogsStreamQueryKey>
  >({
    queryKey: getApiLogsStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logs.stream.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiLogsStream<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.stream.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logs.stream.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.stream.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLogsStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLogsStreamQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLogsStream<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.stream.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.logs.stream.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logs.stream.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLogsStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLogsStreamQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiYamlQueryKey() {
  return ['openapi.yaml', '/openapi.yaml'] as const
}

export function getOpenapiYamlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiYamlQueryKey>
  >({
    queryKey: getOpenapiYamlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.yaml'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiYaml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiYamlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiYamlQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiYaml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.yaml']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiYamlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiYamlQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >({
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiRunMutationKey() {
  return ['api', '/api/run', 'POST'] as const
}

export function getPostApiRunMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.run.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.run.$post>) {
      return parseResponse(client.api.run.$post(args, options))
    },
  })
}

export function usePostApiRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.run.$post>>>>>,
        TError,
        InferRequestType<typeof client.api.run.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRunMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCheckMutationKey() {
  return ['check', '/check', 'POST'] as const
}

export function getPostCheckMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check.$post>>>>>,
    TError,
    InferRequestType<typeof client.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check.$post>) {
      return parseResponse(client.check.$post(args, options))
    },
  })
}

export function usePostCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check.$post>>>>>,
        TError,
        InferRequestType<typeof client.check.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
