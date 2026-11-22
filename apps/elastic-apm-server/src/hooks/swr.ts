import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKey() {
  return ['', '/', 'POST'] as const
}

export function usePost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigV1AgentsKey(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
) {
  return ['config', '/config/v1/agents', args] as const
}

export function useGetConfigV1Agents<TError = unknown>(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigV1AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.v1.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigV1Agents<TError = unknown>(
  args: InferRequestType<typeof client.config.v1.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigV1AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.v1.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConfigV1AgentsKey() {
  return ['config', '/config/v1/agents', 'POST'] as const
}

export function usePostConfigV1Agents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.agents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.config.v1.agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigV1AgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.config.v1.agents.$post> }) =>
        parseResponse(client.config.v1.agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigV1RumAgentsKey() {
  return ['config', '/config/v1/rum/agents'] as const
}

export function useGetConfigV1RumAgents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigV1RumAgentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.v1.rum.agents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigV1RumAgents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigV1RumAgentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.config.v1.rum.agents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.v1.rum.agents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntakeV2EventsKey() {
  return ['intake', '/intake/v2/events', 'POST'] as const
}

export function usePostIntakeV2Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intake.v2.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.intake.v2.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntakeV2EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.intake.v2.events.$post> }) =>
        parseResponse(client.intake.v2.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntakeV2RumEventsKey() {
  return ['intake', '/intake/v2/rum/events', 'POST'] as const
}

export function usePostIntakeV2RumEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intake.v2.rum.events.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.intake.v2.rum.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntakeV2RumEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.intake.v2.rum.events.$post> },
      ) => parseResponse(client.intake.v2.rum.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntakeV3RumEventsKey() {
  return ['intake', '/intake/v3/rum/events', 'POST'] as const
}

export function usePostIntakeV3RumEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intake.v3.rum.events.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.intake.v3.rum.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntakeV3RumEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.intake.v3.rum.events.$post> },
      ) => parseResponse(client.intake.v3.rum.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOpentelemetryProtoCollectorMetricsV1MetricsServiceExportKey() {
  return [
    'opentelemetry.proto.collector.metrics.v1.MetricsService',
    '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
    'POST',
  ] as const
}

export function usePostOpentelemetryProtoCollectorMetricsV1MetricsServiceExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOpentelemetryProtoCollectorMetricsV1MetricsServiceExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['opentelemetry.proto.collector.metrics.v1.MetricsService']['Export']['$post']
          >
        },
      ) =>
        parseResponse(
          client['opentelemetry.proto.collector.metrics.v1.MetricsService'].Export.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOpentelemetryProtoCollectorTraceV1TraceServiceExportKey() {
  return [
    'opentelemetry.proto.collector.trace.v1.TraceService',
    '/opentelemetry.proto.collector.trace.v1.TraceService/Export',
    'POST',
  ] as const
}

export function usePostOpentelemetryProtoCollectorTraceV1TraceServiceExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOpentelemetryProtoCollectorTraceV1TraceServiceExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['opentelemetry.proto.collector.trace.v1.TraceService']['Export']['$post']
          >
        },
      ) =>
        parseResponse(
          client['opentelemetry.proto.collector.trace.v1.TraceService'].Export.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOpentelemetryProtoCollectorLogsV1LogsServiceExportKey() {
  return [
    'opentelemetry.proto.collector.logs.v1.LogsService',
    '/opentelemetry.proto.collector.logs.v1.LogsService/Export',
    'POST',
  ] as const
}

export function usePostOpentelemetryProtoCollectorLogsV1LogsServiceExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOpentelemetryProtoCollectorLogsV1LogsServiceExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['opentelemetry.proto.collector.logs.v1.LogsService']['Export']['$post']
          >
        },
      ) =>
        parseResponse(
          client['opentelemetry.proto.collector.logs.v1.LogsService'].Export.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MetricsKey() {
  return ['v1', '/v1/metrics', 'POST'] as const
}

export function usePostV1Metrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.metrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.metrics.$post> }) =>
        parseResponse(client.v1.metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TracesKey() {
  return ['v1', '/v1/traces', 'POST'] as const
}

export function usePostV1Traces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.traces.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.traces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.traces.$post> }) =>
        parseResponse(client.v1.traces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1LogsKey() {
  return ['v1', '/v1/logs', 'POST'] as const
}

export function usePostV1Logs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.logs.$post> }) =>
        parseResponse(client.v1.logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
