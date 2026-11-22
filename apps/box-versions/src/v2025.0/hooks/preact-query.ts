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

export function getArchivesKey() {
  return ['archives'] as const
}

export function getDocgenBatchJobsKey() {
  return ['docgen_batch_jobs'] as const
}

export function getDocgenBatchesKey() {
  return ['docgen_batches'] as const
}

export function getDocgenJobsKey() {
  return ['docgen_jobs'] as const
}

export function getDocgenTemplateJobsKey() {
  return ['docgen_template_jobs'] as const
}

export function getDocgenTemplatesKey() {
  return ['docgen_templates'] as const
}

export function getEnterpriseConfigurationsKey() {
  return ['enterprise_configurations'] as const
}

export function getEnterpriseHubsKey() {
  return ['enterprise_hubs'] as const
}

export function getExternalUsersKey() {
  return ['external_users'] as const
}

export function getHubCollaborationsKey() {
  return ['hub_collaborations'] as const
}

export function getHubDocumentBlocksKey() {
  return ['hub_document_blocks'] as const
}

export function getHubDocumentPagesKey() {
  return ['hub_document_pages'] as const
}

export function getHubItemsKey() {
  return ['hub_items'] as const
}

export function getHubsKey() {
  return ['hubs'] as const
}

export function getShieldListsKey() {
  return ['shield_lists'] as const
}

export function getDocgenTemplatesQueryKey(
  args: InferRequestType<typeof client.docgen_templates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_templates', '/docgen_templates', keyArgs] as const
}

export function getDocgenTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.docgen_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocgenTemplatesQueryKey>
  >({
    queryKey: getDocgenTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocgenTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.docgen_templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocgenTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocgenTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.docgen_templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocgenTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDocgenTemplatesMutationKey() {
  return ['docgen_templates', '/docgen_templates', 'POST'] as const
}

export function getPostDocgenTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.docgen_templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocgenTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.docgen_templates.$post>) {
      return parseResponse(client.docgen_templates.$post(args, options))
    },
  })
}

export function usePostDocgenTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.docgen_templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocgenTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getDocgenTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_templates', '/docgen_templates/:template_id', keyArgs] as const
}

export function getDocgenTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocgenTemplatesTemplateIdQueryKey>
  >({
    queryKey: getDocgenTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocgenTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplatesTemplateIdQueryKey>
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
      ...getDocgenTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocgenTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplatesTemplateIdQueryKey>
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
      ...getDocgenTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDocgenTemplatesTemplateIdMutationKey() {
  return ['docgen_templates', '/docgen_templates/:template_id', 'DELETE'] as const
}

export function getDeleteDocgenTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.docgen_templates)[':template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocgenTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$delete']>,
    ) {
      return parseResponse(client.docgen_templates[':template_id'].$delete(args, options))
    },
  })
}

export function useDeleteDocgenTemplatesTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.docgen_templates)[':template_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDocgenTemplatesTemplateIdMutationOptions<
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

export function getDocgenTemplatesTemplateIdTagsQueryKey(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_templates', '/docgen_templates/:template_id/tags', keyArgs] as const
}

export function getDocgenTemplatesTemplateIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocgenTemplatesTemplateIdTagsQueryKey>
  >({
    queryKey: getDocgenTemplatesTemplateIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_templates[':template_id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocgenTemplatesTemplateIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplatesTemplateIdTagsQueryKey>
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
      ...getDocgenTemplatesTemplateIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocgenTemplatesTemplateIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplatesTemplateIdTagsQueryKey>
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
      ...getDocgenTemplatesTemplateIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocgenJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_jobs', '/docgen_jobs/:job_id', keyArgs] as const
}

export function getDocgenJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocgenJobsJobIdQueryKey>
  >({
    queryKey: getDocgenJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_jobs[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocgenJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocgenJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocgenJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocgenJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocgenJobsQueryKey(args: InferRequestType<typeof client.docgen_jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['docgen_jobs', '/docgen_jobs', keyArgs] as const
}

export function getDocgenJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.docgen_jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocgenJobsQueryKey>
  >({
    queryKey: getDocgenJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocgenJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.docgen_jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocgenJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocgenJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.docgen_jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocgenJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocgenTemplateJobsTemplateIdQueryKey(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_template_jobs', '/docgen_template_jobs/:template_id', keyArgs] as const
}

export function getDocgenTemplateJobsTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocgenTemplateJobsTemplateIdQueryKey>
  >({
    queryKey: getDocgenTemplateJobsTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_template_jobs[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocgenTemplateJobsTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplateJobsTemplateIdQueryKey>
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
      ...getDocgenTemplateJobsTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocgenTemplateJobsTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenTemplateJobsTemplateIdQueryKey>
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
      ...getDocgenTemplateJobsTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocgenBatchJobsBatchIdQueryKey(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_batch_jobs', '/docgen_batch_jobs/:batch_id', keyArgs] as const
}

export function getDocgenBatchJobsBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocgenBatchJobsBatchIdQueryKey>
  >({
    queryKey: getDocgenBatchJobsBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docgen_batch_jobs[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocgenBatchJobsBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenBatchJobsBatchIdQueryKey>
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
      ...getDocgenBatchJobsBatchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocgenBatchJobsBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocgenBatchJobsBatchIdQueryKey>
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
      ...getDocgenBatchJobsBatchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDocgenBatchesMutationKey() {
  return ['docgen_batches', '/docgen_batches', 'POST'] as const
}

export function getPostDocgenBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_batches.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.docgen_batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocgenBatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.docgen_batches.$post>) {
      return parseResponse(client.docgen_batches.$post(args, options))
    },
  })
}

export function usePostDocgenBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_batches.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.docgen_batches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocgenBatchesMutationOptions<TError, TOnMutateResult>(
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

export function getEnterpriseConfigurationsEnterpriseIdQueryKey(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'enterprise_configurations',
    '/enterprise_configurations/:enterprise_id',
    keyArgs,
  ] as const
}

export function getEnterpriseConfigurationsEnterpriseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterpriseConfigurationsEnterpriseIdQueryKey>
  >({
    queryKey: getEnterpriseConfigurationsEnterpriseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprise_configurations[':enterprise_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterpriseConfigurationsEnterpriseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterpriseConfigurationsEnterpriseIdQueryKey>
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
      ...getEnterpriseConfigurationsEnterpriseIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterpriseConfigurationsEnterpriseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterpriseConfigurationsEnterpriseIdQueryKey>
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
      ...getEnterpriseConfigurationsEnterpriseIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHubsQueryKey(args: InferRequestType<typeof client.hubs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hubs', '/hubs', keyArgs] as const
}

export function getHubsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hubs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHubsQueryKey>
  >({
    queryKey: getHubsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hubs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hubs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hubs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostHubsMutationKey() {
  return ['hubs', '/hubs', 'POST'] as const
}

export function getPostHubsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$post>>>>>,
    TError,
    InferRequestType<typeof client.hubs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHubsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hubs.$post>) {
      return parseResponse(client.hubs.$post(args, options))
    },
  })
}

export function usePostHubs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$post>>>>>,
        TError,
        InferRequestType<typeof client.hubs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEnterpriseHubsQueryKey(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['enterprise_hubs', '/enterprise_hubs', keyArgs] as const
}

export function getEnterpriseHubsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.enterprise_hubs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnterpriseHubsQueryKey>
  >({
    queryKey: getEnterpriseHubsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprise_hubs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEnterpriseHubs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEnterpriseHubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnterpriseHubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnterpriseHubs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEnterpriseHubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnterpriseHubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHubsHubIdQueryKey(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hubs', '/hubs/:hub_id', keyArgs] as const
}

export function getHubsHubIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHubsHubIdQueryKey>
  >({
    queryKey: getHubsHubIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hubs[':hub_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubsHubId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubsHubIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubsHubIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubsHubId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubsHubIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubsHubIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutHubsHubIdMutationKey() {
  return ['hubs', '/hubs/:hub_id', 'PUT'] as const
}

export function getPutHubsHubIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.hubs)[':hub_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHubsHubIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hubs)[':hub_id']['$put']>) {
      return parseResponse(client.hubs[':hub_id'].$put(args, options))
    },
  })
}

export function usePutHubsHubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.hubs)[':hub_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutHubsHubIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteHubsHubIdMutationKey() {
  return ['hubs', '/hubs/:hub_id', 'DELETE'] as const
}

export function getDeleteHubsHubIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.hubs)[':hub_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHubsHubIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hubs)[':hub_id']['$delete']>) {
      return parseResponse(client.hubs[':hub_id'].$delete(args, options))
    },
  })
}

export function useDeleteHubsHubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.hubs)[':hub_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHubsHubIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostHubsHubIdCopyMutationKey() {
  return ['hubs', '/hubs/:hub_id/copy', 'POST'] as const
}

export function getPostHubsHubIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['copy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hubs)[':hub_id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHubsHubIdCopyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hubs)[':hub_id']['copy']['$post']>) {
      return parseResponse(client.hubs[':hub_id'].copy.$post(args, options))
    },
  })
}

export function usePostHubsHubIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hubs)[':hub_id']['copy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hubs)[':hub_id']['copy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubsHubIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getHubCollaborationsQueryKey(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_collaborations', '/hub_collaborations', keyArgs] as const
}

export function getHubCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hub_collaborations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHubCollaborationsQueryKey>
  >({
    queryKey: getHubCollaborationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub_collaborations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubCollaborationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubCollaborationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubCollaborationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubCollaborationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostHubCollaborationsMutationKey() {
  return ['hub_collaborations', '/hub_collaborations', 'POST'] as const
}

export function getPostHubCollaborationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hub_collaborations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHubCollaborationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hub_collaborations.$post>) {
      return parseResponse(client.hub_collaborations.$post(args, options))
    },
  })
}

