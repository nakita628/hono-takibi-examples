import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBotKey() {
  return ['bot'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2BotChannelWebhookEndpointKey() {
  return ['v2', '/v2/bot/channel/webhook/endpoint'] as const
}

export function useGetV2BotChannelWebhookEndpoint<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
        >
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
        ? getGetV2BotChannelWebhookEndpointKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.channel.webhook.endpoint.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotChannelWebhookEndpoint<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
        >
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
        ? getGetV2BotChannelWebhookEndpointKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.channel.webhook.endpoint.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2BotChannelWebhookEndpointKey() {
  return ['v2', '/v2/bot/channel/webhook/endpoint', 'PUT'] as const
}

export function usePutV2BotChannelWebhookEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.channel.webhook.endpoint.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2BotChannelWebhookEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.channel.webhook.endpoint.$put> },
      ) => parseResponse(client.v2.bot.channel.webhook.endpoint.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotChannelWebhookTestKey() {
  return ['v2', '/v2/bot/channel/webhook/test', 'POST'] as const
}

export function usePostV2BotChannelWebhookTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.webhook.test.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.channel.webhook.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotChannelWebhookTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.channel.webhook.test.$post> },
      ) => parseResponse(client.v2.bot.channel.webhook.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotMessageMessageIdContentKey(
  args: InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
) {
  return ['v2', '/v2/bot/message/:messageId/content', args] as const
}

export function useGetV2BotMessageMessageIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
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
        ? getGetV2BotMessageMessageIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message[':messageId'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageMessageIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
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
        ? getGetV2BotMessageMessageIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message[':messageId'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageMessageIdContentPreviewKey(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content/preview', args] as const
}

export function useGetV2BotMessageMessageIdContentPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
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
        ? getGetV2BotMessageMessageIdContentPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.message[':messageId'].content.preview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageMessageIdContentPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
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
        ? getGetV2BotMessageMessageIdContentPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.message[':messageId'].content.preview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageMessageIdContentTranscodingKey(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content/transcoding', args] as const
}

export function useGetV2BotMessageMessageIdContentTranscoding<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
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
        ? getGetV2BotMessageMessageIdContentTranscodingKey(args)
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
                (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
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
          client.v2.bot.message[':messageId'].content.transcoding.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageMessageIdContentTranscoding<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
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
        ? getGetV2BotMessageMessageIdContentTranscodingKey(args)
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
                (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
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
          client.v2.bot.message[':messageId'].content.transcoding.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotMessageReplyKey() {
  return ['v2', '/v2/bot/message/reply', 'POST'] as const
}

export function usePostV2BotMessageReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.reply.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.reply.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.reply.$post> },
      ) => parseResponse(client.v2.bot.message.reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessagePushKey() {
  return ['v2', '/v2/bot/message/push', 'POST'] as const
}

export function usePostV2BotMessagePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.push.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.push.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessagePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.bot.message.push.$post> }) =>
        parseResponse(client.v2.bot.message.push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageMulticastKey() {
  return ['v2', '/v2/bot/message/multicast', 'POST'] as const
}

export function usePostV2BotMessageMulticast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.multicast.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.multicast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageMulticastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.multicast.$post> },
      ) => parseResponse(client.v2.bot.message.multicast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageNarrowcastKey() {
  return ['v2', '/v2/bot/message/narrowcast', 'POST'] as const
}

export function usePostV2BotMessageNarrowcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.narrowcast.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.narrowcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageNarrowcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.narrowcast.$post> },
      ) => parseResponse(client.v2.bot.message.narrowcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotMessageProgressNarrowcastKey(
  args: InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
) {
  return ['v2', '/v2/bot/message/progress/narrowcast', args] as const
}

export function useGetV2BotMessageProgressNarrowcast<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
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
        ? getGetV2BotMessageProgressNarrowcastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.progress.narrowcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageProgressNarrowcast<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
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
        ? getGetV2BotMessageProgressNarrowcastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.progress.narrowcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotMessageBroadcastKey() {
  return ['v2', '/v2/bot/message/broadcast', 'POST'] as const
}

export function usePostV2BotMessageBroadcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.broadcast.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.broadcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageBroadcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.broadcast.$post> },
      ) => parseResponse(client.v2.bot.message.broadcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotMessageQuotaKey() {
  return ['v2', '/v2/bot/message/quota'] as const
}

export function useGetV2BotMessageQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotMessageQuotaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotMessageQuotaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageQuotaConsumptionKey() {
  return ['v2', '/v2/bot/message/quota/consumption'] as const
}

export function useGetV2BotMessageQuotaConsumption<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
        >
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
        ? getGetV2BotMessageQuotaConsumptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.quota.consumption.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageQuotaConsumption<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
        >
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
        ? getGetV2BotMessageQuotaConsumptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.quota.consumption.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageDeliveryReplyKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/reply', args] as const
}

