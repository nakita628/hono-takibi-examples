import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getAlertmanagersKey() {
  return ['alertmanagers'] as const
}

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getFeaturesKey() {
  return ['features'] as const
}

export function getFormatQueryKey() {
  return ['format_query'] as const
}

export function getLabelKey() {
  return ['label'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOtlpKey() {
  return ['otlp'] as const
}

export function getParseQueryKey() {
  return ['parse_query'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueryCostKey() {
  return ['query_cost'] as const
}

export function getQueryExemplarsKey() {
  return ['query_exemplars'] as const
}

export function getQueryRangeKey() {
  return ['query_range'] as const
}

export function getQueryRangeCostKey() {
  return ['query_range_cost'] as const
}

export function getReadKey() {
  return ['read'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getScrapePoolsKey() {
  return ['scrape_pools'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getTargetsKey() {
  return ['targets'] as const
}

export function getWriteKey() {
  return ['write'] as const
}

export function getGetQueryKey(args: InferRequestType<typeof client.query.$get>) {
  return ['query', '/query', args] as const
}

export function useGetQuery<TError = unknown>(
  args: InferRequestType<typeof client.query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.query.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuery<TError = unknown>(
  args: InferRequestType<typeof client.query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.query.$get(args, clientOptions)), restSwrOptions),
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

export function getGetQueryRangeKey(args: InferRequestType<typeof client.query_range.$get>) {
  return ['query_range', '/query_range', args] as const
}

export function useGetQueryRange<TError = unknown>(
  args: InferRequestType<typeof client.query_range.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryRangeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_range.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryRange<TError = unknown>(
  args: InferRequestType<typeof client.query_range.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryRangeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_range.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryRangeKey() {
  return ['query_range', '/query_range', 'POST'] as const
}

export function usePostQueryRange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query_range.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryRangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query_range.$post> }) =>
        parseResponse(client.query_range.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueryCostKey(args: InferRequestType<typeof client.query_cost.$get>) {
  return ['query_cost', '/query_cost', args] as const
}

export function useGetQueryCost<TError = unknown>(
  args: InferRequestType<typeof client.query_cost.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryCostKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_cost.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryCost<TError = unknown>(
  args: InferRequestType<typeof client.query_cost.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryCostKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_cost.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryCostKey() {
  return ['query_cost', '/query_cost', 'POST'] as const
}

export function usePostQueryCost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query_cost.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryCostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query_cost.$post> }) =>
        parseResponse(client.query_cost.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueryRangeCostKey(
  args: InferRequestType<typeof client.query_range_cost.$get>,
) {
  return ['query_range_cost', '/query_range_cost', args] as const
}

export function useGetQueryRangeCost<TError = unknown>(
  args: InferRequestType<typeof client.query_range_cost.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryRangeCostKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_range_cost.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryRangeCost<TError = unknown>(
  args: InferRequestType<typeof client.query_range_cost.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryRangeCostKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_range_cost.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryRangeCostKey() {
  return ['query_range_cost', '/query_range_cost', 'POST'] as const
}

export function usePostQueryRangeCost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.query_range_cost.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryRangeCostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query_range_cost.$post> }) =>
        parseResponse(client.query_range_cost.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueryExemplarsKey(
  args: InferRequestType<typeof client.query_exemplars.$get>,
) {
  return ['query_exemplars', '/query_exemplars', args] as const
}

export function useGetQueryExemplars<TError = unknown>(
  args: InferRequestType<typeof client.query_exemplars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryExemplarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_exemplars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryExemplars<TError = unknown>(
  args: InferRequestType<typeof client.query_exemplars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryExemplarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query_exemplars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryExemplarsKey() {
  return ['query_exemplars', '/query_exemplars', 'POST'] as const
}

export function usePostQueryExemplars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.query_exemplars.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryExemplarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query_exemplars.$post> }) =>
        parseResponse(client.query_exemplars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFormatQueryKey(args: InferRequestType<typeof client.format_query.$get>) {
  return ['format_query', '/format_query', args] as const
}

export function useGetFormatQuery<TError = unknown>(
  args: InferRequestType<typeof client.format_query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormatQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.format_query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatQuery<TError = unknown>(
  args: InferRequestType<typeof client.format_query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormatQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.format_query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFormatQueryKey() {
  return ['format_query', '/format_query', 'POST'] as const
}

export function usePostFormatQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.format_query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFormatQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.format_query.$post> }) =>
        parseResponse(client.format_query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetParseQueryKey(args: InferRequestType<typeof client.parse_query.$get>) {
  return ['parse_query', '/parse_query', args] as const
}

export function useGetParseQuery<TError = unknown>(
  args: InferRequestType<typeof client.parse_query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParseQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parse_query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParseQuery<TError = unknown>(
  args: InferRequestType<typeof client.parse_query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParseQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parse_query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostParseQueryKey() {
  return ['parse_query', '/parse_query', 'POST'] as const
}

export function usePostParseQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.parse_query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParseQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.parse_query.$post> }) =>
        parseResponse(client.parse_query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsKey(args: InferRequestType<typeof client.labels.$get>) {
  return ['labels', '/labels', args] as const
}

export function useGetLabels<TError = unknown>(
  args: InferRequestType<typeof client.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.labels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLabels<TError = unknown>(
  args: InferRequestType<typeof client.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.labels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLabelsKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function usePostLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.labels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.labels.$post> }) =>
        parseResponse(client.labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelNameValuesKey(
  args: InferRequestType<(typeof client.label)[':name']['values']['$get']>,
) {
  return ['label', '/label/:name/values', args] as const
}

export function useGetLabelNameValues<TError = unknown>(
  args: InferRequestType<(typeof client.label)[':name']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
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
        ? getGetLabelNameValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.label[':name'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelNameValues<TError = unknown>(
  args: InferRequestType<(typeof client.label)[':name']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
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
        ? getGetLabelNameValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.label[':name'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMetricNamesKey(
  args: InferRequestType<typeof client.search.metric_names.$get>,
) {
  return ['search', '/search/metric_names', args] as const
}

export function useGetSearchMetricNames<TError = unknown>(
  args: InferRequestType<typeof client.search.metric_names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
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
        ? getGetSearchMetricNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.metric_names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMetricNames<TError = unknown>(
  args: InferRequestType<typeof client.search.metric_names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
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
        ? getGetSearchMetricNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.metric_names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchMetricNamesKey() {
  return ['search', '/search/metric_names', 'POST'] as const
}

export function usePostSearchMetricNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.metric_names.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchMetricNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.metric_names.$post> }) =>
        parseResponse(client.search.metric_names.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchLabelNamesKey(
  args: InferRequestType<typeof client.search.label_names.$get>,
) {
  return ['search', '/search/label_names', args] as const
}

export function useGetSearchLabelNames<TError = unknown>(
  args: InferRequestType<typeof client.search.label_names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
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
        ? getGetSearchLabelNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.label_names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchLabelNames<TError = unknown>(
  args: InferRequestType<typeof client.search.label_names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
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
        ? getGetSearchLabelNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.label_names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchLabelNamesKey() {
  return ['search', '/search/label_names', 'POST'] as const
}

export function usePostSearchLabelNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.label_names.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchLabelNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.label_names.$post> }) =>
        parseResponse(client.search.label_names.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchLabelValuesKey(
  args: InferRequestType<typeof client.search.label_values.$get>,
) {
  return ['search', '/search/label_values', args] as const
}

export function useGetSearchLabelValues<TError = unknown>(
  args: InferRequestType<typeof client.search.label_values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
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
        ? getGetSearchLabelValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.label_values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchLabelValues<TError = unknown>(
  args: InferRequestType<typeof client.search.label_values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
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
        ? getGetSearchLabelValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.label_values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchLabelValuesKey() {
  return ['search', '/search/label_values', 'POST'] as const
}

export function usePostSearchLabelValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.label_values.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchLabelValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.label_values.$post> }) =>
        parseResponse(client.search.label_values.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function useGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSeriesKey() {
  return ['series', '/series', 'POST'] as const
}

export function usePostSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.series.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.series.$post> }) =>
        parseResponse(client.series.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataKey(args: InferRequestType<typeof client.metadata.$get>) {
  return ['metadata', '/metadata', args] as const
}

export function useGetMetadata<TError = unknown>(
  args: InferRequestType<typeof client.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.metadata.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMetadata<TError = unknown>(
  args: InferRequestType<typeof client.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.metadata.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetScrapePoolsKey() {
  return ['scrape_pools', '/scrape_pools'] as const
}

export function useGetScrapePools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScrapePoolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrape_pools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapePools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScrapePoolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrape_pools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScrapePoolsConfigKey(
  args: InferRequestType<typeof client.scrape_pools.config.$get>,
) {
  return ['scrape_pools', '/scrape_pools/config', args] as const
}

export function useGetScrapePoolsConfig<TError = unknown>(
  args: InferRequestType<typeof client.scrape_pools.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
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
        ? getGetScrapePoolsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrape_pools.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapePoolsConfig<TError = unknown>(
  args: InferRequestType<typeof client.scrape_pools.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
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
        ? getGetScrapePoolsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrape_pools.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsKey(args: InferRequestType<typeof client.targets.$get>) {
  return ['targets', '/targets', args] as const
}

export function useGetTargets<TError = unknown>(
  args: InferRequestType<typeof client.targets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTargetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.targets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTargets<TError = unknown>(
  args: InferRequestType<typeof client.targets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTargetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.targets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTargetsMetadataKey(
  args: InferRequestType<typeof client.targets.metadata.$get>,
) {
  return ['targets', '/targets/metadata', args] as const
}

export function useGetTargetsMetadata<TError = unknown>(
  args: InferRequestType<typeof client.targets.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
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
        ? getGetTargetsMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsMetadata<TError = unknown>(
  args: InferRequestType<typeof client.targets.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
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
        ? getGetTargetsMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsRelabelStepsKey(
  args: InferRequestType<typeof client.targets.relabel_steps.$get>,
) {
  return ['targets', '/targets/relabel_steps', args] as const
}

export function useGetTargetsRelabelSteps<TError = unknown>(
  args: InferRequestType<typeof client.targets.relabel_steps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
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
        ? getGetTargetsRelabelStepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.relabel_steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsRelabelSteps<TError = unknown>(
  args: InferRequestType<typeof client.targets.relabel_steps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
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
        ? getGetTargetsRelabelStepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.relabel_steps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesKey(args: InferRequestType<typeof client.rules.$get>) {
  return ['rules', '/rules', args] as const
}

export function useGetRules<TError = unknown>(
  args: InferRequestType<typeof client.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rules.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRules<TError = unknown>(
  args: InferRequestType<typeof client.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rules.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAlertsKey() {
  return ['alerts', '/alerts'] as const
}

export function useGetAlerts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlerts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alerts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertmanagersKey() {
  return ['alertmanagers', '/alertmanagers'] as const
}

export function useGetAlertmanagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertmanagersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alertmanagers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertmanagers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAlertmanagersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alertmanagers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusConfigKey() {
  return ['status', '/status/config'] as const
}

export function useGetStatusConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusRuntimeinfoKey() {
  return ['status', '/status/runtimeinfo'] as const
}

export function useGetStatusRuntimeinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusRuntimeinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.runtimeinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusRuntimeinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusRuntimeinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.runtimeinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusBuildinfoKey() {
  return ['status', '/status/buildinfo'] as const
}

export function useGetStatusBuildinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusBuildinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.buildinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusBuildinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusBuildinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.buildinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusFlagsKey() {
  return ['status', '/status/flags'] as const
}

export function useGetStatusFlags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusFlagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.flags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusFlags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusFlagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.flags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusTsdbKey(args: InferRequestType<typeof client.status.tsdb.$get>) {
  return ['status', '/status/tsdb', args] as const
}

export function useGetStatusTsdb<TError = unknown>(
  args: InferRequestType<typeof client.status.tsdb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusTsdbKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.tsdb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusTsdb<TError = unknown>(
  args: InferRequestType<typeof client.status.tsdb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusTsdbKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.tsdb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusTsdbBlocksKey() {
  return ['status', '/status/tsdb/blocks'] as const
}

export function useGetStatusTsdbBlocks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusTsdbBlocksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.tsdb.blocks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusTsdbBlocks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusTsdbBlocksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.tsdb.blocks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusWalreplayKey() {
  return ['status', '/status/walreplay'] as const
}

export function useGetStatusWalreplay<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusWalreplayKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.walreplay.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusWalreplay<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusWalreplayKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.walreplay.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusSelfMetricsKey(
  args: InferRequestType<typeof client.status.self_metrics.$get>,
) {
  return ['status', '/status/self_metrics', args] as const
}

export function useGetStatusSelfMetrics<TError = unknown>(
  args: InferRequestType<typeof client.status.self_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
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
        ? getGetStatusSelfMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.self_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusSelfMetrics<TError = unknown>(
  args: InferRequestType<typeof client.status.self_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
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
        ? getGetStatusSelfMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.self_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminTsdbDeleteSeriesKey() {
  return ['admin', '/admin/tsdb/delete_series', 'PUT'] as const
}

export function usePutAdminTsdbDeleteSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.tsdb.delete_series.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminTsdbDeleteSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.tsdb.delete_series.$put> },
      ) => parseResponse(client.admin.tsdb.delete_series.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTsdbDeleteSeriesKey() {
  return ['admin', '/admin/tsdb/delete_series', 'POST'] as const
}

export function usePostAdminTsdbDeleteSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.tsdb.delete_series.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTsdbDeleteSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.tsdb.delete_series.$post> },
      ) => parseResponse(client.admin.tsdb.delete_series.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminTsdbCleanTombstonesKey() {
  return ['admin', '/admin/tsdb/clean_tombstones', 'PUT'] as const
}

export function usePutAdminTsdbCleanTombstones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.clean_tombstones.$put>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminTsdbCleanTombstonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.tsdb.clean_tombstones.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTsdbCleanTombstonesKey() {
  return ['admin', '/admin/tsdb/clean_tombstones', 'POST'] as const
}

export function usePostAdminTsdbCleanTombstones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.clean_tombstones.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTsdbCleanTombstonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.tsdb.clean_tombstones.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminTsdbSnapshotKey() {
  return ['admin', '/admin/tsdb/snapshot', 'PUT'] as const
}

export function usePutAdminTsdbSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.tsdb.snapshot.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminTsdbSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.tsdb.snapshot.$put> }) =>
        parseResponse(client.admin.tsdb.snapshot.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTsdbSnapshotKey() {
  return ['admin', '/admin/tsdb/snapshot', 'POST'] as const
}

export function usePostAdminTsdbSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.tsdb.snapshot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTsdbSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.tsdb.snapshot.$post> }) =>
        parseResponse(client.admin.tsdb.snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReadKey() {
  return ['read', '/read', 'POST'] as const
}

export function usePostRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.read.$post>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.read.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWriteKey() {
  return ['write', '/write', 'POST'] as const
}

export function usePostWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.write.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOtlpV1MetricsKey() {
  return ['otlp', '/otlp/v1/metrics', 'POST'] as const
}

export function usePostOtlpV1Metrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otlp.v1.metrics.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtlpV1MetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.otlp.v1.metrics.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsKey() {
  return ['notifications', '/notifications'] as const
}

export function useGetNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeaturesKey() {
  return ['features', '/features'] as const
}

export function useGetFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
