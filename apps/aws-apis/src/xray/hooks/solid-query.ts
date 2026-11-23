import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostTracesMutationKey() {
  return ['Traces', '/Traces', 'POST'] as const
}

export function getPostTracesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Traces.$post>>>>>,
    TError,
    InferRequestType<typeof client.Traces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTracesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Traces.$post>) {
      return parseResponse(client.Traces.$post(args, options))
    },
  })
}

export function createPostTraces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Traces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Traces.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTracesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreateGroupMutationKey() {
  return ['CreateGroup', '/CreateGroup', 'POST'] as const
}

export function getPostCreateGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateGroup.$post>>>>>,
    TError,
    InferRequestType<typeof client.CreateGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateGroup.$post>) {
      return parseResponse(client.CreateGroup.$post(args, options))
    },
  })
}

export function createPostCreateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateGroup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.CreateGroup.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreateSamplingRuleMutationKey() {
  return ['CreateSamplingRule', '/CreateSamplingRule', 'POST'] as const
}

export function getPostCreateSamplingRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateSamplingRule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateSamplingRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSamplingRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateSamplingRule.$post>) {
      return parseResponse(client.CreateSamplingRule.$post(args, options))
    },
  })
}

export function createPostCreateSamplingRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.CreateSamplingRule.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.CreateSamplingRule.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateSamplingRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteGroupMutationKey() {
  return ['DeleteGroup', '/DeleteGroup', 'POST'] as const
}

export function getPostDeleteGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteGroup.$post>>>>>,
    TError,
    InferRequestType<typeof client.DeleteGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteGroup.$post>) {
      return parseResponse(client.DeleteGroup.$post(args, options))
    },
  })
}

export function createPostDeleteGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteGroup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.DeleteGroup.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteResourcePolicyMutationKey() {
  return ['DeleteResourcePolicy', '/DeleteResourcePolicy', 'POST'] as const
}

export function getPostDeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteResourcePolicy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeleteResourcePolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteResourcePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteResourcePolicy.$post>) {
      return parseResponse(client.DeleteResourcePolicy.$post(args, options))
    },
  })
}

export function createPostDeleteResourcePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteResourcePolicy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.DeleteResourcePolicy.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteResourcePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteSamplingRuleMutationKey() {
  return ['DeleteSamplingRule', '/DeleteSamplingRule', 'POST'] as const
}

export function getPostDeleteSamplingRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteSamplingRule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DeleteSamplingRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteSamplingRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteSamplingRule.$post>) {
      return parseResponse(client.DeleteSamplingRule.$post(args, options))
    },
  })
}

export function createPostDeleteSamplingRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteSamplingRule.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.DeleteSamplingRule.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteSamplingRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEncryptionConfigMutationKey() {
  return ['EncryptionConfig', '/EncryptionConfig', 'POST'] as const
}

export function getPostEncryptionConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EncryptionConfig.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.EncryptionConfig.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEncryptionConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.EncryptionConfig.$post>) {
      return parseResponse(client.EncryptionConfig.$post(args, options))
    },
  })
}

export function createPostEncryptionConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.EncryptionConfig.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.EncryptionConfig.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEncryptionConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetGroupMutationKey() {
  return ['GetGroup', '/GetGroup', 'POST'] as const
}

export function getPostGetGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetGroup.$post>>>>>,
    TError,
    InferRequestType<typeof client.GetGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetGroup.$post>) {
      return parseResponse(client.GetGroup.$post(args, options))
    },
  })
}

export function createPostGetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetGroup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.GetGroup.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupsMutationKey() {
  return ['Groups', '/Groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.Groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Groups.$post>) {
      return parseResponse(client.Groups.$post(args, options))
    },
  })
}

export function createPostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Groups.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInsightMutationKey() {
  return ['Insight', '/Insight', 'POST'] as const
}

export function getPostInsightMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Insight.$post>>>>>,
    TError,
    InferRequestType<typeof client.Insight.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Insight.$post>) {
      return parseResponse(client.Insight.$post(args, options))
    },
  })
}

export function createPostInsight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Insight.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Insight.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInsightMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInsightEventsMutationKey() {
  return ['InsightEvents', '/InsightEvents', 'POST'] as const
}