export function useGetV2BotMessageDeliveryReply<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
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
        ? getGetV2BotMessageDeliveryReplyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.reply.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageDeliveryReply<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
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
        ? getGetV2BotMessageDeliveryReplyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.reply.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageDeliveryPushKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/push', args] as const
}

export function useGetV2BotMessageDeliveryPush<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
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
        ? getGetV2BotMessageDeliveryPushKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.push.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageDeliveryPush<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
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
        ? getGetV2BotMessageDeliveryPushKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.push.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageDeliveryMulticastKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/multicast', args] as const
}

export function useGetV2BotMessageDeliveryMulticast<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
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
        ? getGetV2BotMessageDeliveryMulticastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.multicast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageDeliveryMulticast<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
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
        ? getGetV2BotMessageDeliveryMulticastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.multicast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageDeliveryBroadcastKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/broadcast', args] as const
}

export function useGetV2BotMessageDeliveryBroadcast<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
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
        ? getGetV2BotMessageDeliveryBroadcastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.broadcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageDeliveryBroadcast<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
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
        ? getGetV2BotMessageDeliveryBroadcastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.broadcast.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotMessageValidateReplyKey() {
  return ['v2', '/v2/bot/message/validate/reply', 'POST'] as const
}

export function usePostV2BotMessageValidateReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.validate.reply.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.validate.reply.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageValidateReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.validate.reply.$post> },
      ) => parseResponse(client.v2.bot.message.validate.reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageValidatePushKey() {
  return ['v2', '/v2/bot/message/validate/push', 'POST'] as const
}

export function usePostV2BotMessageValidatePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.validate.push.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.validate.push.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageValidatePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.validate.push.$post> },
      ) => parseResponse(client.v2.bot.message.validate.push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageValidateMulticastKey() {
  return ['v2', '/v2/bot/message/validate/multicast', 'POST'] as const
}

export function usePostV2BotMessageValidateMulticast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.validate.multicast.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.validate.multicast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageValidateMulticastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.validate.multicast.$post> },
      ) => parseResponse(client.v2.bot.message.validate.multicast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageValidateNarrowcastKey() {
  return ['v2', '/v2/bot/message/validate/narrowcast', 'POST'] as const
}

export function usePostV2BotMessageValidateNarrowcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.validate.narrowcast.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.validate.narrowcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageValidateNarrowcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.validate.narrowcast.$post> },
      ) => parseResponse(client.v2.bot.message.validate.narrowcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageValidateBroadcastKey() {
  return ['v2', '/v2/bot/message/validate/broadcast', 'POST'] as const
}

export function usePostV2BotMessageValidateBroadcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.validate.broadcast.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.validate.broadcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageValidateBroadcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.validate.broadcast.$post> },
      ) => parseResponse(client.v2.bot.message.validate.broadcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotMessageAggregationInfoKey() {
  return ['v2', '/v2/bot/message/aggregation/info'] as const
}

export function useGetV2BotMessageAggregationInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
        >
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
        ? getGetV2BotMessageAggregationInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.aggregation.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageAggregationInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
        >
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
        ? getGetV2BotMessageAggregationInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.aggregation.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageAggregationListKey(
  args: InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
) {
  return ['v2', '/v2/bot/message/aggregation/list', args] as const
}

export function useGetV2BotMessageAggregationList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
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
        ? getGetV2BotMessageAggregationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.aggregation.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageAggregationList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
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
        ? getGetV2BotMessageAggregationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.aggregation.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotProfileUserIdKey(
  args: InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
) {
  return ['v2', '/v2/bot/profile/:userId', args] as const
}

export function useGetV2BotProfileUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
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
        ? getGetV2BotProfileUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.profile[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotProfileUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
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
        ? getGetV2BotProfileUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.profile[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotFollowersIdsKey(
  args: InferRequestType<typeof client.v2.bot.followers.ids.$get>,
) {
  return ['v2', '/v2/bot/followers/ids', args] as const
}

export function useGetV2BotFollowersIds<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.followers.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
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
        ? getGetV2BotFollowersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.followers.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotFollowersIds<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.followers.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
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
        ? getGetV2BotFollowersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.followers.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotInfoKey() {
  return ['v2', '/v2/bot/info'] as const
}

export function useGetV2BotInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotGroupGroupIdMemberUserIdKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/member/:userId', args] as const
}

export function useGetV2BotGroupGroupIdMemberUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
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
        ? getGetV2BotGroupGroupIdMemberUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.group[':groupId'].member[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotGroupGroupIdMemberUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
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
        ? getGetV2BotGroupGroupIdMemberUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.group[':groupId'].member[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotRoomRoomIdMemberUserIdKey(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
) {
  return ['v2', '/v2/bot/room/:roomId/member/:userId', args] as const
}

export function useGetV2BotRoomRoomIdMemberUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
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
        ? getGetV2BotRoomRoomIdMemberUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.room[':roomId'].member[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRoomRoomIdMemberUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
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
        ? getGetV2BotRoomRoomIdMemberUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.room[':roomId'].member[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotGroupGroupIdMembersIdsKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/members/ids', args] as const
}

export function useGetV2BotGroupGroupIdMembersIds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
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
        ? getGetV2BotGroupGroupIdMembersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.group[':groupId'].members.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotGroupGroupIdMembersIds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
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
        ? getGetV2BotGroupGroupIdMembersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.group[':groupId'].members.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotRoomRoomIdMembersIdsKey(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
) {
  return ['v2', '/v2/bot/room/:roomId/members/ids', args] as const
}

export function useGetV2BotRoomRoomIdMembersIds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
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
        ? getGetV2BotRoomRoomIdMembersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.room[':roomId'].members.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRoomRoomIdMembersIds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
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
        ? getGetV2BotRoomRoomIdMembersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.room[':roomId'].members.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotGroupGroupIdLeaveKey() {
  return ['v2', '/v2/bot/group/:groupId/leave', 'POST'] as const
}

export function usePostV2BotGroupGroupIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotGroupGroupIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']> },
      ) => parseResponse(client.v2.bot.group[':groupId'].leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRoomRoomIdLeaveKey() {
  return ['v2', '/v2/bot/room/:roomId/leave', 'POST'] as const
}

export function usePostV2BotRoomRoomIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRoomRoomIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']> },
      ) => parseResponse(client.v2.bot.room[':roomId'].leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotGroupGroupIdSummaryKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/summary', args] as const
}

export function useGetV2BotGroupGroupIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
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
        ? getGetV2BotGroupGroupIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.group[':groupId'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotGroupGroupIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
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
        ? getGetV2BotGroupGroupIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.group[':groupId'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotGroupGroupIdMembersCountKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/members/count', args] as const
}

export function useGetV2BotGroupGroupIdMembersCount<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
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
        ? getGetV2BotGroupGroupIdMembersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.group[':groupId'].members.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotGroupGroupIdMembersCount<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
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
        ? getGetV2BotGroupGroupIdMembersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.group[':groupId'].members.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotRoomRoomIdMembersCountKey(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
) {
  return ['v2', '/v2/bot/room/:roomId/members/count', args] as const
}

export function useGetV2BotRoomRoomIdMembersCount<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
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
        ? getGetV2BotRoomRoomIdMembersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.room[':roomId'].members.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRoomRoomIdMembersCount<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
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
        ? getGetV2BotRoomRoomIdMembersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.room[':roomId'].members.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotRichmenuKey() {
  return ['v2', '/v2/bot/richmenu', 'POST'] as const
}

export function usePostV2BotRichmenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.$post> }) =>
        parseResponse(client.v2.bot.richmenu.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRichmenuValidateKey() {
  return ['v2', '/v2/bot/richmenu/validate', 'POST'] as const
}

export function usePostV2BotRichmenuValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.validate.$post> },
      ) => parseResponse(client.v2.bot.richmenu.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotRichmenuRichMenuIdContentKey(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
) {
  return ['v2', '/v2/bot/richmenu/:richMenuId/content', args] as const
}

export function useGetV2BotRichmenuRichMenuIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
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
        ? getGetV2BotRichmenuRichMenuIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.richmenu[':richMenuId'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRichmenuRichMenuIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
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
        ? getGetV2BotRichmenuRichMenuIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.richmenu[':richMenuId'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotRichmenuRichMenuIdContentKey() {
  return ['v2', '/v2/bot/richmenu/:richMenuId/content', 'POST'] as const
}

export function usePostV2BotRichmenuRichMenuIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuRichMenuIdContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>
        },
      ) => parseResponse(client.v2.bot.richmenu[':richMenuId'].content.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotRichmenuRichMenuIdKey(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
) {
  return ['v2', '/v2/bot/richmenu/:richMenuId', args] as const
}

export function useGetV2BotRichmenuRichMenuId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
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
        ? getGetV2BotRichmenuRichMenuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu[':richMenuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRichmenuRichMenuId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
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
        ? getGetV2BotRichmenuRichMenuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu[':richMenuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2BotRichmenuRichMenuIdKey() {
  return ['v2', '/v2/bot/richmenu/:richMenuId', 'DELETE'] as const
}

export function useDeleteV2BotRichmenuRichMenuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2BotRichmenuRichMenuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']> },
      ) => parseResponse(client.v2.bot.richmenu[':richMenuId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotRichmenuListKey() {
  return ['v2', '/v2/bot/richmenu/list'] as const
}

export function useGetV2BotRichmenuList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotRichmenuListKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRichmenuList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotRichmenuListKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotUserAllRichmenuRichMenuIdKey() {
  return ['v2', '/v2/bot/user/all/richmenu/:richMenuId', 'POST'] as const
}

export function usePostV2BotUserAllRichmenuRichMenuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotUserAllRichmenuRichMenuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>
        },
      ) => parseResponse(client.v2.bot.user.all.richmenu[':richMenuId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotUserAllRichmenuKey() {
  return ['v2', '/v2/bot/user/all/richmenu'] as const
}

export function useGetV2BotUserAllRichmenu<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
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
        ? getGetV2BotUserAllRichmenuKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.user.all.richmenu.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotUserAllRichmenu<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
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
        ? getGetV2BotUserAllRichmenuKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.user.all.richmenu.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2BotUserAllRichmenuKey() {
  return ['v2', '/v2/bot/user/all/richmenu', 'DELETE'] as const
}

export function useDeleteV2BotUserAllRichmenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$delete>>>
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
  const swrKey = customKey ?? getDeleteV2BotUserAllRichmenuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v2.bot.user.all.richmenu.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRichmenuAliasKey() {
  return ['v2', '/v2/bot/richmenu/alias', 'POST'] as const
}

export function usePostV2BotRichmenuAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.alias.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.alias.$post> },
      ) => parseResponse(client.v2.bot.richmenu.alias.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotRichmenuAliasRichMenuAliasIdKey(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
) {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', args] as const
}

export function useGetV2BotRichmenuAliasRichMenuAliasId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
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
        ? getGetV2BotRichmenuAliasRichMenuAliasIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRichmenuAliasRichMenuAliasId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
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
        ? getGetV2BotRichmenuAliasRichMenuAliasIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotRichmenuAliasRichMenuAliasIdKey() {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', 'POST'] as const
}

export function usePostV2BotRichmenuAliasRichMenuAliasId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuAliasRichMenuAliasIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>
        },
      ) =>
        parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2BotRichmenuAliasRichMenuAliasIdKey() {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', 'DELETE'] as const
}

export function useDeleteV2BotRichmenuAliasRichMenuAliasId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2BotRichmenuAliasRichMenuAliasIdKey()
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
            (typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']
          >
        },
      ) =>
        parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotRichmenuAliasListKey() {
  return ['v2', '/v2/bot/richmenu/alias/list'] as const
}

