import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1LocationFetchMultiDailyMetricsTimeSeriesKey(
  args: InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>,
) {
  return ['v1', '/v1/:location:fetchMultiDailyMetricsTimeSeries', args] as const
}

export function useGetV1LocationFetchMultiDailyMetricsTimeSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
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
        ? getGetV1LocationFetchMultiDailyMetricsTimeSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':location:fetchMultiDailyMetricsTimeSeries'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LocationFetchMultiDailyMetricsTimeSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
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
        ? getGetV1LocationFetchMultiDailyMetricsTimeSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':location:fetchMultiDailyMetricsTimeSeries'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1NameGetDailyMetricsTimeSeriesKey(
  args: InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
) {
  return ['v1', '/v1/:name:getDailyMetricsTimeSeries', args] as const
}

export function useGetV1NameGetDailyMetricsTimeSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
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
        ? getGetV1NameGetDailyMetricsTimeSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':name:getDailyMetricsTimeSeries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NameGetDailyMetricsTimeSeries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
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
        ? getGetV1NameGetDailyMetricsTimeSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':name:getDailyMetricsTimeSeries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentSearchkeywordsImpressionsMonthlyKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
) {
  return ['v1', '/v1/:parent/searchkeywords/impressions/monthly', args] as const
}

export function useGetV1ParentSearchkeywordsImpressionsMonthly<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
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
        ? getGetV1ParentSearchkeywordsImpressionsMonthlyKey(args)
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
                (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
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
          client.v1[':parent'].searchkeywords.impressions.monthly.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentSearchkeywordsImpressionsMonthly<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
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
        ? getGetV1ParentSearchkeywordsImpressionsMonthlyKey(args)
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
                (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
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
          client.v1[':parent'].searchkeywords.impressions.monthly.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
