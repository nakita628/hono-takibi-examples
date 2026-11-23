import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
  >,
) {
  return ['v1', '/v1/:location:fetchMultiDailyMetricsTimeSeries', toValue(args)] as const
}

export function getV1LocationFetchMultiDailyMetricsTimeSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':location:fetchMultiDailyMetricsTimeSeries'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LocationFetchMultiDailyMetricsTimeSeries<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationFetchMultiDailyMetricsTimeSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':location:fetchMultiDailyMetricsTimeSeries'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NameGetDailyMetricsTimeSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>
  >,
) {
  return ['v1', '/v1/:name:getDailyMetricsTimeSeries', toValue(args)] as const
}

export function getV1NameGetDailyMetricsTimeSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameGetDailyMetricsTimeSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name:getDailyMetricsTimeSeries'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameGetDailyMetricsTimeSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameGetDailyMetricsTimeSeriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameGetDailyMetricsTimeSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name:getDailyMetricsTimeSeries'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentSearchkeywordsImpressionsMonthlyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
    >
  >,
) {
  return ['v1', '/v1/:parent/searchkeywords/impressions/monthly', toValue(args)] as const
}

export function getV1ParentSearchkeywordsImpressionsMonthlyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentSearchkeywordsImpressionsMonthlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].searchkeywords.impressions.monthly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentSearchkeywordsImpressionsMonthly<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1ParentSearchkeywordsImpressionsMonthlyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentSearchkeywordsImpressionsMonthlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].searchkeywords.impressions.monthly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
