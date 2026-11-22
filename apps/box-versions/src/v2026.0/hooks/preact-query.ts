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

export function getAiSessionsKey() {
  return ['ai_sessions'] as const
}

export function getAutomateWorkflowsKey() {
  return ['automate_workflows'] as const
}

export function getDocumentSplitsKey() {
  return ['document_splits'] as const
}

export function getNotesKey() {
  return ['notes'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueryInsightsKey() {
  return ['query_insights'] as const
}

export function getShuttleDiscoveredSubjectsKey() {
  return ['shuttle_discovered_subjects'] as const
}

export function getShuttleJobSchedulesKey() {
  return ['shuttle_job_schedules'] as const
}

export function getShuttleJobsKey() {
  return ['shuttle_jobs'] as const
}

export function getShuttleMappingErrorsKey() {
  return ['shuttle_mapping_errors'] as const
}

export function getShuttlePathEntriesKey() {
  return ['shuttle_path_entries'] as const
}

export function getShuttlePathMappingImportsKey() {
  return ['shuttle_path_mapping_imports'] as const
}

export function getShuttlePathMappingsKey() {
  return ['shuttle_path_mappings'] as const
}

export function getShuttleReportsKey() {
  return ['shuttle_reports'] as const
}

export function getShuttleRunsKey() {
  return ['shuttle_runs'] as const
}

export function getShuttleSubjectMappingImportsKey() {
  return ['shuttle_subject_mapping_imports'] as const
}

export function getShuttleSubjectMappingsKey() {
  return ['shuttle_subject_mappings'] as const
}

export function getShuttleSystemsKey() {
  return ['shuttle_systems'] as const
}

export function getAutomateWorkflowsQueryKey(
  args: InferRequestType<typeof client.automate_workflows.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['automate_workflows', '/automate_workflows', keyArgs] as const
}

export function getAutomateWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.automate_workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAutomateWorkflowsQueryKey>
  >({
    queryKey: getAutomateWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automate_workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAutomateWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.automate_workflows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomateWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomateWorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomateWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.automate_workflows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomateWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomateWorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAutomateWorkflowsWorkflowIdStartMutationKey() {
  return ['automate_workflows', '/automate_workflows/:workflow_id/start', 'POST'] as const
}

export function getPostAutomateWorkflowsWorkflowIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomateWorkflowsWorkflowIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>,
    ) {
      return parseResponse(client.automate_workflows[':workflow_id'].start.$post(args, options))
    },
  })
}

export function usePostAutomateWorkflowsWorkflowIdStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomateWorkflowsWorkflowIdStartMutationOptions<
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

export function getPostNotesConvertMutationKey() {
  return ['notes', '/notes/convert', 'POST'] as const
}

export function getPostNotesConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.convert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notes.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotesConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notes.convert.$post>) {
      return parseResponse(client.notes.convert.$post(args, options))
    },
  })
}

export function usePostNotesConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.convert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.notes.convert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotesConvertMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentSplitsQueryKey(
  args: InferRequestType<typeof client.document_splits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['document_splits', '/document_splits', keyArgs] as const
}

export function getDocumentSplitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.document_splits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentSplitsQueryKey>
  >({
    queryKey: getDocumentSplitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document_splits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentSplits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.document_splits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentSplitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentSplitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentSplits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.document_splits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentSplitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentSplitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDocumentSplitsMutationKey() {
  return ['document_splits', '/document_splits', 'POST'] as const
}

export function getPostDocumentSplitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.document_splits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentSplitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.document_splits.$post>) {
      return parseResponse(client.document_splits.$post(args, options))
    },
  })
}

export function usePostDocumentSplits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.document_splits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentSplitsMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentSplitsDocumentSplitIdQueryKey(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['document_splits', '/document_splits/:document_split_id', keyArgs] as const
}

export function getDocumentSplitsDocumentSplitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentSplitsDocumentSplitIdQueryKey>
  >({
    queryKey: getDocumentSplitsDocumentSplitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document_splits[':document_split_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentSplitsDocumentSplitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentSplitsDocumentSplitIdQueryKey>
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
      ...getDocumentSplitsDocumentSplitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentSplitsDocumentSplitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentSplitsDocumentSplitIdQueryKey>
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
      ...getDocumentSplitsDocumentSplitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostQueryMutationKey() {
  return ['query', '/query', 'POST'] as const
}

export function getPostQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.$post>) {
      return parseResponse(client.query.$post(args, options))
    },
  })
}

