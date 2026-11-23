import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBotKey() {
  return ['bot'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV2BotChannelWebhookEndpointQueryKey() {
  return ['v2', '/v2/bot/channel/webhook/endpoint'] as const
}

export function getV2BotChannelWebhookEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotChannelWebhookEndpointQueryKey>
  >({
    queryKey: getV2BotChannelWebhookEndpointQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.channel.webhook.endpoint.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotChannelWebhookEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotChannelWebhookEndpointQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotChannelWebhookEndpointQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutV2BotChannelWebhookEndpointMutationKey() {
  return ['v2', '/v2/bot/channel/webhook/endpoint', 'PUT'] as const
}

export function getPutV2BotChannelWebhookEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.channel.webhook.endpoint.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2BotChannelWebhookEndpointMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.channel.webhook.endpoint.$put>) {
      return parseResponse(client.v2.bot.channel.webhook.endpoint.$put(args, options))
    },
  })
}

export function createPutV2BotChannelWebhookEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.channel.webhook.endpoint.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2BotChannelWebhookEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotChannelWebhookTestMutationKey() {
  return ['v2', '/v2/bot/channel/webhook/test', 'POST'] as const
}

export function getPostV2BotChannelWebhookTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.webhook.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.channel.webhook.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotChannelWebhookTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.channel.webhook.test.$post>) {
      return parseResponse(client.v2.bot.channel.webhook.test.$post(args, options))
    },
  })
}

export function createPostV2BotChannelWebhookTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.channel.webhook.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.channel.webhook.test.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotChannelWebhookTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotMessageMessageIdContentQueryKey(
  args: InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
) {
  return ['v2', '/v2/bot/message/:messageId/content', args] as const
}

export function getV2BotMessageMessageIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageMessageIdContentQueryKey>
  >({
    queryKey: getV2BotMessageMessageIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message[':messageId'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageMessageIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageMessageIdContentQueryKey>
        >
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
      ...getV2BotMessageMessageIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageMessageIdContentPreviewQueryKey(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content/preview', args] as const
}

export function getV2BotMessageMessageIdContentPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageMessageIdContentPreviewQueryKey>
  >({
    queryKey: getV2BotMessageMessageIdContentPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message[':messageId'].content.preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageMessageIdContentPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageMessageIdContentPreviewQueryKey>
        >
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
      ...getV2BotMessageMessageIdContentPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageMessageIdContentTranscodingQueryKey(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content/transcoding', args] as const
}

export function getV2BotMessageMessageIdContentTranscodingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2BotMessageMessageIdContentTranscodingQueryKey>
  >({
    queryKey: getV2BotMessageMessageIdContentTranscodingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message[':messageId'].content.transcoding.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageMessageIdContentTranscoding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2BotMessageMessageIdContentTranscodingQueryKey>
        >
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
      ...getV2BotMessageMessageIdContentTranscodingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotMessageReplyMutationKey() {
  return ['v2', '/v2/bot/message/reply', 'POST'] as const
}

export function getPostV2BotMessageReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.reply.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.reply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageReplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.reply.$post>) {
      return parseResponse(client.v2.bot.message.reply.$post(args, options))
    },
  })
}

export function createPostV2BotMessageReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.reply.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.reply.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageReplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessagePushMutationKey() {
  return ['v2', '/v2/bot/message/push', 'POST'] as const
}

export function getPostV2BotMessagePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.push.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessagePushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.push.$post>) {
      return parseResponse(client.v2.bot.message.push.$post(args, options))
    },
  })
}

export function createPostV2BotMessagePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.push.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessagePushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageMulticastMutationKey() {
  return ['v2', '/v2/bot/message/multicast', 'POST'] as const
}

export function getPostV2BotMessageMulticastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.multicast.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.multicast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageMulticastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.multicast.$post>) {
      return parseResponse(client.v2.bot.message.multicast.$post(args, options))
    },
  })
}

export function createPostV2BotMessageMulticast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.multicast.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.multicast.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageMulticastMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageNarrowcastMutationKey() {
  return ['v2', '/v2/bot/message/narrowcast', 'POST'] as const
}

