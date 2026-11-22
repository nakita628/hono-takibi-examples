import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectInsightsPagesProjectSlugSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsPagesProjectSlugSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostInsightsPagesProjectSlugSummary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInsightsPagesProjectSlugSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobs<
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
  args: () => InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsOrgSlugSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsOrgSlugSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugBranchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugFlakyTests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugFlakyTestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugWorkflowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugWorkflowsWorkflowName<
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
  args: () => InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugWorkflowsWorkflowNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugWorkflowsWorkflowNameJobs<
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
  args: () => InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugWorkflowsWorkflowNameSummary<
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
  args: () => InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectInsightsProjectSlugWorkflowsWorkflowNameTestMetrics<
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
  args: () => InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectMeCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeCollaborationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrganization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrganizationOrgSlugOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationOrgSlugOrIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationOrgSlugOrId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationOrgSlugOrIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationOrgSlugOrIdProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationOrgSlugOrIdProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrganizationOrgSlugOrIdUrlOrbAllowList<
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
  args: () => InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationOrgSlugOrIdUrlOrbAllowListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationOrgSlugOrIdUrlOrbAllowList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationOrgSlugOrIdUrlOrbAllowListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPipeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pipeline.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPipelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPipelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPipelineContinue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPipelineContinueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPipelinePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPipelinePipelineIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPipelinePipelineIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPipelinePipelineIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPipelinePipelineIdWorkflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPipelinePipelineIdWorkflowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectProjectProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectProjectSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteProjectProjectSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectProjectSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugCheckoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugCheckoutKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectProjectSlugCheckoutKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectProjectSlugCheckoutKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugCheckoutKeyFingerprint<
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
  args: () => InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugCheckoutKeyFingerprintQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteProjectProjectSlugCheckoutKeyFingerprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectProjectSlugCheckoutKeyFingerprintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugEnvvar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugEnvvarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectProjectSlugEnvvar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectProjectSlugEnvvarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugEnvvarName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugEnvvarNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteProjectProjectSlugEnvvarName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectProjectSlugEnvvarNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProjectProjectSlugJobJobNumberCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectProjectSlugJobJobNumberCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugPipeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugPipelineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectProjectSlugPipeline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectProjectSlugPipelineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugPipelineMine<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.project)[':project-slug']['pipeline']['mine']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugPipelineMineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugPipelinePipelineNumber<
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
  args: () => InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugPipelinePipelineNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectProjectProjectSlugSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProjectSlugScheduleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectProjectSlugSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectProjectSlugScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectScheduleScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScheduleScheduleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchScheduleScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchScheduleScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWorkflowIdApproveApprovalRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowIdApproveApprovalRequestIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWorkflowIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectWorkflowIdJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowIdJobQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWorkflowIdRerun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowIdRerunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrgOrgIDOidcCustomClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrgOrgIDOidcCustomClaimsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrgOrgIDOidcCustomClaims<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgOrgIDOidcCustomClaimsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchOrgOrgIDOidcCustomClaims<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrgOrgIDOidcCustomClaimsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrgOrgIDProjectProjectIDOidcCustomClaims<
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
  args: () => InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrgOrgIDProjectProjectIDOidcCustomClaims<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchOrgOrgIDProjectProjectIDOidcCustomClaims<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOwnerOwnerIDContextContextDecision<
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
  args: () => InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnerOwnerIDContextContextDecisionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOwnerOwnerIDContextContextDecision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOwnerOwnerIDContextContextDecisionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOwnerOwnerIDContextContextDecisionSettings<
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
  args: () => InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnerOwnerIDContextContextDecisionSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchOwnerOwnerIDContextContextDecisionSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOwnerOwnerIDContextContextDecisionSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOwnerOwnerIDContextContextDecisionDecisionID<
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
  args: () => InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnerOwnerIDContextContextDecisionDecisionIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundle<
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
  args: () => InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectOwnerOwnerIDContextContextPolicyBundle<
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
  args: () => InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnerOwnerIDContextContextPolicyBundleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOwnerOwnerIDContextContextPolicyBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOwnerOwnerIDContextContextPolicyBundleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOwnerOwnerIDContextContextPolicyBundlePolicyName<
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
  args: () => InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectContext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.context.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostContext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$post>>>>>,
        TError,
        InferRequestType<typeof client.context.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContextMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectContextContextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContextContextIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteContextContextId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContextContextIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectContextContextIdEnvironmentVariable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.context)[':context_id']['environment-variable']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContextContextIdEnvironmentVariableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutContextContextIdEnvironmentVariableEnvVarName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutContextContextIdEnvironmentVariableEnvVarNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContextContextIdEnvironmentVariableEnvVarName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContextContextIdEnvironmentVariableEnvVarNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectContextContextIdRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContextContextIdRestrictionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostContextContextIdRestrictions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContextContextIdRestrictionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContextContextIdRestrictionsRestrictionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContextContextIdRestrictionsRestrictionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectProviderOrganizationProjectSettings<
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
  args: () => InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectProviderOrganizationProjectSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchProjectProviderOrganizationProjectSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectProviderOrganizationProjectSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrganizationsOrgIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrgIdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizationsOrgIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrgIdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrganizationsOrgIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':org_id']['groups'][':group_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrgIdGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationsOrgIdGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsOrgIdGroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationsOrgIdUsageExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrgIdUsageExportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOrganizationsOrgIdUsageExportJobUsageExportJobId<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectProviderOrganizationProjectPipelineRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectProviderOrganizationProjectPipelineRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectsProjectIdPipelineDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdPipelineDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdPipelineDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdPipelineDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectProjectsProjectIdTriggersTriggerId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdTriggersTriggerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectIdTriggersTriggerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdTriggersTriggerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchProjectsProjectIdTriggersTriggerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsProjectIdTriggersTriggerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdRollback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdRollbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeployEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deploy.environments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeployEnvironmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeployEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeployEnvironmentsEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeployComponents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deploy.components.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeployComponentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeployComponentsComponentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeployComponentsComponentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeployComponentsComponentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.deploy.components)[':component_id']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeployComponentsComponentIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhook.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>>,
        TError,
        InferRequestType<typeof client.webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectWebhookWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhookWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhookWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOtelExporters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.otel.exporters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOtelExportersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOtelExporters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOtelExportersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOtelExportersOtelExporterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOtelExportersOtelExporterIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPipelinePipelineIdValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPipelinePipelineIdValuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectWorkflowId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workflow)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