export function usePostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
        TError,
        InferRequestType<typeof client.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQueryInsightsMutationKey() {
  return ['query_insights', '/query_insights', 'POST'] as const
}

export function getPostQueryInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_insights.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.query_insights.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryInsightsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query_insights.$post>) {
      return parseResponse(client.query_insights.$post(args, options))
    },
  })
}

export function usePostQueryInsights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_insights.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.query_insights.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueryInsightsMutationOptions<TError, TOnMutateResult>(
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

export function getShuttleSystemsQueryKey(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_systems', '/shuttle_systems', keyArgs] as const
}

export function getShuttleSystemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shuttle_systems.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSystemsQueryKey>
  >({
    queryKey: getShuttleSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_systems.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttleSystems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSystemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttleSystemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttleSystems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSystemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttleSystemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostShuttleSystemsMutationKey() {
  return ['shuttle_systems', '/shuttle_systems', 'POST'] as const
}

export function getPostShuttleSystemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shuttle_systems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleSystemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_systems.$post>) {
      return parseResponse(client.shuttle_systems.$post(args, options))
    },
  })
}

export function usePostShuttleSystems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.shuttle_systems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleSystemsMutationOptions<TError, TOnMutateResult>(
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

export function getShuttleSystemsShuttleSystemIdQueryKey(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', keyArgs] as const
}

export function getShuttleSystemsShuttleSystemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSystemsShuttleSystemIdQueryKey>
  >({
    queryKey: getShuttleSystemsShuttleSystemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_systems[':shuttle_system_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleSystemsShuttleSystemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSystemsShuttleSystemIdQueryKey>
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
      ...getShuttleSystemsShuttleSystemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleSystemsShuttleSystemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSystemsShuttleSystemIdQueryKey>
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
      ...getShuttleSystemsShuttleSystemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShuttleSystemsShuttleSystemIdMutationKey() {
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', 'PUT'] as const
}

export function getPutShuttleSystemsShuttleSystemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShuttleSystemsShuttleSystemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>,
    ) {
      return parseResponse(client.shuttle_systems[':shuttle_system_id'].$put(args, options))
    },
  })
}

export function usePutShuttleSystemsShuttleSystemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShuttleSystemsShuttleSystemIdMutationOptions<
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

export function getDeleteShuttleSystemsShuttleSystemIdMutationKey() {
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', 'DELETE'] as const
}

export function getDeleteShuttleSystemsShuttleSystemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShuttleSystemsShuttleSystemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>,
    ) {
      return parseResponse(client.shuttle_systems[':shuttle_system_id'].$delete(args, options))
    },
  })
}

export function useDeleteShuttleSystemsShuttleSystemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteShuttleSystemsShuttleSystemIdMutationOptions<
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

export function getPostShuttleSystemsShuttleSystemIdIssueRegistrationTokenMutationKey() {
  return [
    'shuttle_systems',
    '/shuttle_systems/:shuttle_system_id/issue_registration_token',
    'POST',
  ] as const
}

export function getPostShuttleSystemsShuttleSystemIdIssueRegistrationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleSystemsShuttleSystemIdIssueRegistrationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
      >,
    ) {
      return parseResponse(
        client.shuttle_systems[':shuttle_system_id'].issue_registration_token.$post(args, options),
      )
    },
  })
}

export function usePostShuttleSystemsShuttleSystemIdIssueRegistrationToken<
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
                  (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
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
    getPostShuttleSystemsShuttleSystemIdIssueRegistrationTokenMutationOptions<
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

export function getShuttleJobsQueryKey(args: InferRequestType<typeof client.shuttle_jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_jobs', '/shuttle_jobs', keyArgs] as const
}

export function getShuttleJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shuttle_jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShuttleJobsQueryKey>
  >({
    queryKey: getShuttleJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttleJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttleJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttleJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttleJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostShuttleJobsMutationKey() {
  return ['shuttle_jobs', '/shuttle_jobs', 'POST'] as const
}

export function getPostShuttleJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shuttle_jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_jobs.$post>) {
      return parseResponse(client.shuttle_jobs.$post(args, options))
    },
  })
}

