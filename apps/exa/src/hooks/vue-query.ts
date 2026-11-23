import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getPostSearchMutationKey() {
  return ['search', '/search', 'POST'] as const
}

export function getPostSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.$post>) {
      return parseResponse(client.search.$post(args, options))
    },
  })
}

export function usePostSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContentsMutationKey() {
  return ['contents', '/contents', 'POST'] as const
}

export function getPostContentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contents.$post>>>>>,
    TError,
    InferRequestType<typeof client.contents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contents.$post>) {
      return parseResponse(client.contents.$post(args, options))
    },
  })
}

export function usePostContents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contents.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnswerMutationKey() {
  return ['answer', '/answer', 'POST'] as const
}

export function getPostAnswerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answer.$post>>>>>,
    TError,
    InferRequestType<typeof client.answer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnswerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.answer.$post>) {
      return parseResponse(client.answer.$post(args, options))
    },
  })
}

export function usePostAnswer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answer.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.answer.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnswerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFindSimilarMutationKey() {
  return ['findSimilar', '/findSimilar', 'POST'] as const
}

export function getPostFindSimilarMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findSimilar.$post>>>>>,
    TError,
    InferRequestType<typeof client.findSimilar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindSimilarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findSimilar.$post>) {
      return parseResponse(client.findSimilar.$post(args, options))
    },
  })
}

export function usePostFindSimilar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findSimilar.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.findSimilar.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindSimilarMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMonitorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitors.$get>>,
) {
  return ['monitors', '/monitors', toValue(args)] as const
}

export function getMonitorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMonitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
          >,
          ReturnType<typeof getMonitorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMonitorsMutationKey() {
  return ['monitors', '/monitors', 'POST'] as const
}

export function getPostMonitorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>>,
    TError,
    InferRequestType<typeof client.monitors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.monitors.$post>) {
      return parseResponse(client.monitors.$post(args, options))
    },
  })
}

export function usePostMonitors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.monitors.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMonitorsBatchMutationKey() {
  return ['monitors', '/monitors/batch', 'POST'] as const
}

export function getPostMonitorsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.monitors.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.monitors.batch.$post>) {
      return parseResponse(client.monitors.batch.$post(args, options))
    },
  })
}

export function usePostMonitorsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.monitors.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.monitors.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getMonitorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':id']['$get']>>,
) {
  return ['monitors', '/monitors/:id', toValue(args)] as const
}

export function getMonitorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMonitorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMonitorsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMonitorsIdMutationKey() {
  return ['monitors', '/monitors/:id', 'DELETE'] as const
}

export function getDeleteMonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMonitorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':id']['$delete']>) {
      return parseResponse(client.monitors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMonitorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMonitorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMonitorsIdMutationKey() {
  return ['monitors', '/monitors/:id', 'PATCH'] as const
}

export function getPatchMonitorsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMonitorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':id']['$patch']>) {
      return parseResponse(client.monitors[':id'].$patch(args, options))
    },
  })
}

export function usePatchMonitorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMonitorsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMonitorsIdTriggerMutationKey() {
  return ['monitors', '/monitors/:id/trigger', 'POST'] as const
}

export function getPostMonitorsIdTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':id']['trigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':id']['trigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsIdTriggerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':id']['trigger']['$post']>) {
      return parseResponse(client.monitors[':id'].trigger.$post(args, options))
    },
  })
}

export function usePostMonitorsIdTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':id']['trigger']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':id']['trigger']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorsIdTriggerMutationOptions<TError, TOnMutateResult>(
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

export function getMonitorsIdRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>>,
) {
  return ['monitors', '/monitors/:id/runs', toValue(args)] as const
}

export function getMonitorsIdRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorsIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitors[':id'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMonitorsIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMonitorsIdRunsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorsIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitors[':id'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMonitorsIdRunsRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>
  >,
) {
  return ['monitors', '/monitors/:id/runs/:runId', toValue(args)] as const
}

export function getMonitorsIdRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorsIdRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitors[':id'].runs[':runId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMonitorsIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMonitorsIdRunsRunIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsIdRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorsIdRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitors[':id'].runs[':runId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent.runs.$get>>,
) {
  return ['agent', '/agent/runs', toValue(args)] as const
}

export function getAgentRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent.runs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent.runs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAgentRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent.runs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
          >,
          ReturnType<typeof getAgentRunsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent.runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentRunsMutationKey() {
  return ['agent', '/agent/runs', 'POST'] as const
}

export function getPostAgentRunsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$post>>>>>,
    TError,
    InferRequestType<typeof client.agent.runs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agent.runs.$post>) {
      return parseResponse(client.agent.runs.$post(args, options))
    },
  })
}