export function useGetV2BotRichmenuAliasList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
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
        ? getGetV2BotRichmenuAliasListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu.alias.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRichmenuAliasList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
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
        ? getGetV2BotRichmenuAliasListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu.alias.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotUserUserIdRichmenuKey(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
) {
  return ['v2', '/v2/bot/user/:userId/richmenu', args] as const
}

export function useGetV2BotUserUserIdRichmenu<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
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
        ? getGetV2BotUserUserIdRichmenuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.user[':userId'].richmenu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotUserUserIdRichmenu<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
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
        ? getGetV2BotUserUserIdRichmenuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.user[':userId'].richmenu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2BotUserUserIdRichmenuKey() {
  return ['v2', '/v2/bot/user/:userId/richmenu', 'DELETE'] as const
}

export function useDeleteV2BotUserUserIdRichmenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2BotUserUserIdRichmenuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']> },
      ) => parseResponse(client.v2.bot.user[':userId'].richmenu.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotUserUserIdRichmenuRichMenuIdKey() {
  return ['v2', '/v2/bot/user/:userId/richmenu/:richMenuId', 'POST'] as const
}

export function usePostV2BotUserUserIdRichmenuRichMenuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotUserUserIdRichmenuRichMenuIdKey()
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
            (typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.bot.user[':userId'].richmenu[':richMenuId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRichmenuBulkLinkKey() {
  return ['v2', '/v2/bot/richmenu/bulk/link', 'POST'] as const
}

export function usePostV2BotRichmenuBulkLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.bulk.link.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.bulk.link.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuBulkLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.bulk.link.$post> },
      ) => parseResponse(client.v2.bot.richmenu.bulk.link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRichmenuBulkUnlinkKey() {
  return ['v2', '/v2/bot/richmenu/bulk/unlink', 'POST'] as const
}

export function usePostV2BotRichmenuBulkUnlink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.bulk.unlink.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.bulk.unlink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuBulkUnlinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.bulk.unlink.$post> },
      ) => parseResponse(client.v2.bot.richmenu.bulk.unlink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRichmenuBatchKey() {
  return ['v2', '/v2/bot/richmenu/batch', 'POST'] as const
}

export function usePostV2BotRichmenuBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.batch.$post> },
      ) => parseResponse(client.v2.bot.richmenu.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotRichmenuValidateBatchKey() {
  return ['v2', '/v2/bot/richmenu/validate/batch', 'POST'] as const
}

export function usePostV2BotRichmenuValidateBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.richmenu.validate.batch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.richmenu.validate.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotRichmenuValidateBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.richmenu.validate.batch.$post> },
      ) => parseResponse(client.v2.bot.richmenu.validate.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotRichmenuProgressBatchKey(
  args: InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
) {
  return ['v2', '/v2/bot/richmenu/progress/batch', args] as const
}

export function useGetV2BotRichmenuProgressBatch<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
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
        ? getGetV2BotRichmenuProgressBatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu.progress.batch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotRichmenuProgressBatch<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
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
        ? getGetV2BotRichmenuProgressBatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.richmenu.progress.batch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotUserUserIdLinkTokenKey() {
  return ['v2', '/v2/bot/user/:userId/linkToken', 'POST'] as const
}

export function usePostV2BotUserUserIdLinkToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotUserUserIdLinkTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']> },
      ) => parseResponse(client.v2.bot.user[':userId'].linkToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessageMarkAsReadKey() {
  return ['v2', '/v2/bot/message/markAsRead', 'POST'] as const
}

export function usePostV2BotMessageMarkAsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.markAsRead.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.markAsRead.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessageMarkAsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.markAsRead.$post> },
      ) => parseResponse(client.v2.bot.message.markAsRead.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBotPnpPushKey() {
  return ['bot', '/bot/pnp/push', 'POST'] as const
}

export function usePostBotPnpPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot.pnp.push.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bot.pnp.push.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotPnpPushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bot.pnp.push.$post> }) =>
        parseResponse(client.bot.pnp.push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotMessagePnpTemplatedPushKey() {
  return ['v2', '/v2/bot/message/pnp/templated/push', 'POST'] as const
}

export function usePostV2BotMessagePnpTemplatedPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.pnp.templated.push.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.message.pnp.templated.push.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotMessagePnpTemplatedPushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.message.pnp.templated.push.$post> },
      ) => parseResponse(client.v2.bot.message.pnp.templated.push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotMessageDeliveryPnpKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/pnp', args] as const
}