export function usePostShuttleJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.shuttle_jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShuttleJobsShuttleJobIdQueryKey(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', keyArgs] as const
}

export function getShuttleJobsShuttleJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleJobsShuttleJobIdQueryKey>
  >({
    queryKey: getShuttleJobsShuttleJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_jobs[':shuttle_job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleJobsShuttleJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobsShuttleJobIdQueryKey>
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
      ...getShuttleJobsShuttleJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleJobsShuttleJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobsShuttleJobIdQueryKey>
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
      ...getShuttleJobsShuttleJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShuttleJobsShuttleJobIdMutationKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', 'PUT'] as const
}

export function getPutShuttleJobsShuttleJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShuttleJobsShuttleJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>,
    ) {
      return parseResponse(client.shuttle_jobs[':shuttle_job_id'].$put(args, options))
    },
  })
}

export function usePutShuttleJobsShuttleJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShuttleJobsShuttleJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteShuttleJobsShuttleJobIdMutationKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', 'DELETE'] as const
}

export function getDeleteShuttleJobsShuttleJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShuttleJobsShuttleJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>,
    ) {
      return parseResponse(client.shuttle_jobs[':shuttle_job_id'].$delete(args, options))
    },
  })
}

export function useDeleteShuttleJobsShuttleJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteShuttleJobsShuttleJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostShuttleJobsShuttleJobIdStartMutationKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id/start', 'POST'] as const
}

export function getPostShuttleJobsShuttleJobIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleJobsShuttleJobIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>,
    ) {
      return parseResponse(client.shuttle_jobs[':shuttle_job_id'].start.$post(args, options))
    },
  })
}

export function usePostShuttleJobsShuttleJobIdStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleJobsShuttleJobIdStartMutationOptions<
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

export function getPostShuttleJobsShuttleJobIdStopMutationKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id/stop', 'POST'] as const
}

export function getPostShuttleJobsShuttleJobIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleJobsShuttleJobIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>,
    ) {
      return parseResponse(client.shuttle_jobs[':shuttle_job_id'].stop.$post(args, options))
    },
  })
}

export function usePostShuttleJobsShuttleJobIdStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleJobsShuttleJobIdStopMutationOptions<
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

export function getPostShuttleJobsShuttleJobIdPrepareMigrationMutationKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id/prepare_migration', 'POST'] as const
}

export function getPostShuttleJobsShuttleJobIdPrepareMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleJobsShuttleJobIdPrepareMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']
      >,
    ) {
      return parseResponse(
        client.shuttle_jobs[':shuttle_job_id'].prepare_migration.$post(args, options),
      )
    },
  })
}

