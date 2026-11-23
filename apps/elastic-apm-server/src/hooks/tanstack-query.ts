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

export function getConfigKey() {
  return ['config'] as const
}

export function getIntakeKey() {
  return ['intake'] as const
}

export function getOpentelemetryProtoCollectorLogsV1LogsServiceKey() {
  return ['opentelemetry.proto.collector.logs.v1.LogsService'] as const
}

export function getOpentelemetryProtoCollectorMetricsV1MetricsServiceKey() {
  return ['opentelemetry.proto.collector.metrics.v1.MetricsService'] as const
}

export function getOpentelemetryProtoCollectorTraceV1TraceServiceKey() {
  return ['opentelemetry.proto.collector.trace.v1.TraceService'] as const
}

export function getV1Key() {
  return ['v1'] as const
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

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn() {
      return parseResponse(client.index.$post(undefined, options))
    },
  })
}

export function usePost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigV1AgentsQueryKey(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
) {
  return ['config', '/config/v1/agents', args] as const
}

export function getConfigV1AgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.v1.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigV1AgentsQueryKey>
  >({
    queryKey: getConfigV1AgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.v1.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConfigV1Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigV1AgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigV1AgentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfigV1Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigV1AgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigV1AgentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConfigV1AgentsMutationKey() {
  return ['config', '/config/v1/agents', 'POST'] as const
}

export function getPostConfigV1AgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.config.v1.agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigV1AgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.v1.agents.$post>) {
      return parseResponse(client.config.v1.agents.$post(args, options))
    },
  })
}

export function usePostConfigV1Agents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.config.v1.agents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConfigV1AgentsMutationOptions<TError, TOnMutateResult>(
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

export function getConfigV1RumAgentsQueryKey() {
  return ['config', '/config/v1/rum/agents'] as const
}

export function getConfigV1RumAgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigV1RumAgentsQueryKey>
  >({
    queryKey: getConfigV1RumAgentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.v1.rum.agents.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConfigV1RumAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigV1RumAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigV1RumAgentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfigV1RumAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigV1RumAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigV1RumAgentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostIntakeV2EventsMutationKey() {
  return ['intake', '/intake/v2/events', 'POST'] as const
}

export function getPostIntakeV2EventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intake.v2.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.intake.v2.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntakeV2EventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intake.v2.events.$post>) {
      return parseResponse(client.intake.v2.events.$post(args, options))
    },
  })
}

export function usePostIntakeV2Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intake.v2.events.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.intake.v2.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntakeV2EventsMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntakeV2RumEventsMutationKey() {
  return ['intake', '/intake/v2/rum/events', 'POST'] as const
}

export function getPostIntakeV2RumEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intake.v2.rum.events.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.intake.v2.rum.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntakeV2RumEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intake.v2.rum.events.$post>) {
      return parseResponse(client.intake.v2.rum.events.$post(args, options))
    },
  })
}

export function usePostIntakeV2RumEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intake.v2.rum.events.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.intake.v2.rum.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntakeV2RumEventsMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntakeV3RumEventsMutationKey() {
  return ['intake', '/intake/v3/rum/events', 'POST'] as const
}

export function getPostIntakeV3RumEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intake.v3.rum.events.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.intake.v3.rum.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntakeV3RumEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intake.v3.rum.events.$post>) {
      return parseResponse(client.intake.v3.rum.events.$post(args, options))
    },
  })
}

export function usePostIntakeV3RumEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intake.v3.rum.events.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.intake.v3.rum.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntakeV3RumEventsMutationOptions<TError, TOnMutateResult>(
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

export function getPostOpentelemetryProtoCollectorMetricsV1MetricsServiceExportMutationKey() {
  return [
    'opentelemetry.proto.collector.metrics.v1.MetricsService',
    '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
    'POST',
  ] as const
}

export function getPostOpentelemetryProtoCollectorMetricsV1MetricsServiceExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOpentelemetryProtoCollectorMetricsV1MetricsServiceExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
      >,
    ) {
      return parseResponse(
        client['opentelemetry.proto.collector.metrics.v1.MetricsService'].Export.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOpentelemetryProtoCollectorMetricsV1MetricsServiceExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostOpentelemetryProtoCollectorMetricsV1MetricsServiceExportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOpentelemetryProtoCollectorTraceV1TraceServiceExportMutationKey() {
  return [
    'opentelemetry.proto.collector.trace.v1.TraceService',
    '/opentelemetry.proto.collector.trace.v1.TraceService/Export',
    'POST',
  ] as const
}

export function getPostOpentelemetryProtoCollectorTraceV1TraceServiceExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOpentelemetryProtoCollectorTraceV1TraceServiceExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
      >,
    ) {
      return parseResponse(
        client['opentelemetry.proto.collector.trace.v1.TraceService'].Export.$post(args, options),
      )
    },
  })
}

export function usePostOpentelemetryProtoCollectorTraceV1TraceServiceExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostOpentelemetryProtoCollectorTraceV1TraceServiceExportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOpentelemetryProtoCollectorLogsV1LogsServiceExportMutationKey() {
  return [
    'opentelemetry.proto.collector.logs.v1.LogsService',
    '/opentelemetry.proto.collector.logs.v1.LogsService/Export',
    'POST',
  ] as const
}

export function getPostOpentelemetryProtoCollectorLogsV1LogsServiceExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOpentelemetryProtoCollectorLogsV1LogsServiceExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
      >,
    ) {
      return parseResponse(
        client['opentelemetry.proto.collector.logs.v1.LogsService'].Export.$post(args, options),
      )
    },
  })
}

export function usePostOpentelemetryProtoCollectorLogsV1LogsServiceExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOpentelemetryProtoCollectorLogsV1LogsServiceExportMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1MetricsMutationKey() {
  return ['v1', '/v1/metrics', 'POST'] as const
}

export function getPostV1MetricsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.metrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.metrics.$post>) {
      return parseResponse(client.v1.metrics.$post(args, options))
    },
  })
}

export function usePostV1Metrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.metrics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1MetricsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1TracesMutationKey() {
  return ['v1', '/v1/traces', 'POST'] as const
}

export function getPostV1TracesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.traces.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.traces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TracesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.traces.$post>) {
      return parseResponse(client.v1.traces.$post(args, options))
    },
  })
}

export function usePostV1Traces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.traces.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.traces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TracesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1LogsMutationKey() {
  return ['v1', '/v1/logs', 'POST'] as const
}

export function getPostV1LogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.logs.$post>) {
      return parseResponse(client.v1.logs.$post(args, options))
    },
  })
}

export function usePostV1Logs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logs.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.logs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1LogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
