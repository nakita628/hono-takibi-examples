import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
        TError,
        InferRequestType<typeof client.search.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contents.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.answer.$post>>>>>,
        TError,
        InferRequestType<typeof client.answer.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findSimilar.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findSimilar.$post>,
        TOnMutateResult
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

export function getMonitorsQueryKey(args: InferRequestType<typeof client.monitors.$get>) {
  return ['monitors', '/monitors', args] as const
}

export function getMonitorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.monitors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitorsQueryKey>
  >({
    queryKey: getMonitorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMonitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.monitors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMonitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMonitorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMonitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.monitors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMonitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMonitorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.monitors.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.monitors.batch.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
) {
  return ['monitors', '/monitors/:id', args] as const
}

export function getMonitorsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.monitors)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsIdQueryKey>
  >({
    queryKey: getMonitorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMonitorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMonitorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMonitorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMonitorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
) {
  return ['monitors', '/monitors/:id/runs', args] as const
}

export function getMonitorsIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsIdRunsQueryKey>
  >({
    queryKey: getMonitorsIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitors[':id'].runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMonitorsIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMonitorsIdRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMonitorsIdRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMonitorsIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.monitors)[':id']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorsIdRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMonitorsIdRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMonitorsIdRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
) {
  return ['monitors', '/monitors/:id/runs/:runId', args] as const
}

export function getMonitorsIdRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMonitorsIdRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitors[':id'].runs[':runId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMonitorsIdRunsRunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMonitorsIdRunsRunIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMonitorsIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMonitorsIdRunsRunIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgentRunsQueryKey(args: InferRequestType<typeof client.agent.runs.$get>) {
  return ['agent', '/agent/runs', args] as const
}

export function getAgentRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agent.runs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentRunsQueryKey>
  >({
    queryKey: getAgentRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent.runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agent.runs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agent.runs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.runs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.agent.runs.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
) {
  return ['agent', '/agent/runs/:id', args] as const
}

export function getAgentRunsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunsIdQueryKey>
  >({
    queryKey: getAgentRunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent.runs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentRunsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentRunsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentRunsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentRunsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentRunsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentRunsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.agent.runs)[':id']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent', '/agent/runs/:id/events', keyArgs] as const
}

export function getAgentRunsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentRunsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent.runs[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentRunsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAgentRunsIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentRunsIdEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentRunsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent.runs)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentRunsIdEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBatchesQueryKey(args: InferRequestType<typeof client.batches.$get>) {
  const { header: _, ...keyArgs } = args
  return ['batches', '/batches', keyArgs] as const
}

export function getBatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.batches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchesQueryKey>
  >({
    queryKey: getBatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$post>>>>>,
        TError,
        InferRequestType<typeof client.batches.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['batches', '/batches/:id', keyArgs] as const
}

export function getBatchesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.batches)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesIdQueryKey>
  >({
    queryKey: getBatchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getV0TeamsMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0TeamsMeQueryKey>
  >({
    queryKey: getV0TeamsMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.teams.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0TeamsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0TeamsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0TeamsMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0TeamsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.teams.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0TeamsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0TeamsMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV0WebsetsQueryKey(args: InferRequestType<typeof client.v0.websets.$get>) {
  return ['v0', '/v0/websets', args] as const
}

export function getV0WebsetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v0.websets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsQueryKey>
  >({
    queryKey: getV0WebsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.websets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0Websets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.websets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebsetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0WebsetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0Websets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.websets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebsetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0WebsetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.websets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v0.websets.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
) {
  return ['v0', '/v0/websets/:id', args] as const
}

export function getV0WebsetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebsetsIdQueryKey>
  >({
    queryKey: getV0WebsetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.websets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0WebsetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebsetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0WebsetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0WebsetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebsetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0WebsetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.websets)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v0.websets)[':id']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/searches/:id', args] as const
}

export function getV0WebsetsWebsetSearchesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0WebsetsWebsetSearchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.websets[':webset'].searches[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getV0WebsetsWebsetSearchesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV0WebsetsWebsetSearchesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV0WebsetsWebsetSearchesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/enrichments/:id', args] as const
}

export function getV0WebsetsWebsetEnrichmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0WebsetsWebsetEnrichmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.websets[':webset'].enrichments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV0WebsetsWebsetEnrichmentsIdQueryKey>
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
      ...getV0WebsetsWebsetEnrichmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV0WebsetsWebsetEnrichmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV0WebsetsWebsetEnrichmentsIdQueryKey>
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
      ...getV0WebsetsWebsetEnrichmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/items/:id', args] as const
}

export function getV0WebsetsWebsetItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0WebsetsWebsetItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.websets[':webset'].items[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV0WebsetsWebsetItemsIdQueryKey>
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
      ...getV0WebsetsWebsetItemsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV0WebsetsWebsetItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV0WebsetsWebsetItemsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
) {
  return ['v0', '/v0/websets/:webset/items', args] as const
}

export function getV0WebsetsWebsetItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0WebsetsWebsetItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.websets[':webset'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV0WebsetsWebsetItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0WebsetsWebsetItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0WebsetsWebsetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.websets)[':webset']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0WebsetsWebsetItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getV0MonitorsQueryKey(args: InferRequestType<typeof client.v0.monitors.$get>) {
  return ['v0', '/v0/monitors', args] as const
}

export function getV0MonitorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v0.monitors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0MonitorsQueryKey>
  >({
    queryKey: getV0MonitorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.monitors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0Monitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.monitors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0MonitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0MonitorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0Monitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.monitors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0MonitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0MonitorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.monitors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v0.monitors.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
) {
  return ['v0', '/v0/monitors/:id', args] as const
}

export function getV0MonitorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0MonitorsIdQueryKey>
  >({
    queryKey: getV0MonitorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.monitors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0MonitorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0MonitorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0MonitorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0MonitorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0MonitorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0MonitorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v0.monitors)[':id']['$delete']>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.monitors)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v0.monitors)[':id']['$patch']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
) {
  return ['v0', '/v0/monitors/:monitor/runs', args] as const
}

export function getV0MonitorsMonitorRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0MonitorsMonitorRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.monitors[':monitor'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV0MonitorsMonitorRunsQueryKey>
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
      ...getV0MonitorsMonitorRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV0MonitorsMonitorRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV0MonitorsMonitorRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV0MonitorsMonitorRunsIdQueryKey(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
) {
  return ['v0', '/v0/monitors/:monitor/runs/:id', args] as const
}

export function getV0MonitorsMonitorRunsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0MonitorsMonitorRunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.monitors[':monitor'].runs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV0MonitorsMonitorRunsIdQueryKey>
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
      ...getV0MonitorsMonitorRunsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV0MonitorsMonitorRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV0MonitorsMonitorRunsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV0ImportsQueryKey(args: InferRequestType<typeof client.v0.imports.$get>) {
  return ['v0', '/v0/imports', args] as const
}

export function getV0ImportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v0.imports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0ImportsQueryKey>
  >({
    queryKey: getV0ImportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.imports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0Imports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.imports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0ImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0ImportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0Imports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.imports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0ImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0ImportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.imports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v0.imports.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
) {
  return ['v0', '/v0/imports/:id', args] as const
}

export function getV0ImportsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0ImportsIdQueryKey>
  >({
    queryKey: getV0ImportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.imports[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0ImportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0ImportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0ImportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0ImportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0ImportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0ImportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.imports)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v0.imports)[':id']['$delete']>,
        TOnMutateResult
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

export function getV0WebhooksQueryKey(args: InferRequestType<typeof client.v0.webhooks.$get>) {
  return ['v0', '/v0/webhooks', args] as const
}

export function getV0WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v0.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0WebhooksQueryKey>
  >({
    queryKey: getV0WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v0.webhooks.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
) {
  return ['v0', '/v0/webhooks/:id', args] as const
}

export function getV0WebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0WebhooksIdQueryKey>
  >({
    queryKey: getV0WebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0WebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0WebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0WebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
) {
  return ['v0', '/v0/webhooks/:id/attempts', args] as const
}

export function getV0WebhooksIdAttemptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV0WebhooksIdAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.webhooks[':id'].attempts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV0WebhooksIdAttemptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0WebhooksIdAttemptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0WebhooksIdAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0WebhooksIdAttemptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV0EventsQueryKey(args: InferRequestType<typeof client.v0.events.$get>) {
  return ['v0', '/v0/events', args] as const
}

export function getV0EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v0.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV0EventsQueryKey>
  >({
    queryKey: getV0EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v0.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v0.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV0EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV0EventsIdQueryKey(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
) {
  return ['v0', '/v0/events/:id', args] as const
}

export function getV0EventsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0EventsIdQueryKey>
  >({
    queryKey: getV0EventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.events[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV0EventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0EventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV0EventsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV0EventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0.events)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0EventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV0EventsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
