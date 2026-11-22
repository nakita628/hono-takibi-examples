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
  args: MaybeRefOrGetter<InferRequestType<typeof client.automate_workflows.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['automate_workflows', '/automate_workflows', keyArgs] as const
}

export function getAutomateWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.automate_workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomateWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automate_workflows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutomateWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.automate_workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>
            >
          >,
          ReturnType<typeof getAutomateWorkflowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAutomateWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomateWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automate_workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.convert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.notes.convert.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.document_splits.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['document_splits', '/document_splits', keyArgs] as const
}

export function getDocumentSplitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.document_splits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentSplitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document_splits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentSplits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.document_splits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>
            >
          >,
          ReturnType<typeof getDocumentSplitsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentSplitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentSplitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.document_splits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.document_splits.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['document_splits', '/document_splits/:document_split_id', keyArgs] as const
}

export function getDocumentSplitsDocumentSplitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentSplitsDocumentSplitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document_splits[':document_split_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentSplitsDocumentSplitIdQueryKey>
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
          Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentSplitsDocumentSplitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentSplitsDocumentSplitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.document_splits[':document_split_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
          TError,
          InferRequestType<typeof client.query.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_insights.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.query_insights.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_systems.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_systems', '/shuttle_systems', keyArgs] as const
}

export function getShuttleSystemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_systems.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_systems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttleSystems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_systems.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>
            >
          >,
          ReturnType<typeof getShuttleSystemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_systems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shuttle_systems.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', keyArgs] as const
}

export function getShuttleSystemsShuttleSystemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleSystemsShuttleSystemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_systems[':shuttle_system_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShuttleSystemsShuttleSystemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSystemsShuttleSystemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleSystemsShuttleSystemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_systems[':shuttle_system_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getShuttleJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_jobs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_jobs', '/shuttle_jobs', keyArgs] as const
}

export function getShuttleJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShuttleJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
          >,
          ReturnType<typeof getShuttleJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShuttleJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.shuttle_jobs.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', keyArgs] as const
}

export function getShuttleJobsShuttleJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleJobsShuttleJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_jobs[':shuttle_job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShuttleJobsShuttleJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleJobsShuttleJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleJobsShuttleJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_jobs[':shuttle_job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getShuttleRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_runs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_runs', '/shuttle_runs', keyArgs] as const
}

export function getShuttleRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_runs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_runs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShuttleRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_runs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
          >,
          ReturnType<typeof getShuttleRunsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShuttleRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShuttleRunsShuttleRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_runs', '/shuttle_runs/:shuttle_run_id', keyArgs] as const
}

export function getShuttleRunsShuttleRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleRunsShuttleRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_runs[':shuttle_run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShuttleRunsShuttleRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleRunsShuttleRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleRunsShuttleRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_runs[':shuttle_run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShuttleJobSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_job_schedules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_job_schedules', '/shuttle_job_schedules', keyArgs] as const
}

export function getShuttleJobSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_job_schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleJobSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_job_schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttleJobSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_job_schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
            >
          >,
          ReturnType<typeof getShuttleJobSchedulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleJobSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleJobSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_job_schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    keyArgs,
  ] as const
}

export function getShuttleJobSchedulesShuttleJobScheduleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleJobSchedulesShuttleJobScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_job_schedules[':shuttle_job_schedule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShuttleJobSchedulesShuttleJobScheduleIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleJobSchedulesShuttleJobScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleJobSchedulesShuttleJobScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_job_schedules[':shuttle_job_schedule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_path_mappings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_path_mappings', '/shuttle_path_mappings', keyArgs] as const
}

export function getShuttlePathMappingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_path_mappings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttlePathMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_path_mappings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttlePathMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_path_mappings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
            >
          >,
          ReturnType<typeof getShuttlePathMappingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttlePathMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttlePathMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_path_mappings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    keyArgs,
  ] as const
}

export function getShuttlePathMappingsShuttlePathMappingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttlePathMappingsShuttlePathMappingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_path_mappings[':shuttle_path_mapping_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShuttlePathMappingsShuttlePathMappingIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttlePathMappingsShuttlePathMappingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttlePathMappingsShuttlePathMappingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_path_mappings[':shuttle_path_mapping_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_subject_mappings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_subject_mappings', '/shuttle_subject_mappings', keyArgs] as const
}

export function getShuttleSubjectMappingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_subject_mappings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleSubjectMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_subject_mappings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttleSubjectMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_subject_mappings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
            >
          >,
          ReturnType<typeof getShuttleSubjectMappingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleSubjectMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleSubjectMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_subject_mappings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shuttle_subject_mappings.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.shuttle_subject_mappings.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'shuttle_subject_mappings',
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id',
    keyArgs,
  ] as const
}

export function getShuttleSubjectMappingsShuttleSubjectMappingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleSubjectMappingsShuttleSubjectMappingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_discovered_subjects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_discovered_subjects', '/shuttle_discovered_subjects', keyArgs] as const
}

export function getShuttleDiscoveredSubjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_discovered_subjects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleDiscoveredSubjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_discovered_subjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttleDiscoveredSubjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_discovered_subjects.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>
              >
            >
          >,
          ReturnType<typeof getShuttleDiscoveredSubjectsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleDiscoveredSubjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleDiscoveredSubjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_discovered_subjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShuttlePathEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_path_entries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_path_entries', '/shuttle_path_entries', keyArgs] as const
}

export function getShuttlePathEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_path_entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttlePathEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_path_entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttlePathEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_path_entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
            >
          >,
          ReturnType<typeof getShuttlePathEntriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShuttlePathEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttlePathEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_path_entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShuttleMappingErrorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_mapping_errors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_mapping_errors', '/shuttle_mapping_errors', keyArgs] as const
}

export function getShuttleMappingErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_mapping_errors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleMappingErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_mapping_errors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttleMappingErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_mapping_errors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
            >
          >,
          ReturnType<typeof getShuttleMappingErrorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleMappingErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleMappingErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_mapping_errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShuttleReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_reports', '/shuttle_reports', keyArgs] as const
}

export function getShuttleReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShuttleReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shuttle_reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>
            >
          >,
          ReturnType<typeof getShuttleReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shuttle_reports.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shuttle_reports', '/shuttle_reports/:shuttle_report_id', keyArgs] as const
}

export function getShuttleReportsShuttleReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShuttleReportsShuttleReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shuttle_reports[':shuttle_report_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShuttleReportsShuttleReportIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShuttleReportsShuttleReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShuttleReportsShuttleReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shuttle_reports[':shuttle_report_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAiSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai_sessions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ai_sessions', '/ai_sessions', keyArgs] as const
}

export function getAiSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai_sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai_sessions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAiSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai_sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
          >,
          ReturnType<typeof getAiSessionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai_sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
