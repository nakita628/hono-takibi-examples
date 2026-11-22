import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2BotInsightDemographicQueryKey() {
  return ['v2', '/v2/bot/insight/demographic'] as const
}

export function getV2BotInsightDemographicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightDemographicQueryKey>
  >({
    queryKey: getV2BotInsightDemographicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.demographic.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightDemographic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightDemographicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2BotInsightDemographicQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2BotInsightDemographic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightDemographicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2BotInsightDemographicQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2BotInsightMessageDeliveryQueryKey(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
) {
  return ['v2', '/v2/bot/insight/message/delivery', args] as const
}

export function getV2BotInsightMessageDeliveryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightMessageDeliveryQueryKey>
  >({
    queryKey: getV2BotInsightMessageDeliveryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.message.delivery.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightMessageDelivery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightMessageDeliveryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotInsightMessageDeliveryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotInsightMessageDelivery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightMessageDeliveryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotInsightMessageDeliveryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotInsightFollowersQueryKey(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
) {
  return ['v2', '/v2/bot/insight/followers', args] as const
}

export function getV2BotInsightFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightFollowersQueryKey>
  >({
    queryKey: getV2BotInsightFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotInsightFollowersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotInsightFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotInsightFollowersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotInsightMessageEventQueryKey(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
) {
  return ['v2', '/v2/bot/insight/message/event', args] as const
}

export function getV2BotInsightMessageEventQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightMessageEventQueryKey>
  >({
    queryKey: getV2BotInsightMessageEventQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.message.event.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightMessageEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightMessageEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotInsightMessageEventQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotInsightMessageEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightMessageEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotInsightMessageEventQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotInsightMessageEventAggregationQueryKey(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
) {
  return ['v2', '/v2/bot/insight/message/event/aggregation', args] as const
}

export function getV2BotInsightMessageEventAggregationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightMessageEventAggregationQueryKey>
  >({
    queryKey: getV2BotInsightMessageEventAggregationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.message.event.aggregation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightMessageEventAggregation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightMessageEventAggregationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotInsightMessageEventAggregationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotInsightMessageEventAggregation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightMessageEventAggregationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotInsightMessageEventAggregationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotInsightRichmenuRichMenuIdSummaryQueryKey(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
) {
  return ['v2', '/v2/bot/insight/richmenu/:richMenuId/summary', args] as const
}

export function getV2BotInsightRichmenuRichMenuIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightRichmenuRichMenuIdSummaryQueryKey>
  >({
    queryKey: getV2BotInsightRichmenuRichMenuIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.richmenu[':richMenuId'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightRichmenuRichMenuIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightRichmenuRichMenuIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotInsightRichmenuRichMenuIdSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotInsightRichmenuRichMenuIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightRichmenuRichMenuIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotInsightRichmenuRichMenuIdSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotInsightRichmenuRichMenuIdDailyQueryKey(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
) {
  return ['v2', '/v2/bot/insight/richmenu/:richMenuId/daily', args] as const
}

export function getV2BotInsightRichmenuRichMenuIdDailyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightRichmenuRichMenuIdDailyQueryKey>
  >({
    queryKey: getV2BotInsightRichmenuRichMenuIdDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.insight.richmenu[':richMenuId'].daily.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotInsightRichmenuRichMenuIdDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightRichmenuRichMenuIdDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotInsightRichmenuRichMenuIdDailyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotInsightRichmenuRichMenuIdDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotInsightRichmenuRichMenuIdDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotInsightRichmenuRichMenuIdDailyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