export function getPostInsightEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightEvents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.InsightEvents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.InsightEvents.$post>) {
      return parseResponse(client.InsightEvents.$post(args, options))
    },
  })
}

export function createPostInsightEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightEvents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.InsightEvents.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInsightEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInsightImpactGraphMutationKey() {
  return ['InsightImpactGraph', '/InsightImpactGraph', 'POST'] as const
}

export function getPostInsightImpactGraphMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightImpactGraph.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.InsightImpactGraph.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightImpactGraphMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.InsightImpactGraph.$post>) {
      return parseResponse(client.InsightImpactGraph.$post(args, options))
    },
  })
}

export function createPostInsightImpactGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.InsightImpactGraph.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.InsightImpactGraph.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInsightImpactGraphMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInsightSummariesMutationKey() {
  return ['InsightSummaries', '/InsightSummaries', 'POST'] as const
}

export function getPostInsightSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InsightSummaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.InsightSummaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.InsightSummaries.$post>) {
      return parseResponse(client.InsightSummaries.$post(args, options))
    },
  })
}

export function createPostInsightSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.InsightSummaries.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.InsightSummaries.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInsightSummariesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGetSamplingRulesMutationKey() {
  return ['GetSamplingRules', '/GetSamplingRules', 'POST'] as const
}

export function getPostGetSamplingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetSamplingRules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetSamplingRules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSamplingRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetSamplingRules.$post>) {
      return parseResponse(client.GetSamplingRules.$post(args, options))
    },
  })
}

export function createPostGetSamplingRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.GetSamplingRules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.GetSamplingRules.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetSamplingRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSamplingStatisticSummariesMutationKey() {
  return ['SamplingStatisticSummaries', '/SamplingStatisticSummaries', 'POST'] as const
}

export function getPostSamplingStatisticSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.SamplingStatisticSummaries.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.SamplingStatisticSummaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSamplingStatisticSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SamplingStatisticSummaries.$post>) {
      return parseResponse(client.SamplingStatisticSummaries.$post(args, options))
    },
  })
}

export function createPostSamplingStatisticSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.SamplingStatisticSummaries.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.SamplingStatisticSummaries.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSamplingStatisticSummariesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSamplingTargetsMutationKey() {
  return ['SamplingTargets', '/SamplingTargets', 'POST'] as const
}

export function getPostSamplingTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SamplingTargets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.SamplingTargets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSamplingTargetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SamplingTargets.$post>) {
      return parseResponse(client.SamplingTargets.$post(args, options))
    },
  })
}

export function createPostSamplingTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.SamplingTargets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.SamplingTargets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSamplingTargetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServiceGraphMutationKey() {
  return ['ServiceGraph', '/ServiceGraph', 'POST'] as const
}

export function getPostServiceGraphMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ServiceGraph.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ServiceGraph.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceGraphMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ServiceGraph.$post>) {
      return parseResponse(client.ServiceGraph.$post(args, options))
    },
  })
}

export function createPostServiceGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ServiceGraph.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ServiceGraph.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServiceGraphMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTimeSeriesServiceStatisticsMutationKey() {
  return ['TimeSeriesServiceStatistics', '/TimeSeriesServiceStatistics', 'POST'] as const
}

export function getPostTimeSeriesServiceStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.TimeSeriesServiceStatistics.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.TimeSeriesServiceStatistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeSeriesServiceStatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TimeSeriesServiceStatistics.$post>) {
      return parseResponse(client.TimeSeriesServiceStatistics.$post(args, options))
    },
  })
}

export function createPostTimeSeriesServiceStatistics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.TimeSeriesServiceStatistics.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.TimeSeriesServiceStatistics.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTimeSeriesServiceStatisticsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTraceGraphMutationKey() {
  return ['TraceGraph', '/TraceGraph', 'POST'] as const
}

export function getPostTraceGraphMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceGraph.$post>>>>>,
    TError,
    InferRequestType<typeof client.TraceGraph.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTraceGraphMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TraceGraph.$post>) {
      return parseResponse(client.TraceGraph.$post(args, options))
    },
  })
}

export function createPostTraceGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceGraph.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TraceGraph.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTraceGraphMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTraceSummariesMutationKey() {
  return ['TraceSummaries', '/TraceSummaries', 'POST'] as const
}

