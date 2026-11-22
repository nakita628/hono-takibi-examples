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

export function getContextKey() {
  return ['context'] as const
}

export function getDeployKey() {
  return ['deploy'] as const
}

export function getInsightsKey() {
  return ['insights'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getOtelKey() {
  return ['otel'] as const
}

export function getOwnerKey() {
  return ['owner'] as const
}

export function getPipelineKey() {
  return ['pipeline'] as const
}

export function getProjectKey() {
  return ['project'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getScheduleKey() {
  return ['schedule'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getWebhookKey() {
  return ['webhook'] as const
}

export function getWorkflowKey() {
  return ['workflow'] as const
}

export function getInsightsPagesProjectSlugSummaryQueryKey(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
) {
  return ['insights', '/insights/pages/:project-slug/summary', args] as const
}

export function getInsightsPagesProjectSlugSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsPagesProjectSlugSummaryQueryKey>
  >({
    queryKey: getInsightsPagesProjectSlugSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights.pages[':project-slug'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsPagesProjectSlugSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsPagesProjectSlugSummaryQueryKey>
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
      ...getInsightsPagesProjectSlugSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsPagesProjectSlugSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsPagesProjectSlugSummaryQueryKey>
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
      ...getInsightsPagesProjectSlugSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInsightsPagesProjectSlugSummaryMutationKey() {
  return ['insights', '/insights/pages/:project-slug/summary', 'POST'] as const
}

export function getPostInsightsPagesProjectSlugSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightsPagesProjectSlugSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>,
    ) {
      return parseResponse(client.insights.pages[':project-slug'].summary.$post(args, options))
    },
  })
}

export function usePostInsightsPagesProjectSlugSummary<
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
                ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInsightsPagesProjectSlugSummaryMutationOptions<
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

export function getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
) {
  return [
    'insights',
    '/insights/time-series/:project-slug/workflows/:workflow-name/jobs',
    args,
  ] as const
}

export function getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey>
  >({
    queryKey: getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights['time-series'][':project-slug'].workflows[':workflow-name'].jobs.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey>
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
      ...getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey>
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
      ...getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsOrgSlugSummaryQueryKey(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
) {
  return ['insights', '/insights/:org-slug/summary', args] as const
}

export function getInsightsOrgSlugSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsOrgSlugSummaryQueryKey>
  >({
    queryKey: getInsightsOrgSlugSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':org-slug'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsOrgSlugSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsOrgSlugSummaryQueryKey>
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
      ...getInsightsOrgSlugSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsOrgSlugSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsOrgSlugSummaryQueryKey>
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
      ...getInsightsOrgSlugSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugBranchesQueryKey(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
) {
  return ['insights', '/insights/:project-slug/branches', args] as const
}

export function getInsightsProjectSlugBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugBranchesQueryKey>
  >({
    queryKey: getInsightsProjectSlugBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugBranchesQueryKey>
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
      ...getInsightsProjectSlugBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugBranchesQueryKey>
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
      ...getInsightsProjectSlugBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugFlakyTestsQueryKey(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
) {
  return ['insights', '/insights/:project-slug/flaky-tests', args] as const
}

export function getInsightsProjectSlugFlakyTestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugFlakyTestsQueryKey>
  >({
    queryKey: getInsightsProjectSlugFlakyTestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug']['flaky-tests'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugFlakyTests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugFlakyTestsQueryKey>
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
      ...getInsightsProjectSlugFlakyTestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugFlakyTests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugFlakyTestsQueryKey>
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
      ...getInsightsProjectSlugFlakyTestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsQueryKey(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
) {
  return ['insights', '/insights/:project-slug/workflows', args] as const
}

export function getInsightsProjectSlugWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsQueryKey>
  >({
    queryKey: getInsightsProjectSlugWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug'].workflows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsQueryKey>
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
      ...getInsightsProjectSlugWorkflowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsQueryKey>
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
      ...getInsightsProjectSlugWorkflowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameQueryKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name', args] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameQueryKey>
  >({
    queryKey: getInsightsProjectSlugWorkflowsWorkflowNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugWorkflowsWorkflowName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugWorkflowsWorkflowName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name/jobs', args] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey>
  >({
    queryKey: getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugWorkflowsWorkflowNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugWorkflowsWorkflowNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name/summary', args] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey>
  >({
    queryKey: getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugWorkflowsWorkflowNameSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugWorkflowsWorkflowNameSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
) {
  return [
    'insights',
    '/insights/:project-slug/workflows/:workflow-name/test-metrics',
    args,
  ] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey>
  >({
    queryKey: getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name']['test-metrics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInsightsProjectSlugWorkflowsWorkflowNameTestMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsightsProjectSlugWorkflowsWorkflowNameTestMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey>
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
      ...getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostJobsJobIdCancelMutationKey() {
  return ['jobs', '/jobs/:job-id/cancel', 'POST'] as const
}

export function getPostJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':job-id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':job-id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsJobIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':job-id']['cancel']['$post']>) {
      return parseResponse(client.jobs[':job-id'].cancel.$post(args, options))
    },
  })
}

export function usePostJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs)[':job-id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':job-id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeCollaborationsQueryKey() {
  return ['me', '/me/collaborations'] as const
}

export function getMeCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeCollaborationsQueryKey>
  >({
    queryKey: getMeCollaborationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.collaborations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCollaborationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeCollaborationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeCollaborationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeCollaborationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrganizationMutationKey() {
  return ['organization', '/organization', 'POST'] as const
}

export function getPostOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.$post>) {
      return parseResponse(client.organization.$post(args, options))
    },
  })
}

export function usePostOrganization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organization.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationOrgSlugOrIdQueryKey(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
) {
  return ['organization', '/organization/:org-slug-or-id', args] as const
}

export function getOrganizationOrgSlugOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationOrgSlugOrIdQueryKey>
  >({
    queryKey: getOrganizationOrgSlugOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization[':org-slug-or-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationOrgSlugOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationOrgSlugOrIdQueryKey>
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
      ...getOrganizationOrgSlugOrIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationOrgSlugOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationOrgSlugOrIdQueryKey>
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
      ...getOrganizationOrgSlugOrIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganizationOrgSlugOrIdMutationKey() {
  return ['organization', '/organization/:org-slug-or-id', 'DELETE'] as const
}

export function getDeleteOrganizationOrgSlugOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationOrgSlugOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$delete']>,
    ) {
      return parseResponse(client.organization[':org-slug-or-id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationOrgSlugOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organization)[':org-slug-or-id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationOrgSlugOrIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganizationOrgSlugOrIdProjectMutationKey() {
  return ['organization', '/organization/:org-slug-or-id/project', 'POST'] as const
}

export function getPostOrganizationOrgSlugOrIdProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationOrgSlugOrIdProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>,
    ) {
      return parseResponse(client.organization[':org-slug-or-id'].project.$post(args, options))
    },
  })
}

export function usePostOrganizationOrgSlugOrIdProject<
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
                ReturnType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationOrgSlugOrIdProjectMutationOptions<
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

export function getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
) {
  return ['organization', '/organization/:org-slug-or-id/url-orb-allow-list', args] as const
}

export function getOrganizationOrgSlugOrIdUrlOrbAllowListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey>
  >({
    queryKey: getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization[':org-slug-or-id']['url-orb-allow-list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationOrgSlugOrIdUrlOrbAllowList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey>
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
      ...getOrganizationOrgSlugOrIdUrlOrbAllowListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationOrgSlugOrIdUrlOrbAllowList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey>
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
      ...getOrganizationOrgSlugOrIdUrlOrbAllowListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationOrgSlugOrIdUrlOrbAllowListMutationKey() {
  return ['organization', '/organization/:org-slug-or-id/url-orb-allow-list', 'POST'] as const
}

export function getPostOrganizationOrgSlugOrIdUrlOrbAllowListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationOrgSlugOrIdUrlOrbAllowListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
      >,
    ) {
      return parseResponse(
        client.organization[':org-slug-or-id']['url-orb-allow-list'].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationOrgSlugOrIdUrlOrbAllowList<
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
                  (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
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
  const mutationDefaults = getPostOrganizationOrgSlugOrIdUrlOrbAllowListMutationOptions<
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

export function getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdMutationKey() {
  return [
    'organization',
    '/organization/:org-slug-or-id/url-orb-allow-list/:allow-list-entry-id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organization[':org-slug-or-id']['url-orb-allow-list'][
          ':allow-list-entry-id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryId<
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
                  (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
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
    getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdMutationOptions<
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

export function getPipelineQueryKey(args: InferRequestType<typeof client.pipeline.$get>) {
  return ['pipeline', '/pipeline', args] as const
}

export function getPipelineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pipeline.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPipelineQueryKey>
  >({
    queryKey: getPipelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipeline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePipeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pipeline.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPipelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPipelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePipeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pipeline.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPipelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPipelineQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPipelineContinueMutationKey() {
  return ['pipeline', '/pipeline/continue', 'POST'] as const
}

export function getPostPipelineContinueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.continue.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pipeline.continue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPipelineContinueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pipeline.continue.$post>) {
      return parseResponse(client.pipeline.continue.$post(args, options))
    },
  })
}

export function usePostPipelineContinue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.continue.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pipeline.continue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPipelineContinueMutationOptions<TError, TOnMutateResult>(
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

export function getPipelinePipelineIdQueryKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline-id', args] as const
}

export function getPipelinePipelineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdQueryKey>
  >({
    queryKey: getPipelinePipelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipeline[':pipeline-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePipelinePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPipelinePipelineIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePipelinePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPipelinePipelineIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPipelinePipelineIdConfigQueryKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline-id/config', args] as const
}

export function getPipelinePipelineIdConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdConfigQueryKey>
  >({
    queryKey: getPipelinePipelineIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipeline[':pipeline-id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePipelinePipelineIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdConfigQueryKey>
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
      ...getPipelinePipelineIdConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePipelinePipelineIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdConfigQueryKey>
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
      ...getPipelinePipelineIdConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPipelinePipelineIdWorkflowQueryKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline-id/workflow', args] as const
}

export function getPipelinePipelineIdWorkflowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdWorkflowQueryKey>
  >({
    queryKey: getPipelinePipelineIdWorkflowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipeline[':pipeline-id'].workflow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePipelinePipelineIdWorkflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdWorkflowQueryKey>
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
      ...getPipelinePipelineIdWorkflowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePipelinePipelineIdWorkflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdWorkflowQueryKey>
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
      ...getPipelinePipelineIdWorkflowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectProjectSlugQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
) {
  return ['project', '/project/:project-slug', args] as const
}

export function getProjectProjectSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugQueryKey>
  >({
    queryKey: getProjectProjectSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectProjectSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectProjectSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteProjectProjectSlugMutationKey() {
  return ['project', '/project/:project-slug', 'DELETE'] as const
}

export function getDeleteProjectProjectSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':project-slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectProjectSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.project)[':project-slug']['$delete']>) {
      return parseResponse(client.project[':project-slug'].$delete(args, options))
    },
  })
}

export function useDeleteProjectProjectSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':project-slug']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectProjectSlugMutationOptions<TError, TOnMutateResult>(
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

export function getProjectProjectSlugCheckoutKeyQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
) {
  return ['project', '/project/:project-slug/checkout-key', args] as const
}

export function getProjectProjectSlugCheckoutKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugCheckoutKeyQueryKey>
  >({
    queryKey: getProjectProjectSlugCheckoutKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug']['checkout-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugCheckoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugCheckoutKeyQueryKey>
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
      ...getProjectProjectSlugCheckoutKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugCheckoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugCheckoutKeyQueryKey>
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
      ...getProjectProjectSlugCheckoutKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectProjectSlugCheckoutKeyMutationKey() {
  return ['project', '/project/:project-slug/checkout-key', 'POST'] as const
}

export function getPostProjectProjectSlugCheckoutKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectProjectSlugCheckoutKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>,
    ) {
      return parseResponse(client.project[':project-slug']['checkout-key'].$post(args, options))
    },
  })
}

export function usePostProjectProjectSlugCheckoutKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectProjectSlugCheckoutKeyMutationOptions<
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

export function getProjectProjectSlugCheckoutKeyFingerprintQueryKey(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
) {
  return ['project', '/project/:project-slug/checkout-key/:fingerprint', args] as const
}

export function getProjectProjectSlugCheckoutKeyFingerprintQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugCheckoutKeyFingerprintQueryKey>
  >({
    queryKey: getProjectProjectSlugCheckoutKeyFingerprintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug']['checkout-key'][':fingerprint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugCheckoutKeyFingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugCheckoutKeyFingerprintQueryKey>
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
      ...getProjectProjectSlugCheckoutKeyFingerprintQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugCheckoutKeyFingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugCheckoutKeyFingerprintQueryKey>
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
      ...getProjectProjectSlugCheckoutKeyFingerprintQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectProjectSlugCheckoutKeyFingerprintMutationKey() {
  return ['project', '/project/:project-slug/checkout-key/:fingerprint', 'DELETE'] as const
}

export function getDeleteProjectProjectSlugCheckoutKeyFingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectProjectSlugCheckoutKeyFingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.project[':project-slug']['checkout-key'][':fingerprint'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectProjectSlugCheckoutKeyFingerprint<
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
                  (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
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
  const mutationDefaults = getDeleteProjectProjectSlugCheckoutKeyFingerprintMutationOptions<
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

export function getProjectProjectSlugEnvvarQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
) {
  return ['project', '/project/:project-slug/envvar', args] as const
}

export function getProjectProjectSlugEnvvarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugEnvvarQueryKey>
  >({
    queryKey: getProjectProjectSlugEnvvarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].envvar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugEnvvar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugEnvvarQueryKey>
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
      ...getProjectProjectSlugEnvvarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugEnvvar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugEnvvarQueryKey>
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
      ...getProjectProjectSlugEnvvarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectProjectSlugEnvvarMutationKey() {
  return ['project', '/project/:project-slug/envvar', 'POST'] as const
}

export function getPostProjectProjectSlugEnvvarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':project-slug']['envvar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectProjectSlugEnvvarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$post']>,
    ) {
      return parseResponse(client.project[':project-slug'].envvar.$post(args, options))
    },
  })
}

export function usePostProjectProjectSlugEnvvar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':project-slug']['envvar']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectProjectSlugEnvvarMutationOptions<TError, TOnMutateResult>(
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

export function getProjectProjectSlugEnvvarNameQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
) {
  return ['project', '/project/:project-slug/envvar/:name', args] as const
}

export function getProjectProjectSlugEnvvarNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugEnvvarNameQueryKey>
  >({
    queryKey: getProjectProjectSlugEnvvarNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].envvar[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugEnvvarName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugEnvvarNameQueryKey>
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
      ...getProjectProjectSlugEnvvarNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugEnvvarName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugEnvvarNameQueryKey>
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
      ...getProjectProjectSlugEnvvarNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectProjectSlugEnvvarNameMutationKey() {
  return ['project', '/project/:project-slug/envvar/:name', 'DELETE'] as const
}

export function getDeleteProjectProjectSlugEnvvarNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectProjectSlugEnvvarNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':project-slug']['envvar'][':name']['$delete']
      >,
    ) {
      return parseResponse(client.project[':project-slug'].envvar[':name'].$delete(args, options))
    },
  })
}

export function useDeleteProjectProjectSlugEnvvarName<
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
                ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectProjectSlugEnvvarNameMutationOptions<
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

export function getPostProjectProjectSlugJobJobNumberCancelMutationKey() {
  return ['project', '/project/:project-slug/job/:job-number/cancel', 'POST'] as const
}

export function getPostProjectProjectSlugJobJobNumberCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectProjectSlugJobJobNumberCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.project[':project-slug'].job[':job-number'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostProjectProjectSlugJobJobNumberCancel<
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
                  (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
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
  const mutationDefaults = getPostProjectProjectSlugJobJobNumberCancelMutationOptions<
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

export function getProjectProjectSlugPipelineQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
) {
  return ['project', '/project/:project-slug/pipeline', args] as const
}

export function getProjectProjectSlugPipelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugPipelineQueryKey>
  >({
    queryKey: getProjectProjectSlugPipelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].pipeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugPipeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugPipelineQueryKey>
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
      ...getProjectProjectSlugPipelineQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugPipeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugPipelineQueryKey>
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
      ...getProjectProjectSlugPipelineQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectProjectSlugPipelineMutationKey() {
  return ['project', '/project/:project-slug/pipeline', 'POST'] as const
}

export function getPostProjectProjectSlugPipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectProjectSlugPipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$post']>,
    ) {
      return parseResponse(client.project[':project-slug'].pipeline.$post(args, options))
    },
  })
}

export function usePostProjectProjectSlugPipeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectProjectSlugPipelineMutationOptions<
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

export function getProjectProjectSlugPipelineMineQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
) {
  return ['project', '/project/:project-slug/pipeline/mine', args] as const
}

export function getProjectProjectSlugPipelineMineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugPipelineMineQueryKey>
  >({
    queryKey: getProjectProjectSlugPipelineMineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].pipeline.mine.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugPipelineMine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugPipelineMineQueryKey>
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
      ...getProjectProjectSlugPipelineMineQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugPipelineMine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugPipelineMineQueryKey>
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
      ...getProjectProjectSlugPipelineMineQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectProjectSlugPipelinePipelineNumberQueryKey(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
) {
  return ['project', '/project/:project-slug/pipeline/:pipeline-number', args] as const
}

export function getProjectProjectSlugPipelinePipelineNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugPipelinePipelineNumberQueryKey>
  >({
    queryKey: getProjectProjectSlugPipelinePipelineNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].pipeline[':pipeline-number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugPipelinePipelineNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugPipelinePipelineNumberQueryKey>
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
      ...getProjectProjectSlugPipelinePipelineNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugPipelinePipelineNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugPipelinePipelineNumberQueryKey>
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
      ...getProjectProjectSlugPipelinePipelineNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectProjectSlugScheduleQueryKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
) {
  return ['project', '/project/:project-slug/schedule', args] as const
}

export function getProjectProjectSlugScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugScheduleQueryKey>
  >({
    queryKey: getProjectProjectSlugScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':project-slug'].schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProjectSlugSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugScheduleQueryKey>
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
      ...getProjectProjectSlugScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProjectSlugSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProjectSlugScheduleQueryKey>
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
      ...getProjectProjectSlugScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectProjectSlugScheduleMutationKey() {
  return ['project', '/project/:project-slug/schedule', 'POST'] as const
}

export function getPostProjectProjectSlugScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':project-slug']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectProjectSlugScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$post']>,
    ) {
      return parseResponse(client.project[':project-slug'].schedule.$post(args, options))
    },
  })
}

export function usePostProjectProjectSlugSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':project-slug']['schedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectProjectSlugScheduleMutationOptions<
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

export function getScheduleScheduleIdQueryKey(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
) {
  return ['schedule', '/schedule/:schedule-id', args] as const
}

export function getScheduleScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleScheduleIdQueryKey>
  >({
    queryKey: getScheduleScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule[':schedule-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScheduleScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScheduleScheduleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScheduleScheduleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScheduleScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScheduleScheduleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScheduleScheduleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteScheduleScheduleIdMutationKey() {
  return ['schedule', '/schedule/:schedule-id', 'DELETE'] as const
}

export function getDeleteScheduleScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.schedule)[':schedule-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScheduleScheduleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schedule)[':schedule-id']['$delete']>) {
      return parseResponse(client.schedule[':schedule-id'].$delete(args, options))
    },
  })
}

export function useDeleteScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.schedule)[':schedule-id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchScheduleScheduleIdMutationKey() {
  return ['schedule', '/schedule/:schedule-id', 'PATCH'] as const
}

export function getPatchScheduleScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.schedule)[':schedule-id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchScheduleScheduleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schedule)[':schedule-id']['$patch']>) {
      return parseResponse(client.schedule[':schedule-id'].$patch(args, options))
    },
  })
}

export function usePatchScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.schedule)[':schedule-id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserIdQueryKey(args: InferRequestType<(typeof client.user)[':id']['$get']>) {
  return ['user', '/user/:id', args] as const
}

export function getUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.user)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdQueryKey>
  >({
    queryKey: getUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWorkflowIdApproveApprovalRequestIdMutationKey() {
  return ['workflow', '/workflow/:id/approve/:approval_request_id', 'POST'] as const
}

export function getPostWorkflowIdApproveApprovalRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowIdApproveApprovalRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.workflow[':id'].approve[':approval_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostWorkflowIdApproveApprovalRequestId<
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
                  (typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']
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
  const mutationDefaults = getPostWorkflowIdApproveApprovalRequestIdMutationOptions<
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

export function getPostWorkflowIdCancelMutationKey() {
  return ['workflow', '/workflow/:id/cancel', 'POST'] as const
}

export function getPostWorkflowIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflow)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflow)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflow)[':id']['cancel']['$post']>) {
      return parseResponse(client.workflow[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostWorkflowIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflow)[':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workflow)[':id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkflowIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowIdJobQueryKey(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
) {
  return ['workflow', '/workflow/:id/job', args] as const
}

export function getWorkflowIdJobQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowIdJobQueryKey>
  >({
    queryKey: getWorkflowIdJobQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflow[':id'].job.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWorkflowIdJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowIdJobQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkflowIdJobQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkflowIdJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowIdJobQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkflowIdJobQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWorkflowIdRerunMutationKey() {
  return ['workflow', '/workflow/:id/rerun', 'POST'] as const
}

export function getPostWorkflowIdRerunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['rerun']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.workflow)[':id']['rerun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowIdRerunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflow)[':id']['rerun']['$post']>) {
      return parseResponse(client.workflow[':id'].rerun.$post(args, options))
    },
  })
}

export function usePostWorkflowIdRerun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflow)[':id']['rerun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workflow)[':id']['rerun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkflowIdRerunMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIDOidcCustomClaimsQueryKey(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
) {
  return ['org', '/org/:orgID/oidc-custom-claims', args] as const
}

export function getOrgOrgIDOidcCustomClaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIDOidcCustomClaimsQueryKey>
  >({
    queryKey: getOrgOrgIDOidcCustomClaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgID']['oidc-custom-claims'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIDOidcCustomClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIDOidcCustomClaimsQueryKey>
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
      ...getOrgOrgIDOidcCustomClaimsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIDOidcCustomClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIDOidcCustomClaimsQueryKey>
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
      ...getOrgOrgIDOidcCustomClaimsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrgOrgIDOidcCustomClaimsMutationKey() {
  return ['org', '/org/:orgID/oidc-custom-claims', 'DELETE'] as const
}

export function getDeleteOrgOrgIDOidcCustomClaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIDOidcCustomClaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>,
    ) {
      return parseResponse(client.org[':orgID']['oidc-custom-claims'].$delete(args, options))
    },
  })
}