export function usePostShuttleJobsShuttleJobIdPrepareMigration<
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
                  (typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']
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
  const mutationDefaults = getPostShuttleJobsShuttleJobIdPrepareMigrationMutationOptions<
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

export function getShuttleRunsQueryKey(args: InferRequestType<typeof client.shuttle_runs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_runs', '/shuttle_runs', keyArgs] as const
}

export function getShuttleRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shuttle_runs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShuttleRunsQueryKey>
  >({
    queryKey: getShuttleRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttleRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_runs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttleRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttleRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_runs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttleRunsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShuttleRunsShuttleRunIdQueryKey(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_runs', '/shuttle_runs/:shuttle_run_id', keyArgs] as const
}

export function getShuttleRunsShuttleRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleRunsShuttleRunIdQueryKey>
  >({
    queryKey: getShuttleRunsShuttleRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_runs[':shuttle_run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleRunsShuttleRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleRunsShuttleRunIdQueryKey>
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
      ...getShuttleRunsShuttleRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleRunsShuttleRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleRunsShuttleRunIdQueryKey>
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
      ...getShuttleRunsShuttleRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShuttleJobSchedulesQueryKey(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_job_schedules', '/shuttle_job_schedules', keyArgs] as const
}

export function getShuttleJobSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleJobSchedulesQueryKey>
  >({
    queryKey: getShuttleJobSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_job_schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttleJobSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttleJobSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttleJobSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttleJobSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostShuttleJobSchedulesMutationKey() {
  return ['shuttle_job_schedules', '/shuttle_job_schedules', 'POST'] as const
}

export function getPostShuttleJobSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shuttle_job_schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleJobSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_job_schedules.$post>) {
      return parseResponse(client.shuttle_job_schedules.$post(args, options))
    },
  })
}

export function usePostShuttleJobSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shuttle_job_schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleJobSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getShuttleJobSchedulesShuttleJobScheduleIdQueryKey(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    keyArgs,
  ] as const
}

export function getShuttleJobSchedulesShuttleJobScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleJobSchedulesShuttleJobScheduleIdQueryKey>
  >({
    queryKey: getShuttleJobSchedulesShuttleJobScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_job_schedules[':shuttle_job_schedule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleJobSchedulesShuttleJobScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobSchedulesShuttleJobScheduleIdQueryKey>
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
      ...getShuttleJobSchedulesShuttleJobScheduleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleJobSchedulesShuttleJobScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleJobSchedulesShuttleJobScheduleIdQueryKey>
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
      ...getShuttleJobSchedulesShuttleJobScheduleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShuttleJobSchedulesShuttleJobScheduleIdMutationKey() {
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    'PUT',
  ] as const
}

export function getPutShuttleJobSchedulesShuttleJobScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShuttleJobSchedulesShuttleJobScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']
      >,
    ) {
      return parseResponse(
        client.shuttle_job_schedules[':shuttle_job_schedule_id'].$put(args, options),
      )
    },
  })
}

export function usePutShuttleJobSchedulesShuttleJobScheduleId<
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
                  (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShuttleJobSchedulesShuttleJobScheduleIdMutationOptions<
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

export function getDeleteShuttleJobSchedulesShuttleJobScheduleIdMutationKey() {
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    'DELETE',
  ] as const
}

export function getDeleteShuttleJobSchedulesShuttleJobScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShuttleJobSchedulesShuttleJobScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.shuttle_job_schedules[':shuttle_job_schedule_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteShuttleJobSchedulesShuttleJobScheduleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']
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
  const mutationDefaults = getDeleteShuttleJobSchedulesShuttleJobScheduleIdMutationOptions<
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

export function getShuttlePathMappingsQueryKey(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_path_mappings', '/shuttle_path_mappings', keyArgs] as const
}

export function getShuttlePathMappingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttlePathMappingsQueryKey>
  >({
    queryKey: getShuttlePathMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_path_mappings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttlePathMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttlePathMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttlePathMappingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttlePathMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttlePathMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttlePathMappingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostShuttlePathMappingsMutationKey() {
  return ['shuttle_path_mappings', '/shuttle_path_mappings', 'POST'] as const
}

export function getPostShuttlePathMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shuttle_path_mappings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttlePathMappingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_path_mappings.$post>) {
      return parseResponse(client.shuttle_path_mappings.$post(args, options))
    },
  })
}

export function usePostShuttlePathMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shuttle_path_mappings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttlePathMappingsMutationOptions<TError, TOnMutateResult>(
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

export function getShuttlePathMappingsShuttlePathMappingIdQueryKey(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    keyArgs,
  ] as const
}

export function getShuttlePathMappingsShuttlePathMappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttlePathMappingsShuttlePathMappingIdQueryKey>
  >({
    queryKey: getShuttlePathMappingsShuttlePathMappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_path_mappings[':shuttle_path_mapping_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttlePathMappingsShuttlePathMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttlePathMappingsShuttlePathMappingIdQueryKey>
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
      ...getShuttlePathMappingsShuttlePathMappingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttlePathMappingsShuttlePathMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttlePathMappingsShuttlePathMappingIdQueryKey>
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
      ...getShuttlePathMappingsShuttlePathMappingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShuttlePathMappingsShuttlePathMappingIdMutationKey() {
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    'PUT',
  ] as const
}

export function getPutShuttlePathMappingsShuttlePathMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShuttlePathMappingsShuttlePathMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']
      >,
    ) {
      return parseResponse(
        client.shuttle_path_mappings[':shuttle_path_mapping_id'].$put(args, options),
      )
    },
  })
}

