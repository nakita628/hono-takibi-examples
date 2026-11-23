import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta3Key() {
  return ['v1beta3'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV1beta1EventsCorporateActionsKey(
  args: InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1beta1', '/v1beta1/events/corporate-actions', keyArgs] as const
}

export function useGetV1beta1EventsCorporateActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
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
        ? getGetV1beta1EventsCorporateActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.events['corporate-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1EventsCorporateActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
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
        ? getGetV1beta1EventsCorporateActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.events['corporate-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1FixedIncomeLatestPricesKey(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
) {
  return ['v1beta1', '/v1beta1/fixed_income/latest/prices', args] as const
}

export function useGetV1beta1FixedIncomeLatestPrices<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
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
        ? getGetV1beta1FixedIncomeLatestPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.fixed_income.latest.prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1FixedIncomeLatestPrices<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
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
        ? getGetV1beta1FixedIncomeLatestPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.fixed_income.latest.prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1FixedIncomeLatestQuotesKey(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
) {
  return ['v1beta1', '/v1beta1/fixed_income/latest/quotes', args] as const
}

export function useGetV1beta1FixedIncomeLatestQuotes<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
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
        ? getGetV1beta1FixedIncomeLatestQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.fixed_income.latest.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1FixedIncomeLatestQuotes<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
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
        ? getGetV1beta1FixedIncomeLatestQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.fixed_income.latest.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1LogosSymbolKey(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
) {
  return ['v1beta1', '/v1beta1/logos/:symbol', args] as const
}

export function useGetV1beta1LogosSymbol<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
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
        ? getGetV1beta1LogosSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.logos[':symbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1LogosSymbol<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
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
        ? getGetV1beta1LogosSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.logos[':symbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1NewsKey(args: InferRequestType<typeof client.v1beta1.news.$get>) {
  return ['v1beta1', '/v1beta1/news', args] as const
}

export function useGetV1beta1News<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1NewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.news.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1News<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1NewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.news.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsBarsKey(
  args: InferRequestType<typeof client.v1beta1.options.bars.$get>,
) {
  return ['v1beta1', '/v1beta1/options/bars', args] as const
}

export function useGetV1beta1OptionsBars<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.bars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
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
        ? getGetV1beta1OptionsBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsBars<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.bars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
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
        ? getGetV1beta1OptionsBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsMetaConditionsTicktypeKey(
  args: InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>,
) {
  return ['v1beta1', '/v1beta1/options/meta/conditions/:ticktype', args] as const
}

export function useGetV1beta1OptionsMetaConditionsTicktype<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
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
        ? getGetV1beta1OptionsMetaConditionsTicktypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta1.options.meta.conditions[':ticktype'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsMetaConditionsTicktype<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
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
        ? getGetV1beta1OptionsMetaConditionsTicktypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta1.options.meta.conditions[':ticktype'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsMetaExchangesKey() {
  return ['v1beta1', '/v1beta1/options/meta/exchanges'] as const
}

export function useGetV1beta1OptionsMetaExchanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
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
        ? getGetV1beta1OptionsMetaExchangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.options.meta.exchanges.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsMetaExchanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
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
        ? getGetV1beta1OptionsMetaExchangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.options.meta.exchanges.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsQuotesLatestKey(
  args: InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
) {
  return ['v1beta1', '/v1beta1/options/quotes/latest', args] as const
}

export function useGetV1beta1OptionsQuotesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
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
        ? getGetV1beta1OptionsQuotesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.quotes.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsQuotesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
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
        ? getGetV1beta1OptionsQuotesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.quotes.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsSnapshotsKey(
  args: InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
) {
  return ['v1beta1', '/v1beta1/options/snapshots', args] as const
}

export function useGetV1beta1OptionsSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
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
        ? getGetV1beta1OptionsSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
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
        ? getGetV1beta1OptionsSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsSnapshotsUnderlyingSymbolKey(
  args: InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>,
) {
  return ['v1beta1', '/v1beta1/options/snapshots/:underlying_symbol', args] as const
}

export function useGetV1beta1OptionsSnapshotsUnderlyingSymbol<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
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
        ? getGetV1beta1OptionsSnapshotsUnderlyingSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta1.options.snapshots[':underlying_symbol'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsSnapshotsUnderlyingSymbol<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
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
        ? getGetV1beta1OptionsSnapshotsUnderlyingSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta1.options.snapshots[':underlying_symbol'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsTradesKey(
  args: InferRequestType<typeof client.v1beta1.options.trades.$get>,
) {
  return ['v1beta1', '/v1beta1/options/trades', args] as const
}

export function useGetV1beta1OptionsTrades<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
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
        ? getGetV1beta1OptionsTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsTrades<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
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
        ? getGetV1beta1OptionsTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1OptionsTradesLatestKey(
  args: InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
) {
  return ['v1beta1', '/v1beta1/options/trades/latest', args] as const
}

export function useGetV1beta1OptionsTradesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
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
        ? getGetV1beta1OptionsTradesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.trades.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1OptionsTradesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
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
        ? getGetV1beta1OptionsTradesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.options.trades.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ScreenerMarketTypeMoversKey(
  args: InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
) {
  return ['v1beta1', '/v1beta1/screener/:market_type/movers', args] as const
}

export function useGetV1beta1ScreenerMarketTypeMovers<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
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
        ? getGetV1beta1ScreenerMarketTypeMoversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.screener[':market_type'].movers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ScreenerMarketTypeMovers<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
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
        ? getGetV1beta1ScreenerMarketTypeMoversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.screener[':market_type'].movers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ScreenerStocksMostActivesKey(
  args: InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
) {
  return ['v1beta1', '/v1beta1/screener/stocks/most-actives', args] as const
}

export function useGetV1beta1ScreenerStocksMostActives<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
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
        ? getGetV1beta1ScreenerStocksMostActivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.screener.stocks['most-actives'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ScreenerStocksMostActives<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
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
        ? getGetV1beta1ScreenerStocksMostActivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.screener.stocks['most-actives'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocBarsKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/bars', args] as const
}

export function useGetV1beta3CryptoLocBars<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
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
        ? getGetV1beta3CryptoLocBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocBars<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
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
        ? getGetV1beta3CryptoLocBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocLatestBarsKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/bars', args] as const
}

export function useGetV1beta3CryptoLocLatestBars<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
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
        ? getGetV1beta3CryptoLocLatestBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocLatestBars<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
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
        ? getGetV1beta3CryptoLocLatestBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocLatestOrderbooksKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/orderbooks', args] as const
}

export function useGetV1beta3CryptoLocLatestOrderbooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
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
        ? getGetV1beta3CryptoLocLatestOrderbooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.orderbooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocLatestOrderbooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
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
        ? getGetV1beta3CryptoLocLatestOrderbooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.orderbooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocLatestQuotesKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/quotes', args] as const
}

export function useGetV1beta3CryptoLocLatestQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
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
        ? getGetV1beta3CryptoLocLatestQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocLatestQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
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
        ? getGetV1beta3CryptoLocLatestQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocLatestTradesKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/trades', args] as const
}

export function useGetV1beta3CryptoLocLatestTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
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
        ? getGetV1beta3CryptoLocLatestTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocLatestTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
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
        ? getGetV1beta3CryptoLocLatestTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3.crypto[':loc'].latest.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocQuotesKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/quotes', args] as const
}

export function useGetV1beta3CryptoLocQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
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
        ? getGetV1beta3CryptoLocQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
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
        ? getGetV1beta3CryptoLocQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocSnapshotsKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/snapshots', args] as const
}

export function useGetV1beta3CryptoLocSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
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
        ? getGetV1beta3CryptoLocSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
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
        ? getGetV1beta3CryptoLocSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3CryptoLocTradesKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/trades', args] as const
}

export function useGetV1beta3CryptoLocTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
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
        ? getGetV1beta3CryptoLocTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3CryptoLocTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
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
        ? getGetV1beta3CryptoLocTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3.crypto[':loc'].trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CorporateActionsKey(
  args: InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
) {
  return ['v1', '/v1/corporate-actions', args] as const
}

export function useGetV1CorporateActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
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
        ? getGetV1CorporateActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['corporate-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CorporateActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
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
        ? getGetV1CorporateActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['corporate-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolAuctionsKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/auctions', args] as const
}

export function useGetV2StocksSymbolAuctions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
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
        ? getGetV2StocksSymbolAuctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].auctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolAuctions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
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
        ? getGetV2StocksSymbolAuctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].auctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolBarsKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/bars', args] as const
}