export function usePostAgentRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.agent.runs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentRunsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentRunsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent.runs)[':id']['$get']>>,
) {
  return ['agent', '/agent/runs/:id', toValue(args)] as const
}

export function getAgentRunsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent.runs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent.runs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentRunsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent.runs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAgentRunsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent.runs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAgentRunsIdMutationKey() {
  return ['agent', '/agent/runs/:id', 'DELETE'] as const
}

export function getDeleteAgentRunsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.agent.runs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentRunsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agent.runs)[':id']['$delete']>) {
      return parseResponse(client.agent.runs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentRunsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent.runs)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent.runs)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAgentRunsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAgentRunsIdCancelMutationKey() {
  return ['agent', '/agent/runs/:id/cancel', 'POST'] as const
}

export function getPostAgentRunsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent.runs)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent.runs)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agent.runs)[':id']['cancel']['$post']>) {
      return parseResponse(client.agent.runs[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostAgentRunsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent.runs)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent.runs)[':id']['cancel']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentRunsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAgentRunsIdStopMutationKey() {
  return ['agent', '/agent/runs/:id/stop', 'POST'] as const
}

export function getPostAgentRunsIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent.runs)[':id']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent.runs)[':id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunsIdStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agent.runs)[':id']['stop']['$post']>) {
      return parseResponse(client.agent.runs[':id'].stop.$post(args, options))
    },
  })
}

export function usePostAgentRunsIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent.runs)[':id']['stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent.runs)[':id']['stop']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentRunsIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getAgentRunsIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['agent', '/agent/runs/:id/events', keyArgs] as const
}

export function getAgentRunsIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent.runs[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentRunsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentRunsIdEventsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent.runs[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batches.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['batches', '/batches', keyArgs] as const
}

export function getBatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
          >,
          ReturnType<typeof getBatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBatchesMutationKey() {
  return ['batches', '/batches', 'POST'] as const
}

export function getPostBatchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>>,
    TError,
    InferRequestType<typeof client.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batches.$post>) {
      return parseResponse(client.batches.$post(args, options))
    },
  })
}

export function usePostBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.batches.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['batches', '/batches/:id', keyArgs] as const
}

export function getBatchesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batches[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBatchesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batches[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBatchesIdMutationKey() {
  return ['batches', '/batches/:id', 'DELETE'] as const
}

export function getDeleteBatchesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.batches)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBatchesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.batches)[':id']['$delete']>) {
      return parseResponse(client.batches[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBatchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.batches)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBatchesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBatchesIdCancelMutationKey() {
  return ['batches', '/batches/:id/cancel', 'POST'] as const
}

export function getPostBatchesIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.batches)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchesIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.batches)[':id']['cancel']['$post']>) {
      return parseResponse(client.batches[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostBatchesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.batches)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.batches)[':id']['cancel']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchesIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV0TeamsMeQueryKey() {
  return ['v0', '/v0/teams/me'] as const
}

export function getV0TeamsMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV0TeamsMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.teams.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV0TeamsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
          >,
          ReturnType<typeof getV0TeamsMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0TeamsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV0TeamsMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.teams.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV0WebsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.websets.$get>>,
) {
  return ['v0', '/v0/websets', toValue(args)] as const
}

export function getV0WebsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.websets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.websets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV0Websets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.websets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
          >,
          ReturnType<typeof getV0WebsetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.websets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0WebsetsMutationKey() {
  return ['v0', '/v0/websets', 'POST'] as const
}

export function getPostV0WebsetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$post>>>>>,
    TError,
    InferRequestType<typeof client.v0.websets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v0.websets.$post>) {
      return parseResponse(client.v0.websets.$post(args, options))
    },
  })
}