export function usePutShuttlePathMappingsShuttlePathMappingId<
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
                  (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShuttlePathMappingsShuttlePathMappingIdMutationOptions<
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

export function getDeleteShuttlePathMappingsShuttlePathMappingIdMutationKey() {
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    'DELETE',
  ] as const
}

export function getDeleteShuttlePathMappingsShuttlePathMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShuttlePathMappingsShuttlePathMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.shuttle_path_mappings[':shuttle_path_mapping_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteShuttlePathMappingsShuttlePathMappingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']
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
  const mutationDefaults = getDeleteShuttlePathMappingsShuttlePathMappingIdMutationOptions<
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

export function getPostShuttlePathMappingImportsMutationKey() {
  return ['shuttle_path_mapping_imports', '/shuttle_path_mapping_imports', 'POST'] as const
}

export function getPostShuttlePathMappingImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mapping_imports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shuttle_path_mapping_imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttlePathMappingImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_path_mapping_imports.$post>) {
      return parseResponse(client.shuttle_path_mapping_imports.$post(args, options))
    },
  })
}

export function usePostShuttlePathMappingImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shuttle_path_mapping_imports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shuttle_path_mapping_imports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttlePathMappingImportsMutationOptions<TError, TOnMutateResult>(
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

export function getPostShuttleSubjectMappingImportsMutationKey() {
  return ['shuttle_subject_mapping_imports', '/shuttle_subject_mapping_imports', 'POST'] as const
}

export function getPostShuttleSubjectMappingImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shuttle_subject_mapping_imports.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shuttle_subject_mapping_imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleSubjectMappingImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_subject_mapping_imports.$post>) {
      return parseResponse(client.shuttle_subject_mapping_imports.$post(args, options))
    },
  })
}

export function usePostShuttleSubjectMappingImports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shuttle_subject_mapping_imports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shuttle_subject_mapping_imports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleSubjectMappingImportsMutationOptions<
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

export function getShuttleSubjectMappingsQueryKey(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_subject_mappings', '/shuttle_subject_mappings', keyArgs] as const
}

export function getShuttleSubjectMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSubjectMappingsQueryKey>
  >({
    queryKey: getShuttleSubjectMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_subject_mappings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleSubjectMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSubjectMappingsQueryKey>
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
      ...getShuttleSubjectMappingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleSubjectMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSubjectMappingsQueryKey>
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
      ...getShuttleSubjectMappingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShuttleSubjectMappingsMutationKey() {
  return ['shuttle_subject_mappings', '/shuttle_subject_mappings', 'POST'] as const
}

export function getPostShuttleSubjectMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shuttle_subject_mappings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleSubjectMappingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_subject_mappings.$post>) {
      return parseResponse(client.shuttle_subject_mappings.$post(args, options))
    },
  })
}

export function usePostShuttleSubjectMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shuttle_subject_mappings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleSubjectMappingsMutationOptions<TError, TOnMutateResult>(
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

export function getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shuttle_subject_mappings',
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id',
    keyArgs,
  ] as const
}

export function getShuttleSubjectMappingsShuttleSubjectMappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey>
  >({
    queryKey: getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleSubjectMappingsShuttleSubjectMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey>
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
      ...getShuttleSubjectMappingsShuttleSubjectMappingIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleSubjectMappingsShuttleSubjectMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey>
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
      ...getShuttleSubjectMappingsShuttleSubjectMappingIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShuttleSubjectMappingsShuttleSubjectMappingIdMutationKey() {
  return [
    'shuttle_subject_mappings',
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id',
    'PUT',
  ] as const
}

export function getPutShuttleSubjectMappingsShuttleSubjectMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutShuttleSubjectMappingsShuttleSubjectMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
      >,
    ) {
      return parseResponse(
        client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$put(args, options),
      )
    },
  })
}

