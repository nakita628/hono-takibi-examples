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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2BotInsightDemographicQueryKey() {
  return ['v2', '/v2/bot/insight/demographic'] as const
}

export function getV2BotInsightDemographicQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotInsightDemographicQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.demographic.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotInsightDemographicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightDemographicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotInsightDemographicQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.demographic.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInsightMessageDeliveryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>>,
) {
  return ['v2', '/v2/bot/insight/message/delivery', toValue(args)] as const
}

export function getV2BotInsightMessageDeliveryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotInsightMessageDeliveryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.message.delivery.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotInsightMessageDelivery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotInsightMessageDeliveryQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightMessageDeliveryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotInsightMessageDeliveryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.message.delivery.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInsightFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.followers.$get>>,
) {
  return ['v2', '/v2/bot/insight/followers', toValue(args)] as const
}

export function getV2BotInsightFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.followers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotInsightFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotInsightFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.followers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
            >
          >,
          ReturnType<typeof getV2BotInsightFollowersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotInsightFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInsightMessageEventQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.message.event.$get>>,
) {
  return ['v2', '/v2/bot/insight/message/event', toValue(args)] as const
}

export function getV2BotInsightMessageEventQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.message.event.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotInsightMessageEventQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.message.event.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotInsightMessageEvent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.insight.message.event.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotInsightMessageEventQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightMessageEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotInsightMessageEventQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.message.event.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInsightMessageEventAggregationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>
  >,
) {
  return ['v2', '/v2/bot/insight/message/event/aggregation', toValue(args)] as const
}

export function getV2BotInsightMessageEventAggregationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotInsightMessageEventAggregationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.message.event.aggregation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotInsightMessageEventAggregationQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightMessageEventAggregationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotInsightMessageEventAggregationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.message.event.aggregation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInsightRichmenuRichMenuIdSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
  >,
) {
  return ['v2', '/v2/bot/insight/richmenu/:richMenuId/summary', toValue(args)] as const
}

export function getV2BotInsightRichmenuRichMenuIdSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotInsightRichmenuRichMenuIdSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.richmenu[':richMenuId'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
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
                    (typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']
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
                    (typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BotInsightRichmenuRichMenuIdSummaryQueryKey>
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
            ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightRichmenuRichMenuIdSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotInsightRichmenuRichMenuIdSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.richmenu[':richMenuId'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInsightRichmenuRichMenuIdDailyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
  >,
) {
  return ['v2', '/v2/bot/insight/richmenu/:richMenuId/daily', toValue(args)] as const
}

export function getV2BotInsightRichmenuRichMenuIdDailyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotInsightRichmenuRichMenuIdDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.insight.richmenu[':richMenuId'].daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
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
                    (typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']
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
                    (typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BotInsightRichmenuRichMenuIdDailyQueryKey>
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
            ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotInsightRichmenuRichMenuIdDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotInsightRichmenuRichMenuIdDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.insight.richmenu[':richMenuId'].daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
