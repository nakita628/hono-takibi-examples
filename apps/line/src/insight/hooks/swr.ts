import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2BotInsightDemographicKey() {
  return ['v2', '/v2/bot/insight/demographic'] as const
}

export function useGetV2BotInsightDemographic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
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
        ? getGetV2BotInsightDemographicKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.demographic.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightDemographic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
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
        ? getGetV2BotInsightDemographicKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.demographic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.demographic.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInsightMessageDeliveryKey(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
) {
  return ['v2', '/v2/bot/insight/message/delivery', args] as const
}

export function useGetV2BotInsightMessageDelivery<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
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
        ? getGetV2BotInsightMessageDeliveryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.message.delivery.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightMessageDelivery<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
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
        ? getGetV2BotInsightMessageDeliveryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.delivery.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.message.delivery.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInsightFollowersKey(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
) {
  return ['v2', '/v2/bot/insight/followers', args] as const
}

export function useGetV2BotInsightFollowers<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
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
        ? getGetV2BotInsightFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightFollowers<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
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
        ? getGetV2BotInsightFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.followers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInsightMessageEventKey(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
) {
  return ['v2', '/v2/bot/insight/message/event', args] as const
}

export function useGetV2BotInsightMessageEvent<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
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
        ? getGetV2BotInsightMessageEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.message.event.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightMessageEvent<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
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
        ? getGetV2BotInsightMessageEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.insight.message.event.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.insight.message.event.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInsightMessageEventAggregationKey(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
) {
  return ['v2', '/v2/bot/insight/message/event/aggregation', args] as const
}

export function useGetV2BotInsightMessageEventAggregation<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
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
        ? getGetV2BotInsightMessageEventAggregationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.insight.message.event.aggregation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightMessageEventAggregation<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
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
        ? getGetV2BotInsightMessageEventAggregationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.insight.message.event.aggregation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.insight.message.event.aggregation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInsightRichmenuRichMenuIdSummaryKey(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
) {
  return ['v2', '/v2/bot/insight/richmenu/:richMenuId/summary', args] as const
}

export function useGetV2BotInsightRichmenuRichMenuIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
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
        ? getGetV2BotInsightRichmenuRichMenuIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.insight.richmenu[':richMenuId'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightRichmenuRichMenuIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
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
        ? getGetV2BotInsightRichmenuRichMenuIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.insight.richmenu[':richMenuId'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInsightRichmenuRichMenuIdDailyKey(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
) {
  return ['v2', '/v2/bot/insight/richmenu/:richMenuId/daily', args] as const
}

export function useGetV2BotInsightRichmenuRichMenuIdDaily<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
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
        ? getGetV2BotInsightRichmenuRichMenuIdDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.insight.richmenu[':richMenuId'].daily.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInsightRichmenuRichMenuIdDaily<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
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
        ? getGetV2BotInsightRichmenuRichMenuIdDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.insight.richmenu[':richMenuId'].daily.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
