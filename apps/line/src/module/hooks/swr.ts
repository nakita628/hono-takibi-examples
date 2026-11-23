import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2BotChannelDetachKey() {
  return ['v2', '/v2/bot/channel/detach', 'POST'] as const
}

export function usePostV2BotChannelDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.channel.detach.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.channel.detach.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotChannelDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.channel.detach.$post> },
      ) => parseResponse(client.v2.bot.channel.detach.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotChatChatIdControlAcquireKey() {
  return ['v2', '/v2/bot/chat/:chatId/control/acquire', 'POST'] as const
}

export function usePostV2BotChatChatIdControlAcquire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotChatChatIdControlAcquireKey()
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
            (typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']
          >
        },
      ) => parseResponse(client.v2.bot.chat[':chatId'].control.acquire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotChatChatIdControlReleaseKey() {
  return ['v2', '/v2/bot/chat/:chatId/control/release', 'POST'] as const
}

export function usePostV2BotChatChatIdControlRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotChatChatIdControlReleaseKey()
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
            (typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']
          >
        },
      ) => parseResponse(client.v2.bot.chat[':chatId'].control.release.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotListKey(args: InferRequestType<typeof client.v2.bot.list.$get>) {
  return ['v2', '/v2/bot/list', args] as const
}

export function useGetV2BotList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BotListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
