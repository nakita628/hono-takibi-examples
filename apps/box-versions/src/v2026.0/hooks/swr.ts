import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAutomateWorkflowsKey(
  args: InferRequestType<typeof client.automate_workflows.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['automate_workflows', '/automate_workflows', keyArgs] as const
}

export function useGetAutomateWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.automate_workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
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
        ? getGetAutomateWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automate_workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomateWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.automate_workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
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
        ? getGetAutomateWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automate_workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automate_workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomateWorkflowsWorkflowIdStartKey() {
  return ['automate_workflows', '/automate_workflows/:workflow_id/start', 'POST'] as const
}

export function usePostAutomateWorkflowsWorkflowIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.automate_workflows)[':workflow_id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomateWorkflowsWorkflowIdStartKey()
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
            (typeof client.automate_workflows)[':workflow_id']['start']['$post']
          >
        },
      ) => parseResponse(client.automate_workflows[':workflow_id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotesConvertKey() {
  return ['notes', '/notes/convert', 'POST'] as const
}

export function usePostNotesConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.convert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notes.convert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotesConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notes.convert.$post> }) =>
        parseResponse(client.notes.convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentSplitsKey(
  args: InferRequestType<typeof client.document_splits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['document_splits', '/document_splits', keyArgs] as const
}

export function useGetDocumentSplits<TError = unknown>(
  args: InferRequestType<typeof client.document_splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentSplitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.document_splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentSplits<TError = unknown>(
  args: InferRequestType<typeof client.document_splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentSplitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.document_splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentSplitsKey() {
  return ['document_splits', '/document_splits', 'POST'] as const
}

export function usePostDocumentSplits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.document_splits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.document_splits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentSplitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.document_splits.$post> }) =>
        parseResponse(client.document_splits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentSplitsDocumentSplitIdKey(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['document_splits', '/document_splits/:document_split_id', keyArgs] as const
}

export function useGetDocumentSplitsDocumentSplitId<TError = unknown>(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
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
        ? getGetDocumentSplitsDocumentSplitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.document_splits[':document_split_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentSplitsDocumentSplitId<TError = unknown>(
  args: InferRequestType<(typeof client.document_splits)[':document_split_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
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
        ? getGetDocumentSplitsDocumentSplitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.document_splits)[':document_split_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.document_splits[':document_split_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryKey() {
  return ['query', '/query', 'POST'] as const
}

export function usePostQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.$post> }) =>
        parseResponse(client.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryInsightsKey() {
  return ['query_insights', '/query_insights', 'POST'] as const
}

export function usePostQueryInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_insights.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.query_insights.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query_insights.$post> }) =>
        parseResponse(client.query_insights.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleSystemsKey(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_systems', '/shuttle_systems', keyArgs] as const
}

export function useGetShuttleSystems<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleSystemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_systems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleSystems<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_systems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleSystemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_systems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShuttleSystemsKey() {
  return ['shuttle_systems', '/shuttle_systems', 'POST'] as const
}

export function usePostShuttleSystems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_systems.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_systems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleSystemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shuttle_systems.$post> }) =>
        parseResponse(client.shuttle_systems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleSystemsShuttleSystemIdKey(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', keyArgs] as const
}

export function useGetShuttleSystemsShuttleSystemId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
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
        ? getGetShuttleSystemsShuttleSystemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shuttle_systems[':shuttle_system_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleSystemsShuttleSystemId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
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
        ? getGetShuttleSystemsShuttleSystemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shuttle_systems[':shuttle_system_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutShuttleSystemsShuttleSystemIdKey() {
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', 'PUT'] as const
}

export function usePutShuttleSystemsShuttleSystemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShuttleSystemsShuttleSystemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$put']> },
      ) => parseResponse(client.shuttle_systems[':shuttle_system_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShuttleSystemsShuttleSystemIdKey() {
  return ['shuttle_systems', '/shuttle_systems/:shuttle_system_id', 'DELETE'] as const
}

export function useDeleteShuttleSystemsShuttleSystemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShuttleSystemsShuttleSystemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shuttle_systems)[':shuttle_system_id']['$delete']>
        },
      ) => parseResponse(client.shuttle_systems[':shuttle_system_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShuttleSystemsShuttleSystemIdIssueRegistrationTokenKey() {
  return [
    'shuttle_systems',
    '/shuttle_systems/:shuttle_system_id/issue_registration_token',
    'POST',
  ] as const
}

export function usePostShuttleSystemsShuttleSystemIdIssueRegistrationToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleSystemsShuttleSystemIdIssueRegistrationTokenKey()
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
            (typeof client.shuttle_systems)[':shuttle_system_id']['issue_registration_token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_systems[':shuttle_system_id'].issue_registration_token.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleJobsKey(args: InferRequestType<typeof client.shuttle_jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_jobs', '/shuttle_jobs', keyArgs] as const
}

