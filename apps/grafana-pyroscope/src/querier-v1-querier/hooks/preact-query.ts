import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQuerierV1QuerierServiceKey() {
  return ['querier.v1.QuerierService'] as const
}

export function getPostQuerierV1QuerierServiceAnalyzeQueryMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/AnalyzeQuery', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceAnalyzeQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceAnalyzeQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].AnalyzeQuery.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceAnalyzeQuery<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceAnalyzeQueryMutationOptions<
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

export function getPostQuerierV1QuerierServiceDiffMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/Diff', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceDiffMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].Diff.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceDiff<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceDiffMutationOptions<
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

export function getPostQuerierV1QuerierServiceGetProfileStatsMutationKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/GetProfileStats',
    'POST',
  ] as const
}

export function getPostQuerierV1QuerierServiceGetProfileStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceGetProfileStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']
      >,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].GetProfileStats.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceGetProfileStats<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceGetProfileStatsMutationOptions<
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

export function getPostQuerierV1QuerierServiceLabelNamesMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/LabelNames', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceLabelNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceLabelNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].LabelNames.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceLabelNames<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceLabelNamesMutationOptions<
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

export function getPostQuerierV1QuerierServiceLabelValuesMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/LabelValues', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceLabelValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceLabelValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].LabelValues.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceLabelValues<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceLabelValuesMutationOptions<
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

export function getPostQuerierV1QuerierServiceProfileTypesMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/ProfileTypes', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceProfileTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceProfileTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].ProfileTypes.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceProfileTypes<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceProfileTypesMutationOptions<
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

export function getPostQuerierV1QuerierServiceQueryAnomaliesMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/QueryAnomalies', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceQueryAnomaliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceQueryAnomaliesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']
      >,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].QueryAnomalies.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceQueryAnomalies<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceQueryAnomaliesMutationOptions<
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

export function getPostQuerierV1QuerierServiceSelectHeatmapMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/SelectHeatmap', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceSelectHeatmapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceSelectHeatmapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']
      >,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].SelectHeatmap.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceSelectHeatmap<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceSelectHeatmapMutationOptions<
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

export function getPostQuerierV1QuerierServiceSelectMergeProfileMutationKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/SelectMergeProfile',
    'POST',
  ] as const
}

export function getPostQuerierV1QuerierServiceSelectMergeProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceSelectMergeProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['querier.v1.QuerierService'].SelectMergeProfile.$post(args, options),
      )
    },
  })
}

export function usePostQuerierV1QuerierServiceSelectMergeProfile<
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
                  (typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']
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
  const mutationDefaults = getPostQuerierV1QuerierServiceSelectMergeProfileMutationOptions<
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

export function getPostQuerierV1QuerierServiceSelectMergeSpanProfileMutationKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/SelectMergeSpanProfile',
    'POST',
  ] as const
}

export function getPostQuerierV1QuerierServiceSelectMergeSpanProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceSelectMergeSpanProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['querier.v1.QuerierService'].SelectMergeSpanProfile.$post(args, options),
      )
    },
  })
}

export function usePostQuerierV1QuerierServiceSelectMergeSpanProfile<
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
                  (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
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
  const mutationDefaults = getPostQuerierV1QuerierServiceSelectMergeSpanProfileMutationOptions<
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

export function getPostQuerierV1QuerierServiceSelectMergeStacktracesMutationKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/SelectMergeStacktraces',
    'POST',
  ] as const
}

export function getPostQuerierV1QuerierServiceSelectMergeStacktracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceSelectMergeStacktracesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
      >,
    ) {
      return parseResponse(
        client['querier.v1.QuerierService'].SelectMergeStacktraces.$post(args, options),
      )
    },
  })
}

export function usePostQuerierV1QuerierServiceSelectMergeStacktraces<
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
                  (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
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
  const mutationDefaults = getPostQuerierV1QuerierServiceSelectMergeStacktracesMutationOptions<
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

export function getPostQuerierV1QuerierServiceSelectSeriesMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/SelectSeries', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceSelectSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceSelectSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].SelectSeries.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceSelectSeries<
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
                ReturnType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceSelectSeriesMutationOptions<
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

export function getPostQuerierV1QuerierServiceSeriesMutationKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/Series', 'POST'] as const
}

export function getPostQuerierV1QuerierServiceSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuerierV1QuerierServiceSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>,
    ) {
      return parseResponse(client['querier.v1.QuerierService'].Series.$post(args, options))
    },
  })
}

export function usePostQuerierV1QuerierServiceSeries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuerierV1QuerierServiceSeriesMutationOptions<
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