export function useDeleteOrgOrgIDOidcCustomClaims<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgOrgIDOidcCustomClaimsMutationOptions<
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

export function getPatchOrgOrgIDOidcCustomClaimsMutationKey() {
  return ['org', '/org/:orgID/oidc-custom-claims', 'PATCH'] as const
}

export function getPatchOrgOrgIDOidcCustomClaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgOrgIDOidcCustomClaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>,
    ) {
      return parseResponse(client.org[':orgID']['oidc-custom-claims'].$patch(args, options))
    },
  })
}

export function usePatchOrgOrgIDOidcCustomClaims<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOrgOrgIDOidcCustomClaimsMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
) {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', args] as const
}

export function getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey>
  >({
    queryKey: getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIDProjectProjectIDOidcCustomClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey>
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
      ...getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIDProjectProjectIDOidcCustomClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey>
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
      ...getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsMutationKey() {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', 'DELETE'] as const
}

export function getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
      >,
    ) {
      return parseResponse(
        client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrgOrgIDProjectProjectIDOidcCustomClaims<
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
                  (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
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
  const mutationDefaults = getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsMutationOptions<
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

export function getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsMutationKey() {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', 'PATCH'] as const
}

export function getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
      >,
    ) {
      return parseResponse(
        client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$patch(args, options),
      )
    },
  })
}

