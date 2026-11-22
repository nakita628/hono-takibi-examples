import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getV2BotChannelWebhookEndpointQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotChannelWebhookEndpointQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.channel.webhook.endpoint.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotChannelWebhookEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>>
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
                Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotChannelWebhookEndpointQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.channel.webhook.endpoint.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotChannelWebhookEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotChannelWebhookEndpointQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.channel.webhook.endpoint.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2BotChannelWebhookEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2BotChannelWebhookEndpointMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotChannelWebhookTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotChannelWebhookTestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotMessageMessageIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content', toValue(args)] as const
}

export function getV2BotMessageMessageIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageMessageIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message[':messageId'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageMessageIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageMessageIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageMessageIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageMessageIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message[':messageId'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageMessageIdContentPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content/preview', toValue(args)] as const
}

export function getV2BotMessageMessageIdContentPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageMessageIdContentPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message[':messageId'].content.preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageMessageIdContentPreview<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
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
                    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
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
                    (typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BotMessageMessageIdContentPreviewQueryKey>
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
            ReturnType<(typeof client.v2.bot.message)[':messageId']['content']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageMessageIdContentPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageMessageIdContentPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message[':messageId'].content.preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageMessageIdContentTranscodingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']>
  >,
) {
  return ['v2', '/v2/bot/message/:messageId/content/transcoding', toValue(args)] as const
}

export function getV2BotMessageMessageIdContentTranscodingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageMessageIdContentTranscodingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message[':messageId'].content.transcoding.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageMessageIdContentTranscoding<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']>
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
                    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
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
                    (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BotMessageMessageIdContentTranscodingQueryKey>
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
              (typeof client.v2.bot.message)[':messageId']['content']['transcoding']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageMessageIdContentTranscodingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageMessageIdContentTranscodingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message[':messageId'].content.transcoding.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotMessageReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.reply.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.reply.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageReplyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessagePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.message.push.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessagePushMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageMulticast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageMulticastMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageNarrowcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageNarrowcastMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotMessageProgressNarrowcastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>>,
) {
  return ['v2', '/v2/bot/message/progress/narrowcast', toValue(args)] as const
}

export function getV2BotMessageProgressNarrowcastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageProgressNarrowcastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.progress.narrowcast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageProgressNarrowcast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.progress.narrowcast.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageProgressNarrowcastQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.progress.narrowcast.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageProgressNarrowcastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageProgressNarrowcastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.progress.narrowcast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotMessageBroadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageBroadcastMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotMessageQuotaQueryKey() {
  return ['v2', '/v2/bot/message/quota'] as const
}

export function getV2BotMessageQuotaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotMessageQuotaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.quota.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageQuota<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>
            >
          >,
          ReturnType<typeof getV2BotMessageQuotaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotMessageQuotaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.quota.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageQuotaConsumptionQueryKey() {
  return ['v2', '/v2/bot/message/quota/consumption'] as const
}

export function getV2BotMessageQuotaConsumptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotMessageQuotaConsumptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.quota.consumption.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageQuotaConsumption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>>
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
                Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageQuotaConsumptionQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.quota.consumption.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageQuotaConsumptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotMessageQuotaConsumptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.quota.consumption.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageDeliveryReplyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>>,
) {
  return ['v2', '/v2/bot/message/delivery/reply', toValue(args)] as const
}

export function getV2BotMessageDeliveryReplyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageDeliveryReplyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.delivery.reply.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageDeliveryReply<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.reply.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageDeliveryReplyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.reply.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryReplyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageDeliveryReplyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.delivery.reply.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageDeliveryPushQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.push.$get>>,
) {
  return ['v2', '/v2/bot/message/delivery/push', toValue(args)] as const
}

export function getV2BotMessageDeliveryPushQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.push.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageDeliveryPushQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.delivery.push.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageDeliveryPush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.push.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageDeliveryPushQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.push.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryPushQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageDeliveryPushQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.delivery.push.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageDeliveryMulticastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>>,
) {
  return ['v2', '/v2/bot/message/delivery/multicast', toValue(args)] as const
}

export function getV2BotMessageDeliveryMulticastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageDeliveryMulticastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.delivery.multicast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageDeliveryMulticast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.multicast.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageDeliveryMulticastQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.delivery.multicast.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryMulticastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageDeliveryMulticastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.delivery.multicast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageDeliveryBroadcastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>>,
) {
  return ['v2', '/v2/bot/message/delivery/broadcast', toValue(args)] as const
}

export function getV2BotMessageDeliveryBroadcastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageDeliveryBroadcastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.delivery.broadcast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageDeliveryBroadcast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.broadcast.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageDeliveryBroadcastQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.delivery.broadcast.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryBroadcastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageDeliveryBroadcastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.delivery.broadcast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotMessageValidateReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageValidateReplyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageValidatePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageValidatePushMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageValidateMulticast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageValidateMulticastMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageValidateNarrowcast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageValidateNarrowcastMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageValidateBroadcast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageValidateBroadcastMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotMessageAggregationInfoQueryKey() {
  return ['v2', '/v2/bot/message/aggregation/info'] as const
}

export function getV2BotMessageAggregationInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotMessageAggregationInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.aggregation.info.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageAggregationInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>>
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
                Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageAggregationInfoQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.aggregation.info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageAggregationInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotMessageAggregationInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.aggregation.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageAggregationListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>>,
) {
  return ['v2', '/v2/bot/message/aggregation/list', toValue(args)] as const
}

export function getV2BotMessageAggregationListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageAggregationListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.aggregation.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageAggregationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.aggregation.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageAggregationListQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.aggregation.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageAggregationListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageAggregationListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.aggregation.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotProfileUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>>,
) {
  return ['v2', '/v2/bot/profile/:userId', toValue(args)] as const
}

export function getV2BotProfileUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotProfileUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.profile[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotProfileUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.profile)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BotProfileUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.profile)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotProfileUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotProfileUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.profile[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotFollowersIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.followers.ids.$get>>,
) {
  return ['v2', '/v2/bot/followers/ids', toValue(args)] as const
}

export function getV2BotFollowersIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.followers.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotFollowersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.followers.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotFollowersIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.followers.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>
            >
          >,
          ReturnType<typeof getV2BotFollowersIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.followers.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotFollowersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotFollowersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.followers.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotInfoQueryKey() {
  return ['v2', '/v2/bot/info'] as const
}

export function getV2BotInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2BotInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>
          >,
          ReturnType<typeof getV2BotInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BotInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotGroupGroupIdMemberUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
  >,
) {
  return ['v2', '/v2/bot/group/:groupId/member/:userId', toValue(args)] as const
}

export function getV2BotGroupGroupIdMemberUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotGroupGroupIdMemberUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.group[':groupId'].member[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotGroupGroupIdMemberUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotGroupGroupIdMemberUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['member'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdMemberUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotGroupGroupIdMemberUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.group[':groupId'].member[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotRoomRoomIdMemberUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>
  >,
) {
  return ['v2', '/v2/bot/room/:roomId/member/:userId', toValue(args)] as const
}

export function getV2BotRoomRoomIdMemberUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRoomRoomIdMemberUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.room[':roomId'].member[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRoomRoomIdMemberUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotRoomRoomIdMemberUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['member'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRoomRoomIdMemberUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRoomRoomIdMemberUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.room[':roomId'].member[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotGroupGroupIdMembersIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>
  >,
) {
  return ['v2', '/v2/bot/group/:groupId/members/ids', toValue(args)] as const
}

export function getV2BotGroupGroupIdMembersIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotGroupGroupIdMembersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.group[':groupId'].members.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotGroupGroupIdMembersIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotGroupGroupIdMembersIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdMembersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotGroupGroupIdMembersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.group[':groupId'].members.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotRoomRoomIdMembersIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>
  >,
) {
  return ['v2', '/v2/bot/room/:roomId/members/ids', toValue(args)] as const
}

export function getV2BotRoomRoomIdMembersIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRoomRoomIdMembersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.room[':roomId'].members.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRoomRoomIdMembersIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotRoomRoomIdMembersIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRoomRoomIdMembersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRoomRoomIdMembersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.room[':roomId'].members.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotGroupGroupIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotGroupGroupIdLeaveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRoomRoomIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRoomRoomIdLeaveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotGroupGroupIdSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>
  >,
) {
  return ['v2', '/v2/bot/group/:groupId/summary', toValue(args)] as const
}

export function getV2BotGroupGroupIdSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotGroupGroupIdSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.group[':groupId'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotGroupGroupIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BotGroupGroupIdSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotGroupGroupIdSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.group[':groupId'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotGroupGroupIdMembersCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
  >,
) {
  return ['v2', '/v2/bot/group/:groupId/members/count', toValue(args)] as const
}

export function getV2BotGroupGroupIdMembersCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotGroupGroupIdMembersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.group[':groupId'].members.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotGroupGroupIdMembersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotGroupGroupIdMembersCountQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.group)[':groupId']['members']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotGroupGroupIdMembersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotGroupGroupIdMembersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.group[':groupId'].members.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotRoomRoomIdMembersCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>
  >,
) {
  return ['v2', '/v2/bot/room/:roomId/members/count', toValue(args)] as const
}

export function getV2BotRoomRoomIdMembersCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRoomRoomIdMembersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.room[':roomId'].members.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRoomRoomIdMembersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotRoomRoomIdMembersCountQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.room)[':roomId']['members']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRoomRoomIdMembersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRoomRoomIdMembersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.room[':roomId'].members.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotRichmenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuValidateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotRichmenuRichMenuIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>
  >,
) {
  return ['v2', '/v2/bot/richmenu/:richMenuId/content', toValue(args)] as const
}

export function getV2BotRichmenuRichMenuIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRichmenuRichMenuIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.richmenu[':richMenuId'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRichmenuRichMenuIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotRichmenuRichMenuIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuRichMenuIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRichmenuRichMenuIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.richmenu[':richMenuId'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuRichMenuIdContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuRichMenuIdContentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotRichmenuRichMenuIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>,
) {
  return ['v2', '/v2/bot/richmenu/:richMenuId', toValue(args)] as const
}

export function getV2BotRichmenuRichMenuIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRichmenuRichMenuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.richmenu[':richMenuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRichmenuRichMenuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BotRichmenuRichMenuIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.richmenu)[':richMenuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuRichMenuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRichmenuRichMenuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.richmenu[':richMenuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2BotRichmenuRichMenuId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2BotRichmenuRichMenuIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotRichmenuListQueryKey() {
  return ['v2', '/v2/bot/richmenu/list'] as const
}

export function getV2BotRichmenuListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotRichmenuListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.richmenu.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRichmenuList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>
            >
          >,
          ReturnType<typeof getV2BotRichmenuListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotRichmenuListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.richmenu.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotUserAllRichmenuRichMenuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotUserAllRichmenuRichMenuIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotUserAllRichmenuQueryKey() {
  return ['v2', '/v2/bot/user/all/richmenu'] as const
}

export function getV2BotUserAllRichmenuQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotUserAllRichmenuQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.user.all.richmenu.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotUserAllRichmenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
            >
          >,
          ReturnType<typeof getV2BotUserAllRichmenuQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.user.all.richmenu.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotUserAllRichmenuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotUserAllRichmenuQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.user.all.richmenu.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2BotUserAllRichmenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2BotUserAllRichmenuMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.alias.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuAliasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotRichmenuAliasRichMenuAliasIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>
  >,
) {
  return ['v2', '/v2/bot/richmenu/alias/:richMenuAliasId', toValue(args)] as const
}

export function getV2BotRichmenuAliasRichMenuAliasIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRichmenuAliasRichMenuAliasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.richmenu.alias[':richMenuAliasId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRichmenuAliasRichMenuAliasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotRichmenuAliasRichMenuAliasIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.richmenu.alias)[':richMenuAliasId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuAliasRichMenuAliasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRichmenuAliasRichMenuAliasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.richmenu.alias[':richMenuAliasId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuAliasRichMenuAliasId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuAliasRichMenuAliasIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV2BotRichmenuAliasRichMenuAliasId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2BotRichmenuAliasRichMenuAliasIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotRichmenuAliasListQueryKey() {
  return ['v2', '/v2/bot/richmenu/alias/list'] as const
}

export function getV2BotRichmenuAliasListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotRichmenuAliasListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.richmenu.alias.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRichmenuAliasList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
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
                Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotRichmenuAliasListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.alias.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuAliasListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotRichmenuAliasListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.richmenu.alias.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotUserUserIdRichmenuQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>
  >,
) {
  return ['v2', '/v2/bot/user/:userId/richmenu', toValue(args)] as const
}

export function getV2BotUserUserIdRichmenuQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotUserUserIdRichmenuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.user[':userId'].richmenu.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotUserUserIdRichmenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BotUserUserIdRichmenuQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.user)[':userId']['richmenu']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotUserUserIdRichmenuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotUserUserIdRichmenuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.user[':userId'].richmenu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2BotUserUserIdRichmenu<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2BotUserUserIdRichmenuMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotUserUserIdRichmenuRichMenuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotUserUserIdRichmenuRichMenuIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuBulkLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuBulkLinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuBulkUnlink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuBulkUnlinkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.richmenu.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuBatchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotRichmenuValidateBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotRichmenuValidateBatchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotRichmenuProgressBatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>>,
) {
  return ['v2', '/v2/bot/richmenu/progress/batch', toValue(args)] as const
}