export function useGetShuttleJobs<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleJobs<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShuttleJobsKey() {
  return ['shuttle_jobs', '/shuttle_jobs', 'POST'] as const
}

export function usePostShuttleJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_jobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shuttle_jobs.$post> }) =>
        parseResponse(client.shuttle_jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleJobsShuttleJobIdKey(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', keyArgs] as const
}

export function useGetShuttleJobsShuttleJobId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
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
        ? getGetShuttleJobsShuttleJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_jobs[':shuttle_job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleJobsShuttleJobId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
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
        ? getGetShuttleJobsShuttleJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_jobs[':shuttle_job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutShuttleJobsShuttleJobIdKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', 'PUT'] as const
}

export function usePutShuttleJobsShuttleJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShuttleJobsShuttleJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$put']> },
      ) => parseResponse(client.shuttle_jobs[':shuttle_job_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShuttleJobsShuttleJobIdKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id', 'DELETE'] as const
}

export function useDeleteShuttleJobsShuttleJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShuttleJobsShuttleJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['$delete']> },
      ) => parseResponse(client.shuttle_jobs[':shuttle_job_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShuttleJobsShuttleJobIdStartKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id/start', 'POST'] as const
}

export function usePostShuttleJobsShuttleJobIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleJobsShuttleJobIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['start']['$post']>
        },
      ) => parseResponse(client.shuttle_jobs[':shuttle_job_id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShuttleJobsShuttleJobIdStopKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id/stop', 'POST'] as const
}

export function usePostShuttleJobsShuttleJobIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleJobsShuttleJobIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['stop']['$post']>
        },
      ) => parseResponse(client.shuttle_jobs[':shuttle_job_id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShuttleJobsShuttleJobIdPrepareMigrationKey() {
  return ['shuttle_jobs', '/shuttle_jobs/:shuttle_job_id/prepare_migration', 'POST'] as const
}

export function usePostShuttleJobsShuttleJobIdPrepareMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleJobsShuttleJobIdPrepareMigrationKey()
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
            (typeof client.shuttle_jobs)[':shuttle_job_id']['prepare_migration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_jobs[':shuttle_job_id'].prepare_migration.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleRunsKey(args: InferRequestType<typeof client.shuttle_runs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_runs', '/shuttle_runs', keyArgs] as const
}

export function useGetShuttleRuns<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleRuns<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_runs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShuttleRunsShuttleRunIdKey(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_runs', '/shuttle_runs/:shuttle_run_id', keyArgs] as const
}

export function useGetShuttleRunsShuttleRunId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
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
        ? getGetShuttleRunsShuttleRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_runs[':shuttle_run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleRunsShuttleRunId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
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
        ? getGetShuttleRunsShuttleRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_runs)[':shuttle_run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_runs[':shuttle_run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShuttleJobSchedulesKey(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_job_schedules', '/shuttle_job_schedules', keyArgs] as const
}

export function useGetShuttleJobSchedules<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
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
        ? getGetShuttleJobSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_job_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleJobSchedules<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_job_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
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
        ? getGetShuttleJobSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_job_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShuttleJobSchedulesKey() {
  return ['shuttle_job_schedules', '/shuttle_job_schedules', 'POST'] as const
}

export function usePostShuttleJobSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_job_schedules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_job_schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleJobSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shuttle_job_schedules.$post> },
      ) => parseResponse(client.shuttle_job_schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleJobSchedulesShuttleJobScheduleIdKey(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    keyArgs,
  ] as const
}

