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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>
  >,
) {
  return ['insights', '/insights/pages/:project-slug/summary', toValue(args)] as const
}

export function getInsightsPagesProjectSlugSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsPagesProjectSlugSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights.pages[':project-slug'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInsightsPagesProjectSlugSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsPagesProjectSlugSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsPagesProjectSlugSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights.pages[':project-slug'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
    >
  >,
) {
  return [
    'insights',
    '/insights/time-series/:project-slug/workflows/:workflow-name/jobs',
    toValue(args),
  ] as const
}

export function getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights['time-series'][':project-slug'].workflows[':workflow-name'].jobs.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
                    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
                    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey>
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
              (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.insights['time-series'][':project-slug'].workflows[':workflow-name'].jobs.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsOrgSlugSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>
  >,
) {
  return ['insights', '/insights/:org-slug/summary', toValue(args)] as const
}

export function getInsightsOrgSlugSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsOrgSlugSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':org-slug'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsightsOrgSlugSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsOrgSlugSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsOrgSlugSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':org-slug'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>
  >,
) {
  return ['insights', '/insights/:project-slug/branches', toValue(args)] as const
}

export function getInsightsProjectSlugBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug'].branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsProjectSlugBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug'].branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugFlakyTestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>
  >,
) {
  return ['insights', '/insights/:project-slug/flaky-tests', toValue(args)] as const
}

export function getInsightsProjectSlugFlakyTestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugFlakyTestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug']['flaky-tests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>
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
                  ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugFlakyTestsQueryKey>
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
          Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugFlakyTestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsProjectSlugFlakyTestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug']['flaky-tests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>
  >,
) {
  return ['insights', '/insights/:project-slug/workflows', toValue(args)] as const
}

export function getInsightsProjectSlugWorkflowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug'].workflows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugWorkflowsQueryKey>
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
          Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsProjectSlugWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug'].workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
    >
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name', toValue(args)] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameQueryKey>
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
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug'].workflows[':workflow-name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
    >
  >,
) {
  return [
    'insights',
    '/insights/:project-slug/workflows/:workflow-name/jobs',
    toValue(args),
  ] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey>
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
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug'].workflows[':workflow-name'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
    >
  >,
) {
  return [
    'insights',
    '/insights/:project-slug/workflows/:workflow-name/summary',
    toValue(args),
  ] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey>
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
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug'].workflows[':workflow-name'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
    >
  >,
) {
  return [
    'insights',
    '/insights/:project-slug/workflows/:workflow-name/test-metrics',
    toValue(args),
  ] as const
}

export function getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights[':project-slug'].workflows[':workflow-name']['test-metrics'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
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
                    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey>
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
              (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.insights[':project-slug'].workflows[':workflow-name']['test-metrics'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMeCollaborationsQueryKey() {
  return ['me', '/me/collaborations'] as const
}

export function getMeCollaborationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeCollaborationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.collaborations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeCollaborations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>
            >
          >,
          ReturnType<typeof getMeCollaborationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeCollaborationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeCollaborationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.collaborations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organization.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>>,
) {
  return ['organization', '/organization/:org-slug-or-id', toValue(args)] as const
}

export function getOrganizationOrgSlugOrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationOrgSlugOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization[':org-slug-or-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationOrgSlugOrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationOrgSlugOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationOrgSlugOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization[':org-slug-or-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']>
  >,
) {
  return [
    'organization',
    '/organization/:org-slug-or-id/url-orb-allow-list',
    toValue(args),
  ] as const
}

export function getOrganizationOrgSlugOrIdUrlOrbAllowListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization[':org-slug-or-id']['url-orb-allow-list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']>
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
                    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
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
                    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey>
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
              (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationOrgSlugOrIdUrlOrbAllowListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization[':org-slug-or-id']['url-orb-allow-list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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

export function getPipelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pipeline.$get>>,
) {
  return ['pipeline', '/pipeline', toValue(args)] as const
}

export function getPipelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pipeline.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipeline.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePipeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pipeline.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>
          >,
          ReturnType<typeof getPipelineQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPipelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>>,
) {
  return ['pipeline', '/pipeline/:pipeline-id', toValue(args)] as const
}

export function getPipelinePipelineIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelinePipelineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipeline[':pipeline-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePipelinePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPipelinePipelineIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelinePipelineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipeline[':pipeline-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPipelinePipelineIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>
  >,
) {
  return ['pipeline', '/pipeline/:pipeline-id/config', toValue(args)] as const
}

export function getPipelinePipelineIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelinePipelineIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipeline[':pipeline-id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPipelinePipelineIdConfigQueryKey>
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
          Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelinePipelineIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipeline[':pipeline-id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPipelinePipelineIdWorkflowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>
  >,
) {
  return ['pipeline', '/pipeline/:pipeline-id/workflow', toValue(args)] as const
}

export function getPipelinePipelineIdWorkflowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelinePipelineIdWorkflowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipeline[':pipeline-id'].workflow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPipelinePipelineIdWorkflowQueryKey>
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
          Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdWorkflowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelinePipelineIdWorkflowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipeline[':pipeline-id'].workflow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectProjectSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.project)[':project-slug']['$get']>>,
) {
  return ['project', '/project/:project-slug', toValue(args)] as const
}

export function getProjectProjectSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.project)[':project-slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.project)[':project-slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>
  >,
) {
  return ['project', '/project/:project-slug/checkout-key', toValue(args)] as const
}

export function getProjectProjectSlugCheckoutKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugCheckoutKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug']['checkout-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>
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
                  ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugCheckoutKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugCheckoutKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugCheckoutKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug']['checkout-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
    >
  >,
) {
  return ['project', '/project/:project-slug/checkout-key/:fingerprint', toValue(args)] as const
}

export function getProjectProjectSlugCheckoutKeyFingerprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugCheckoutKeyFingerprintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug']['checkout-key'][':fingerprint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
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
                    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
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
                    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugCheckoutKeyFingerprintQueryKey>
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
              (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugCheckoutKeyFingerprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugCheckoutKeyFingerprintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug']['checkout-key'][':fingerprint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>
  >,
) {
  return ['project', '/project/:project-slug/envvar', toValue(args)] as const
}

export function getProjectProjectSlugEnvvarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugEnvvarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].envvar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugEnvvarQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugEnvvarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugEnvvarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].envvar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>
  >,
) {
  return ['project', '/project/:project-slug/envvar/:name', toValue(args)] as const
}

export function getProjectProjectSlugEnvvarNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugEnvvarNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].envvar[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugEnvvarNameQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugEnvvarNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugEnvvarNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].envvar[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>
  >,
) {
  return ['project', '/project/:project-slug/pipeline', toValue(args)] as const
}

export function getProjectProjectSlugPipelineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugPipelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].pipeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugPipelineQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugPipelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugPipelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].pipeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
  >,
) {
  return ['project', '/project/:project-slug/pipeline/mine', toValue(args)] as const
}

export function getProjectProjectSlugPipelineMineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugPipelineMineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].pipeline.mine.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugPipelineMineQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugPipelineMineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugPipelineMineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].pipeline.mine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectProjectSlugPipelinePipelineNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
    >
  >,
) {
  return ['project', '/project/:project-slug/pipeline/:pipeline-number', toValue(args)] as const
}

export function getProjectProjectSlugPipelinePipelineNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugPipelinePipelineNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].pipeline[':pipeline-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
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
                    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
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
                    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugPipelinePipelineNumberQueryKey>
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
              (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugPipelinePipelineNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugPipelinePipelineNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].pipeline[':pipeline-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectProjectSlugScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>
  >,
) {
  return ['project', '/project/:project-slug/schedule', toValue(args)] as const
}

export function getProjectProjectSlugScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectSlugScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':project-slug'].schedule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectProjectSlugScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectSlugScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectSlugScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':project-slug'].schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>>,
) {
  return ['schedule', '/schedule/:schedule-id', toValue(args)] as const
}

export function getScheduleScheduleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule[':schedule-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduleScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScheduleScheduleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduleScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule[':schedule-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':id']['$get']>>,
) {
  return ['user', '/user/:id', toValue(args)] as const
}

export function getUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUserIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflow)[':id']['job']['$get']>>,
) {
  return ['workflow', '/workflow/:id/job', toValue(args)] as const
}

export function getWorkflowIdJobQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflow)[':id']['job']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowIdJobQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflow[':id'].job.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowIdJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflow)[':id']['job']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowIdJobQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowIdJobQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowIdJobQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflow[':id'].job.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>
  >,
) {
  return ['org', '/org/:orgID/oidc-custom-claims', toValue(args)] as const
}

export function getOrgOrgIDOidcCustomClaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgOrgIDOidcCustomClaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org[':orgID']['oidc-custom-claims'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgOrgIDOidcCustomClaimsQueryKey>
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
          Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIDOidcCustomClaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgOrgIDOidcCustomClaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org[':orgID']['oidc-custom-claims'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
    >
  >,
) {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', toValue(args)] as const
}

export function getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
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
                    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
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
                    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey>
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
              (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgOrgIDProjectProjectIDOidcCustomClaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision', toValue(args)] as const
}

export function getOwnerOwnerIDContextContextDecisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnerOwnerIDContextContextDecisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOwnerOwnerIDContextContextDecisionQueryKey>
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
            ReturnType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnerOwnerIDContextContextDecisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owner[':ownerID'].context[':context'].decision.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
    >
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision/settings', toValue(args)] as const
}

export function getOwnerOwnerIDContextContextDecisionSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnerOwnerIDContextContextDecisionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOwnerOwnerIDContextContextDecisionSettingsQueryKey>
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
              (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnerOwnerIDContextContextDecisionSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owner[':ownerID'].context[':context'].decision.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
    >
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision/:decisionID', toValue(args)] as const
}

export function getOwnerOwnerIDContextContextDecisionDecisionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision[':decisionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey>
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
              (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnerOwnerIDContextContextDecisionDecisionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owner[':ownerID'].context[':context'].decision[':decisionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
    >
  >,
) {
  return [
    'owner',
    '/owner/:ownerID/context/:context/decision/:decisionID/policy-bundle',
    toValue(args),
  ] as const
}

export function getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owner[':ownerID'].context[':context'].decision[':decisionID']['policy-bundle'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey>
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
              (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.owner[':ownerID'].context[':context'].decision[':decisionID'][
            'policy-bundle'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOwnerOwnerIDContextContextPolicyBundleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
    >
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle', toValue(args)] as const
}

export function getOwnerOwnerIDContextContextPolicyBundleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnerOwnerIDContextContextPolicyBundleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owner[':ownerID'].context[':context']['policy-bundle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundleQueryKey>
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
              (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnerOwnerIDContextContextPolicyBundleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owner[':ownerID'].context[':context']['policy-bundle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
    >
  >,
) {
  return [
    'owner',
    '/owner/:ownerID/context/:context/policy-bundle/:policyName',
    toValue(args),
  ] as const
}

export function getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owner[':ownerID'].context[':context']['policy-bundle'][':policyName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
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
                    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey>
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
              (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwnerOwnerIDContextContextPolicyBundlePolicyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owner[':ownerID'].context[':context']['policy-bundle'][':policyName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getContextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.context.$get>>,
) {
  return ['context', '/context', toValue(args)] as const
}

export function getContextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.context.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.context.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.context.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>
          >,
          ReturnType<typeof getContextQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.context.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.context.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.context)[':context_id']['$get']>>,
) {
  return ['context', '/context/:context_id', toValue(args)] as const
}

export function getContextContextIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.context)[':context_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContextContextIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.context[':context_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContextContextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.context)[':context_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContextContextIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContextContextIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContextContextIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.context[':context_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>
  >,
) {
  return ['context', '/context/:context_id/environment-variable', toValue(args)] as const
}

export function getContextContextIdEnvironmentVariableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContextContextIdEnvironmentVariableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.context[':context_id']['environment-variable'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContextContextIdEnvironmentVariableQueryKey>
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
            ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContextContextIdEnvironmentVariableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContextContextIdEnvironmentVariableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.context[':context_id']['environment-variable'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>
  >,
) {
  return ['context', '/context/:context_id/restrictions', toValue(args)] as const
}

export function getContextContextIdRestrictionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContextContextIdRestrictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.context[':context_id'].restrictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContextContextIdRestrictionsQueryKey>
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
          Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContextContextIdRestrictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContextContextIdRestrictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.context[':context_id'].restrictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
    >
  >,
) {
  return ['project', '/project/:provider/:organization/:project/settings', toValue(args)] as const
}

export function getProjectProviderOrganizationProjectSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProviderOrganizationProjectSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':provider'][':organization'][':project'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
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
                    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
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
                    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectProviderOrganizationProjectSettingsQueryKey>
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
              (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProviderOrganizationProjectSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProviderOrganizationProjectSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':provider'][':organization'][':project'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>
  >,
) {
  return ['organizations', '/organizations/:org_id/groups', toValue(args)] as const
}

export function getOrganizationsOrgIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrgIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':org_id'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrgIdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrgIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':org_id'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
  >,
) {
  return ['organizations', '/organizations/:org_id/groups/:group_id', toValue(args)] as const
}

export function getOrganizationsOrgIdGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrgIdGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':org_id'].groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
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
                    (typeof client.organizations)[':org_id']['groups'][':group_id']['$get']
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
                    (typeof client.organizations)[':org_id']['groups'][':group_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrgIdGroupsGroupIdQueryKey>
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
            ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrgIdGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':org_id'].groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:org_id/usage_export_job/:usage_export_job_id',
    toValue(args),
  ] as const
}

export function getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':org_id'].usage_export_job[':usage_export_job_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
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
                    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
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
                    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey>
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
              (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrgIdUsageExportJobUsageExportJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':org_id'].usage_export_job[':usage_export_job_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/pipeline-definitions', toValue(args)] as const
}

export function getProjectsProjectIdPipelineDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdPipelineDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
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
                    (typeof client.projects)[':project_id']['pipeline-definitions']['$get']
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
                    (typeof client.projects)[':project_id']['pipeline-definitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdPipelineDefinitionsQueryKey>
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
            ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPipelineDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdPipelineDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id']['pipeline-definitions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.projects)[':project_id']['pipeline-definitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project_id']['pipeline-definitions']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
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
                    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
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
                    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey>
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
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id/triggers',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id']['pipeline-definitions'][
          ':pipeline_definition_id'
        ].triggers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
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
                    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
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
                    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey
          >
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
              (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id']['pipeline-definitions'][
            ':pipeline_definition_id'
          ].triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', toValue(args)] as const
}

export function getProjectsProjectIdTriggersTriggerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdTriggersTriggerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].triggers[':trigger_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
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
                    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
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
                    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdTriggersTriggerIdQueryKey>
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
            ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTriggersTriggerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdTriggersTriggerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].triggers[':trigger_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploy.environments.$get>>,
) {
  return ['deploy', '/deploy/environments', toValue(args)] as const
}

export function getDeployEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploy.environments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy.environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeployEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploy.environments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
            >
          >,
          ReturnType<typeof getDeployEnvironmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeployEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy.environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeployEnvironmentsEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>
  >,
) {
  return ['deploy', '/deploy/environments/:environment_id', toValue(args)] as const
}

export function getDeployEnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployEnvironmentsEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy.environments[':environment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeployEnvironmentsEnvironmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployEnvironmentsEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployEnvironmentsEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy.environments[':environment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeployComponentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploy.components.$get>>,
) {
  return ['deploy', '/deploy/components', toValue(args)] as const
}

export function getDeployComponentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploy.components.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployComponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy.components.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeployComponents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploy.components.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>
            >
          >,
          ReturnType<typeof getDeployComponentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeployComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployComponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy.components.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeployComponentsComponentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>
  >,
) {
  return ['deploy', '/deploy/components/:component_id', toValue(args)] as const
}

export function getDeployComponentsComponentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployComponentsComponentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy.components[':component_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeployComponentsComponentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployComponentsComponentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployComponentsComponentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy.components[':component_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeployComponentsComponentIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
  >,
) {
  return ['deploy', '/deploy/components/:component_id/versions', toValue(args)] as const
}

export function getDeployComponentsComponentIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployComponentsComponentIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy.components[':component_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDeployComponentsComponentIdVersionsQueryKey>
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
            ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployComponentsComponentIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployComponentsComponentIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy.components[':component_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook.$get>>,
) {
  return ['webhook', '/webhook', toValue(args)] as const
}

export function getWebhookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
          >,
          ReturnType<typeof getWebhookQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhook.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>>,
) {
  return ['webhook', '/webhook/:webhook_id', toValue(args)] as const
}

export function getWebhookWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhookWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.otel.exporters.$get>>,
) {
  return ['otel', '/otel/exporters', toValue(args)] as const
}

export function getOtelExportersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.otel.exporters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOtelExportersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.otel.exporters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOtelExporters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.otel.exporters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
          >,
          ReturnType<typeof getOtelExportersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOtelExportersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOtelExportersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.otel.exporters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.otel.exporters.$post>,
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>
  >,
) {
  return ['pipeline', '/pipeline/:pipeline_id/values', toValue(args)] as const
}

export function getPipelinePipelineIdValuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelinePipelineIdValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipeline[':pipeline_id'].values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPipelinePipelineIdValuesQueryKey>
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
          Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinePipelineIdValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelinePipelineIdValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipeline[':pipeline_id'].values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflow)[':id']['$get']>>,
) {
  return ['workflow', '/workflow/:id', toValue(args)] as const
}

export function getWorkflowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflow)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflow[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflow)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getWorkflowIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflow[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':job_id']['$get']>>,
) {
  return ['jobs', '/jobs/:job_id', toValue(args)] as const
}

export function getJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':job_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':job_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsJobIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