export function getV2BotRichmenuProgressBatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotRichmenuProgressBatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.richmenu.progress.batch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotRichmenuProgressBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.richmenu.progress.batch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotRichmenuProgressBatchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.richmenu.progress.batch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotRichmenuProgressBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotRichmenuProgressBatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.richmenu.progress.batch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotUserUserIdLinkToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotUserUserIdLinkTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessageMarkAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessageMarkAsReadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBotPnpPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot.pnp.push.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bot.pnp.push.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBotPnpPushMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotMessagePnpTemplatedPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotMessagePnpTemplatedPushMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotMessageDeliveryPnpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>>,
) {
  return ['v2', '/v2/bot/message/delivery/pnp', toValue(args)] as const
}

export function getV2BotMessageDeliveryPnpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageDeliveryPnpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.delivery.pnp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageDeliveryPnp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.message.delivery.pnp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageDeliveryPnpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryPnpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageDeliveryPnpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.delivery.pnp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMessageDeliveryPnpTemplatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>
  >,
) {
  return ['v2', '/v2/bot/message/delivery/pnp/templated', toValue(args)] as const
}

export function getV2BotMessageDeliveryPnpTemplatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMessageDeliveryPnpTemplatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.message.delivery.pnp.templated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMessageDeliveryPnpTemplated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.bot.message.delivery.pnp.templated.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
              >
            >
          >,
          ReturnType<typeof getV2BotMessageDeliveryPnpTemplatedQueryKey>
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
          Awaited<ReturnType<typeof client.v2.bot.message.delivery.pnp.templated.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMessageDeliveryPnpTemplatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMessageDeliveryPnpTemplatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.message.delivery.pnp.templated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMembershipSubscriptionUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>
  >,
) {
  return ['v2', '/v2/bot/membership/subscription/:userId', toValue(args)] as const
}

export function getV2BotMembershipSubscriptionUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMembershipSubscriptionUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.membership.subscription[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMembershipSubscriptionUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2BotMembershipSubscriptionUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.membership.subscription)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMembershipSubscriptionUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMembershipSubscriptionUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.membership.subscription[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMembershipListQueryKey() {
  return ['v2', '/v2/bot/membership/list'] as const
}

export function getV2BotMembershipListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2BotMembershipListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.membership.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMembershipList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
            >
          >,
          ReturnType<typeof getV2BotMembershipListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.membership.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMembershipListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2BotMembershipListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.membership.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotMembershipMembershipIdUsersIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
  >,
) {
  return ['v2', '/v2/bot/membership/:membershipId/users/ids', toValue(args)] as const
}

export function getV2BotMembershipMembershipIdUsersIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotMembershipMembershipIdUsersIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.membership[':membershipId'].users.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotMembershipMembershipIdUsersIds<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
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
                    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
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
                    (typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2BotMembershipMembershipIdUsersIdsQueryKey>
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
            ReturnType<(typeof client.v2.bot.membership)[':membershipId']['users']['ids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotMembershipMembershipIdUsersIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotMembershipMembershipIdUsersIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.membership[':membershipId'].users.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BotCouponQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.coupon.$get>>,
) {
  return ['v2', '/v2/bot/coupon', toValue(args)] as const
}

export function getV2BotCouponQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.coupon.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotCouponQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.coupon.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotCoupon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.coupon.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
          >,
          ReturnType<typeof getV2BotCouponQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotCouponQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotCouponQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.coupon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BotCoupon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.coupon.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.bot.coupon.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotCouponMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BotCouponCouponIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>,
) {
  return ['v2', '/v2/bot/coupon/:couponId', toValue(args)] as const
}

export function getV2BotCouponCouponIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotCouponCouponIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.coupon[':couponId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BotCouponCouponId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BotCouponCouponIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bot.coupon)[':couponId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotCouponCouponIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotCouponCouponIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.coupon[':couponId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2BotCouponCouponIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2BotCouponCouponIdCloseMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotChatLoadingStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotChatLoadingStartMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2BotChatMarkAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.chat.markAsRead.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.chat.markAsRead.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotChatMarkAsReadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