export function usePatchOrgOrgIDProjectProjectIDOidcCustomClaims<
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
                  (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
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
  const mutationDefaults = getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsMutationOptions<
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

export function getOwnerOwnerIDContextContextDecisionQueryKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision', args] as const
}

export function getOwnerOwnerIDContextContextDecisionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionQueryKey>
  >({
    queryKey: getOwnerOwnerIDContextContextDecisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOwnerOwnerIDContextContextDecision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwnerOwnerIDContextContextDecision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOwnerOwnerIDContextContextDecisionMutationKey() {
  return ['owner', '/owner/:ownerID/context/:context/decision', 'POST'] as const
}

export function getPostOwnerOwnerIDContextContextDecisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOwnerOwnerIDContextContextDecisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']
      >,
    ) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision.$post(args, options),
      )
    },
  })
}

export function usePostOwnerOwnerIDContextContextDecision<
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
                  (typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']
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
  const mutationDefaults = getPostOwnerOwnerIDContextContextDecisionMutationOptions<
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

export function getOwnerOwnerIDContextContextDecisionSettingsQueryKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision/settings', args] as const
}

export function getOwnerOwnerIDContextContextDecisionSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionSettingsQueryKey>
  >({
    queryKey: getOwnerOwnerIDContextContextDecisionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOwnerOwnerIDContextContextDecisionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionSettingsQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwnerOwnerIDContextContextDecisionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionSettingsQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchOwnerOwnerIDContextContextDecisionSettingsMutationKey() {
  return ['owner', '/owner/:ownerID/context/:context/decision/settings', 'PATCH'] as const
}

export function getPatchOwnerOwnerIDContextContextDecisionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOwnerOwnerIDContextContextDecisionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
      >,
    ) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision.settings.$patch(args, options),
      )
    },
  })
}

