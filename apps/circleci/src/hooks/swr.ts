import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetInsightsPagesProjectSlugSummaryKey(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
) {
  return ['insights', '/insights/pages/:project-slug/summary', args] as const
}

export function useGetInsightsPagesProjectSlugSummary<TError = unknown>(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
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
        ? getGetInsightsPagesProjectSlugSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights.pages[':project-slug'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsPagesProjectSlugSummary<TError = unknown>(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
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
        ? getGetInsightsPagesProjectSlugSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights.pages[':project-slug'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInsightsPagesProjectSlugSummaryKey() {
  return ['insights', '/insights/pages/:project-slug/summary', 'POST'] as const
}

export function usePostInsightsPagesProjectSlugSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightsPagesProjectSlugSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>
        },
      ) => parseResponse(client.insights.pages[':project-slug'].summary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsKey(
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

export function useGetInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsKey(args)
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
                (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
          client.insights['time-series'][':project-slug'].workflows[':workflow-name'].jobs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsKey(args)
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
                (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
          client.insights['time-series'][':project-slug'].workflows[':workflow-name'].jobs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsOrgSlugSummaryKey(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
) {
  return ['insights', '/insights/:org-slug/summary', args] as const
}

export function useGetInsightsOrgSlugSummary<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
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
        ? getGetInsightsOrgSlugSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights[':org-slug'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsOrgSlugSummary<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
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
        ? getGetInsightsOrgSlugSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':org-slug']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights[':org-slug'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugBranchesKey(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
) {
  return ['insights', '/insights/:project-slug/branches', args] as const
}

export function useGetInsightsProjectSlugBranches<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
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
        ? getGetInsightsProjectSlugBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights[':project-slug'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugBranches<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
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
        ? getGetInsightsProjectSlugBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights[':project-slug'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugFlakyTestsKey(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
) {
  return ['insights', '/insights/:project-slug/flaky-tests', args] as const
}

export function useGetInsightsProjectSlugFlakyTests<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
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
        ? getGetInsightsProjectSlugFlakyTestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights[':project-slug']['flaky-tests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugFlakyTests<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
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
        ? getGetInsightsProjectSlugFlakyTestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights[':project-slug']['flaky-tests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugWorkflowsKey(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
) {
  return ['insights', '/insights/:project-slug/workflows', args] as const
}

export function useGetInsightsProjectSlugWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
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
        ? getGetInsightsProjectSlugWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights[':project-slug'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
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
        ? getGetInsightsProjectSlugWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)[':project-slug']['workflows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights[':project-slug'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugWorkflowsWorkflowNameKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name', args] as const
}

export function useGetInsightsProjectSlugWorkflowsWorkflowName<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugWorkflowsWorkflowName<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugWorkflowsWorkflowNameJobsKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name/jobs', args] as const
}

export function useGetInsightsProjectSlugWorkflowsWorkflowNameJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameJobsKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name'].jobs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugWorkflowsWorkflowNameJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameJobsKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name'].jobs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugWorkflowsWorkflowNameSummaryKey(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
) {
  return ['insights', '/insights/:project-slug/workflows/:workflow-name/summary', args] as const
}

export function useGetInsightsProjectSlugWorkflowsWorkflowNameSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameSummaryKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name'].summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugWorkflowsWorkflowNameSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameSummaryKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name'].summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsProjectSlugWorkflowsWorkflowNameTestMetricsKey(
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

export function useGetInsightsProjectSlugWorkflowsWorkflowNameTestMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameTestMetricsKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name']['test-metrics'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsProjectSlugWorkflowsWorkflowNameTestMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsProjectSlugWorkflowsWorkflowNameTestMetricsKey(args)
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
                (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
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
          client.insights[':project-slug'].workflows[':workflow-name']['test-metrics'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostJobsJobIdCancelKey() {
  return ['jobs', '/jobs/:job-id/cancel', 'POST'] as const
}

export function usePostJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':job-id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':job-id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':job-id']['cancel']['$post']> },
      ) => parseResponse(client.jobs[':job-id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetMeCollaborationsKey() {
  return ['me', '/me/collaborations'] as const
}

export function useGetMeCollaborations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCollaborationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.collaborations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeCollaborations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeCollaborationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.collaborations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.collaborations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationKey() {
  return ['organization', '/organization', 'POST'] as const
}

export function usePostOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization.$post> }) =>
        parseResponse(client.organization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationOrgSlugOrIdKey(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
) {
  return ['organization', '/organization/:org-slug-or-id', args] as const
}

export function useGetOrganizationOrgSlugOrId<TError = unknown>(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
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
        ? getGetOrganizationOrgSlugOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization[':org-slug-or-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationOrgSlugOrId<TError = unknown>(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
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
        ? getGetOrganizationOrgSlugOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization[':org-slug-or-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationOrgSlugOrIdKey() {
  return ['organization', '/organization/:org-slug-or-id', 'DELETE'] as const
}

export function useDeleteOrganizationOrgSlugOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationOrgSlugOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$delete']> },
      ) => parseResponse(client.organization[':org-slug-or-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationOrgSlugOrIdProjectKey() {
  return ['organization', '/organization/:org-slug-or-id/project', 'POST'] as const
}

export function usePostOrganizationOrgSlugOrIdProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationOrgSlugOrIdProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>
        },
      ) => parseResponse(client.organization[':org-slug-or-id'].project.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationOrgSlugOrIdUrlOrbAllowListKey(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
) {
  return ['organization', '/organization/:org-slug-or-id/url-orb-allow-list', args] as const
}

export function useGetOrganizationOrgSlugOrIdUrlOrbAllowList<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationOrgSlugOrIdUrlOrbAllowListKey(args)
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
                (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
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
          client.organization[':org-slug-or-id']['url-orb-allow-list'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationOrgSlugOrIdUrlOrbAllowList<TError = unknown>(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationOrgSlugOrIdUrlOrbAllowListKey(args)
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
                (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
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
          client.organization[':org-slug-or-id']['url-orb-allow-list'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationOrgSlugOrIdUrlOrbAllowListKey() {
  return ['organization', '/organization/:org-slug-or-id/url-orb-allow-list', 'POST'] as const
}

export function usePostOrganizationOrgSlugOrIdUrlOrbAllowList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationOrgSlugOrIdUrlOrbAllowListKey()
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
            (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organization[':org-slug-or-id']['url-orb-allow-list'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdKey() {
  return [
    'organization',
    '/organization/:org-slug-or-id/url-orb-allow-list/:allow-list-entry-id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdKey()
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
            (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organization[':org-slug-or-id']['url-orb-allow-list'][
            ':allow-list-entry-id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPipelineKey(args: InferRequestType<typeof client.pipeline.$get>) {
  return ['pipeline', '/pipeline', args] as const
}

export function useGetPipeline<TError = unknown>(
  args: InferRequestType<typeof client.pipeline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPipelineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pipeline.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPipeline<TError = unknown>(
  args: InferRequestType<typeof client.pipeline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPipelineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pipeline.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPipelineContinueKey() {
  return ['pipeline', '/pipeline/continue', 'POST'] as const
}

export function usePostPipelineContinue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipeline.continue.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pipeline.continue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPipelineContinueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pipeline.continue.$post> }) =>
        parseResponse(client.pipeline.continue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPipelinePipelineIdKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline-id', args] as const
}

export function useGetPipelinePipelineId<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
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
        ? getGetPipelinePipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPipelinePipelineId<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
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
        ? getGetPipelinePipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPipelinePipelineIdConfigKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline-id/config', args] as const
}

export function useGetPipelinePipelineIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
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
        ? getGetPipelinePipelineIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline-id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPipelinePipelineIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
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
        ? getGetPipelinePipelineIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline-id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPipelinePipelineIdWorkflowKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline-id/workflow', args] as const
}

export function useGetPipelinePipelineIdWorkflow<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
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
        ? getGetPipelinePipelineIdWorkflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline-id'].workflow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPipelinePipelineIdWorkflow<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
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
        ? getGetPipelinePipelineIdWorkflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline-id'].workflow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectProjectSlugKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
) {
  return ['project', '/project/:project-slug', args] as const
}

export function useGetProjectProjectSlug<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
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
        ? getGetProjectProjectSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlug<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
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
        ? getGetProjectProjectSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectProjectSlugKey() {
  return ['project', '/project/:project-slug', 'DELETE'] as const
}

export function useDeleteProjectProjectSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':project-slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectProjectSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.project)[':project-slug']['$delete']> },
      ) => parseResponse(client.project[':project-slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProjectSlugCheckoutKeyKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
) {
  return ['project', '/project/:project-slug/checkout-key', args] as const
}

export function useGetProjectProjectSlugCheckoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
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
        ? getGetProjectProjectSlugCheckoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':project-slug']['checkout-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugCheckoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
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
        ? getGetProjectProjectSlugCheckoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':project-slug']['checkout-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectProjectSlugCheckoutKeyKey() {
  return ['project', '/project/:project-slug/checkout-key', 'POST'] as const
}

export function usePostProjectProjectSlugCheckoutKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['checkout-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectProjectSlugCheckoutKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>
        },
      ) => parseResponse(client.project[':project-slug']['checkout-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProjectSlugCheckoutKeyFingerprintKey(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
) {
  return ['project', '/project/:project-slug/checkout-key/:fingerprint', args] as const
}

export function useGetProjectProjectSlugCheckoutKeyFingerprint<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectProjectSlugCheckoutKeyFingerprintKey(args)
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
                (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
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
          client.project[':project-slug']['checkout-key'][':fingerprint'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugCheckoutKeyFingerprint<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectProjectSlugCheckoutKeyFingerprintKey(args)
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
                (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
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
          client.project[':project-slug']['checkout-key'][':fingerprint'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectProjectSlugCheckoutKeyFingerprintKey() {
  return ['project', '/project/:project-slug/checkout-key/:fingerprint', 'DELETE'] as const
}

export function useDeleteProjectProjectSlugCheckoutKeyFingerprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectProjectSlugCheckoutKeyFingerprintKey()
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
            (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.project[':project-slug']['checkout-key'][':fingerprint'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProjectSlugEnvvarKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
) {
  return ['project', '/project/:project-slug/envvar', args] as const
}

export function useGetProjectProjectSlugEnvvar<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
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
        ? getGetProjectProjectSlugEnvvarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].envvar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugEnvvar<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
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
        ? getGetProjectProjectSlugEnvvarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].envvar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectProjectSlugEnvvarKey() {
  return ['project', '/project/:project-slug/envvar', 'POST'] as const
}

export function usePostProjectProjectSlugEnvvar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':project-slug']['envvar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectProjectSlugEnvvarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$post']> },
      ) => parseResponse(client.project[':project-slug'].envvar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProjectSlugEnvvarNameKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
) {
  return ['project', '/project/:project-slug/envvar/:name', args] as const
}

export function useGetProjectProjectSlugEnvvarName<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
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
        ? getGetProjectProjectSlugEnvvarNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':project-slug'].envvar[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugEnvvarName<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
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
        ? getGetProjectProjectSlugEnvvarNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':project-slug'].envvar[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectProjectSlugEnvvarNameKey() {
  return ['project', '/project/:project-slug/envvar/:name', 'DELETE'] as const
}

export function useDeleteProjectProjectSlugEnvvarName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectProjectSlugEnvvarNameKey()
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
            (typeof client.project)[':project-slug']['envvar'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(client.project[':project-slug'].envvar[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectProjectSlugJobJobNumberCancelKey() {
  return ['project', '/project/:project-slug/job/:job-number/cancel', 'POST'] as const
}

export function usePostProjectProjectSlugJobJobNumberCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectProjectSlugJobJobNumberCancelKey()
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
            (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project[':project-slug'].job[':job-number'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProjectSlugPipelineKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
) {
  return ['project', '/project/:project-slug/pipeline', args] as const
}

export function useGetProjectProjectSlugPipeline<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
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
        ? getGetProjectProjectSlugPipelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].pipeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugPipeline<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
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
        ? getGetProjectProjectSlugPipelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].pipeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectProjectSlugPipelineKey() {
  return ['project', '/project/:project-slug/pipeline', 'POST'] as const
}

export function usePostProjectProjectSlugPipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['pipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectProjectSlugPipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$post']> },
      ) => parseResponse(client.project[':project-slug'].pipeline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProjectSlugPipelineMineKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
) {
  return ['project', '/project/:project-slug/pipeline/mine', args] as const
}

export function useGetProjectProjectSlugPipelineMine<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
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
        ? getGetProjectProjectSlugPipelineMineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':project-slug'].pipeline.mine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugPipelineMine<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
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
        ? getGetProjectProjectSlugPipelineMineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':project-slug'].pipeline.mine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectProjectSlugPipelinePipelineNumberKey(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
) {
  return ['project', '/project/:project-slug/pipeline/:pipeline-number', args] as const
}

export function useGetProjectProjectSlugPipelinePipelineNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectProjectSlugPipelinePipelineNumberKey(args)
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
                (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
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
          client.project[':project-slug'].pipeline[':pipeline-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugPipelinePipelineNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectProjectSlugPipelinePipelineNumberKey(args)
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
                (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
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
          client.project[':project-slug'].pipeline[':pipeline-number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectProjectSlugScheduleKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
) {
  return ['project', '/project/:project-slug/schedule', args] as const
}

export function useGetProjectProjectSlugSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
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
        ? getGetProjectProjectSlugScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProjectSlugSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
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
        ? getGetProjectProjectSlugScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':project-slug'].schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectProjectSlugScheduleKey() {
  return ['project', '/project/:project-slug/schedule', 'POST'] as const
}

export function usePostProjectProjectSlugSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':project-slug']['schedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':project-slug']['schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectProjectSlugScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$post']> },
      ) => parseResponse(client.project[':project-slug'].schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduleScheduleIdKey(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
) {
  return ['schedule', '/schedule/:schedule-id', args] as const
}

export function useGetScheduleScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
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
        ? getGetScheduleScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule[':schedule-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduleScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
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
        ? getGetScheduleScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedule[':schedule-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteScheduleScheduleIdKey() {
  return ['schedule', '/schedule/:schedule-id', 'DELETE'] as const
}

export function useDeleteScheduleScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schedule)[':schedule-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScheduleScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedule)[':schedule-id']['$delete']> },
      ) => parseResponse(client.schedule[':schedule-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchScheduleScheduleIdKey() {
  return ['schedule', '/schedule/:schedule-id', 'PATCH'] as const
}

export function usePatchScheduleScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedule)[':schedule-id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schedule)[':schedule-id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScheduleScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schedule)[':schedule-id']['$patch']> },
      ) => parseResponse(client.schedule[':schedule-id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdKey(args: InferRequestType<(typeof client.user)[':id']['$get']>) {
  return ['user', '/user/:id', args] as const
}

export function useGetUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowIdApproveApprovalRequestIdKey() {
  return ['workflow', '/workflow/:id/approve/:approval_request_id', 'POST'] as const
}

export function usePostWorkflowIdApproveApprovalRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowIdApproveApprovalRequestIdKey()
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
            (typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workflow[':id'].approve[':approval_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWorkflowIdCancelKey() {
  return ['workflow', '/workflow/:id/cancel', 'POST'] as const
}

export function usePostWorkflowIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflow)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflow)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflow)[':id']['cancel']['$post']> },
      ) => parseResponse(client.workflow[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowIdJobKey(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
) {
  return ['workflow', '/workflow/:id/job', args] as const
}

export function useGetWorkflowIdJob<TError = unknown>(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWorkflowIdJobKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflow[':id'].job.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowIdJob<TError = unknown>(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWorkflowIdJobKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['job']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflow[':id'].job.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowIdRerunKey() {
  return ['workflow', '/workflow/:id/rerun', 'POST'] as const
}

export function usePostWorkflowIdRerun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['rerun']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflow)[':id']['rerun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowIdRerunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflow)[':id']['rerun']['$post']> },
      ) => parseResponse(client.workflow[':id'].rerun.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIDOidcCustomClaimsKey(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
) {
  return ['org', '/org/:orgID/oidc-custom-claims', args] as const
}

export function useGetOrgOrgIDOidcCustomClaims<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
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
        ? getGetOrgOrgIDOidcCustomClaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgID']['oidc-custom-claims'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIDOidcCustomClaims<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
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
        ? getGetOrgOrgIDOidcCustomClaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgID']['oidc-custom-claims'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgOrgIDOidcCustomClaimsKey() {
  return ['org', '/org/:orgID/oidc-custom-claims', 'DELETE'] as const
}

export function useDeleteOrgOrgIDOidcCustomClaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIDOidcCustomClaimsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>
        },
      ) => parseResponse(client.org[':orgID']['oidc-custom-claims'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgOrgIDOidcCustomClaimsKey() {
  return ['org', '/org/:orgID/oidc-custom-claims', 'PATCH'] as const
}

export function usePatchOrgOrgIDOidcCustomClaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgOrgIDOidcCustomClaimsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']> },
      ) => parseResponse(client.org[':orgID']['oidc-custom-claims'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIDProjectProjectIDOidcCustomClaimsKey(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
) {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', args] as const
}

export function useGetOrgOrgIDProjectProjectIDOidcCustomClaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrgOrgIDProjectProjectIDOidcCustomClaimsKey(args)
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
                (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
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
          client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIDProjectProjectIDOidcCustomClaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrgOrgIDProjectProjectIDOidcCustomClaimsKey(args)
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
                (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
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
          client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsKey() {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', 'DELETE'] as const
}

export function useDeleteOrgOrgIDProjectProjectIDOidcCustomClaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIDProjectProjectIDOidcCustomClaimsKey()
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
            (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsKey() {
  return ['org', '/org/:orgID/project/:projectID/oidc-custom-claims', 'PATCH'] as const
}

export function usePatchOrgOrgIDProjectProjectIDOidcCustomClaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgOrgIDProjectProjectIDOidcCustomClaimsKey()
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
            (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOwnerOwnerIDContextContextDecisionKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision', args] as const
}

export function useGetOwnerOwnerIDContextContextDecision<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
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
          client.owner[':ownerID'].context[':context'].decision.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnerOwnerIDContextContextDecision<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
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
          client.owner[':ownerID'].context[':context'].decision.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOwnerOwnerIDContextContextDecisionKey() {
  return ['owner', '/owner/:ownerID/context/:context/decision', 'POST'] as const
}

export function usePostOwnerOwnerIDContextContextDecision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOwnerOwnerIDContextContextDecisionKey()
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
            (typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']
          >
        },
      ) =>
        parseResponse(
          client.owner[':ownerID'].context[':context'].decision.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOwnerOwnerIDContextContextDecisionSettingsKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision/settings', args] as const
}

export function useGetOwnerOwnerIDContextContextDecisionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionSettingsKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
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
          client.owner[':ownerID'].context[':context'].decision.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnerOwnerIDContextContextDecisionSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionSettingsKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
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
          client.owner[':ownerID'].context[':context'].decision.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchOwnerOwnerIDContextContextDecisionSettingsKey() {
  return ['owner', '/owner/:ownerID/context/:context/decision/settings', 'PATCH'] as const
}

export function usePatchOwnerOwnerIDContextContextDecisionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOwnerOwnerIDContextContextDecisionSettingsKey()
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
            (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.owner[':ownerID'].context[':context'].decision.settings.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOwnerOwnerIDContextContextDecisionDecisionIDKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/decision/:decisionID', args] as const
}

export function useGetOwnerOwnerIDContextContextDecisionDecisionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionDecisionIDKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
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
          client.owner[':ownerID'].context[':context'].decision[':decisionID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnerOwnerIDContextContextDecisionDecisionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionDecisionIDKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
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
          client.owner[':ownerID'].context[':context'].decision[':decisionID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleKey(
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

export function useGetOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundle<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
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
          client.owner[':ownerID'].context[':context'].decision[':decisionID'][
            'policy-bundle'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundle<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
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
          client.owner[':ownerID'].context[':context'].decision[':decisionID'][
            'policy-bundle'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOwnerOwnerIDContextContextPolicyBundleKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle', args] as const
}

export function useGetOwnerOwnerIDContextContextPolicyBundle<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextPolicyBundleKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
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
          client.owner[':ownerID'].context[':context']['policy-bundle'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnerOwnerIDContextContextPolicyBundle<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextPolicyBundleKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
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
          client.owner[':ownerID'].context[':context']['policy-bundle'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOwnerOwnerIDContextContextPolicyBundleKey() {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle', 'POST'] as const
}

export function usePostOwnerOwnerIDContextContextPolicyBundle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOwnerOwnerIDContextContextPolicyBundleKey()
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
            (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.owner[':ownerID'].context[':context']['policy-bundle'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOwnerOwnerIDContextContextPolicyBundlePolicyNameKey(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
) {
  return ['owner', '/owner/:ownerID/context/:context/policy-bundle/:policyName', args] as const
}

export function useGetOwnerOwnerIDContextContextPolicyBundlePolicyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextPolicyBundlePolicyNameKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
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
          client.owner[':ownerID'].context[':context']['policy-bundle'][':policyName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwnerOwnerIDContextContextPolicyBundlePolicyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOwnerOwnerIDContextContextPolicyBundlePolicyNameKey(args)
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
                (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
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
          client.owner[':ownerID'].context[':context']['policy-bundle'][':policyName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContextKey(args: InferRequestType<typeof client.context.$get>) {
  return ['context', '/context', args] as const
}

export function useGetContext<TError = unknown>(
  args: InferRequestType<typeof client.context.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.context.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContext<TError = unknown>(
  args: InferRequestType<typeof client.context.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.context.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostContextKey() {
  return ['context', '/context', 'POST'] as const
}

export function usePostContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.context.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.context.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.context.$post> }) =>
        parseResponse(client.context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContextContextIdKey(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
) {
  return ['context', '/context/:context_id', args] as const
}

export function useGetContextContextId<TError = unknown>(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
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
        ? getGetContextContextIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.context[':context_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContextContextId<TError = unknown>(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
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
        ? getGetContextContextIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.context[':context_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContextContextIdKey() {
  return ['context', '/context/:context_id', 'DELETE'] as const
}

export function useDeleteContextContextId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.context)[':context_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.context)[':context_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContextContextIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.context)[':context_id']['$delete']> },
      ) => parseResponse(client.context[':context_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContextContextIdEnvironmentVariableKey(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
) {
  return ['context', '/context/:context_id/environment-variable', args] as const
}

export function useGetContextContextIdEnvironmentVariable<TError = unknown>(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
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
        ? getGetContextContextIdEnvironmentVariableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.context[':context_id']['environment-variable'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContextContextIdEnvironmentVariable<TError = unknown>(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
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
        ? getGetContextContextIdEnvironmentVariableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.context)[':context_id']['environment-variable']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.context[':context_id']['environment-variable'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutContextContextIdEnvironmentVariableEnvVarNameKey() {
  return ['context', '/context/:context_id/environment-variable/:env_var_name', 'PUT'] as const
}

export function usePutContextContextIdEnvironmentVariableEnvVarName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContextContextIdEnvironmentVariableEnvVarNameKey()
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
            (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.context[':context_id']['environment-variable'][':env_var_name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContextContextIdEnvironmentVariableEnvVarNameKey() {
  return ['context', '/context/:context_id/environment-variable/:env_var_name', 'DELETE'] as const
}

export function useDeleteContextContextIdEnvironmentVariableEnvVarName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContextContextIdEnvironmentVariableEnvVarNameKey()
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
            (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.context[':context_id']['environment-variable'][':env_var_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContextContextIdRestrictionsKey(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
) {
  return ['context', '/context/:context_id/restrictions', args] as const
}

export function useGetContextContextIdRestrictions<TError = unknown>(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
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
        ? getGetContextContextIdRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.context[':context_id'].restrictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContextContextIdRestrictions<TError = unknown>(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
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
        ? getGetContextContextIdRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.context[':context_id'].restrictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContextContextIdRestrictionsKey() {
  return ['context', '/context/:context_id/restrictions', 'POST'] as const
}

export function usePostContextContextIdRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.context)[':context_id']['restrictions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.context)[':context_id']['restrictions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContextContextIdRestrictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$post']>
        },
      ) => parseResponse(client.context[':context_id'].restrictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContextContextIdRestrictionsRestrictionIdKey() {
  return ['context', '/context/:context_id/restrictions/:restriction_id', 'DELETE'] as const
}

export function useDeleteContextContextIdRestrictionsRestrictionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContextContextIdRestrictionsRestrictionIdKey()
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
            (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.context[':context_id'].restrictions[':restriction_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectProviderOrganizationProjectSettingsKey(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
) {
  return ['project', '/project/:provider/:organization/:project/settings', args] as const
}

export function useGetProjectProviderOrganizationProjectSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectProviderOrganizationProjectSettingsKey(args)
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
                (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
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
          client.project[':provider'][':organization'][':project'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectProviderOrganizationProjectSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectProviderOrganizationProjectSettingsKey(args)
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
                (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
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
          client.project[':provider'][':organization'][':project'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchProjectProviderOrganizationProjectSettingsKey() {
  return ['project', '/project/:provider/:organization/:project/settings', 'PATCH'] as const
}

export function usePatchProjectProviderOrganizationProjectSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectProviderOrganizationProjectSettingsKey()
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
            (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.project[':provider'][':organization'][':project'].settings.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrgIdGroupsKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/groups', args] as const
}

export function useGetOrganizationsOrgIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
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
        ? getGetOrganizationsOrgIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':org_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrgIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
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
        ? getGetOrganizationsOrgIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':org_id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrgIdGroupsKey() {
  return ['organizations', '/organizations/:org_id/groups', 'POST'] as const
}

export function usePostOrganizationsOrgIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':org_id']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrgIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$post']> },
      ) => parseResponse(client.organizations[':org_id'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrgIdGroupsGroupIdKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/groups/:group_id', args] as const
}

export function useGetOrganizationsOrgIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
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
        ? getGetOrganizationsOrgIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':org_id'].groups[':group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrgIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
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
        ? getGetOrganizationsOrgIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':org_id'].groups[':group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrgIdGroupsGroupIdKey() {
  return ['organizations', '/organizations/:org_id/groups/:group_id', 'DELETE'] as const
}

export function useDeleteOrganizationsOrgIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrgIdGroupsGroupIdKey()
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
            (typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':org_id'].groups[':group_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrgIdUsageExportJobKey() {
  return ['organizations', '/organizations/:org_id/usage_export_job', 'POST'] as const
}

export function usePostOrganizationsOrgIdUsageExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrgIdUsageExportJobKey()
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
            (typeof client.organizations)[':org_id']['usage_export_job']['$post']
          >
        },
      ) =>
        parseResponse(client.organizations[':org_id'].usage_export_job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrgIdUsageExportJobUsageExportJobIdKey(
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

export function useGetOrganizationsOrgIdUsageExportJobUsageExportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrgIdUsageExportJobUsageExportJobIdKey(args)
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
                (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
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
          client.organizations[':org_id'].usage_export_job[':usage_export_job_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrgIdUsageExportJobUsageExportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrganizationsOrgIdUsageExportJobUsageExportJobIdKey(args)
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
                (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
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
          client.organizations[':org_id'].usage_export_job[':usage_export_job_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectProviderOrganizationProjectPipelineRunKey() {
  return ['project', '/project/:provider/:organization/:project/pipeline/run', 'POST'] as const
}

export function usePostProjectProviderOrganizationProjectPipelineRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectProviderOrganizationProjectPipelineRunKey()
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
            (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project[':provider'][':organization'][':project'].pipeline.run.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdPipelineDefinitionsKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
) {
  return ['projects', '/projects/:project_id/pipeline-definitions', args] as const
}

export function useGetProjectsProjectIdPipelineDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
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
        ? getGetProjectsProjectIdPipelineDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_id']['pipeline-definitions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdPipelineDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
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
        ? getGetProjectsProjectIdPipelineDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_id']['pipeline-definitions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdPipelineDefinitionsKey() {
  return ['projects', '/projects/:project_id/pipeline-definitions', 'POST'] as const
}

export function usePostProjectsProjectIdPipelineDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdPipelineDefinitionsKey()
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
            (typeof client.projects)[':project_id']['pipeline-definitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id']['pipeline-definitions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey(
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

export function useGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey(args)
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
                (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
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
          client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey(args)
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
                (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
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
          client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey() {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id',
    'DELETE',
  ] as const
}

export function useDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey()
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
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey() {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id',
    'PATCH',
  ] as const
}

export function usePatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdKey()
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
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersKey(
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

export function useGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersKey(args)
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
                (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
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
          client.projects[':project_id']['pipeline-definitions'][
            ':pipeline_definition_id'
          ].triggers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersKey(args)
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
                (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
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
          client.projects[':project_id']['pipeline-definitions'][
            ':pipeline_definition_id'
          ].triggers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersKey() {
  return [
    'projects',
    '/projects/:project_id/pipeline-definitions/:pipeline_definition_id/triggers',
    'POST',
  ] as const
}

export function usePostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersKey()
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
            (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id']['pipeline-definitions'][
            ':pipeline_definition_id'
          ].triggers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdTriggersTriggerIdKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', args] as const
}

export function useGetProjectsProjectIdTriggersTriggerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
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
        ? getGetProjectsProjectIdTriggersTriggerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_id'].triggers[':trigger_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdTriggersTriggerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
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
        ? getGetProjectsProjectIdTriggersTriggerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':project_id'].triggers[':trigger_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdTriggersTriggerIdKey() {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdTriggersTriggerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdTriggersTriggerIdKey()
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
            (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id'].triggers[':trigger_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsProjectIdTriggersTriggerIdKey() {
  return ['projects', '/projects/:project_id/triggers/:trigger_id', 'PATCH'] as const
}

export function usePatchProjectsProjectIdTriggersTriggerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsProjectIdTriggersTriggerIdKey()
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
            (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.projects[':project_id'].triggers[':trigger_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdRollbackKey() {
  return ['projects', '/projects/:project_id/rollback', 'POST'] as const
}

export function usePostProjectsProjectIdRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['rollback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':project_id']['rollback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdRollbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':project_id']['rollback']['$post']> },
      ) => parseResponse(client.projects[':project_id'].rollback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeployEnvironmentsKey(
  args: InferRequestType<typeof client.deploy.environments.$get>,
) {
  return ['deploy', '/deploy/environments', args] as const
}

export function useGetDeployEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.deploy.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
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
        ? getGetDeployEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.deploy.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
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
        ? getGetDeployEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploy.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeployEnvironmentsEnvironmentIdKey(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
) {
  return ['deploy', '/deploy/environments/:environment_id', args] as const
}

export function useGetDeployEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
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
        ? getGetDeployEnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deploy.environments[':environment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
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
        ? getGetDeployEnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.environments)[':environment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deploy.environments[':environment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeployComponentsKey(
  args: InferRequestType<typeof client.deploy.components.$get>,
) {
  return ['deploy', '/deploy/components', args] as const
}

export function useGetDeployComponents<TError = unknown>(
  args: InferRequestType<typeof client.deploy.components.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
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
        ? getGetDeployComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy.components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployComponents<TError = unknown>(
  args: InferRequestType<typeof client.deploy.components.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
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
        ? getGetDeployComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy.components.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy.components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeployComponentsComponentIdKey(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
) {
  return ['deploy', '/deploy/components/:component_id', args] as const
}

export function useGetDeployComponentsComponentId<TError = unknown>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
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
        ? getGetDeployComponentsComponentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deploy.components[':component_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployComponentsComponentId<TError = unknown>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
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
        ? getGetDeployComponentsComponentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy.components)[':component_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deploy.components[':component_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeployComponentsComponentIdVersionsKey(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
) {
  return ['deploy', '/deploy/components/:component_id/versions', args] as const
}

export function useGetDeployComponentsComponentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
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
        ? getGetDeployComponentsComponentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deploy.components[':component_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployComponentsComponentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
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
        ? getGetDeployComponentsComponentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploy.components)[':component_id']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.deploy.components[':component_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookKey(args: InferRequestType<typeof client.webhook.$get>) {
  return ['webhook', '/webhook', args] as const
}

export function useGetWebhook<TError = unknown>(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhook.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhook<TError = unknown>(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhook.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhookKey() {
  return ['webhook', '/webhook', 'POST'] as const
}

export function usePostWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook.$post> }) =>
        parseResponse(client.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookWebhookIdKey(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
) {
  return ['webhook', '/webhook/:webhook_id', args] as const
}

export function useGetWebhookWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
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
        ? getGetWebhookWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
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
        ? getGetWebhookWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhookWebhookIdKey() {
  return ['webhook', '/webhook/:webhook_id', 'PUT'] as const
}

export function usePutWebhookWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook)[':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhookWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook)[':webhook_id']['$put']> },
      ) => parseResponse(client.webhook[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookWebhookIdKey() {
  return ['webhook', '/webhook/:webhook_id', 'DELETE'] as const
}

export function useDeleteWebhookWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook)[':webhook_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook)[':webhook_id']['$delete']> },
      ) => parseResponse(client.webhook[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOtelExportersKey(args: InferRequestType<typeof client.otel.exporters.$get>) {
  return ['otel', '/otel/exporters', args] as const
}

export function useGetOtelExporters<TError = unknown>(
  args: InferRequestType<typeof client.otel.exporters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtelExportersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.otel.exporters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtelExporters<TError = unknown>(
  args: InferRequestType<typeof client.otel.exporters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtelExportersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.otel.exporters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOtelExportersKey() {
  return ['otel', '/otel/exporters', 'POST'] as const
}

export function usePostOtelExporters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otel.exporters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.otel.exporters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtelExportersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.otel.exporters.$post> }) =>
        parseResponse(client.otel.exporters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOtelExportersOtelExporterIdKey() {
  return ['otel', '/otel/exporters/:otel_exporter_id', 'DELETE'] as const
}

export function useDeleteOtelExportersOtelExporterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOtelExportersOtelExporterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>
        },
      ) => parseResponse(client.otel.exporters[':otel_exporter_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPipelinePipelineIdValuesKey(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
) {
  return ['pipeline', '/pipeline/:pipeline_id/values', args] as const
}

export function useGetPipelinePipelineIdValues<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
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
        ? getGetPipelinePipelineIdValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline_id'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPipelinePipelineIdValues<TError = unknown>(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
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
        ? getGetPipelinePipelineIdValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipeline[':pipeline_id'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowIdKey(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
) {
  return ['workflow', '/workflow/:id', args] as const
}

export function useGetWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWorkflowIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflow[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWorkflowIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.workflow)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflow[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsJobIdKey(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
) {
  return ['jobs', '/jobs/:job_id', args] as const
}

export function useGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
