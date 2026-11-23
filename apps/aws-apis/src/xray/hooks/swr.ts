import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateGroupKey() {
  return ['CreateGroup'] as const
}

export function getCreateSamplingRuleKey() {
  return ['CreateSamplingRule'] as const
}

export function getDeleteGroupKey() {
  return ['DeleteGroup'] as const
}

export function getDeleteResourcePolicyKey() {
  return ['DeleteResourcePolicy'] as const
}

export function getDeleteSamplingRuleKey() {
  return ['DeleteSamplingRule'] as const
}

export function getEncryptionConfigKey() {
  return ['EncryptionConfig'] as const
}

export function getGetGroupKey() {
  return ['GetGroup'] as const
}

export function getGetSamplingRulesKey() {
  return ['GetSamplingRules'] as const
}

export function getGroupsKey() {
  return ['Groups'] as const
}

export function getInsightKey() {
  return ['Insight'] as const
}

export function getInsightEventsKey() {
  return ['InsightEvents'] as const
}

export function getInsightImpactGraphKey() {
  return ['InsightImpactGraph'] as const
}

export function getInsightSummariesKey() {
  return ['InsightSummaries'] as const
}

export function getListResourcePoliciesKey() {
  return ['ListResourcePolicies'] as const
}

export function getListTagsForResourceKey() {
  return ['ListTagsForResource'] as const
}

export function getPutEncryptionConfigKey() {
  return ['PutEncryptionConfig'] as const
}

export function getPutResourcePolicyKey() {
  return ['PutResourcePolicy'] as const
}

export function getSamplingStatisticSummariesKey() {
  return ['SamplingStatisticSummaries'] as const
}

export function getSamplingTargetsKey() {
  return ['SamplingTargets'] as const
}

export function getServiceGraphKey() {
  return ['ServiceGraph'] as const
}

export function getTagResourceKey() {
  return ['TagResource'] as const
}

export function getTelemetryRecordsKey() {
  return ['TelemetryRecords'] as const
}

export function getTimeSeriesServiceStatisticsKey() {
  return ['TimeSeriesServiceStatistics'] as const
}

export function getTraceGraphKey() {
  return ['TraceGraph'] as const
}

export function getTraceSegmentsKey() {
  return ['TraceSegments'] as const
}

export function getTraceSummariesKey() {
  return ['TraceSummaries'] as const
}

export function getTracesKey() {
  return ['Traces'] as const
}

export function getUntagResourceKey() {
  return ['UntagResource'] as const
}

export function getUpdateGroupKey() {
  return ['UpdateGroup'] as const
}

export function getUpdateSamplingRuleKey() {
  return ['UpdateSamplingRule'] as const
}

export function getPostTracesKey() {
  return ['Traces', '/Traces', 'POST'] as const
}

