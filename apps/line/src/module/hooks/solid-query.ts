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

export function createPostV2BotChannelDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.detach.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bot.channel.detach.$post>,
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
    const mutationDefaults = getPostV2BotChannelDetachMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2BotChatChatIdControlAcquire<
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
                  ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>,
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
    const mutationDefaults = getPostV2BotChatChatIdControlAcquireMutationOptions<
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

export function createPostV2BotChatChatIdControlRelease<
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
                  ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>,
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
    const mutationDefaults = getPostV2BotChatChatIdControlReleaseMutationOptions<
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

export function getV2BotListQueryKey(args: InferRequestType<typeof client.v2.bot.list.$get>) {
  return ['v2', '/v2/bot/list', args] as const
}

export function getV2BotListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.bot.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BotListQueryKey>
  >({
    queryKey: getV2BotListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2BotList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bot.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2BotListQueryKey>
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
    return { ...getV2BotListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