export function getPostTraceSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceSummaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.TraceSummaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTraceSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TraceSummaries.$post>) {
      return parseResponse(client.TraceSummaries.$post(args, options))
    },
  })
}

export function createPostTraceSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.TraceSummaries.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.TraceSummaries.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTraceSummariesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListResourcePoliciesMutationKey() {
  return ['ListResourcePolicies', '/ListResourcePolicies', 'POST'] as const
}

export function getPostListResourcePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListResourcePolicies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListResourcePolicies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListResourcePoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListResourcePolicies.$post>) {
      return parseResponse(client.ListResourcePolicies.$post(args, options))
    },
  })
}

export function createPostListResourcePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ListResourcePolicies.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ListResourcePolicies.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListResourcePoliciesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListTagsForResourceMutationKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function getPostListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListTagsForResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTagsForResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTagsForResource.$post>) {
      return parseResponse(client.ListTagsForResource.$post(args, options))
    },
  })
}

export function createPostListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ListTagsForResource.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListTagsForResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPutEncryptionConfigMutationKey() {
  return ['PutEncryptionConfig', '/PutEncryptionConfig', 'POST'] as const
}

export function getPostPutEncryptionConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutEncryptionConfig.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PutEncryptionConfig.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutEncryptionConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutEncryptionConfig.$post>) {
      return parseResponse(client.PutEncryptionConfig.$post(args, options))
    },
  })
}

export function createPostPutEncryptionConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PutEncryptionConfig.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PutEncryptionConfig.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPutEncryptionConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPutResourcePolicyMutationKey() {
  return ['PutResourcePolicy', '/PutResourcePolicy', 'POST'] as const
}

export function getPostPutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PutResourcePolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutResourcePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutResourcePolicy.$post>) {
      return parseResponse(client.PutResourcePolicy.$post(args, options))
    },
  })
}

export function createPostPutResourcePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PutResourcePolicy.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPutResourcePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTelemetryRecordsMutationKey() {
  return ['TelemetryRecords', '/TelemetryRecords', 'POST'] as const
}

export function getPostTelemetryRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TelemetryRecords.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.TelemetryRecords.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTelemetryRecordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TelemetryRecords.$post>) {
      return parseResponse(client.TelemetryRecords.$post(args, options))
    },
  })
}

export function createPostTelemetryRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.TelemetryRecords.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.TelemetryRecords.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTelemetryRecordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTraceSegmentsMutationKey() {
  return ['TraceSegments', '/TraceSegments', 'POST'] as const
}

export function getPostTraceSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceSegments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.TraceSegments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTraceSegmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TraceSegments.$post>) {
      return parseResponse(client.TraceSegments.$post(args, options))
    },
  })
}

export function createPostTraceSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TraceSegments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TraceSegments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTraceSegmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagResourceMutationKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function getPostTagResourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    InferRequestType<typeof client.TagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TagResource.$post>) {
      return parseResponse(client.TagResource.$post(args, options))
    },
  })
}

export function createPostTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TagResource.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUntagResourceMutationKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function getPostUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UntagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UntagResource.$post>) {
      return parseResponse(client.UntagResource.$post(args, options))
    },
  })
}

export function createPostUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.UntagResource.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUntagResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUpdateGroupMutationKey() {
  return ['UpdateGroup', '/UpdateGroup', 'POST'] as const
}

export function getPostUpdateGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateGroup.$post>>>>>,
    TError,
    InferRequestType<typeof client.UpdateGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateGroup.$post>) {
      return parseResponse(client.UpdateGroup.$post(args, options))
    },
  })
}

export function createPostUpdateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateGroup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.UpdateGroup.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUpdateSamplingRuleMutationKey() {
  return ['UpdateSamplingRule', '/UpdateSamplingRule', 'POST'] as const
}

export function getPostUpdateSamplingRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateSamplingRule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateSamplingRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateSamplingRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateSamplingRule.$post>) {
      return parseResponse(client.UpdateSamplingRule.$post(args, options))
    },
  })
}

export function createPostUpdateSamplingRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.UpdateSamplingRule.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.UpdateSamplingRule.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateSamplingRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