export function getPostV2BotMessageNarrowcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.narrowcast.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.narrowcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageNarrowcastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.narrowcast.$post>) {
      return parseResponse(client.v2.bot.message.narrowcast.$post(args, options))
    },
  })
}

export function createPostV2BotMessageNarrowcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.narrowcast.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.narrowcast.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageNarrowcastMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotMessageProgressNarrowcastQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
) {
  return ['v2', '/v2/bot/message/progress/narrowcast', args] as const
}

export function getV2BotMessageProgressNarrowcastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageProgressNarrowcastQueryKey>
  >({
    queryKey: getV2BotMessageProgressNarrowcastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.progress.narrowcast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageProgressNarrowcast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageProgressNarrowcastQueryKey>
        >
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
      ...getV2BotMessageProgressNarrowcastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotMessageBroadcastMutationKey() {
  return ['v2', '/v2/bot/message/broadcast', 'POST'] as const
}

export function getPostV2BotMessageBroadcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.broadcast.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.broadcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageBroadcastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.broadcast.$post>) {
      return parseResponse(client.v2.bot.message.broadcast.$post(args, options))
    },
  })
}

export function createPostV2BotMessageBroadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.broadcast.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.broadcast.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageBroadcastMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotMessageQuotaQueryKey() {
  return ['v2', '/v2/bot/message/quota'] as const
}

export function getV2BotMessageQuotaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageQuotaQueryKey>
  >({
    queryKey: getV2BotMessageQuotaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.quota.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageQuota<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageQuotaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotMessageQuotaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2BotMessageQuotaConsumptionQueryKey() {
  return ['v2', '/v2/bot/message/quota/consumption'] as const
}

export function getV2BotMessageQuotaConsumptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageQuotaConsumptionQueryKey>
  >({
    queryKey: getV2BotMessageQuotaConsumptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.quota.consumption.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageQuotaConsumption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageQuotaConsumptionQueryKey>
        >
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
      ...getV2BotMessageQuotaConsumptionQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageDeliveryReplyQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/reply', args] as const
}

export function getV2BotMessageDeliveryReplyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryReplyQueryKey>
  >({
    queryKey: getV2BotMessageDeliveryReplyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.delivery.reply.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageDeliveryReply<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageDeliveryReplyQueryKey>
        >
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
      ...getV2BotMessageDeliveryReplyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageDeliveryPushQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/push', args] as const
}

export function getV2BotMessageDeliveryPushQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryPushQueryKey>
  >({
    queryKey: getV2BotMessageDeliveryPushQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.delivery.push.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageDeliveryPush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.delivery.push.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageDeliveryPushQueryKey>
        >
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
      ...getV2BotMessageDeliveryPushQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageDeliveryMulticastQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/multicast', args] as const
}

export function getV2BotMessageDeliveryMulticastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryMulticastQueryKey>
  >({
    queryKey: getV2BotMessageDeliveryMulticastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.delivery.multicast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageDeliveryMulticast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageDeliveryMulticastQueryKey>
        >
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
      ...getV2BotMessageDeliveryMulticastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageDeliveryBroadcastQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/broadcast', args] as const
}

export function getV2BotMessageDeliveryBroadcastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryBroadcastQueryKey>
  >({
    queryKey: getV2BotMessageDeliveryBroadcastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.delivery.broadcast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageDeliveryBroadcast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageDeliveryBroadcastQueryKey>
        >
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
      ...getV2BotMessageDeliveryBroadcastQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotMessageValidateReplyMutationKey() {
  return ['v2', '/v2/bot/message/validate/reply', 'POST'] as const
}

export function getPostV2BotMessageValidateReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.validate.reply.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.validate.reply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageValidateReplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.validate.reply.$post>) {
      return parseResponse(client.v2.bot.message.validate.reply.$post(args, options))
    },
  })
}

export function createPostV2BotMessageValidateReply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.validate.reply.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.validate.reply.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageValidateReplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageValidatePushMutationKey() {
  return ['v2', '/v2/bot/message/validate/push', 'POST'] as const
}

export function getPostV2BotMessageValidatePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.validate.push.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.validate.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageValidatePushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.validate.push.$post>) {
      return parseResponse(client.v2.bot.message.validate.push.$post(args, options))
    },
  })
}