export function useGetV2StocksSymbolBars<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
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
        ? getGetV2StocksSymbolBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolBars<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
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
        ? getGetV2StocksSymbolBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolBarsLatestKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/bars/latest', args] as const
}

export function useGetV2StocksSymbolBarsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
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
        ? getGetV2StocksSymbolBarsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].bars.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolBarsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
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
        ? getGetV2StocksSymbolBarsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].bars.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolQuotesKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/quotes', args] as const
}

export function useGetV2StocksSymbolQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
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
        ? getGetV2StocksSymbolQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
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
        ? getGetV2StocksSymbolQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolQuotesLatestKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/quotes/latest', args] as const
}

export function useGetV2StocksSymbolQuotesLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
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
        ? getGetV2StocksSymbolQuotesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.stocks[':symbol'].quotes.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolQuotesLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
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
        ? getGetV2StocksSymbolQuotesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.stocks[':symbol'].quotes.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolSnapshotKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/snapshot', args] as const
}

export function useGetV2StocksSymbolSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
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
        ? getGetV2StocksSymbolSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
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
        ? getGetV2StocksSymbolSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolTradesKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/trades', args] as const
}

export function useGetV2StocksSymbolTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
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
        ? getGetV2StocksSymbolTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
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
        ? getGetV2StocksSymbolTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks[':symbol'].trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSymbolTradesLatestKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/trades/latest', args] as const
}

