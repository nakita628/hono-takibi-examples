import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentKey() {
  return ['agent'] as const
}

export function getAnswerKey() {
  return ['answer'] as const
}

export function getBatchesKey() {
  return ['batches'] as const
}

export function getContentsKey() {
  return ['contents'] as const
}

export function getFindSimilarKey() {
  return ['findSimilar'] as const
}

export function getMonitorsKey() {
  return ['monitors'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getV0Key() {
  return ['v0'] as const
}

export function getPostSearchKey() {
  return ['search', '/search', 'POST'] as const
}

export function usePostSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.$post> }) =>
        parseResponse(client.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContentsKey() {
  return ['contents', '/contents', 'POST'] as const
}

export function usePostContents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contents.$post> }) =>
        parseResponse(client.contents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnswerKey() {
  return ['answer', '/answer', 'POST'] as const
}

export function usePostAnswer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answer.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.answer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnswerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.answer.$post> }) =>
        parseResponse(client.answer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindSimilarKey() {
  return ['findSimilar', '/findSimilar', 'POST'] as const
}

export function usePostFindSimilar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findSimilar.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.findSimilar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindSimilarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findSimilar.$post> }) =>
        parseResponse(client.findSimilar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorsKey(args: InferRequestType<typeof client.monitors.$get>) {
  return ['monitors', '/monitors', args] as const
}

export function useGetMonitors<TError = unknown>(
  args: InferRequestType<typeof client.monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.monitors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMonitors<TError = unknown>(
  args: InferRequestType<typeof client.monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.monitors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMonitorsKey() {
  return ['monitors', '/monitors', 'POST'] as const
}

export function usePostMonitors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.monitors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.monitors.$post> }) =>
        parseResponse(client.monitors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMonitorsBatchKey() {
  return ['monitors', '/monitors/batch', 'POST'] as const
}

export function usePostMonitorsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.monitors.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.monitors.batch.$post> }) =>
        parseResponse(client.monitors.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorsIdKey(
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
) {
  return ['monitors', '/monitors/:id', args] as const
}

export function useGetMonitorsId<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorsId<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMonitorsIdKey() {
  return ['monitors', '/monitors/:id', 'DELETE'] as const
}

export function useDeleteMonitorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMonitorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitors)[':id']['$delete']> },
      ) => parseResponse(client.monitors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMonitorsIdKey() {
  return ['monitors', '/monitors/:id', 'PATCH'] as const
}

export function usePatchMonitorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMonitorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitors)[':id']['$patch']> },
      ) => parseResponse(client.monitors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMonitorsIdTriggerKey() {
  return ['monitors', '/monitors/:id/trigger', 'POST'] as const
}

export function usePostMonitorsIdTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':id']['trigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitors)[':id']['trigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorsIdTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitors)[':id']['trigger']['$post']> },
      ) => parseResponse(client.monitors[':id'].trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorsIdRunsKey(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
) {
  return ['monitors', '/monitors/:id/runs', args] as const
}

export function useGetMonitorsIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsIdRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorsIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorsIdRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMonitorsIdRunsRunIdKey(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
) {
  return ['monitors', '/monitors/:id/runs/:runId', args] as const
}

export function useGetMonitorsIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMonitorsIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':id'].runs[':runId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorsIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMonitorsIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitors[':id'].runs[':runId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentRunsKey(args: InferRequestType<typeof client.agent.runs.$get>) {
  return ['agent', '/agent/runs', args] as const
}

export function useGetAgentRuns<TError = unknown>(
  args: InferRequestType<typeof client.agent.runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent.runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRuns<TError = unknown>(
  args: InferRequestType<typeof client.agent.runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent.runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentRunsKey() {
  return ['agent', '/agent/runs', 'POST'] as const
}

export function usePostAgentRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.agent.runs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agent.runs.$post> }) =>
        parseResponse(client.agent.runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentRunsIdKey(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
) {
  return ['agent', '/agent/runs/:id', args] as const
}

export function useGetAgentRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentRunsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent.runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentRunsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent.runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentRunsIdKey() {
  return ['agent', '/agent/runs/:id', 'DELETE'] as const
}

export function useDeleteAgentRunsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent.runs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentRunsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agent.runs)[':id']['$delete']> },
      ) => parseResponse(client.agent.runs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentRunsIdCancelKey() {
  return ['agent', '/agent/runs/:id/cancel', 'POST'] as const
}

export function usePostAgentRunsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent.runs)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent.runs)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agent.runs)[':id']['cancel']['$post']> },
      ) => parseResponse(client.agent.runs[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentRunsIdStopKey() {
  return ['agent', '/agent/runs/:id/stop', 'POST'] as const
}

export function usePostAgentRunsIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent.runs)[':id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent.runs)[':id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunsIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agent.runs)[':id']['stop']['$post']> },
      ) => parseResponse(client.agent.runs[':id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentRunsIdEventsKey(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent', '/agent/runs/:id/events', keyArgs] as const
}