export function createPostV2BotMessageValidatePush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.validate.push.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.validate.push.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageValidatePushMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageValidateMulticastMutationKey() {
  return ['v2', '/v2/bot/message/validate/multicast', 'POST'] as const
}

export function getPostV2BotMessageValidateMulticastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.validate.multicast.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.validate.multicast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageValidateMulticastMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.bot.message.validate.multicast.$post>,
    ) {
      return parseResponse(client.v2.bot.message.validate.multicast.$post(args, options))
    },
  })
}

export function createPostV2BotMessageValidateMulticast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.validate.multicast.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.validate.multicast.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageValidateMulticastMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageValidateNarrowcastMutationKey() {
  return ['v2', '/v2/bot/message/validate/narrowcast', 'POST'] as const
}

export function getPostV2BotMessageValidateNarrowcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.validate.narrowcast.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.validate.narrowcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageValidateNarrowcastMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.bot.message.validate.narrowcast.$post>,
    ) {
      return parseResponse(client.v2.bot.message.validate.narrowcast.$post(args, options))
    },
  })
}

export function createPostV2BotMessageValidateNarrowcast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.validate.narrowcast.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.validate.narrowcast.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageValidateNarrowcastMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageValidateBroadcastMutationKey() {
  return ['v2', '/v2/bot/message/validate/broadcast', 'POST'] as const
}

export function getPostV2BotMessageValidateBroadcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.validate.broadcast.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.validate.broadcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageValidateBroadcastMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.bot.message.validate.broadcast.$post>,
    ) {
      return parseResponse(client.v2.bot.message.validate.broadcast.$post(args, options))
    },
  })
}

export function createPostV2BotMessageValidateBroadcast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.validate.broadcast.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.validate.broadcast.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageValidateBroadcastMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotMessageAggregationInfoQueryKey() {
  return ['v2', '/v2/bot/message/aggregation/info'] as const
}