export function usePatchOwnerOwnerIDContextContextDecisionSettings<
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
                  (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
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
  const mutationDefaults = getPatchOwnerOwnerIDContextContextDecisionSettingsMutationOptions<
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

export function getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision/:decisionID', args] as const
}

export function getOwnerOwnerIDContextContextDecisionDecisionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey>
  >({
    queryKey: getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision[':decisionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOwnerOwnerIDContextContextDecisionDecisionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionDecisionIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwnerOwnerIDContextContextDecisionDecisionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionDecisionIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
) {
  return [
    'owner',
    '/owner/:ownerID/context/:context/decision/:decisionID/policy-bundle',
    args,
  ] as const
}

export function getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey>
  >({
    queryKey: getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision[':decisionID']['policy-bundle'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey>
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
      ...getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOwnerOwnerIDContextContextPolicyBundleQueryKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle', args] as const
}

export function getOwnerOwnerIDContextContextPolicyBundleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundleQueryKey>
  >({
    queryKey: getOwnerOwnerIDContextContextPolicyBundleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owner[':ownerID'].context[':context']['policy-bundle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOwnerOwnerIDContextContextPolicyBundle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundleQueryKey>
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
      ...getOwnerOwnerIDContextContextPolicyBundleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwnerOwnerIDContextContextPolicyBundle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundleQueryKey>
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
      ...getOwnerOwnerIDContextContextPolicyBundleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOwnerOwnerIDContextContextPolicyBundleMutationKey() {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle', 'POST'] as const
}

export function getPostOwnerOwnerIDContextContextPolicyBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOwnerOwnerIDContextContextPolicyBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
      >,
    ) {
      return parseResponse(
        client.owner[':ownerID'].context[':context']['policy-bundle'].$post(args, options),
      )
    },
  })
}

export function usePostOwnerOwnerIDContextContextPolicyBundle<
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
                  (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
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
  const mutationDefaults = getPostOwnerOwnerIDContextContextPolicyBundleMutationOptions<
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

export function getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle/:policyName', args] as const
}

export function getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey>
  >({
    queryKey: getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owner[':ownerID'].context[':context']['policy-bundle'][':policyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOwnerOwnerIDContextContextPolicyBundlePolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey>
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
      ...getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwnerOwnerIDContextContextPolicyBundlePolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey>
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
      ...getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContextQueryKey(args: InferRequestType<typeof client.context.$get>) {
  return ['context', '/context', args] as const
}

export function getContextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.context.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContextQueryKey>
  >({
    queryKey: getContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.context.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.context.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContextMutationKey() {
  return ['context', '/context', 'POST'] as const
}

export function getPostContextMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$post>>>>>,
    TError,
    InferRequestType<typeof client.context.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.context.$post>) {
      return parseResponse(client.context.$post(args, options))
    },
  })
}

export function usePostContext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$post>>>>>,
        TError,
        InferRequestType<typeof client.context.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContextMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContextContextIdQueryKey(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
) {
  return ['context', '/context/:context_id', args] as const
}

export function getContextContextIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContextContextIdQueryKey>
  >({
    queryKey: getContextContextIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.context[':context_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContextContextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContextContextIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContextContextIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContextContextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContextContextIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContextContextIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteContextContextIdMutationKey() {
  return ['context', '/context/:context_id', 'DELETE'] as const
}

export function getDeleteContextContextIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.context)[':context_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContextContextIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.context)[':context_id']['$delete']>) {
      return parseResponse(client.context[':context_id'].$delete(args, options))
    },
  })
}

export function useDeleteContextContextId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.context)[':context_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.context)[':context_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContextContextIdMutationOptions<TError, TOnMutateResult>(
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

export function getContextContextIdEnvironmentVariableQueryKey(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
) {
  return ['context', '/context/:context_id/environment-variable', args] as const
}

export function getContextContextIdEnvironmentVariableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContextContextIdEnvironmentVariableQueryKey>
  >({
    queryKey: getContextContextIdEnvironmentVariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.context[':context_id']['environment-variable'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContextContextIdEnvironmentVariable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContextContextIdEnvironmentVariableQueryKey>
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
      ...getContextContextIdEnvironmentVariableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContextContextIdEnvironmentVariable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContextContextIdEnvironmentVariableQueryKey>
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
      ...getContextContextIdEnvironmentVariableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutContextContextIdEnvironmentVariableEnvVarNameMutationKey() {
  return ['context', '/context/:context_id/environment-variable/:env_var_name', 'PUT'] as const
}

export function getPutContextContextIdEnvironmentVariableEnvVarNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutContextContextIdEnvironmentVariableEnvVarNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
      >,
    ) {
      return parseResponse(
        client.context[':context_id']['environment-variable'][':env_var_name'].$put(args, options),
      )
    },
  })
}

export function usePutContextContextIdEnvironmentVariableEnvVarName<
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
                  (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
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
  const mutationDefaults = getPutContextContextIdEnvironmentVariableEnvVarNameMutationOptions<
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

export function getDeleteContextContextIdEnvironmentVariableEnvVarNameMutationKey() {
  return ['context', '/context/:context_id/environment-variable/:env_var_name', 'DELETE'] as const
}

export function getDeleteContextContextIdEnvironmentVariableEnvVarNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContextContextIdEnvironmentVariableEnvVarNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.context[':context_id']['environment-variable'][':env_var_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteContextContextIdEnvironmentVariableEnvVarName<
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
                  (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
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
  const mutationDefaults = getDeleteContextContextIdEnvironmentVariableEnvVarNameMutationOptions<
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

export function getContextContextIdRestrictionsQueryKey(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
) {
  return ['context', '/context/:context_id/restrictions', args] as const
}

export function getContextContextIdRestrictionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContextContextIdRestrictionsQueryKey>
  >({
    queryKey: getContextContextIdRestrictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.context[':context_id'].restrictions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContextContextIdRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContextContextIdRestrictionsQueryKey>
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
      ...getContextContextIdRestrictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContextContextIdRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContextContextIdRestrictionsQueryKey>
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
      ...getContextContextIdRestrictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContextContextIdRestrictionsMutationKey() {
  return ['context', '/context/:context_id/restrictions', 'POST'] as const
}

export function getPostContextContextIdRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.context)[':context_id']['restrictions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContextContextIdRestrictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$post']>,
    ) {
      return parseResponse(client.context[':context_id'].restrictions.$post(args, options))
    },
  })
}

export function usePostContextContextIdRestrictions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.context)[':context_id']['restrictions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContextContextIdRestrictionsMutationOptions<
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

export function getDeleteContextContextIdRestrictionsRestrictionIdMutationKey() {
  return ['context', '/context/:context_id/restrictions/:restriction_id', 'DELETE'] as const
}

export function getDeleteContextContextIdRestrictionsRestrictionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContextContextIdRestrictionsRestrictionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.context[':context_id'].restrictions[':restriction_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContextContextIdRestrictionsRestrictionId<
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
                  (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
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
  const mutationDefaults = getDeleteContextContextIdRestrictionsRestrictionIdMutationOptions<
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

export function getProjectProviderOrganizationProjectSettingsQueryKey(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
) {
  return ['project', '/project/:provider/:organization/:project/settings', args] as const
}

export function getProjectProviderOrganizationProjectSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProviderOrganizationProjectSettingsQueryKey>
  >({
    queryKey: getProjectProviderOrganizationProjectSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':provider'][':organization'][':project'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectProviderOrganizationProjectSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProviderOrganizationProjectSettingsQueryKey>
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
      ...getProjectProviderOrganizationProjectSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectProviderOrganizationProjectSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectProviderOrganizationProjectSettingsQueryKey>
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
      ...getProjectProviderOrganizationProjectSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchProjectProviderOrganizationProjectSettingsMutationKey() {
  return ['project', '/project/:provider/:organization/:project/settings', 'PATCH'] as const
}

export function getPatchProjectProviderOrganizationProjectSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectProviderOrganizationProjectSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
      >,
    ) {
      return parseResponse(
        client.project[':provider'][':organization'][':project'].settings.$patch(args, options),
      )
    },
  })
}

export function usePatchProjectProviderOrganizationProjectSettings<
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
                  (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
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
  const mutationDefaults = getPatchProjectProviderOrganizationProjectSettingsMutationOptions<
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

export function getOrganizationsOrgIdGroupsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/groups', args] as const
}

export function getOrganizationsOrgIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdGroupsQueryKey>
  >({
    queryKey: getOrganizationsOrgIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdGroupsQueryKey>
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
      ...getOrganizationsOrgIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdGroupsQueryKey>
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
      ...getOrganizationsOrgIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrgIdGroupsMutationKey() {
  return ['organizations', '/organizations/:org_id/groups', 'POST'] as const
}

export function getPostOrganizationsOrgIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrgIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$post']>,
    ) {
      return parseResponse(client.organizations[':org_id'].groups.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrgIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':org_id']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrgIdGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsOrgIdGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/groups/:group_id', args] as const
}

export function getOrganizationsOrgIdGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdGroupsGroupIdQueryKey>
  >({
    queryKey: getOrganizationsOrgIdGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdGroupsGroupIdQueryKey>
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
      ...getOrganizationsOrgIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdGroupsGroupIdQueryKey>
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
      ...getOrganizationsOrgIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrgIdGroupsGroupIdMutationKey() {
  return ['organizations', '/organizations/:org_id/groups/:group_id', 'DELETE'] as const
}

export function getDeleteOrganizationsOrgIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrgIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':org_id'].groups[':group_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrgIdGroupsGroupId<
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
                  (typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrgIdGroupsGroupIdMutationOptions<
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

export function getPostOrganizationsOrgIdUsageExportJobMutationKey() {
  return ['organizations', '/organizations/:org_id/usage_export_job', 'POST'] as const
}

export function getPostOrganizationsOrgIdUsageExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrgIdUsageExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>,
    ) {
      return parseResponse(client.organizations[':org_id'].usage_export_job.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrgIdUsageExportJob<
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
                ReturnType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrgIdUsageExportJobMutationOptions<
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

export function getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:org_id/usage_export_job/:usage_export_job_id',
    args,
  ] as const
}

export function getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey>
  >({
    queryKey: getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].usage_export_job[':usage_export_job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdUsageExportJobUsageExportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey>
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
      ...getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdUsageExportJobUsageExportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey>
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
      ...getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectProviderOrganizationProjectPipelineRunMutationKey() {
  return ['project', '/project/:provider/:organization/:project/pipeline/run', 'POST'] as const
}

export function getPostProjectProviderOrganizationProjectPipelineRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectProviderOrganizationProjectPipelineRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
      >,
    ) {
      return parseResponse(
        client.project[':provider'][':organization'][':project'].pipeline.run.$post(args, options),
      )
    },
  })
}

export function usePostProjectProviderOrganizationProjectPipelineRun<
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
                  (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
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
  const mutationDefaults = getPostProjectProviderOrganizationProjectPipelineRunMutationOptions<
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

export function getProjectsProjectIdPipelineDefinitionsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
) {
  return ['projects', '/projects/:project_id/pipeline-definitions', args] as const
}

export function getProjectsProjectIdPipelineDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPipelineDefinitionsQueryKey>
  >({
    queryKey: getProjectsProjectIdPipelineDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdPipelineDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdPipelineDefinitionsQueryKey>
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
      ...getProjectsProjectIdPipelineDefinitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdPipelineDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdPipelineDefinitionsQueryKey>
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
      ...getProjectsProjectIdPipelineDefinitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdPipelineDefinitionsMutationKey() {
  return ['projects', '/projects/:project_id/pipeline-definitions', 'POST'] as const
}

export function getPostProjectsProjectIdPipelineDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdPipelineDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['pipeline-definitions']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'].$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdPipelineDefinitions<
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
                ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdPipelineDefinitionsMutationOptions<
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

export function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id',
    args,
  ] as const
}

export function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey>
  >({
    queryKey: getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey>
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
      ...getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey>
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
      ...getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationKey() {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id',
    'DELETE',
  ] as const
}

export function getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
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
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
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
    getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationOptions<
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

export function getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationKey() {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id',
    'PATCH',
  ] as const
}

export function getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
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
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
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
    getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationOptions<
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

export function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id/triggers',
    args,
  ] as const
}

export function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey>
  >({
    queryKey: getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][
          ':pipeline_definition_id'
        ].triggers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey
        >
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
      ...getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey
        >
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
      ...getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersMutationKey() {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id/triggers',
    'POST',
  ] as const
}

export function getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][
          ':pipeline_definition_id'
        ].triggers.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
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
                  (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
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
    getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersMutationOptions<
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

export function getProjectsProjectIdTriggersTriggerIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', args] as const
}

export function getProjectsProjectIdTriggersTriggerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTriggersTriggerIdQueryKey>
  >({
    queryKey: getProjectsProjectIdTriggersTriggerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].triggers[':trigger_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdTriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTriggersTriggerIdQueryKey>
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
      ...getProjectsProjectIdTriggersTriggerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdTriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTriggersTriggerIdQueryKey>
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
      ...getProjectsProjectIdTriggersTriggerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdTriggersTriggerIdMutationKey() {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdTriggersTriggerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdTriggersTriggerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].triggers[':trigger_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdTriggersTriggerId<
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
                  (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdTriggersTriggerIdMutationOptions<
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

export function getPatchProjectsProjectIdTriggersTriggerIdMutationKey() {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', 'PATCH'] as const
}

export function getPatchProjectsProjectIdTriggersTriggerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdTriggersTriggerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].triggers[':trigger_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchProjectsProjectIdTriggersTriggerId<
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
                  (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdTriggersTriggerIdMutationOptions<
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

export function getPostProjectsProjectIdRollbackMutationKey() {
  return ['projects', '/projects/:project_id/rollback', 'POST'] as const
}

export function getPostProjectsProjectIdRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['rollback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['rollback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['rollback']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].rollback.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdRollback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['rollback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['rollback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdRollbackMutationOptions<TError, TOnMutateResult>(
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

export function getDeployEnvironmentsQueryKey(
  args: InferRequestType<typeof client.deploy.environments.$get>,
) {
  return ['deploy', '/deploy/environments', args] as const
}

export function getDeployEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deploy.environments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeployEnvironmentsQueryKey>
  >({
    queryKey: getDeployEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy.environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeployEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deploy.environments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeployEnvironmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeployEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deploy.environments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeployEnvironmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeployEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
) {
  return ['deploy', '/deploy/environments/:environment_id', args] as const
}

export function getDeployEnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployEnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getDeployEnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy.environments[':environment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeployEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployEnvironmentsEnvironmentIdQueryKey>
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
      ...getDeployEnvironmentsEnvironmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeployEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployEnvironmentsEnvironmentIdQueryKey>
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
      ...getDeployEnvironmentsEnvironmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeployComponentsQueryKey(
  args: InferRequestType<typeof client.deploy.components.$get>,
) {
  return ['deploy', '/deploy/components', args] as const
}

export function getDeployComponentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deploy.components.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeployComponentsQueryKey>
  >({
    queryKey: getDeployComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy.components.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeployComponents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deploy.components.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeployComponentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeployComponents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deploy.components.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeployComponentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeployComponentsComponentIdQueryKey(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
) {
  return ['deploy', '/deploy/components/:component_id', args] as const
}

export function getDeployComponentsComponentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployComponentsComponentIdQueryKey>
  >({
    queryKey: getDeployComponentsComponentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy.components[':component_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeployComponentsComponentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployComponentsComponentIdQueryKey>
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
      ...getDeployComponentsComponentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeployComponentsComponentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployComponentsComponentIdQueryKey>
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
      ...getDeployComponentsComponentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeployComponentsComponentIdVersionsQueryKey(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
) {
  return ['deploy', '/deploy/components/:component_id/versions', args] as const
}

export function getDeployComponentsComponentIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployComponentsComponentIdVersionsQueryKey>
  >({
    queryKey: getDeployComponentsComponentIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy.components[':component_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeployComponentsComponentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployComponentsComponentIdVersionsQueryKey>
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
      ...getDeployComponentsComponentIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeployComponentsComponentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployComponentsComponentIdVersionsQueryKey>
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
      ...getDeployComponentsComponentIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWebhookQueryKey(args: InferRequestType<typeof client.webhook.$get>) {
  return ['webhook', '/webhook', args] as const
}

export function getWebhookQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhookQueryKey>
  >({
    queryKey: getWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhookMutationKey() {
  return ['webhook', '/webhook', 'POST'] as const
}

export function getPostWebhookMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook.$post>) {
      return parseResponse(client.webhook.$post(args, options))
    },
  })
}

export function usePostWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>>,
        TError,
        InferRequestType<typeof client.webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhookWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
) {
  return ['webhook', '/webhook/:webhook_id', args] as const
}

export function getWebhookWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookWebhookIdQueryKey>
  >({
    queryKey: getWebhookWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhookWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutWebhookWebhookIdMutationKey() {
  return ['webhook', '/webhook/:webhook_id', 'PUT'] as const
}

export function getPutWebhookWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook)[':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhookWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhook)[':webhook_id']['$put']>) {
      return parseResponse(client.webhook[':webhook_id'].$put(args, options))
    },
  })
}

export function usePutWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook)[':webhook_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhookWebhookIdMutationKey() {
  return ['webhook', '/webhook/:webhook_id', 'DELETE'] as const
}

export function getDeleteWebhookWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhook)[':webhook_id']['$delete']>) {
      return parseResponse(client.webhook[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook)[':webhook_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getOtelExportersQueryKey(
  args: InferRequestType<typeof client.otel.exporters.$get>,
) {
  return ['otel', '/otel/exporters', args] as const
}

export function getOtelExportersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.otel.exporters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOtelExportersQueryKey>
  >({
    queryKey: getOtelExportersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.otel.exporters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOtelExporters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.otel.exporters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOtelExportersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOtelExportersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOtelExporters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.otel.exporters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOtelExportersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOtelExportersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOtelExportersMutationKey() {
  return ['otel', '/otel/exporters', 'POST'] as const
}

export function getPostOtelExportersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.otel.exporters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOtelExportersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.otel.exporters.$post>) {
      return parseResponse(client.otel.exporters.$post(args, options))
    },
  })
}

export function usePostOtelExporters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.otel.exporters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOtelExportersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOtelExportersOtelExporterIdMutationKey() {
  return ['otel', '/otel/exporters/:otel_exporter_id', 'DELETE'] as const
}

export function getDeleteOtelExportersOtelExporterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOtelExportersOtelExporterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>,
    ) {
      return parseResponse(client.otel.exporters[':otel_exporter_id'].$delete(args, options))
    },
  })
}

export function useDeleteOtelExportersOtelExporterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOtelExportersOtelExporterIdMutationOptions<
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

export function getPipelinePipelineIdValuesQueryKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline_id/values', args] as const
}

export function getPipelinePipelineIdValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdValuesQueryKey>
  >({
    queryKey: getPipelinePipelineIdValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipeline[':pipeline_id'].values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePipelinePipelineIdValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdValuesQueryKey>
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
      ...getPipelinePipelineIdValuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePipelinePipelineIdValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinePipelineIdValuesQueryKey>
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
      ...getPipelinePipelineIdValuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWorkflowIdQueryKey(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
) {
  return ['workflow', '/workflow/:id', args] as const
}

export function getWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.workflow)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowIdQueryKey>
  >({
    queryKey: getWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workflow[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWorkflowId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkflowIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkflowId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkflowIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
) {
  return ['jobs', '/jobs/:job_id', args] as const
}

export function getJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >({
    queryKey: getJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':job_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
