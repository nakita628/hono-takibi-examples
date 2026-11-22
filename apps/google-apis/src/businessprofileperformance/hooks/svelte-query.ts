import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>,
) {
  return ['v1', '/v1/:location:fetchMultiDailyMetricsTimeSeries', args] as const
}

export function getV1LocationFetchMultiDailyMetricsTimeSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey>
  >({
    queryKey: getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':location:fetchMultiDailyMetricsTimeSeries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1LocationFetchMultiDailyMetricsTimeSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LocationFetchMultiDailyMetricsTimeSeriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1NameGetDailyMetricsTimeSeriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
) {
  return ['v1', '/v1/:name:getDailyMetricsTimeSeries', args] as const
}

export function getV1NameGetDailyMetricsTimeSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameGetDailyMetricsTimeSeriesQueryKey>
  >({
    queryKey: getV1NameGetDailyMetricsTimeSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name:getDailyMetricsTimeSeries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameGetDailyMetricsTimeSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameGetDailyMetricsTimeSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NameGetDailyMetricsTimeSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentSearchkeywordsImpressionsMonthlyQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
) {
  return ['v1', '/v1/:parent/searchkeywords/impressions/monthly', args] as const
}

export function getV1ParentSearchkeywordsImpressionsMonthlyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ParentSearchkeywordsImpressionsMonthlyQueryKey>
  >({
    queryKey: getV1ParentSearchkeywordsImpressionsMonthlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].searchkeywords.impressions.monthly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentSearchkeywordsImpressionsMonthly<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ParentSearchkeywordsImpressionsMonthlyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentSearchkeywordsImpressionsMonthlyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