export function getV2BotMessageAggregationInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageAggregationInfoQueryKey>
  >({
    queryKey: getV2BotMessageAggregationInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.aggregation.info.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageAggregationInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageAggregationInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotMessageAggregationInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2BotMessageAggregationListQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
) {
  return ['v2', '/v2/bot/message/aggregation/list', args] as const
}

export function getV2BotMessageAggregationListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageAggregationListQueryKey>
  >({
    queryKey: getV2BotMessageAggregationListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.aggregation.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageAggregationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageAggregationListQueryKey>
        >
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
      ...getV2BotMessageAggregationListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotProfileUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
) {
  return ['v2', '/v2/bot/profile/:userId', args] as const
}

export function getV2BotProfileUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotProfileUserIdQueryKey>
  >({
    queryKey: getV2BotProfileUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.profile[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotProfileUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotProfileUserIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotProfileUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2BotFollowersIdsQueryKey(
  args: InferRequestType<typeof client.v2.bot.followers.ids.$get>,
) {
  return ['v2', '/v2/bot/followers/ids', args] as const
}

export function getV2BotFollowersIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.bot.followers.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotFollowersIdsQueryKey>
  >({
    queryKey: getV2BotFollowersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.followers.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2BotFollowersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.followers.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotFollowersIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotFollowersIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2BotInfoQueryKey() {
  return ['v2', '/v2/bot/info'] as const
}

export function getV2BotInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BotInfoQueryKey>
  >({
    queryKey: getV2BotInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2BotInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2BotGroupGroupIdMemberUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/member/:userId', args] as const
}

export function getV2BotGroupGroupIdMemberUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdMemberUserIdQueryKey>
  >({
    queryKey: getV2BotGroupGroupIdMemberUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.group[':groupId'].member[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotGroupGroupIdMemberUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotGroupGroupIdMemberUserIdQueryKey>
        >
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
      ...getV2BotGroupGroupIdMemberUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotRoomRoomIdMemberUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
) {
  return ['v2', '/v2/bot/room/:roomId/member/:userId', args] as const
}

export function getV2BotRoomRoomIdMemberUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRoomRoomIdMemberUserIdQueryKey>
  >({
    queryKey: getV2BotRoomRoomIdMemberUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.room[':roomId'].member[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRoomRoomIdMemberUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRoomRoomIdMemberUserIdQueryKey>
        >
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
      ...getV2BotRoomRoomIdMemberUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotGroupGroupIdMembersIdsQueryKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/members/ids', args] as const
}

export function getV2BotGroupGroupIdMembersIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdMembersIdsQueryKey>
  >({
    queryKey: getV2BotGroupGroupIdMembersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.group[':groupId'].members.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotGroupGroupIdMembersIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotGroupGroupIdMembersIdsQueryKey>
        >
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
      ...getV2BotGroupGroupIdMembersIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotRoomRoomIdMembersIdsQueryKey(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
) {
  return ['v2', '/v2/bot/room/:roomId/members/ids', args] as const
}

export function getV2BotRoomRoomIdMembersIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRoomRoomIdMembersIdsQueryKey>
  >({
    queryKey: getV2BotRoomRoomIdMembersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.room[':roomId'].members.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRoomRoomIdMembersIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRoomRoomIdMembersIdsQueryKey>
        >
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
      ...getV2BotRoomRoomIdMembersIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotGroupGroupIdLeaveMutationKey() {
  return ['v2', '/v2/bot/group/:groupId/leave', 'POST'] as const
}

export function getPostV2BotGroupGroupIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotGroupGroupIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>,
    ) {
      return parseResponse(client.v2.bot.group[':groupId'].leave.$post(args, options))
    },
  })
}

export function createPostV2BotGroupGroupIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.group)[':groupId']['leave']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotGroupGroupIdLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRoomRoomIdLeaveMutationKey() {
  return ['v2', '/v2/bot/room/:roomId/leave', 'POST'] as const
}

export function getPostV2BotRoomRoomIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRoomRoomIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>,
    ) {
      return parseResponse(client.v2.bot.room[':roomId'].leave.$post(args, options))
    },
  })
}

export function createPostV2BotRoomRoomIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.room)[':roomId']['leave']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRoomRoomIdLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotGroupGroupIdSummaryQueryKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/summary', args] as const
}

export function getV2BotGroupGroupIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdSummaryQueryKey>
  >({
    queryKey: getV2BotGroupGroupIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.group[':groupId'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotGroupGroupIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotGroupGroupIdSummaryQueryKey>
        >
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
      ...getV2BotGroupGroupIdSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotGroupGroupIdMembersCountQueryKey(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>,
) {
  return ['v2', '/v2/bot/group/:groupId/members/count', args] as const
}

export function getV2BotGroupGroupIdMembersCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdMembersCountQueryKey>
  >({
    queryKey: getV2BotGroupGroupIdMembersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.group[':groupId'].members.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotGroupGroupIdMembersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bot.group)[':groupId']['members']['count']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotGroupGroupIdMembersCountQueryKey>
        >
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
      ...getV2BotGroupGroupIdMembersCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotRoomRoomIdMembersCountQueryKey(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
) {
  return ['v2', '/v2/bot/room/:roomId/members/count', args] as const
}

export function getV2BotRoomRoomIdMembersCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRoomRoomIdMembersCountQueryKey>
  >({
    queryKey: getV2BotRoomRoomIdMembersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.room[':roomId'].members.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRoomRoomIdMembersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRoomRoomIdMembersCountQueryKey>
        >
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
      ...getV2BotRoomRoomIdMembersCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuMutationKey() {
  return ['v2', '/v2/bot/richmenu', 'POST'] as const
}

export function getPostV2BotRichmenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.$post>) {
      return parseResponse(client.v2.bot.richmenu.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuValidateMutationKey() {
  return ['v2', '/v2/bot/richmenu/validate', 'POST'] as const
}

export function getPostV2BotRichmenuValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.validate.$post>) {
      return parseResponse(client.v2.bot.richmenu.validate.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.validate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.validate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotRichmenuRichMenuIdContentQueryKey(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
) {
  return ['v2', '/v2/bot/richmenu/:richMenuId/content', args] as const
}

export function getV2BotRichmenuRichMenuIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuRichMenuIdContentQueryKey>
  >({
    queryKey: getV2BotRichmenuRichMenuIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.richmenu[':richMenuId'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRichmenuRichMenuIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRichmenuRichMenuIdContentQueryKey>
        >
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
      ...getV2BotRichmenuRichMenuIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuRichMenuIdContentMutationKey() {
  return ['v2', '/v2/bot/richmenu/:richMenuId/content', 'POST'] as const
}

export function getPostV2BotRichmenuRichMenuIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuRichMenuIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>,
    ) {
      return parseResponse(client.v2.bot.richmenu[':richMenuId'].content.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuRichMenuIdContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuRichMenuIdContentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotRichmenuRichMenuIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
) {
  return ['v2', '/v2/bot/richmenu/:richMenuId', args] as const
}

export function getV2BotRichmenuRichMenuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuRichMenuIdQueryKey>
  >({
    queryKey: getV2BotRichmenuRichMenuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.richmenu[':richMenuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRichmenuRichMenuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRichmenuRichMenuIdQueryKey>
        >
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
      ...getV2BotRichmenuRichMenuIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2BotRichmenuRichMenuIdMutationKey() {
  return ['v2', '/v2/bot/richmenu/:richMenuId', 'DELETE'] as const
}

export function getDeleteV2BotRichmenuRichMenuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BotRichmenuRichMenuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>,
    ) {
      return parseResponse(client.v2.bot.richmenu[':richMenuId'].$delete(args, options))
    },
  })
}

export function createDeleteV2BotRichmenuRichMenuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2BotRichmenuRichMenuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotRichmenuListQueryKey() {
  return ['v2', '/v2/bot/richmenu/list'] as const
}

export function getV2BotRichmenuListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuListQueryKey>
  >({
    queryKey: getV2BotRichmenuListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.richmenu.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRichmenuList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRichmenuListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotRichmenuListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV2BotUserAllRichmenuRichMenuIdMutationKey() {
  return ['v2', '/v2/bot/user/all/richmenu/:richMenuId', 'POST'] as const
}

export function getPostV2BotUserAllRichmenuRichMenuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotUserAllRichmenuRichMenuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>,
    ) {
      return parseResponse(client.v2.bot.user.all.richmenu[':richMenuId'].$post(args, options))
    },
  })
}

export function createPostV2BotUserAllRichmenuRichMenuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.user.all.richmenu)[':richMenuId']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotUserAllRichmenuRichMenuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotUserAllRichmenuQueryKey() {
  return ['v2', '/v2/bot/user/all/richmenu'] as const
}

export function getV2BotUserAllRichmenuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotUserAllRichmenuQueryKey>
  >({
    queryKey: getV2BotUserAllRichmenuQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.user.all.richmenu.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotUserAllRichmenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotUserAllRichmenuQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotUserAllRichmenuQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV2BotUserAllRichmenuMutationKey() {
  return ['v2', '/v2/bot/user/all/richmenu', 'DELETE'] as const
}

export function getDeleteV2BotUserAllRichmenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BotUserAllRichmenuMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.bot.user.all.richmenu.$delete(undefined, options))
    },
  })
}

export function createDeleteV2BotUserAllRichmenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$delete>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2BotUserAllRichmenuMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuAliasMutationKey() {
  return ['v2', '/v2/bot/richmenu/alias', 'POST'] as const
}

export function getPostV2BotRichmenuAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.alias.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuAliasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.alias.$post>) {
      return parseResponse(client.v2.bot.richmenu.alias.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.alias.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuAliasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotRichmenuAliasRichMenuAliasIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
) {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', args] as const
}

export function getV2BotRichmenuAliasRichMenuAliasIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuAliasRichMenuAliasIdQueryKey>
  >({
    queryKey: getV2BotRichmenuAliasRichMenuAliasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.richmenu.alias[':richMenuAliasId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRichmenuAliasRichMenuAliasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRichmenuAliasRichMenuAliasIdQueryKey>
        >
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
      ...getV2BotRichmenuAliasRichMenuAliasIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuAliasRichMenuAliasIdMutationKey() {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', 'POST'] as const
}

export function getPostV2BotRichmenuAliasRichMenuAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuAliasRichMenuAliasIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>,
    ) {
      return parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuAliasRichMenuAliasId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuAliasRichMenuAliasIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV2BotRichmenuAliasRichMenuAliasIdMutationKey() {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', 'DELETE'] as const
}

export function getDeleteV2BotRichmenuAliasRichMenuAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BotRichmenuAliasRichMenuAliasIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>,
    ) {
      return parseResponse(client.v2.bot.richmenu.alias[':richMenuAliasId'].$delete(args, options))
    },
  })
}

export function createDeleteV2BotRichmenuAliasRichMenuAliasId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2BotRichmenuAliasRichMenuAliasIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotRichmenuAliasListQueryKey() {
  return ['v2', '/v2/bot/richmenu/alias/list'] as const
}

export function getV2BotRichmenuAliasListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuAliasListQueryKey>
  >({
    queryKey: getV2BotRichmenuAliasListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.richmenu.alias.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRichmenuAliasList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRichmenuAliasListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotRichmenuAliasListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2BotUserUserIdRichmenuQueryKey(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
) {
  return ['v2', '/v2/bot/user/:userId/richmenu', args] as const
}

export function getV2BotUserUserIdRichmenuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotUserUserIdRichmenuQueryKey>
  >({
    queryKey: getV2BotUserUserIdRichmenuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.user[':userId'].richmenu.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotUserUserIdRichmenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotUserUserIdRichmenuQueryKey>
        >
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
      ...getV2BotUserUserIdRichmenuQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2BotUserUserIdRichmenuMutationKey() {
  return ['v2', '/v2/bot/user/:userId/richmenu', 'DELETE'] as const
}

export function getDeleteV2BotUserUserIdRichmenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BotUserUserIdRichmenuMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>,
    ) {
      return parseResponse(client.v2.bot.user[':userId'].richmenu.$delete(args, options))
    },
  })
}

export function createDeleteV2BotUserUserIdRichmenu<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2BotUserUserIdRichmenuMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotUserUserIdRichmenuRichMenuIdMutationKey() {
  return ['v2', '/v2/bot/user/:userId/richmenu/:richMenuId', 'POST'] as const
}

export function getPostV2BotUserUserIdRichmenuRichMenuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotUserUserIdRichmenuRichMenuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.bot.user[':userId'].richmenu[':richMenuId'].$post(args, options),
      )
    },
  })
}

export function createPostV2BotUserUserIdRichmenuRichMenuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.bot.user)[':userId']['richmenu'][':richMenuId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotUserUserIdRichmenuRichMenuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuBulkLinkMutationKey() {
  return ['v2', '/v2/bot/richmenu/bulk/link', 'POST'] as const
}

export function getPostV2BotRichmenuBulkLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.bulk.link.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.bulk.link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuBulkLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.bulk.link.$post>) {
      return parseResponse(client.v2.bot.richmenu.bulk.link.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuBulkLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.bulk.link.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.bulk.link.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuBulkLinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuBulkUnlinkMutationKey() {
  return ['v2', '/v2/bot/richmenu/bulk/unlink', 'POST'] as const
}

export function getPostV2BotRichmenuBulkUnlinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.bulk.unlink.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.bulk.unlink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuBulkUnlinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.bulk.unlink.$post>) {
      return parseResponse(client.v2.bot.richmenu.bulk.unlink.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuBulkUnlink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.bulk.unlink.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.bulk.unlink.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuBulkUnlinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuBatchMutationKey() {
  return ['v2', '/v2/bot/richmenu/batch', 'POST'] as const
}

export function getPostV2BotRichmenuBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.batch.$post>) {
      return parseResponse(client.v2.bot.richmenu.batch.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotRichmenuValidateBatchMutationKey() {
  return ['v2', '/v2/bot/richmenu/validate/batch', 'POST'] as const
}

export function getPostV2BotRichmenuValidateBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.richmenu.validate.batch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.richmenu.validate.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotRichmenuValidateBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.richmenu.validate.batch.$post>) {
      return parseResponse(client.v2.bot.richmenu.validate.batch.$post(args, options))
    },
  })
}

export function createPostV2BotRichmenuValidateBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.validate.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.validate.batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotRichmenuValidateBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotRichmenuProgressBatchQueryKey(
  args: InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
) {
  return ['v2', '/v2/bot/richmenu/progress/batch', args] as const
}

export function getV2BotRichmenuProgressBatchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuProgressBatchQueryKey>
  >({
    queryKey: getV2BotRichmenuProgressBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.richmenu.progress.batch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotRichmenuProgressBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotRichmenuProgressBatchQueryKey>
        >
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
      ...getV2BotRichmenuProgressBatchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2BotUserUserIdLinkTokenMutationKey() {
  return ['v2', '/v2/bot/user/:userId/linkToken', 'POST'] as const
}

export function getPostV2BotUserUserIdLinkTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotUserUserIdLinkTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>,
    ) {
      return parseResponse(client.v2.bot.user[':userId'].linkToken.$post(args, options))
    },
  })
}