export function usePostTraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Traces.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Traces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Traces.$post> }) =>
        parseResponse(client.Traces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateGroupKey() {
  return ['CreateGroup', '/CreateGroup', 'POST'] as const
}

export function usePostCreateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateGroup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreateGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateGroup.$post> }) =>
        parseResponse(client.CreateGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateSamplingRuleKey() {
  return ['CreateSamplingRule', '/CreateSamplingRule', 'POST'] as const
}

export function usePostCreateSamplingRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateSamplingRule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateSamplingRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSamplingRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateSamplingRule.$post> }) =>
        parseResponse(client.CreateSamplingRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteGroupKey() {
  return ['DeleteGroup', '/DeleteGroup', 'POST'] as const
}

export function usePostDeleteGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteGroup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.DeleteGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteGroup.$post> }) =>
        parseResponse(client.DeleteGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteResourcePolicyKey() {
  return ['DeleteResourcePolicy', '/DeleteResourcePolicy', 'POST'] as const
}

export function usePostDeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteResourcePolicy.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteResourcePolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteResourcePolicy.$post> },
      ) => parseResponse(client.DeleteResourcePolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteSamplingRuleKey() {
  return ['DeleteSamplingRule', '/DeleteSamplingRule', 'POST'] as const
}

export function usePostDeleteSamplingRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteSamplingRule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteSamplingRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteSamplingRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteSamplingRule.$post> }) =>
        parseResponse(client.DeleteSamplingRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEncryptionConfigKey() {
  return ['EncryptionConfig', '/EncryptionConfig', 'POST'] as const
}

export function usePostEncryptionConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EncryptionConfig.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.EncryptionConfig.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEncryptionConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.EncryptionConfig.$post> }) =>
        parseResponse(client.EncryptionConfig.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetGroupKey() {
  return ['GetGroup', '/GetGroup', 'POST'] as const
}

export function usePostGetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetGroup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.GetGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetGroup.$post> }) =>
        parseResponse(client.GetGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsKey() {
  return ['Groups', '/Groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Groups.$post> }) =>
        parseResponse(client.Groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightKey() {
  return ['Insight', '/Insight', 'POST'] as const
}

export function usePostInsight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Insight.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Insight.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Insight.$post> }) =>
        parseResponse(client.Insight.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightEventsKey() {
  return ['InsightEvents', '/InsightEvents', 'POST'] as const
}

export function usePostInsightEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightEvents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.InsightEvents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.InsightEvents.$post> }) =>
        parseResponse(client.InsightEvents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightImpactGraphKey() {
  return ['InsightImpactGraph', '/InsightImpactGraph', 'POST'] as const
}

export function usePostInsightImpactGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightImpactGraph.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.InsightImpactGraph.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightImpactGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.InsightImpactGraph.$post> }) =>
        parseResponse(client.InsightImpactGraph.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightSummariesKey() {
  return ['InsightSummaries', '/InsightSummaries', 'POST'] as const
}

export function usePostInsightSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightSummaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.InsightSummaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.InsightSummaries.$post> }) =>
        parseResponse(client.InsightSummaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetSamplingRulesKey() {
  return ['GetSamplingRules', '/GetSamplingRules', 'POST'] as const
}

export function usePostGetSamplingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetSamplingRules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetSamplingRules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSamplingRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetSamplingRules.$post> }) =>
        parseResponse(client.GetSamplingRules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSamplingStatisticSummariesKey() {
  return ['SamplingStatisticSummaries', '/SamplingStatisticSummaries', 'POST'] as const
}

export function usePostSamplingStatisticSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.SamplingStatisticSummaries.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.SamplingStatisticSummaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSamplingStatisticSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SamplingStatisticSummaries.$post> },
      ) => parseResponse(client.SamplingStatisticSummaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSamplingTargetsKey() {
  return ['SamplingTargets', '/SamplingTargets', 'POST'] as const
}

export function usePostSamplingTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SamplingTargets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.SamplingTargets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSamplingTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SamplingTargets.$post> }) =>
        parseResponse(client.SamplingTargets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServiceGraphKey() {
  return ['ServiceGraph', '/ServiceGraph', 'POST'] as const
}

export function usePostServiceGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ServiceGraph.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ServiceGraph.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServiceGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ServiceGraph.$post> }) =>
        parseResponse(client.ServiceGraph.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimeSeriesServiceStatisticsKey() {
  return ['TimeSeriesServiceStatistics', '/TimeSeriesServiceStatistics', 'POST'] as const
}

export function usePostTimeSeriesServiceStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.TimeSeriesServiceStatistics.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.TimeSeriesServiceStatistics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeSeriesServiceStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.TimeSeriesServiceStatistics.$post> },
      ) => parseResponse(client.TimeSeriesServiceStatistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTraceGraphKey() {
  return ['TraceGraph', '/TraceGraph', 'POST'] as const
}

export function usePostTraceGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceGraph.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TraceGraph.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTraceGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TraceGraph.$post> }) =>
        parseResponse(client.TraceGraph.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTraceSummariesKey() {
  return ['TraceSummaries', '/TraceSummaries', 'POST'] as const
}

export function usePostTraceSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceSummaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.TraceSummaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTraceSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TraceSummaries.$post> }) =>
        parseResponse(client.TraceSummaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListResourcePoliciesKey() {
  return ['ListResourcePolicies', '/ListResourcePolicies', 'POST'] as const
}

export function usePostListResourcePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListResourcePolicies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListResourcePolicies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListResourcePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListResourcePolicies.$post> },
      ) => parseResponse(client.ListResourcePolicies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTagsForResourceKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function usePostListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTagsForResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListTagsForResource.$post> }) =>
        parseResponse(client.ListTagsForResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutEncryptionConfigKey() {
  return ['PutEncryptionConfig', '/PutEncryptionConfig', 'POST'] as const
}

export function usePostPutEncryptionConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutEncryptionConfig.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutEncryptionConfig.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutEncryptionConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutEncryptionConfig.$post> }) =>
        parseResponse(client.PutEncryptionConfig.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutResourcePolicyKey() {
  return ['PutResourcePolicy', '/PutResourcePolicy', 'POST'] as const
}

export function usePostPutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutResourcePolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutResourcePolicy.$post> }) =>
        parseResponse(client.PutResourcePolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTelemetryRecordsKey() {
  return ['TelemetryRecords', '/TelemetryRecords', 'POST'] as const
}

export function usePostTelemetryRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TelemetryRecords.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.TelemetryRecords.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelemetryRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TelemetryRecords.$post> }) =>
        parseResponse(client.TelemetryRecords.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTraceSegmentsKey() {
  return ['TraceSegments', '/TraceSegments', 'POST'] as const
}

export function usePostTraceSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceSegments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.TraceSegments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTraceSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TraceSegments.$post> }) =>
        parseResponse(client.TraceSegments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagResourceKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function usePostTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TagResource.$post> }) =>
        parseResponse(client.TagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagResourceKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function usePostUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UntagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UntagResource.$post> }) =>
        parseResponse(client.UntagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateGroupKey() {
  return ['UpdateGroup', '/UpdateGroup', 'POST'] as const
}

export function usePostUpdateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateGroup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.UpdateGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateGroup.$post> }) =>
        parseResponse(client.UpdateGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateSamplingRuleKey() {
  return ['UpdateSamplingRule', '/UpdateSamplingRule', 'POST'] as const
}

export function usePostUpdateSamplingRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateSamplingRule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateSamplingRule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateSamplingRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateSamplingRule.$post> }) =>
        parseResponse(client.UpdateSamplingRule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