export function useGetV2BotMessageDeliveryPnp<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
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
        ? getGetV2BotMessageDeliveryPnpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.pnp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageDeliveryPnp<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
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
        ? getGetV2BotMessageDeliveryPnpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.message.delivery.pnp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMessageDeliveryPnpTemplatedKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/pnp/templated', args] as const
}

export function useGetV2BotMessageDeliveryPnpTemplated<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
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
        ? getGetV2BotMessageDeliveryPnpTemplatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.delivery.pnp.templated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMessageDeliveryPnpTemplated<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
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
        ? getGetV2BotMessageDeliveryPnpTemplatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.message.delivery.pnp.templated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMembershipSubscriptionUserIdKey(
  args: InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
) {
  return ['v2', '/v2/bot/membership/subscription/:userId', args] as const
}

export function useGetV2BotMembershipSubscriptionUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
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
        ? getGetV2BotMembershipSubscriptionUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.membership.subscription[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMembershipSubscriptionUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
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
        ? getGetV2BotMembershipSubscriptionUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.membership.subscription[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMembershipListKey() {
  return ['v2', '/v2/bot/membership/list'] as const
}

export function useGetV2BotMembershipList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
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
        ? getGetV2BotMembershipListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.membership.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMembershipList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
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
        ? getGetV2BotMembershipListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.membership.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotMembershipMembershipIdUsersIdsKey(
  args: InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
) {
  return ['v2', '/v2/bot/membership/:membershipId/users/ids', args] as const
}

export function useGetV2BotMembershipMembershipIdUsersIds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
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
        ? getGetV2BotMembershipMembershipIdUsersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.membership[':membershipId'].users.ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotMembershipMembershipIdUsersIds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
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
        ? getGetV2BotMembershipMembershipIdUsersIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.membership[':membershipId'].users.ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotCouponKey(args: InferRequestType<typeof client.v2.bot.coupon.$get>) {
  return ['v2', '/v2/bot/coupon', args] as const
}

export function useGetV2BotCoupon<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.coupon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotCouponKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.coupon.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotCoupon<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.coupon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotCouponKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.coupon.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BotCouponKey() {
  return ['v2', '/v2/bot/coupon', 'POST'] as const
}

export function usePostV2BotCoupon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.coupon.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotCouponKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.bot.coupon.$post> }) =>
        parseResponse(client.v2.bot.coupon.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotCouponCouponIdKey(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
) {
  return ['v2', '/v2/bot/coupon/:couponId', args] as const
}

export function useGetV2BotCouponCouponId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
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
        ? getGetV2BotCouponCouponIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.coupon[':couponId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotCouponCouponId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
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
        ? getGetV2BotCouponCouponIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.coupon[':couponId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2BotCouponCouponIdCloseKey() {
  return ['v2', '/v2/bot/coupon/:couponId/close', 'PUT'] as const
}

export function usePutV2BotCouponCouponIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2BotCouponCouponIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']> },
      ) => parseResponse(client.v2.bot.coupon[':couponId'].close.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotChatLoadingStartKey() {
  return ['v2', '/v2/bot/chat/loading/start', 'POST'] as const
}

export function usePostV2BotChatLoadingStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.chat.loading.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.chat.loading.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotChatLoadingStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.chat.loading.start.$post> },
      ) => parseResponse(client.v2.bot.chat.loading.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotChatMarkAsReadKey() {
  return ['v2', '/v2/bot/chat/markAsRead', 'POST'] as const
}

export function usePostV2BotChatMarkAsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.chat.markAsRead.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.chat.markAsRead.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotChatMarkAsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.chat.markAsRead.$post> },
      ) => parseResponse(client.v2.bot.chat.markAsRead.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