export function createPostV2BotUserUserIdLinkToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.user)[':userId']['linkToken']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotUserUserIdLinkTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessageMarkAsReadMutationKey() {
  return ['v2', '/v2/bot/message/markAsRead', 'POST'] as const
}

export function getPostV2BotMessageMarkAsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.markAsRead.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.markAsRead.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessageMarkAsReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.message.markAsRead.$post>) {
      return parseResponse(client.v2.bot.message.markAsRead.$post(args, options))
    },
  })
}

export function createPostV2BotMessageMarkAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.markAsRead.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.markAsRead.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessageMarkAsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBotPnpPushMutationKey() {
  return ['bot', '/bot/pnp/push', 'POST'] as const
}

export function getPostBotPnpPushMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot.pnp.push.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bot.pnp.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBotPnpPushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bot.pnp.push.$post>) {
      return parseResponse(client.bot.pnp.push.$post(args, options))
    },
  })
}

export function createPostBotPnpPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot.pnp.push.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bot.pnp.push.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBotPnpPushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotMessagePnpTemplatedPushMutationKey() {
  return ['v2', '/v2/bot/message/pnp/templated/push', 'POST'] as const
}

export function getPostV2BotMessagePnpTemplatedPushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.pnp.templated.push.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.message.pnp.templated.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotMessagePnpTemplatedPushMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.bot.message.pnp.templated.push.$post>,
    ) {
      return parseResponse(client.v2.bot.message.pnp.templated.push.$post(args, options))
    },
  })
}

export function createPostV2BotMessagePnpTemplatedPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.pnp.templated.push.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.pnp.templated.push.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotMessagePnpTemplatedPushMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotMessageDeliveryPnpQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/pnp', args] as const
}

export function getV2BotMessageDeliveryPnpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryPnpQueryKey>
  >({
    queryKey: getV2BotMessageDeliveryPnpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.delivery.pnp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageDeliveryPnp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageDeliveryPnpQueryKey>
        >
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
      ...getV2BotMessageDeliveryPnpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMessageDeliveryPnpTemplatedQueryKey(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
) {
  return ['v2', '/v2/bot/message/delivery/pnp/templated', args] as const
}

export function getV2BotMessageDeliveryPnpTemplatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryPnpTemplatedQueryKey>
  >({
    queryKey: getV2BotMessageDeliveryPnpTemplatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.message.delivery.pnp.templated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMessageDeliveryPnpTemplated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMessageDeliveryPnpTemplatedQueryKey>
        >
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
      ...getV2BotMessageDeliveryPnpTemplatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMembershipSubscriptionUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
) {
  return ['v2', '/v2/bot/membership/subscription/:userId', args] as const
}

export function getV2BotMembershipSubscriptionUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMembershipSubscriptionUserIdQueryKey>
  >({
    queryKey: getV2BotMembershipSubscriptionUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.membership.subscription[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMembershipSubscriptionUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMembershipSubscriptionUserIdQueryKey>
        >
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
      ...getV2BotMembershipSubscriptionUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotMembershipListQueryKey() {
  return ['v2', '/v2/bot/membership/list'] as const
}

export function getV2BotMembershipListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMembershipListQueryKey>
  >({
    queryKey: getV2BotMembershipListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.membership.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMembershipList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMembershipListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotMembershipListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2BotMembershipMembershipIdUsersIdsQueryKey(
  args: InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
) {
  return ['v2', '/v2/bot/membership/:membershipId/users/ids', args] as const
}

export function getV2BotMembershipMembershipIdUsersIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMembershipMembershipIdUsersIdsQueryKey>
  >({
    queryKey: getV2BotMembershipMembershipIdUsersIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.membership[':membershipId'].users.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotMembershipMembershipIdUsersIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotMembershipMembershipIdUsersIdsQueryKey>
        >
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
      ...getV2BotMembershipMembershipIdUsersIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2BotCouponQueryKey(args: InferRequestType<typeof client.v2.bot.coupon.$get>) {
  return ['v2', '/v2/bot/coupon', args] as const
}

export function getV2BotCouponQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.bot.coupon.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotCouponQueryKey>
  >({
    queryKey: getV2BotCouponQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.coupon.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2BotCoupon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.coupon.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotCouponQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotCouponQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2BotCouponMutationKey() {
  return ['v2', '/v2/bot/coupon', 'POST'] as const
}

export function getPostV2BotCouponMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.bot.coupon.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotCouponMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.coupon.$post>) {
      return parseResponse(client.v2.bot.coupon.$post(args, options))
    },
  })
}

export function createPostV2BotCoupon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.bot.coupon.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotCouponMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BotCouponCouponIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
) {
  return ['v2', '/v2/bot/coupon/:couponId', args] as const
}

export function getV2BotCouponCouponIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotCouponCouponIdQueryKey>
  >({
    queryKey: getV2BotCouponCouponIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.coupon[':couponId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BotCouponCouponId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotCouponCouponIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BotCouponCouponIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV2BotCouponCouponIdCloseMutationKey() {
  return ['v2', '/v2/bot/coupon/:couponId/close', 'PUT'] as const
}

export function getPutV2BotCouponCouponIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2BotCouponCouponIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>,
    ) {
      return parseResponse(client.v2.bot.coupon[':couponId'].close.$put(args, options))
    },
  })
}

export function createPutV2BotCouponCouponIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['close']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2BotCouponCouponIdCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotChatLoadingStartMutationKey() {
  return ['v2', '/v2/bot/chat/loading/start', 'POST'] as const
}

export function getPostV2BotChatLoadingStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.chat.loading.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.chat.loading.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotChatLoadingStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.chat.loading.start.$post>) {
      return parseResponse(client.v2.bot.chat.loading.start.$post(args, options))
    },
  })
}

export function createPostV2BotChatLoadingStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.chat.loading.start.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.chat.loading.start.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotChatLoadingStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2BotChatMarkAsReadMutationKey() {
  return ['v2', '/v2/bot/chat/markAsRead', 'POST'] as const
}

export function getPostV2BotChatMarkAsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.chat.markAsRead.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.chat.markAsRead.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotChatMarkAsReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.chat.markAsRead.$post>) {
      return parseResponse(client.v2.bot.chat.markAsRead.$post(args, options))
    },
  })
}

export function createPostV2BotChatMarkAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.chat.markAsRead.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.chat.markAsRead.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BotChatMarkAsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
