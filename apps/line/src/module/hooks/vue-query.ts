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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2BotChannelDetachMutationKey() {
  return ['v2', '/v2/bot/channel/detach', 'POST'] as const
}

export function getPostV2BotChannelDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.detach.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.channel.detach.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotChannelDetachMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.channel.detach.$post>) {
      return parseResponse(client.v2.bot.channel.detach.$post(args, options))
    },
  })
}

export function usePostV2BotChannelDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.detach.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.channel.detach.$post>,
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
  const mutationDefaults = getPostV2BotChannelDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2BotChatChatIdControlAcquireMutationKey() {
  return ['v2', '/v2/bot/chat/:chatId/control/acquire', 'POST'] as const
}

export function getPostV2BotChatChatIdControlAcquireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotChatChatIdControlAcquireMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>,
    ) {
      return parseResponse(client.v2.bot.chat[':chatId'].control.acquire.$post(args, options))
    },
  })
}

export function usePostV2BotChatChatIdControlAcquire<
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
                  ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>,
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
  const mutationDefaults = getPostV2BotChatChatIdControlAcquireMutationOptions<
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

export function getPostV2BotChatChatIdControlReleaseMutationKey() {
  return ['v2', '/v2/bot/chat/:chatId/control/release', 'POST'] as const
}

export function getPostV2BotChatChatIdControlReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotChatChatIdControlReleaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>,
    ) {
      return parseResponse(client.v2.bot.chat[':chatId'].control.release.$post(args, options))
    },
  })
}

export function usePostV2BotChatChatIdControlRelease<
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
                  ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>,
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
  const mutationDefaults = getPostV2BotChatChatIdControlReleaseMutationOptions<
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

export function getV2BotListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.list.$get>>,
) {
  return ['v2', '/v2/bot/list', toValue(args)] as const
}

export function getV2BotListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BotListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bot.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2BotList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bot.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
          >,
          ReturnType<typeof getV2BotListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BotListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BotListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bot.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
