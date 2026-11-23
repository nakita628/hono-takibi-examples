import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV1LocatesKey(args: InferRequestType<typeof client.v1.locates.$get>) {
  return ['v1', '/v1/locates', args] as const
}

export function useGetV1Locates<TError = unknown>(
  args: InferRequestType<typeof client.v1.locates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LocatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.locates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Locates<TError = unknown>(
  args: InferRequestType<typeof client.v1.locates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LocatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.locates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LocatesKey() {
  return ['v1', '/v1/locates', 'POST'] as const
}

export function usePostV1Locates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.locates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LocatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.locates.$post> }) =>
        parseResponse(client.v1.locates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LocatesLocateIdKey(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
) {
  return ['v1', '/v1/locates/:locate_id', args] as const
}

export function useGetV1LocatesLocateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
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
        ? getGetV1LocatesLocateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.locates[':locate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocatesLocateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
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
        ? getGetV1LocatesLocateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.locates[':locate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LocatesQuotesKey(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
) {
  return ['v1', '/v1/locates/quotes', args] as const
}

export function useGetV1LocatesQuotes<TError = unknown>(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
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
        ? getGetV1LocatesQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.locates.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocatesQuotes<TError = unknown>(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
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
        ? getGetV1LocatesQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.locates.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1EventsActivitiesKey(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
) {
  return ['v2beta1', '/v2beta1/events/activities', args] as const
}

export function useGetV2beta1EventsActivities<TError = unknown>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
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
        ? getGetV2beta1EventsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1.events.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1EventsActivities<TError = unknown>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
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
        ? getGetV2beta1EventsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1.events.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountKey() {
  return ['v2', '/v2/account'] as const
}

export function useGetV2Account<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Account<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountActivitiesKey(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
) {
  return ['v2', '/v2/account/activities', args] as const
}

export function useGetV2AccountActivities<TError = unknown>(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
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
        ? getGetV2AccountActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountActivities<TError = unknown>(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
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
        ? getGetV2AccountActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountActivitiesActivityTypeKey(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
) {
  return ['v2', '/v2/account/activities/:activity_type', args] as const
}

export function useGetV2AccountActivitiesActivityType<TError = unknown>(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
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
        ? getGetV2AccountActivitiesActivityTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.account.activities[':activity_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountActivitiesActivityType<TError = unknown>(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
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
        ? getGetV2AccountActivitiesActivityTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.account.activities[':activity_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountConfigurationsKey() {
  return ['v2', '/v2/account/configurations'] as const
}

export function useGetV2AccountConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AccountConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.configurations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AccountConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.configurations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2AccountConfigurationsKey() {
  return ['v2', '/v2/account/configurations', 'PATCH'] as const
}

export function usePatchV2AccountConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.account.configurations.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AccountConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.account.configurations.$patch> },
      ) => parseResponse(client.v2.account.configurations.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AccountPortfolioHistoryKey(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
) {
  return ['v2', '/v2/account/portfolio/history', args] as const
}

export function useGetV2AccountPortfolioHistory<TError = unknown>(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
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
        ? getGetV2AccountPortfolioHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.portfolio.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountPortfolioHistory<TError = unknown>(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
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
        ? getGetV2AccountPortfolioHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.portfolio.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AssetsKey(args: InferRequestType<typeof client.v2.assets.$get>) {
  return ['v2', '/v2/assets', args] as const
}

export function useGetV2Assets<TError = unknown>(
  args: InferRequestType<typeof client.v2.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Assets<TError = unknown>(
  args: InferRequestType<typeof client.v2.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AssetsSymbolOrAssetIdKey(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
) {
  return ['v2', '/v2/assets/:symbol_or_asset_id', args] as const
}

export function useGetV2AssetsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
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
        ? getGetV2AssetsSymbolOrAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.assets[':symbol_or_asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AssetsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
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
        ? getGetV2AssetsSymbolOrAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.assets[':symbol_or_asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarKey(args: InferRequestType<typeof client.v2.calendar.$get>) {
  return ['v2', '/v2/calendar', args] as const
}

export function useGetV2Calendar<TError = unknown>(
  args: InferRequestType<typeof client.v2.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Calendar<TError = unknown>(
  args: InferRequestType<typeof client.v2.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ClockKey() {
  return ['v2', '/v2/clock'] as const
}

export function useGetV2Clock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ClockKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.clock.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Clock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ClockKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.clock.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CorporateActionsAnnouncementsKey(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
) {
  return ['v2', '/v2/corporate_actions/announcements', args] as const
}

export function useGetV2CorporateActionsAnnouncements<TError = unknown>(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
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
        ? getGetV2CorporateActionsAnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.corporate_actions.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CorporateActionsAnnouncements<TError = unknown>(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
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
        ? getGetV2CorporateActionsAnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.corporate_actions.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CorporateActionsAnnouncementsIdKey(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
) {
  return ['v2', '/v2/corporate_actions/announcements/:id', args] as const
}

export function useGetV2CorporateActionsAnnouncementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
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
        ? getGetV2CorporateActionsAnnouncementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.corporate_actions.announcements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CorporateActionsAnnouncementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
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
        ? getGetV2CorporateActionsAnnouncementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.corporate_actions.announcements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OptionsContractsKey(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
) {
  return ['v2', '/v2/options/contracts', args] as const
}

export function useGetV2OptionsContracts<TError = unknown>(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
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
        ? getGetV2OptionsContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.options.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OptionsContracts<TError = unknown>(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
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
        ? getGetV2OptionsContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.options.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OptionsContractsSymbolOrIdKey(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
) {
  return ['v2', '/v2/options/contracts/:symbol_or_id', args] as const
}

export function useGetV2OptionsContractsSymbolOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
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
        ? getGetV2OptionsContractsSymbolOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.options.contracts[':symbol_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OptionsContractsSymbolOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
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
        ? getGetV2OptionsContractsSymbolOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.options.contracts[':symbol_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OrdersKey(args: InferRequestType<typeof client.v2.orders.$get>) {
  return ['v2', '/v2/orders', args] as const
}

export function useGetV2Orders<TError = unknown>(
  args: InferRequestType<typeof client.v2.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2OrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Orders<TError = unknown>(
  args: InferRequestType<typeof client.v2.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2OrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OrdersKey() {
  return ['v2', '/v2/orders', 'POST'] as const
}

export function usePostV2Orders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.orders.$post> }) =>
        parseResponse(client.v2.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2OrdersKey() {
  return ['v2', '/v2/orders', 'DELETE'] as const
}

export function useDeleteV2Orders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2OrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v2.orders.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OrdersOrderIdKey(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
) {
  return ['v2', '/v2/orders/:order_id', args] as const
}

export function useGetV2OrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
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
        ? getGetV2OrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
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
        ? getGetV2OrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2OrdersOrderIdKey() {
  return ['v2', '/v2/orders/:order_id', 'DELETE'] as const
}

export function useDeleteV2OrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.orders)[':order_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2OrdersOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.orders)[':order_id']['$delete']> },
      ) => parseResponse(client.v2.orders[':order_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2OrdersOrderIdKey() {
  return ['v2', '/v2/orders/:order_id', 'PATCH'] as const
}

export function usePatchV2OrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.orders)[':order_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2OrdersOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.orders)[':order_id']['$patch']> },
      ) => parseResponse(client.v2.orders[':order_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2OrdersByClientOrderIdKey(
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
) {
  return ['v2', '/v2/orders:by_client_order_id', args] as const
}

export function useGetV2OrdersByClientOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
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
        ? getGetV2OrdersByClientOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['orders:by_client_order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OrdersByClientOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
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
        ? getGetV2OrdersByClientOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['orders:by_client_order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PositionsKey() {
  return ['v2', '/v2/positions'] as const
}

export function useGetV2Positions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PositionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.positions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Positions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PositionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.positions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PositionsKey() {
  return ['v2', '/v2/positions', 'DELETE'] as const
}

export function useDeleteV2Positions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.positions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PositionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.positions.$delete> }) =>
        parseResponse(client.v2.positions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PositionsSymbolOrAssetIdKey(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
) {
  return ['v2', '/v2/positions/:symbol_or_asset_id', args] as const
}

export function useGetV2PositionsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
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
        ? getGetV2PositionsSymbolOrAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.positions[':symbol_or_asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PositionsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
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
        ? getGetV2PositionsSymbolOrAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.positions[':symbol_or_asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PositionsSymbolOrAssetIdKey() {
  return ['v2', '/v2/positions/:symbol_or_asset_id', 'DELETE'] as const
}

export function useDeleteV2PositionsSymbolOrAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PositionsSymbolOrAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>
        },
      ) => parseResponse(client.v2.positions[':symbol_or_asset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PositionsSymbolOrContractIdDoNotExerciseKey() {
  return ['v2', '/v2/positions/:symbol_or_contract_id/do-not-exercise', 'POST'] as const
}

export function usePostV2PositionsSymbolOrContractIdDoNotExercise<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PositionsSymbolOrContractIdDoNotExerciseKey()
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
            (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.positions[':symbol_or_contract_id']['do-not-exercise'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PositionsSymbolOrContractIdExerciseKey() {
  return ['v2', '/v2/positions/:symbol_or_contract_id/exercise', 'POST'] as const
}

export function usePostV2PositionsSymbolOrContractIdExercise<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PositionsSymbolOrContractIdExerciseKey()
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
            (typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.positions[':symbol_or_contract_id'].exercise.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2TokenizationMintKey() {
  return ['v2', '/v2/tokenization/mint', 'POST'] as const
}

export function usePostV2TokenizationMint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.mint.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.tokenization.mint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TokenizationMintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.tokenization.mint.$post> },
      ) => parseResponse(client.v2.tokenization.mint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TokenizationRequestsKey(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
) {
  return ['v2', '/v2/tokenization/requests', args] as const
}

export function useGetV2TokenizationRequests<TError = unknown>(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
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
        ? getGetV2TokenizationRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.tokenization.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TokenizationRequests<TError = unknown>(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
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
        ? getGetV2TokenizationRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.tokenization.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TokenizationRequestsTokenizationRequestIdKey(
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
) {
  return ['v2', '/v2/tokenization/requests/:tokenization_request_id', args] as const
}

export function useGetV2TokenizationRequestsTokenizationRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
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
        ? getGetV2TokenizationRequestsTokenizationRequestIdKey(args)
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
                (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
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
          client.v2.tokenization.requests[':tokenization_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TokenizationRequestsTokenizationRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
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
        ? getGetV2TokenizationRequestsTokenizationRequestIdKey(args)
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
                (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
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
          client.v2.tokenization.requests[':tokenization_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TokenizationRequestsByClientRequestIdKey(
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
) {
  return ['v2', '/v2/tokenization/requests:by_client_request_id', args] as const
}

export function useGetV2TokenizationRequestsByClientRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
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
        ? getGetV2TokenizationRequestsByClientRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.tokenization['requests:by_client_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TokenizationRequestsByClientRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
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
        ? getGetV2TokenizationRequestsByClientRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.tokenization['requests:by_client_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2WalletsKey(args: InferRequestType<typeof client.v2.wallets.$get>) {
  return ['v2', '/v2/wallets', args] as const
}

export function useGetV2Wallets<TError = unknown>(
  args: InferRequestType<typeof client.v2.wallets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WalletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Wallets<TError = unknown>(
  args: InferRequestType<typeof client.v2.wallets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WalletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WalletsFeesEstimateKey(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
) {
  return ['v2', '/v2/wallets/fees/estimate', args] as const
}

export function useGetV2WalletsFeesEstimate<TError = unknown>(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
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
        ? getGetV2WalletsFeesEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.fees.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WalletsFeesEstimate<TError = unknown>(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
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
        ? getGetV2WalletsFeesEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.fees.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WalletsTransfersKey() {
  return ['v2', '/v2/wallets/transfers'] as const
}

export function useGetV2WalletsTransfers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WalletsTransfersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.transfers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WalletsTransfers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WalletsTransfersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.transfers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WalletsTransfersTransferIdKey(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
) {
  return ['v2', '/v2/wallets/transfers/:transfer_id', args] as const
}

export function useGetV2WalletsTransfersTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
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
        ? getGetV2WalletsTransfersTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.wallets.transfers[':transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WalletsTransfersTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
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
        ? getGetV2WalletsTransfersTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.wallets.transfers[':transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WalletsTravelRuleVaspsKey(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
) {
  return ['v2', '/v2/wallets/travel-rule/vasps', args] as const
}

export function useGetV2WalletsTravelRuleVasps<TError = unknown>(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
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
        ? getGetV2WalletsTravelRuleVaspsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets['travel-rule'].vasps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WalletsTravelRuleVasps<TError = unknown>(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
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
        ? getGetV2WalletsTravelRuleVaspsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets['travel-rule'].vasps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WalletsWhitelistsKey() {
  return ['v2', '/v2/wallets/whitelists'] as const
}

export function useGetV2WalletsWhitelists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WalletsWhitelistsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.whitelists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WalletsWhitelists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WalletsWhitelistsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.wallets.whitelists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WalletsWhitelistsKey() {
  return ['v2', '/v2/wallets/whitelists', 'POST'] as const
}

export function usePostV2WalletsWhitelists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.wallets.whitelists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WalletsWhitelistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.wallets.whitelists.$post> },
      ) => parseResponse(client.v2.wallets.whitelists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WalletsWhitelistsWhitelistedAddressIdKey() {
  return ['v2', '/v2/wallets/whitelists/:whitelisted_address_id', 'DELETE'] as const
}

export function useDeleteV2WalletsWhitelistsWhitelistedAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WalletsWhitelistsWhitelistedAddressIdKey()
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
            (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.wallets.whitelists[':whitelisted_address_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoKey() {
  return ['v2', '/v2/wallets/whitelists/:whitelisted_address_id/travel-rule-info', 'PATCH'] as const
}

export function usePatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoKey()
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
            (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.wallets.whitelists[':whitelisted_address_id']['travel-rule-info'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2WatchlistsKey() {
  return ['v2', '/v2/watchlists'] as const
}

export function useGetV2Watchlists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WatchlistsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.watchlists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Watchlists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WatchlistsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.watchlists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WatchlistsKey() {
  return ['v2', '/v2/watchlists', 'POST'] as const
}

export function usePostV2Watchlists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.watchlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WatchlistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.watchlists.$post> }) =>
        parseResponse(client.v2.watchlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WatchlistsWatchlistIdKey(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
) {
  return ['v2', '/v2/watchlists/:watchlist_id', args] as const
}

export function useGetV2WatchlistsWatchlistId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
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
        ? getGetV2WatchlistsWatchlistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.watchlists[':watchlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WatchlistsWatchlistId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
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
        ? getGetV2WatchlistsWatchlistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.watchlists[':watchlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2WatchlistsWatchlistIdKey() {
  return ['v2', '/v2/watchlists/:watchlist_id', 'PUT'] as const
}

export function usePutV2WatchlistsWatchlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2WatchlistsWatchlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$put']> },
      ) => parseResponse(client.v2.watchlists[':watchlist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WatchlistsWatchlistIdKey() {
  return ['v2', '/v2/watchlists/:watchlist_id', 'POST'] as const
}

export function usePostV2WatchlistsWatchlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WatchlistsWatchlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$post']> },
      ) => parseResponse(client.v2.watchlists[':watchlist_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WatchlistsWatchlistIdKey() {
  return ['v2', '/v2/watchlists/:watchlist_id', 'DELETE'] as const
}

export function useDeleteV2WatchlistsWatchlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WatchlistsWatchlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']> },
      ) => parseResponse(client.v2.watchlists[':watchlist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WatchlistsWatchlistIdSymbolKey() {
  return ['v2', '/v2/watchlists/:watchlist_id/:symbol', 'DELETE'] as const
}

export function useDeleteV2WatchlistsWatchlistIdSymbol<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WatchlistsWatchlistIdSymbolKey()
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
            (typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']
          >
        },
      ) =>
        parseResponse(client.v2.watchlists[':watchlist_id'][':symbol'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WatchlistsByNameKey(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
) {
  return ['v2', '/v2/watchlists:by_name', args] as const
}

export function useGetV2WatchlistsByName<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
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
        ? getGetV2WatchlistsByNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['watchlists:by_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WatchlistsByName<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
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
        ? getGetV2WatchlistsByNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['watchlists:by_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2WatchlistsByNameKey() {
  return ['v2', '/v2/watchlists:by_name', 'PUT'] as const
}

export function usePutV2WatchlistsByName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['watchlists:by_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2WatchlistsByNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['watchlists:by_name']['$put']> },
      ) => parseResponse(client.v2['watchlists:by_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WatchlistsByNameKey() {
  return ['v2', '/v2/watchlists:by_name', 'POST'] as const
}

export function usePostV2WatchlistsByName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['watchlists:by_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WatchlistsByNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['watchlists:by_name']['$post']> },
      ) => parseResponse(client.v2['watchlists:by_name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WatchlistsByNameKey() {
  return ['v2', '/v2/watchlists:by_name', 'DELETE'] as const
}

export function useDeleteV2WatchlistsByName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['watchlists:by_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WatchlistsByNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['watchlists:by_name']['$delete']> },
      ) => parseResponse(client.v2['watchlists:by_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3CalendarMarketKey(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
) {
  return ['v3', '/v3/calendar/:market', args] as const
}

export function useGetV3CalendarMarket<TError = unknown>(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
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
        ? getGetV3CalendarMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.calendar[':market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3CalendarMarket<TError = unknown>(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
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
        ? getGetV3CalendarMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.calendar[':market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ClockKey(args: InferRequestType<typeof client.v3.clock.$get>) {
  return ['v3', '/v3/clock', args] as const
}

export function useGetV3Clock<TError = unknown>(
  args: InferRequestType<typeof client.v3.clock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ClockKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v3.clock.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV3Clock<TError = unknown>(
  args: InferRequestType<typeof client.v3.clock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3ClockKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v3.clock.$get(args, clientOptions)), restSwrOptions),
  }
}