export function useGetV2StocksSymbolTradesLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
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
        ? getGetV2StocksSymbolTradesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.stocks[':symbol'].trades.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSymbolTradesLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
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
        ? getGetV2StocksSymbolTradesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.stocks[':symbol'].trades.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksAuctionsKey(
  args: InferRequestType<typeof client.v2.stocks.auctions.$get>,
) {
  return ['v2', '/v2/stocks/auctions', args] as const
}

export function useGetV2StocksAuctions<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.auctions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
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
        ? getGetV2StocksAuctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.auctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksAuctions<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.auctions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
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
        ? getGetV2StocksAuctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.auctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksBarsKey(args: InferRequestType<typeof client.v2.stocks.bars.$get>) {
  return ['v2', '/v2/stocks/bars', args] as const
}

export function useGetV2StocksBars<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.bars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StocksBarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksBars<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.bars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StocksBarsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksBarsLatestKey(
  args: InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
) {
  return ['v2', '/v2/stocks/bars/latest', args] as const
}

export function useGetV2StocksBarsLatest<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
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
        ? getGetV2StocksBarsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.bars.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksBarsLatest<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
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
        ? getGetV2StocksBarsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.bars.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksMetaConditionsTicktypeKey(
  args: InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
) {
  return ['v2', '/v2/stocks/meta/conditions/:ticktype', args] as const
}

export function useGetV2StocksMetaConditionsTicktype<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
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
        ? getGetV2StocksMetaConditionsTicktypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.stocks.meta.conditions[':ticktype'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksMetaConditionsTicktype<TError = unknown>(
  args: InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
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
        ? getGetV2StocksMetaConditionsTicktypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.stocks.meta.conditions[':ticktype'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksMetaExchangesKey() {
  return ['v2', '/v2/stocks/meta/exchanges'] as const
}

export function useGetV2StocksMetaExchanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
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
        ? getGetV2StocksMetaExchangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.meta.exchanges.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksMetaExchanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
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
        ? getGetV2StocksMetaExchangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.meta.exchanges.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksQuotesKey(
  args: InferRequestType<typeof client.v2.stocks.quotes.$get>,
) {
  return ['v2', '/v2/stocks/quotes', args] as const
}

export function useGetV2StocksQuotes<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StocksQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksQuotes<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StocksQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksQuotesLatestKey(
  args: InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
) {
  return ['v2', '/v2/stocks/quotes/latest', args] as const
}

export function useGetV2StocksQuotesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
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
        ? getGetV2StocksQuotesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.quotes.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksQuotesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
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
        ? getGetV2StocksQuotesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.quotes.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksSnapshotsKey(
  args: InferRequestType<typeof client.v2.stocks.snapshots.$get>,
) {
  return ['v2', '/v2/stocks/snapshots', args] as const
}

export function useGetV2StocksSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
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
        ? getGetV2StocksSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
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
        ? getGetV2StocksSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksTradesKey(
  args: InferRequestType<typeof client.v2.stocks.trades.$get>,
) {
  return ['v2', '/v2/stocks/trades', args] as const
}

export function useGetV2StocksTrades<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StocksTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksTrades<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StocksTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StocksTradesLatestKey(
  args: InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
) {
  return ['v2', '/v2/stocks/trades/latest', args] as const
}

export function useGetV2StocksTradesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
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
        ? getGetV2StocksTradesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.trades.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StocksTradesLatest<TError = unknown>(
  args: InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
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
        ? getGetV2StocksTradesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.stocks.trades.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedBarsKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/bars', args] as const
}

export function useGetV3StocksFeedBars<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
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
        ? getGetV3StocksFeedBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedBars<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
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
        ? getGetV3StocksFeedBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedLatestBarsKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/latest/bars', args] as const
}

export function useGetV3StocksFeedLatestBars<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
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
        ? getGetV3StocksFeedLatestBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].latest.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedLatestBars<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
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
        ? getGetV3StocksFeedLatestBarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].latest.bars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedLatestQuotesKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/latest/quotes', args] as const
}

export function useGetV3StocksFeedLatestQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
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
        ? getGetV3StocksFeedLatestQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].latest.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedLatestQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
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
        ? getGetV3StocksFeedLatestQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].latest.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedLatestTradesKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/latest/trades', args] as const
}

export function useGetV3StocksFeedLatestTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
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
        ? getGetV3StocksFeedLatestTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].latest.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedLatestTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
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
        ? getGetV3StocksFeedLatestTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].latest.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedQuotesKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/quotes', args] as const
}

export function useGetV3StocksFeedQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
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
        ? getGetV3StocksFeedQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedQuotes<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
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
        ? getGetV3StocksFeedQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedSnapshotsKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/snapshots', args] as const
}

export function useGetV3StocksFeedSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
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
        ? getGetV3StocksFeedSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
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
        ? getGetV3StocksFeedSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StocksFeedTradesKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/trades', args] as const
}

export function useGetV3StocksFeedTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
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
        ? getGetV3StocksFeedTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StocksFeedTrades<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
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
        ? getGetV3StocksFeedTradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.stocks[':feed'].trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