export function useGetAgentRunsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentRunsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent.runs[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgentRunsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent.runs[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBatchesKey(args: InferRequestType<typeof client.batches.$get>) {
  const { header: _, ...keyArgs } = args
  return ['batches', '/batches', keyArgs] as const
}

export function useGetBatches<TError = unknown>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBatches<TError = unknown>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBatchesKey() {
  return ['batches', '/batches', 'POST'] as const
}

export function usePostBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batches.$post> }) =>
        parseResponse(client.batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchesIdKey(args: InferRequestType<(typeof client.batches)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['batches', '/batches/:id', keyArgs] as const
}

export function useGetBatchesId<TError = unknown>(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batches[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchesId<TError = unknown>(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batches[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBatchesIdKey() {
  return ['batches', '/batches/:id', 'DELETE'] as const
}

export function useDeleteBatchesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.batches)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBatchesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.batches)[':id']['$delete']> },
      ) => parseResponse(client.batches[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchesIdCancelKey() {
  return ['batches', '/batches/:id/cancel', 'POST'] as const
}

export function usePostBatchesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.batches)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchesIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.batches)[':id']['cancel']['$post']> },
      ) => parseResponse(client.batches[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0TeamsMeKey() {
  return ['v0', '/v0/teams/me'] as const
}

export function useGetV0TeamsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0TeamsMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.teams.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0TeamsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0TeamsMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.teams.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV0WebsetsKey(args: InferRequestType<typeof client.v0.websets.$get>) {
  return ['v0', '/v0/websets', args] as const
}

export function useGetV0Websets<TError = unknown>(
  args: InferRequestType<typeof client.v0.websets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebsetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.websets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0Websets<TError = unknown>(
  args: InferRequestType<typeof client.v0.websets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebsetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.websets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0WebsetsKey() {
  return ['v0', '/v0/websets', 'POST'] as const
}

export function usePostV0Websets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v0.websets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v0.websets.$post> }) =>
        parseResponse(client.v0.websets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebsetsIdKey(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
) {
  return ['v0', '/v0/websets/:id', args] as const
}

export function useGetV0WebsetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebsetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.websets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebsetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebsetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.websets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0WebsetsIdKey() {
  return ['v0', '/v0/websets/:id', 'POST'] as const
}

export function usePostV0WebsetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.websets)[':id']['$post']> },
      ) => parseResponse(client.v0.websets[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV0WebsetsIdKey() {
  return ['v0', '/v0/websets/:id', 'DELETE'] as const
}

export function useDeleteV0WebsetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV0WebsetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.websets)[':id']['$delete']> },
      ) => parseResponse(client.v0.websets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV0WebsetsIdCancelKey() {
  return ['v0', '/v0/websets/:id/cancel', 'POST'] as const
}

export function usePostV0WebsetsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.websets)[':id']['cancel']['$post']> },
      ) => parseResponse(client.v0.websets[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV0WebsetsWebsetSearchesKey() {
  return ['v0', '/v0/websets/:webset/searches', 'POST'] as const
}

export function usePostV0WebsetsWebsetSearches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['searches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsWebsetSearchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v0.websets)[':webset']['searches']['$post']> },
      ) => parseResponse(client.v0.websets[':webset'].searches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebsetsWebsetSearchesIdKey(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/searches/:id', args] as const
}

export function useGetV0WebsetsWebsetSearchesId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetSearchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.websets[':webset'].searches[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebsetsWebsetSearchesId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetSearchesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.websets[':webset'].searches[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0WebsetsWebsetSearchesIdCancelKey() {
  return ['v0', '/v0/websets/:webset/searches/:id/cancel', 'POST'] as const
}

export function usePostV0WebsetsWebsetSearchesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsWebsetSearchesIdCancelKey()
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
            (typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v0.websets[':webset'].searches[':id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV0WebsetsWebsetEnrichmentsKey() {
  return ['v0', '/v0/websets/:webset/enrichments', 'POST'] as const
}

export function usePostV0WebsetsWebsetEnrichments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsWebsetEnrichmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments']['$post']> },
      ) => parseResponse(client.v0.websets[':webset'].enrichments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebsetsWebsetEnrichmentsIdKey(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/enrichments/:id', args] as const
}

export function useGetV0WebsetsWebsetEnrichmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetEnrichmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.websets[':webset'].enrichments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebsetsWebsetEnrichmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetEnrichmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.websets[':webset'].enrichments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV0WebsetsWebsetEnrichmentsIdKey() {
  return ['v0', '/v0/websets/:webset/enrichments/:id', 'DELETE'] as const
}

export function useDeleteV0WebsetsWebsetEnrichmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV0WebsetsWebsetEnrichmentsIdKey()
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
            (typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v0.websets[':webset'].enrichments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV0WebsetsWebsetEnrichmentsIdKey() {
  return ['v0', '/v0/websets/:webset/enrichments/:id', 'PATCH'] as const
}

export function usePatchV0WebsetsWebsetEnrichmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV0WebsetsWebsetEnrichmentsIdKey()
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
            (typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(client.v0.websets[':webset'].enrichments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV0WebsetsWebsetEnrichmentsIdCancelKey() {
  return ['v0', '/v0/websets/:webset/enrichments/:id/cancel', 'POST'] as const
}

export function usePostV0WebsetsWebsetEnrichmentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsWebsetEnrichmentsIdCancelKey()
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
            (typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v0.websets[':webset'].enrichments[':id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebsetsWebsetItemsIdKey(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/items/:id', args] as const
}

export function useGetV0WebsetsWebsetItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.websets[':webset'].items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebsetsWebsetItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.websets[':webset'].items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV0WebsetsWebsetItemsIdKey() {
  return ['v0', '/v0/websets/:webset/items/:id', 'DELETE'] as const
}

export function useDeleteV0WebsetsWebsetItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV0WebsetsWebsetItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>
        },
      ) => parseResponse(client.v0.websets[':webset'].items[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebsetsWebsetItemsKey(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/items', args] as const
}

export function useGetV0WebsetsWebsetItems<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.websets[':webset'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebsetsWebsetItems<TError = unknown>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebsetsWebsetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.websets[':webset'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0WebsetsPreviewKey() {
  return ['v0', '/v0/websets/preview', 'POST'] as const
}

export function usePostV0WebsetsPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v0.websets.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebsetsPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v0.websets.preview.$post> }) =>
        parseResponse(client.v0.websets.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0MonitorsKey(args: InferRequestType<typeof client.v0.monitors.$get>) {
  return ['v0', '/v0/monitors', args] as const
}

export function useGetV0Monitors<TError = unknown>(
  args: InferRequestType<typeof client.v0.monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0MonitorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0Monitors<TError = unknown>(
  args: InferRequestType<typeof client.v0.monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0MonitorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0MonitorsKey() {
  return ['v0', '/v0/monitors', 'POST'] as const
}

export function usePostV0Monitors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v0.monitors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0MonitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v0.monitors.$post> }) =>
        parseResponse(client.v0.monitors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0MonitorsIdKey(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
) {
  return ['v0', '/v0/monitors/:id', args] as const
}

export function useGetV0MonitorsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0MonitorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.monitors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0MonitorsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0MonitorsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.monitors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV0MonitorsIdKey() {
  return ['v0', '/v0/monitors/:id', 'DELETE'] as const
}

export function useDeleteV0MonitorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.monitors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV0MonitorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.monitors)[':id']['$delete']> },
      ) => parseResponse(client.v0.monitors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV0MonitorsIdKey() {
  return ['v0', '/v0/monitors/:id', 'PATCH'] as const
}

export function usePatchV0MonitorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.monitors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV0MonitorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.monitors)[':id']['$patch']> },
      ) => parseResponse(client.v0.monitors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0MonitorsMonitorRunsKey(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
) {
  return ['v0', '/v0/monitors/:monitor/runs', args] as const
}

export function useGetV0MonitorsMonitorRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0MonitorsMonitorRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.monitors[':monitor'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0MonitorsMonitorRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0MonitorsMonitorRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.monitors[':monitor'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV0MonitorsMonitorRunsIdKey(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
) {
  return ['v0', '/v0/monitors/:monitor/runs/:id', args] as const
}

export function useGetV0MonitorsMonitorRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0MonitorsMonitorRunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.monitors[':monitor'].runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0MonitorsMonitorRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0MonitorsMonitorRunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.monitors[':monitor'].runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV0ImportsKey(args: InferRequestType<typeof client.v0.imports.$get>) {
  return ['v0', '/v0/imports', args] as const
}

export function useGetV0Imports<TError = unknown>(
  args: InferRequestType<typeof client.v0.imports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0ImportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.imports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0Imports<TError = unknown>(
  args: InferRequestType<typeof client.v0.imports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0ImportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.imports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0ImportsKey() {
  return ['v0', '/v0/imports', 'POST'] as const
}

export function usePostV0Imports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v0.imports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0ImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v0.imports.$post> }) =>
        parseResponse(client.v0.imports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0ImportsIdKey(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
) {
  return ['v0', '/v0/imports/:id', args] as const
}

export function useGetV0ImportsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0ImportsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.imports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0ImportsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0ImportsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.imports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV0ImportsIdKey() {
  return ['v0', '/v0/imports/:id', 'DELETE'] as const
}

export function useDeleteV0ImportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.imports)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV0ImportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.imports)[':id']['$delete']> },
      ) => parseResponse(client.v0.imports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV0ImportsIdKey() {
  return ['v0', '/v0/imports/:id', 'PATCH'] as const
}

export function usePatchV0ImportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.imports)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV0ImportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.imports)[':id']['$patch']> },
      ) => parseResponse(client.v0.imports[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebhooksKey(args: InferRequestType<typeof client.v0.webhooks.$get>) {
  return ['v0', '/v0/webhooks', args] as const
}

export function useGetV0Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v0.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v0.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0WebhooksKey() {
  return ['v0', '/v0/webhooks', 'POST'] as const
}

export function usePostV0Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v0.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v0.webhooks.$post> }) =>
        parseResponse(client.v0.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebhooksIdKey(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
) {
  return ['v0', '/v0/webhooks/:id', args] as const
}

export function useGetV0WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV0WebhooksIdKey() {
  return ['v0', '/v0/webhooks/:id', 'DELETE'] as const
}

export function useDeleteV0WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV0WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.v0.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV0WebhooksIdKey() {
  return ['v0', '/v0/webhooks/:id', 'PATCH'] as const
}

export function usePatchV0WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV0WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']> },
      ) => parseResponse(client.v0.webhooks[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0WebhooksIdAttemptsKey(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
) {
  return ['v0', '/v0/webhooks/:id/attempts', args] as const
}

export function useGetV0WebhooksIdAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebhooksIdAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.webhooks[':id'].attempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0WebhooksIdAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV0WebhooksIdAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.webhooks[':id'].attempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV0EventsKey(args: InferRequestType<typeof client.v0.events.$get>) {
  return ['v0', '/v0/events', args] as const
}

export function useGetV0Events<TError = unknown>(
  args: InferRequestType<typeof client.v0.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0Events<TError = unknown>(
  args: InferRequestType<typeof client.v0.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV0EventsIdKey(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
) {
  return ['v0', '/v0/events/:id', args] as const
}

export function useGetV0EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV0EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
