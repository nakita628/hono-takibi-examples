import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQuerierV1QuerierServiceKey() {
  return ['querier.v1.QuerierService'] as const
}

export function getPostQuerierV1QuerierServiceAnalyzeQueryKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/AnalyzeQuery', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceAnalyzeQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceAnalyzeQueryKey()
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
            (typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']
          >
        },
      ) =>
        parseResponse(client['querier.v1.QuerierService'].AnalyzeQuery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceDiffKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/Diff', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceDiffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']> },
      ) => parseResponse(client['querier.v1.QuerierService'].Diff.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceGetProfileStatsKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/GetProfileStats',
    'POST',
  ] as const
}

export function usePostQuerierV1QuerierServiceGetProfileStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceGetProfileStatsKey()
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
            (typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']
          >
        },
      ) =>
        parseResponse(
          client['querier.v1.QuerierService'].GetProfileStats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceLabelNamesKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/LabelNames', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceLabelNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceLabelNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>
        },
      ) => parseResponse(client['querier.v1.QuerierService'].LabelNames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceLabelValuesKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/LabelValues', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceLabelValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceLabelValuesKey()
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
            (typeof client)['querier.v1.QuerierService']['LabelValues']['$post']
          >
        },
      ) => parseResponse(client['querier.v1.QuerierService'].LabelValues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceProfileTypesKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/ProfileTypes', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceProfileTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceProfileTypesKey()
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
            (typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']
          >
        },
      ) =>
        parseResponse(client['querier.v1.QuerierService'].ProfileTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceQueryAnomaliesKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/QueryAnomalies', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceQueryAnomalies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceQueryAnomaliesKey()
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
            (typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']
          >
        },
      ) =>
        parseResponse(client['querier.v1.QuerierService'].QueryAnomalies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceSelectHeatmapKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/SelectHeatmap', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceSelectHeatmap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceSelectHeatmapKey()
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
            (typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']
          >
        },
      ) =>
        parseResponse(client['querier.v1.QuerierService'].SelectHeatmap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceSelectMergeProfileKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/SelectMergeProfile',
    'POST',
  ] as const
}

export function usePostQuerierV1QuerierServiceSelectMergeProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceSelectMergeProfileKey()
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
            (typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['querier.v1.QuerierService'].SelectMergeProfile.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceSelectMergeSpanProfileKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/SelectMergeSpanProfile',
    'POST',
  ] as const
}

export function usePostQuerierV1QuerierServiceSelectMergeSpanProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceSelectMergeSpanProfileKey()
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
            (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['querier.v1.QuerierService'].SelectMergeSpanProfile.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceSelectMergeStacktracesKey() {
  return [
    'querier.v1.QuerierService',
    '/querier.v1.QuerierService/SelectMergeStacktraces',
    'POST',
  ] as const
}

export function usePostQuerierV1QuerierServiceSelectMergeStacktraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceSelectMergeStacktracesKey()
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
            (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['querier.v1.QuerierService'].SelectMergeStacktraces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceSelectSeriesKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/SelectSeries', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceSelectSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceSelectSeriesKey()
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
            (typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']
          >
        },
      ) =>
        parseResponse(client['querier.v1.QuerierService'].SelectSeries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuerierV1QuerierServiceSeriesKey() {
  return ['querier.v1.QuerierService', '/querier.v1.QuerierService/Series', 'POST'] as const
}

export function usePostQuerierV1QuerierServiceSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuerierV1QuerierServiceSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>
        },
      ) => parseResponse(client['querier.v1.QuerierService'].Series.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