export function usePostV0Websets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v0.websets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV0WebsetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.websets)[':id']['$get']>>,
) {
  return ['v0', '/v0/websets/:id', toValue(args)] as const
}

export function getV0WebsetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.websets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebsetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.websets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebsetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.websets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV0WebsetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebsetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.websets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0WebsetsIdMutationKey() {
  return ['v0', '/v0/websets/:id', 'POST'] as const
}

export function getPostV0WebsetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.websets)[':id']['$post']>) {
      return parseResponse(client.v0.websets[':id'].$post(args, options))
    },
  })
}

export function usePostV0WebsetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV0WebsetsIdMutationKey() {
  return ['v0', '/v0/websets/:id', 'DELETE'] as const
}

export function getDeleteV0WebsetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV0WebsetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.websets)[':id']['$delete']>) {
      return parseResponse(client.v0.websets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV0WebsetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV0WebsetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV0WebsetsIdCancelMutationKey() {
  return ['v0', '/v0/websets/:id/cancel', 'POST'] as const
}

export function getPostV0WebsetsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.websets)[':id']['cancel']['$post']>) {
      return parseResponse(client.v0.websets[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostV0WebsetsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':id']['cancel']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV0WebsetsWebsetSearchesMutationKey() {
  return ['v0', '/v0/websets/:webset/searches', 'POST'] as const
}

export function getPostV0WebsetsWebsetSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':webset']['searches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsWebsetSearchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v0.websets)[':webset']['searches']['$post']>,
    ) {
      return parseResponse(client.v0.websets[':webset'].searches.$post(args, options))
    },
  })
}

export function usePostV0WebsetsWebsetSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':webset']['searches']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsWebsetSearchesMutationOptions<TError, TOnMutateResult>(
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

export function getV0WebsetsWebsetSearchesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>
  >,
) {
  return ['v0', '/v0/websets/:webset/searches/:id', toValue(args)] as const
}

export function getV0WebsetsWebsetSearchesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebsetsWebsetSearchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.websets[':webset'].searches[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebsetsWebsetSearchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV0WebsetsWebsetSearchesIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsWebsetSearchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebsetsWebsetSearchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.websets[':webset'].searches[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0WebsetsWebsetSearchesIdCancelMutationKey() {
  return ['v0', '/v0/websets/:webset/searches/:id/cancel', 'POST'] as const
}

export function getPostV0WebsetsWebsetSearchesIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsWebsetSearchesIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.v0.websets[':webset'].searches[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostV0WebsetsWebsetSearchesIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsWebsetSearchesIdCancelMutationOptions<
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

export function getPostV0WebsetsWebsetEnrichmentsMutationKey() {
  return ['v0', '/v0/websets/:webset/enrichments', 'POST'] as const
}

export function getPostV0WebsetsWebsetEnrichmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsWebsetEnrichmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>,
    ) {
      return parseResponse(client.v0.websets[':webset'].enrichments.$post(args, options))
    },
  })
}

export function usePostV0WebsetsWebsetEnrichments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsWebsetEnrichmentsMutationOptions<
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

export function getV0WebsetsWebsetEnrichmentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>
  >,
) {
  return ['v0', '/v0/websets/:webset/enrichments/:id', toValue(args)] as const
}

export function getV0WebsetsWebsetEnrichmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebsetsWebsetEnrichmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.websets[':webset'].enrichments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebsetsWebsetEnrichmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV0WebsetsWebsetEnrichmentsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsWebsetEnrichmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebsetsWebsetEnrichmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.websets[':webset'].enrichments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV0WebsetsWebsetEnrichmentsIdMutationKey() {
  return ['v0', '/v0/websets/:webset/enrichments/:id', 'DELETE'] as const
}

export function getDeleteV0WebsetsWebsetEnrichmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV0WebsetsWebsetEnrichmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.v0.websets[':webset'].enrichments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV0WebsetsWebsetEnrichmentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV0WebsetsWebsetEnrichmentsIdMutationOptions<
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

export function getPatchV0WebsetsWebsetEnrichmentsIdMutationKey() {
  return ['v0', '/v0/websets/:webset/enrichments/:id', 'PATCH'] as const
}

export function getPatchV0WebsetsWebsetEnrichmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV0WebsetsWebsetEnrichmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>,
    ) {
      return parseResponse(client.v0.websets[':webset'].enrichments[':id'].$patch(args, options))
    },
  })
}

export function usePatchV0WebsetsWebsetEnrichmentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV0WebsetsWebsetEnrichmentsIdMutationOptions<
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

export function getPostV0WebsetsWebsetEnrichmentsIdCancelMutationKey() {
  return ['v0', '/v0/websets/:webset/enrichments/:id/cancel', 'POST'] as const
}

export function getPostV0WebsetsWebsetEnrichmentsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsWebsetEnrichmentsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v0.websets[':webset'].enrichments[':id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV0WebsetsWebsetEnrichmentsIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsWebsetEnrichmentsIdCancelMutationOptions<
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

export function getV0WebsetsWebsetItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>
  >,
) {
  return ['v0', '/v0/websets/:webset/items/:id', toValue(args)] as const
}

export function getV0WebsetsWebsetItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebsetsWebsetItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.websets[':webset'].items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebsetsWebsetItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV0WebsetsWebsetItemsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsWebsetItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebsetsWebsetItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.websets[':webset'].items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV0WebsetsWebsetItemsIdMutationKey() {
  return ['v0', '/v0/websets/:webset/items/:id', 'DELETE'] as const
}

export function getDeleteV0WebsetsWebsetItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV0WebsetsWebsetItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>,
    ) {
      return parseResponse(client.v0.websets[':webset'].items[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV0WebsetsWebsetItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV0WebsetsWebsetItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV0WebsetsWebsetItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>>,
) {
  return ['v0', '/v0/websets/:webset/items', toValue(args)] as const
}

export function getV0WebsetsWebsetItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebsetsWebsetItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.websets[':webset'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebsetsWebsetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV0WebsetsWebsetItemsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsWebsetItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebsetsWebsetItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.websets[':webset'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0WebsetsPreviewMutationKey() {
  return ['v0', '/v0/websets/preview', 'POST'] as const
}

export function getPostV0WebsetsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v0.websets.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebsetsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v0.websets.preview.$post>) {
      return parseResponse(client.v0.websets.preview.$post(args, options))
    },
  })
}

export function usePostV0WebsetsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v0.websets.preview.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebsetsPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getV0MonitorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.monitors.$get>>,
) {
  return ['v0', '/v0/monitors', toValue(args)] as const
}

export function getV0MonitorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.monitors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0MonitorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.monitors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV0Monitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.monitors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
          >,
          ReturnType<typeof getV0MonitorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0MonitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0MonitorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.monitors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0MonitorsMutationKey() {
  return ['v0', '/v0/monitors', 'POST'] as const
}

export function getPostV0MonitorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$post>>>>>,
    TError,
    InferRequestType<typeof client.v0.monitors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV0MonitorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v0.monitors.$post>) {
      return parseResponse(client.v0.monitors.$post(args, options))
    },
  })
}

export function usePostV0Monitors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v0.monitors.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0MonitorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV0MonitorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.monitors)[':id']['$get']>>,
) {
  return ['v0', '/v0/monitors/:id', toValue(args)] as const
}

export function getV0MonitorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.monitors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0MonitorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.monitors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0MonitorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.monitors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV0MonitorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0MonitorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0MonitorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.monitors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV0MonitorsIdMutationKey() {
  return ['v0', '/v0/monitors/:id', 'DELETE'] as const
}

export function getDeleteV0MonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.monitors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV0MonitorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.monitors)[':id']['$delete']>) {
      return parseResponse(client.v0.monitors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV0MonitorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.monitors)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV0MonitorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV0MonitorsIdMutationKey() {
  return ['v0', '/v0/monitors/:id', 'PATCH'] as const
}

export function getPatchV0MonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.monitors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV0MonitorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.monitors)[':id']['$patch']>) {
      return parseResponse(client.v0.monitors[':id'].$patch(args, options))
    },
  })
}

export function usePatchV0MonitorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.monitors)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV0MonitorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV0MonitorsMonitorRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>,
) {
  return ['v0', '/v0/monitors/:monitor/runs', toValue(args)] as const
}