export function usePostHubCollaborations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hub_collaborations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubCollaborationsMutationOptions<TError, TOnMutateResult>(
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

export function getHubCollaborationsHubCollaborationIdQueryKey(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_collaborations', '/hub_collaborations/:hub_collaboration_id', keyArgs] as const
}

export function getHubCollaborationsHubCollaborationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHubCollaborationsHubCollaborationIdQueryKey>
  >({
    queryKey: getHubCollaborationsHubCollaborationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub_collaborations[':hub_collaboration_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHubCollaborationsHubCollaborationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubCollaborationsHubCollaborationIdQueryKey>
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
      ...getHubCollaborationsHubCollaborationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHubCollaborationsHubCollaborationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubCollaborationsHubCollaborationIdQueryKey>
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
      ...getHubCollaborationsHubCollaborationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutHubCollaborationsHubCollaborationIdMutationKey() {
  return ['hub_collaborations', '/hub_collaborations/:hub_collaboration_id', 'PUT'] as const
}

export function getPutHubCollaborationsHubCollaborationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHubCollaborationsHubCollaborationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>,
    ) {
      return parseResponse(client.hub_collaborations[':hub_collaboration_id'].$put(args, options))
    },
  })
}

export function usePutHubCollaborationsHubCollaborationId<
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
                ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutHubCollaborationsHubCollaborationIdMutationOptions<
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

export function getDeleteHubCollaborationsHubCollaborationIdMutationKey() {
  return ['hub_collaborations', '/hub_collaborations/:hub_collaboration_id', 'DELETE'] as const
}

export function getDeleteHubCollaborationsHubCollaborationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHubCollaborationsHubCollaborationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.hub_collaborations[':hub_collaboration_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteHubCollaborationsHubCollaborationId<
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
                  ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHubCollaborationsHubCollaborationIdMutationOptions<
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

export function getHubItemsQueryKey(args: InferRequestType<typeof client.hub_items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hub_items', '/hub_items', keyArgs] as const
}

export function getHubItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hub_items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHubItemsQueryKey>
  >({
    queryKey: getHubItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHubItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHubItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostHubsHubIdManageItemsMutationKey() {
  return ['hubs', '/hubs/:hub_id/manage_items', 'POST'] as const
}

export function getPostHubsHubIdManageItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHubsHubIdManageItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>,
    ) {
      return parseResponse(client.hubs[':hub_id'].manage_items.$post(args, options))
    },
  })
}

export function usePostHubsHubIdManageItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubsHubIdManageItemsMutationOptions<TError, TOnMutateResult>(
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

export function getHubDocumentPagesQueryKey(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_document_pages', '/hub_document_pages', keyArgs] as const
}

export function getHubDocumentPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hub_document_pages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHubDocumentPagesQueryKey>
  >({
    queryKey: getHubDocumentPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub_document_pages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubDocumentPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubDocumentPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubDocumentPagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubDocumentPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubDocumentPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubDocumentPagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHubDocumentBlocksQueryKey(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_document_blocks', '/hub_document_blocks', keyArgs] as const
}

export function getHubDocumentBlocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hub_document_blocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHubDocumentBlocksQueryKey>
  >({
    queryKey: getHubDocumentBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub_document_blocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubDocumentBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubDocumentBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubDocumentBlocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubDocumentBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubDocumentBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubDocumentBlocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShieldListsQueryKey(args: InferRequestType<typeof client.shield_lists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shield_lists', '/shield_lists', keyArgs] as const
}

export function getShieldListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shield_lists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShieldListsQueryKey>
  >({
    queryKey: getShieldListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShieldLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_lists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShieldListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShieldListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShieldLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shield_lists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShieldListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShieldListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostShieldListsMutationKey() {
  return ['shield_lists', '/shield_lists', 'POST'] as const
}

export function getPostShieldListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shield_lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShieldListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shield_lists.$post>) {
      return parseResponse(client.shield_lists.$post(args, options))
    },
  })
}

export function usePostShieldLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.shield_lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShieldListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShieldListsShieldListIdQueryKey(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shield_lists', '/shield_lists/:shield_list_id', keyArgs] as const
}

export function getShieldListsShieldListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShieldListsShieldListIdQueryKey>
  >({
    queryKey: getShieldListsShieldListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shield_lists[':shield_list_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShieldListsShieldListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldListsShieldListIdQueryKey>
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
      ...getShieldListsShieldListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShieldListsShieldListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShieldListsShieldListIdQueryKey>
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
      ...getShieldListsShieldListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShieldListsShieldListIdMutationKey() {
  return ['shield_lists', '/shield_lists/:shield_list_id', 'PUT'] as const
}

export function getPutShieldListsShieldListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShieldListsShieldListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$put']>,
    ) {
      return parseResponse(client.shield_lists[':shield_list_id'].$put(args, options))
    },
  })
}

export function usePutShieldListsShieldListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShieldListsShieldListIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteShieldListsShieldListIdMutationKey() {
  return ['shield_lists', '/shield_lists/:shield_list_id', 'DELETE'] as const
}

export function getDeleteShieldListsShieldListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShieldListsShieldListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$delete']>,
    ) {
      return parseResponse(client.shield_lists[':shield_list_id'].$delete(args, options))
    },
  })
}

export function useDeleteShieldListsShieldListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteShieldListsShieldListIdMutationOptions<TError, TOnMutateResult>(
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

export function getArchivesQueryKey(args: InferRequestType<typeof client.archives.$get>) {
  const { header: _, ...keyArgs } = args
  return ['archives', '/archives', keyArgs] as const
}

export function getArchivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArchivesQueryKey>
  >({
    queryKey: getArchivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useArchives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.archives.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArchivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArchivesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArchives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.archives.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArchivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArchivesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostArchivesMutationKey() {
  return ['archives', '/archives', 'POST'] as const
}

export function getPostArchivesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$post>>>>>,
    TError,
    InferRequestType<typeof client.archives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArchivesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.archives.$post>) {
      return parseResponse(client.archives.$post(args, options))
    },
  })
}

export function usePostArchives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.archives.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArchivesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutArchivesArchiveIdMutationKey() {
  return ['archives', '/archives/:archive_id', 'PUT'] as const
}

export function getPutArchivesArchiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.archives)[':archive_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.archives)[':archive_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutArchivesArchiveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.archives)[':archive_id']['$put']>) {
      return parseResponse(client.archives[':archive_id'].$put(args, options))
    },
  })
}

export function usePutArchivesArchiveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.archives)[':archive_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.archives)[':archive_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutArchivesArchiveIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteArchivesArchiveIdMutationKey() {
  return ['archives', '/archives/:archive_id', 'DELETE'] as const
}

export function getDeleteArchivesArchiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.archives)[':archive_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.archives)[':archive_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteArchivesArchiveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.archives)[':archive_id']['$delete']>) {
      return parseResponse(client.archives[':archive_id'].$delete(args, options))
    },
  })
}

export function useDeleteArchivesArchiveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.archives)[':archive_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.archives)[':archive_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteArchivesArchiveIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostExternalUsersSubmitDeleteJobMutationKey() {
  return ['external_users', '/external_users/submit_delete_job', 'POST'] as const
}

export function getPostExternalUsersSubmitDeleteJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.external_users.submit_delete_job.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.external_users.submit_delete_job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExternalUsersSubmitDeleteJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.external_users.submit_delete_job.$post>) {
      return parseResponse(client.external_users.submit_delete_job.$post(args, options))
    },
  })
}

export function usePostExternalUsersSubmitDeleteJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.external_users.submit_delete_job.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.external_users.submit_delete_job.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExternalUsersSubmitDeleteJobMutationOptions<
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