export function usePutShuttleSubjectMappingsShuttleSubjectMappingId<
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
                  (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
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
  const mutationDefaults = getPutShuttleSubjectMappingsShuttleSubjectMappingIdMutationOptions<
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

export function getDeleteShuttleSubjectMappingsShuttleSubjectMappingIdMutationKey() {
  return [
    'shuttle_subject_mappings',
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id',
    'DELETE',
  ] as const
}

export function getDeleteShuttleSubjectMappingsShuttleSubjectMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteShuttleSubjectMappingsShuttleSubjectMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteShuttleSubjectMappingsShuttleSubjectMappingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
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
  const mutationDefaults = getDeleteShuttleSubjectMappingsShuttleSubjectMappingIdMutationOptions<
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

export function getShuttleDiscoveredSubjectsQueryKey(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_discovered_subjects', '/shuttle_discovered_subjects', keyArgs] as const
}

export function getShuttleDiscoveredSubjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleDiscoveredSubjectsQueryKey>
  >({
    queryKey: getShuttleDiscoveredSubjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_discovered_subjects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleDiscoveredSubjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleDiscoveredSubjectsQueryKey>
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
      ...getShuttleDiscoveredSubjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleDiscoveredSubjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleDiscoveredSubjectsQueryKey>
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
      ...getShuttleDiscoveredSubjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShuttlePathEntriesQueryKey(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_path_entries', '/shuttle_path_entries', keyArgs] as const
}

export function getShuttlePathEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shuttle_path_entries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShuttlePathEntriesQueryKey>
  >({
    queryKey: getShuttlePathEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_path_entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttlePathEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttlePathEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttlePathEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttlePathEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttlePathEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttlePathEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShuttleMappingErrorsQueryKey(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_mapping_errors', '/shuttle_mapping_errors', keyArgs] as const
}

export function getShuttleMappingErrorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleMappingErrorsQueryKey>
  >({
    queryKey: getShuttleMappingErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_mapping_errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleMappingErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleMappingErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttleMappingErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttleMappingErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleMappingErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttleMappingErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShuttleReportsQueryKey(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_reports', '/shuttle_reports', keyArgs] as const
}

export function getShuttleReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shuttle_reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleReportsQueryKey>
  >({
    queryKey: getShuttleReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShuttleReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShuttleReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShuttleReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShuttleReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostShuttleReportsMutationKey() {
  return ['shuttle_reports', '/shuttle_reports', 'POST'] as const
}

export function getPostShuttleReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shuttle_reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShuttleReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shuttle_reports.$post>) {
      return parseResponse(client.shuttle_reports.$post(args, options))
    },
  })
}

export function usePostShuttleReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.shuttle_reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShuttleReportsMutationOptions<TError, TOnMutateResult>(
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

export function getShuttleReportsShuttleReportIdQueryKey(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_reports', '/shuttle_reports/:shuttle_report_id', keyArgs] as const
}

export function getShuttleReportsShuttleReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleReportsShuttleReportIdQueryKey>
  >({
    queryKey: getShuttleReportsShuttleReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shuttle_reports[':shuttle_report_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShuttleReportsShuttleReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleReportsShuttleReportIdQueryKey>
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
      ...getShuttleReportsShuttleReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShuttleReportsShuttleReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShuttleReportsShuttleReportIdQueryKey>
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
      ...getShuttleReportsShuttleReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAiSessionsQueryKey(args: InferRequestType<typeof client.ai_sessions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ai_sessions', '/ai_sessions', keyArgs] as const
}

export function getAiSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ai_sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiSessionsQueryKey>
  >({
    queryKey: getAiSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ai_sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAiSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai_sessions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAiSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ai_sessions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAiSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAiSessionsAiSessionIdMutationKey() {
  return ['ai_sessions', '/ai_sessions/:ai_session_id', 'DELETE'] as const
}

export function getDeleteAiSessionsAiSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiSessionsAiSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>,
    ) {
      return parseResponse(client.ai_sessions[':ai_session_id'].$delete(args, options))
    },
  })
}

export function useDeleteAiSessionsAiSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAiSessionsAiSessionIdMutationOptions<TError, TOnMutateResult>(
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