export function useGetShuttleJobSchedulesShuttleJobScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
            >
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
        ? getGetShuttleJobSchedulesShuttleJobScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shuttle_job_schedules[':shuttle_job_schedule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleJobSchedulesShuttleJobScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
            >
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
        ? getGetShuttleJobSchedulesShuttleJobScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shuttle_job_schedules[':shuttle_job_schedule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutShuttleJobSchedulesShuttleJobScheduleIdKey() {
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    'PUT',
  ] as const
}

export function usePutShuttleJobSchedulesShuttleJobScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShuttleJobSchedulesShuttleJobScheduleIdKey()
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
            (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_job_schedules[':shuttle_job_schedule_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteShuttleJobSchedulesShuttleJobScheduleIdKey() {
  return [
    'shuttle_job_schedules',
    '/shuttle_job_schedules/:shuttle_job_schedule_id',
    'DELETE',
  ] as const
}

export function useDeleteShuttleJobSchedulesShuttleJobScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShuttleJobSchedulesShuttleJobScheduleIdKey()
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
            (typeof client.shuttle_job_schedules)[':shuttle_job_schedule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_job_schedules[':shuttle_job_schedule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShuttlePathMappingsKey(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_path_mappings', '/shuttle_path_mappings', keyArgs] as const
}

export function useGetShuttlePathMappings<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
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
        ? getGetShuttlePathMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_path_mappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttlePathMappings<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_path_mappings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
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
        ? getGetShuttlePathMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_path_mappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShuttlePathMappingsKey() {
  return ['shuttle_path_mappings', '/shuttle_path_mappings', 'POST'] as const
}

export function usePostShuttlePathMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mappings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_path_mappings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttlePathMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shuttle_path_mappings.$post> },
      ) => parseResponse(client.shuttle_path_mappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttlePathMappingsShuttlePathMappingIdKey(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    keyArgs,
  ] as const
}

export function useGetShuttlePathMappingsShuttlePathMappingId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
            >
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
        ? getGetShuttlePathMappingsShuttlePathMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shuttle_path_mappings[':shuttle_path_mapping_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttlePathMappingsShuttlePathMappingId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
            >
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
        ? getGetShuttlePathMappingsShuttlePathMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shuttle_path_mappings[':shuttle_path_mapping_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutShuttlePathMappingsShuttlePathMappingIdKey() {
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    'PUT',
  ] as const
}

export function usePutShuttlePathMappingsShuttlePathMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShuttlePathMappingsShuttlePathMappingIdKey()
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
            (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_path_mappings[':shuttle_path_mapping_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteShuttlePathMappingsShuttlePathMappingIdKey() {
  return [
    'shuttle_path_mappings',
    '/shuttle_path_mappings/:shuttle_path_mapping_id',
    'DELETE',
  ] as const
}

export function useDeleteShuttlePathMappingsShuttlePathMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShuttlePathMappingsShuttlePathMappingIdKey()
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
            (typeof client.shuttle_path_mappings)[':shuttle_path_mapping_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_path_mappings[':shuttle_path_mapping_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostShuttlePathMappingImportsKey() {
  return ['shuttle_path_mapping_imports', '/shuttle_path_mapping_imports', 'POST'] as const
}

export function usePostShuttlePathMappingImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_mapping_imports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_path_mapping_imports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttlePathMappingImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shuttle_path_mapping_imports.$post> },
      ) => parseResponse(client.shuttle_path_mapping_imports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShuttleSubjectMappingImportsKey() {
  return ['shuttle_subject_mapping_imports', '/shuttle_subject_mapping_imports', 'POST'] as const
}

export function usePostShuttleSubjectMappingImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shuttle_subject_mapping_imports.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_subject_mapping_imports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleSubjectMappingImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shuttle_subject_mapping_imports.$post> },
      ) => parseResponse(client.shuttle_subject_mapping_imports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleSubjectMappingsKey(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_subject_mappings', '/shuttle_subject_mappings', keyArgs] as const
}

export function useGetShuttleSubjectMappings<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
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
        ? getGetShuttleSubjectMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_subject_mappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleSubjectMappings<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_subject_mappings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
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
        ? getGetShuttleSubjectMappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_subject_mappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShuttleSubjectMappingsKey() {
  return ['shuttle_subject_mappings', '/shuttle_subject_mappings', 'POST'] as const
}

export function usePostShuttleSubjectMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_subject_mappings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_subject_mappings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleSubjectMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shuttle_subject_mappings.$post> },
      ) => parseResponse(client.shuttle_subject_mappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleSubjectMappingsShuttleSubjectMappingIdKey(
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

export function useGetShuttleSubjectMappingsShuttleSubjectMappingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetShuttleSubjectMappingsShuttleSubjectMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleSubjectMappingsShuttleSubjectMappingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetShuttleSubjectMappingsShuttleSubjectMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutShuttleSubjectMappingsShuttleSubjectMappingIdKey() {
  return [
    'shuttle_subject_mappings',
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id',
    'PUT',
  ] as const
}

export function usePutShuttleSubjectMappingsShuttleSubjectMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShuttleSubjectMappingsShuttleSubjectMappingIdKey()
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
            (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteShuttleSubjectMappingsShuttleSubjectMappingIdKey() {
  return [
    'shuttle_subject_mappings',
    '/shuttle_subject_mappings/:shuttle_subject_mapping_id',
    'DELETE',
  ] as const
}

export function useDeleteShuttleSubjectMappingsShuttleSubjectMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShuttleSubjectMappingsShuttleSubjectMappingIdKey()
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
            (typeof client.shuttle_subject_mappings)[':shuttle_subject_mapping_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.shuttle_subject_mappings[':shuttle_subject_mapping_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleDiscoveredSubjectsKey(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_discovered_subjects', '/shuttle_discovered_subjects', keyArgs] as const
}

export function useGetShuttleDiscoveredSubjects<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
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
        ? getGetShuttleDiscoveredSubjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_discovered_subjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleDiscoveredSubjects<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_discovered_subjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
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
        ? getGetShuttleDiscoveredSubjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_discovered_subjects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_discovered_subjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShuttlePathEntriesKey(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_path_entries', '/shuttle_path_entries', keyArgs] as const
}

export function useGetShuttlePathEntries<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
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
        ? getGetShuttlePathEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_path_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttlePathEntries<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_path_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
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
        ? getGetShuttlePathEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_path_entries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_path_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShuttleMappingErrorsKey(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_mapping_errors', '/shuttle_mapping_errors', keyArgs] as const
}

export function useGetShuttleMappingErrors<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
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
        ? getGetShuttleMappingErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_mapping_errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleMappingErrors<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_mapping_errors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
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
        ? getGetShuttleMappingErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_mapping_errors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_mapping_errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShuttleReportsKey(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_reports', '/shuttle_reports', keyArgs] as const
}

export function useGetShuttleReports<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleReports<TError = unknown>(
  args: InferRequestType<typeof client.shuttle_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShuttleReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shuttle_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShuttleReportsKey() {
  return ['shuttle_reports', '/shuttle_reports', 'POST'] as const
}

export function usePostShuttleReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shuttle_reports.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shuttle_reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShuttleReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shuttle_reports.$post> }) =>
        parseResponse(client.shuttle_reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShuttleReportsShuttleReportIdKey(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shuttle_reports', '/shuttle_reports/:shuttle_report_id', keyArgs] as const
}

export function useGetShuttleReportsShuttleReportId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
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
        ? getGetShuttleReportsShuttleReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shuttle_reports[':shuttle_report_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShuttleReportsShuttleReportId<TError = unknown>(
  args: InferRequestType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
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
        ? getGetShuttleReportsShuttleReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shuttle_reports)[':shuttle_report_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shuttle_reports[':shuttle_report_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAiSessionsKey(args: InferRequestType<typeof client.ai_sessions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ai_sessions', '/ai_sessions', keyArgs] as const
}

export function useGetAiSessions<TError = unknown>(
  args: InferRequestType<typeof client.ai_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiSessions<TError = unknown>(
  args: InferRequestType<typeof client.ai_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai_sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAiSessionsAiSessionIdKey() {
  return ['ai_sessions', '/ai_sessions/:ai_session_id', 'DELETE'] as const
}

export function useDeleteAiSessionsAiSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ai_sessions)[':ai_session_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiSessionsAiSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ai_sessions)[':ai_session_id']['$delete']> },
      ) => parseResponse(client.ai_sessions[':ai_session_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