export function getV0MonitorsMonitorRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0MonitorsMonitorRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.monitors[':monitor'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0MonitorsMonitorRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV0MonitorsMonitorRunsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0MonitorsMonitorRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0MonitorsMonitorRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.monitors[':monitor'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV0MonitorsMonitorRunsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>
  >,
) {
  return ['v0', '/v0/monitors/:monitor/runs/:id', toValue(args)] as const
}

export function getV0MonitorsMonitorRunsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0MonitorsMonitorRunsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.monitors[':monitor'].runs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0MonitorsMonitorRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV0MonitorsMonitorRunsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0MonitorsMonitorRunsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0MonitorsMonitorRunsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.monitors[':monitor'].runs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV0ImportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.imports.$get>>,
) {
  return ['v0', '/v0/imports', toValue(args)] as const
}

export function getV0ImportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.imports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0ImportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.imports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV0Imports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.imports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
          >,
          ReturnType<typeof getV0ImportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0ImportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0ImportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.imports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0ImportsMutationKey() {
  return ['v0', '/v0/imports', 'POST'] as const
}

export function getPostV0ImportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v0.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV0ImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v0.imports.$post>) {
      return parseResponse(client.v0.imports.$post(args, options))
    },
  })
}

export function usePostV0Imports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v0.imports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0ImportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV0ImportsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.imports)[':id']['$get']>>,
) {
  return ['v0', '/v0/imports/:id', toValue(args)] as const
}

export function getV0ImportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.imports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0ImportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.imports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0ImportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.imports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV0ImportsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0ImportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0ImportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.imports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV0ImportsIdMutationKey() {
  return ['v0', '/v0/imports/:id', 'DELETE'] as const
}

export function getDeleteV0ImportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.imports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV0ImportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.imports)[':id']['$delete']>) {
      return parseResponse(client.v0.imports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV0ImportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.imports)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.imports)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV0ImportsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV0ImportsIdMutationKey() {
  return ['v0', '/v0/imports/:id', 'PATCH'] as const
}

export function getPatchV0ImportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.imports)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV0ImportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.imports)[':id']['$patch']>) {
      return parseResponse(client.v0.imports[':id'].$patch(args, options))
    },
  })
}

export function usePatchV0ImportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.imports)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV0ImportsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV0WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.webhooks.$get>>,
) {
  return ['v0', '/v0/webhooks', toValue(args)] as const
}

export function getV0WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV0Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
          >,
          ReturnType<typeof getV0WebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0WebhooksMutationKey() {
  return ['v0', '/v0/webhooks', 'POST'] as const
}

export function getPostV0WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v0.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV0WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v0.webhooks.$post>) {
      return parseResponse(client.v0.webhooks.$post(args, options))
    },
  })
}

export function usePostV0Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v0.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV0WebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>>,
) {
  return ['v0', '/v0/webhooks/:id', toValue(args)] as const
}

export function getV0WebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV0WebhooksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV0WebhooksIdMutationKey() {
  return ['v0', '/v0/webhooks/:id', 'DELETE'] as const
}

export function getDeleteV0WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV0WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']>) {
      return parseResponse(client.v0.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV0WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV0WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV0WebhooksIdMutationKey() {
  return ['v0', '/v0/webhooks/:id', 'PATCH'] as const
}

export function getPatchV0WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV0WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']>) {
      return parseResponse(client.v0.webhooks[':id'].$patch(args, options))
    },
  })
}

export function usePatchV0WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV0WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getV0WebhooksIdAttemptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>,
) {
  return ['v0', '/v0/webhooks/:id/attempts', toValue(args)] as const
}

export function getV0WebhooksIdAttemptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0WebhooksIdAttemptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.webhooks[':id'].attempts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0WebhooksIdAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV0WebhooksIdAttemptsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebhooksIdAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0WebhooksIdAttemptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.webhooks[':id'].attempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV0EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.events.$get>>,
) {
  return ['v0', '/v0/events', toValue(args)] as const
}

export function getV0EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV0Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v0.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
          >,
          ReturnType<typeof getV0EventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV0EventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.events)[':id']['$get']>>,
) {
  return ['v0', '/v0/events/:id', toValue(args)] as const
}

export function getV0EventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0EventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0EventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV0EventsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0EventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0EventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
