import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getEmojiKey() {
  return ['emoji'] as const
}

export function getFederationKey() {
  return ['federation'] as const
}

export function getFollowersKey() {
  return ['followers'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getModerationKey() {
  return ['moderation'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getRemotefollowKey() {
  return ['remotefollow'] as const
}

export function getSocialplatformsKey() {
  return ['socialplatforms'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getVideoKey() {
  return ['video'] as const
}

export function getYpKey() {
  return ['yp'] as const
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmojiKey() {
  return ['emoji', '/emoji'] as const
}

export function useGetEmoji<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetEmojiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emoji.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmoji<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetEmojiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emoji.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChatKey(args: InferRequestType<typeof client.chat.$get>) {
  return ['chat', '/chat', args] as const
}

export function useGetChat<TError = unknown>(
  args: InferRequestType<typeof client.chat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chat.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChat<TError = unknown>(
  args: InferRequestType<typeof client.chat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chat.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChatRegisterKey() {
  return ['chat', '/chat/register', 'POST'] as const
}

export function usePostChatRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.register.$post> }) =>
        parseResponse(client.chat.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsChatRegisterKey() {
  return ['chat', '/chat/register', 'OPTIONS'] as const
}

export function useOptionsChatRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.register.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsChatRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.chat.register.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatMessagevisibilityKey() {
  return ['chat', '/chat/messagevisibility', 'POST'] as const
}

export function usePostChatMessagevisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chat.messagevisibility.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.messagevisibility.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatMessagevisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.chat.messagevisibility.$post> },
      ) => parseResponse(client.chat.messagevisibility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatUsersSetenabledKey() {
  return ['chat', '/chat/users/setenabled', 'POST'] as const
}

export function usePostChatUsersSetenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.setenabled.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.users.setenabled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatUsersSetenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.chat.users.setenabled.$post> },
      ) => parseResponse(client.chat.users.setenabled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigKey() {
  return ['config', '/config'] as const
}

export function useGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetYpKey() {
  return ['yp', '/yp'] as const
}

export function useGetYp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetYpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.yp.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetYp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetYpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.yp.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetSocialplatformsKey() {
  return ['socialplatforms', '/socialplatforms'] as const
}

export function useGetSocialplatforms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSocialplatformsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.socialplatforms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSocialplatforms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSocialplatformsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.socialplatforms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideoVariantsKey() {
  return ['video', '/video/variants'] as const
}

export function useGetVideoVariants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideoVariantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.video.variants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideoVariants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideoVariantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.video.variants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPingKey() {
  return ['ping', '/ping'] as const
}

export function useGetPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRemotefollowKey() {
  return ['remotefollow', '/remotefollow', 'POST'] as const
}

export function usePostRemotefollow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotefollow.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.remotefollow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemotefollowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.remotefollow.$post> }) =>
        parseResponse(client.remotefollow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFollowersKey(args: InferRequestType<typeof client.followers.$get>) {
  return ['followers', '/followers', args] as const
}

export function useGetFollowers<TError = unknown>(
  args: InferRequestType<typeof client.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFollowers<TError = unknown>(
  args: InferRequestType<typeof client.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsCmcdKey(args: InferRequestType<typeof client.metrics.cmcd.$get>) {
  return ['metrics', '/metrics/cmcd', args] as const
}

export function useGetMetricsCmcd<TError = unknown>(
  args: InferRequestType<typeof client.metrics.cmcd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsCmcdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.cmcd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsCmcd<TError = unknown>(
  args: InferRequestType<typeof client.metrics.cmcd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsCmcdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.cmcd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetricsCmcdKey() {
  return ['metrics', '/metrics/cmcd', 'POST'] as const
}

export function usePostMetricsCmcd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metrics.cmcd.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetricsCmcdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metrics.cmcd.$post> }) =>
        parseResponse(client.metrics.cmcd.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsMetricsCmcdKey() {
  return ['metrics', '/metrics/cmcd', 'OPTIONS'] as const
}

export function useOptionsMetricsCmcd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsMetricsCmcdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.metrics.cmcd.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetricsPlaybackKey() {
  return ['metrics', '/metrics/playback', 'POST'] as const
}

export function usePostMetricsPlayback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.playback.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metrics.playback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetricsPlaybackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metrics.playback.$post> }) =>
        parseResponse(client.metrics.playback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsRegisterKey() {
  return ['notifications', '/notifications/register', 'POST'] as const
}

export function usePostNotificationsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.register.$post> },
      ) => parseResponse(client.notifications.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminStatusKey() {
  return ['admin', '/admin/status'] as const
}

export function useGetAdminStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminStatusKey() {
  return ['admin', '/admin/status', 'OPTIONS'] as const
}

export function useOptionsAdminStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.status.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDisconnectKey() {
  return ['admin', '/admin/disconnect', 'POST'] as const
}

export function usePostAdminDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.disconnect.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDisconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.disconnect.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminDisconnectKey() {
  return ['admin', '/admin/disconnect', 'OPTIONS'] as const
}

export function useOptionsAdminDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.disconnect.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminDisconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.disconnect.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminServerconfigKey() {
  return ['admin', '/admin/serverconfig'] as const
}

export function useGetAdminServerconfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminServerconfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.serverconfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminServerconfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminServerconfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.serverconfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminServerconfigKey() {
  return ['admin', '/admin/serverconfig', 'OPTIONS'] as const
}

export function useOptionsAdminServerconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminServerconfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.serverconfig.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminViewersOverTimeKey(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
) {
  return ['admin', '/admin/viewersOverTime', args] as const
}

export function useGetAdminViewersOverTime<TError = unknown>(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
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
        ? getGetAdminViewersOverTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.viewersOverTime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewersOverTime<TError = unknown>(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
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
        ? getGetAdminViewersOverTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.viewersOverTime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminViewersOverTimeKey() {
  return ['admin', '/admin/viewersOverTime', 'OPTIONS'] as const
}

export function useOptionsAdminViewersOverTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminViewersOverTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.viewersOverTime.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminViewersKey() {
  return ['admin', '/admin/viewers'] as const
}

export function useGetAdminViewers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminViewersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.viewers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminViewersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.viewers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminViewersKey() {
  return ['admin', '/admin/viewers', 'OPTIONS'] as const
}

export function useOptionsAdminViewers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminViewersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.viewers.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminViewersPlaybackKey() {
  return ['admin', '/admin/viewers/playback'] as const
}

export function useGetAdminViewersPlayback<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
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
        ? getGetAdminViewersPlaybackKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.viewers.playback.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewersPlayback<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
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
        ? getGetAdminViewersPlaybackKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.viewers.playback.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminViewersPlaybackKey() {
  return ['admin', '/admin/viewers/playback', 'OPTIONS'] as const
}

export function useOptionsAdminViewersPlayback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminViewersPlaybackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.viewers.playback.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminHardwarestatsKey() {
  return ['admin', '/admin/hardwarestats'] as const
}

export function useGetAdminHardwarestats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminHardwarestatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.hardwarestats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminHardwarestats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminHardwarestatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.hardwarestats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminHardwarestatsKey() {
  return ['admin', '/admin/hardwarestats', 'OPTIONS'] as const
}

export function useOptionsAdminHardwarestats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminHardwarestatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.hardwarestats.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminChatClientsKey() {
  return ['admin', '/admin/chat/clients'] as const
}

export function useGetAdminChatClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminChatClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminChatClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminChatClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminChatClientsKey() {
  return ['admin', '/admin/chat/clients', 'OPTIONS'] as const
}

export function useOptionsAdminChatClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.chat.clients.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminChatMessagesKey() {
  return ['admin', '/admin/chat/messages'] as const
}

export function useGetAdminChatMessages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminChatMessagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.messages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminChatMessages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminChatMessagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.messages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminChatMessagesKey() {
  return ['admin', '/admin/chat/messages', 'OPTIONS'] as const
}

export function useOptionsAdminChatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.chat.messages.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminChatMessagevisibilityKey() {
  return ['admin', '/admin/chat/messagevisibility', 'POST'] as const
}

export function usePostAdminChatMessagevisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messagevisibility.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.chat.messagevisibility.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminChatMessagevisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.chat.messagevisibility.$post> },
      ) => parseResponse(client.admin.chat.messagevisibility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminChatMessagevisibilityKey() {
  return ['admin', '/admin/chat/messagevisibility', 'OPTIONS'] as const
}

export function useOptionsAdminChatMessagevisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.messagevisibility.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatMessagevisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.messagevisibility.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminChatUsersSetenabledKey() {
  return ['admin', '/admin/chat/users/setenabled', 'POST'] as const
}

export function usePostAdminChatUsersSetenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.setenabled.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.chat.users.setenabled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminChatUsersSetenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.chat.users.setenabled.$post> },
      ) => parseResponse(client.admin.chat.users.setenabled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminChatUsersSetenabledKey() {
  return ['admin', '/admin/chat/users/setenabled', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersSetenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.setenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersSetenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.users.setenabled.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminChatUsersDisabledKey() {
  return ['admin', '/admin/chat/users/disabled'] as const
}

export function useGetAdminChatUsersDisabled<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
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
        ? getGetAdminChatUsersDisabledKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.users.disabled.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminChatUsersDisabled<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
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
        ? getGetAdminChatUsersDisabledKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.users.disabled.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminChatUsersDisabledKey() {
  return ['admin', '/admin/chat/users/disabled', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersDisabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.disabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersDisabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.users.disabled.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminChatUsersIpbansCreateKey() {
  return ['admin', '/admin/chat/users/ipbans/create', 'POST'] as const
}

export function usePostAdminChatUsersIpbansCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.chat.users.ipbans.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.chat.users.ipbans.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminChatUsersIpbansCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.chat.users.ipbans.create.$post> },
      ) => parseResponse(client.admin.chat.users.ipbans.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminChatUsersIpbansCreateKey() {
  return ['admin', '/admin/chat/users/ipbans/create', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersIpbansCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.ipbans.create.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersIpbansCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.users.ipbans.create.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminChatUsersIpbansRemoveKey() {
  return ['admin', '/admin/chat/users/ipbans/remove', 'POST'] as const
}

export function usePostAdminChatUsersIpbansRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.chat.users.ipbans.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.chat.users.ipbans.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminChatUsersIpbansRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.chat.users.ipbans.remove.$post> },
      ) => parseResponse(client.admin.chat.users.ipbans.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminChatUsersIpbansRemoveKey() {
  return ['admin', '/admin/chat/users/ipbans/remove', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersIpbansRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.ipbans.remove.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersIpbansRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.users.ipbans.remove.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminChatUsersIpbansKey() {
  return ['admin', '/admin/chat/users/ipbans'] as const
}

export function useGetAdminChatUsersIpbans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
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
        ? getGetAdminChatUsersIpbansKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.users.ipbans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminChatUsersIpbans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
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
        ? getGetAdminChatUsersIpbansKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.users.ipbans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminChatUsersIpbansKey() {
  return ['admin', '/admin/chat/users/ipbans', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersIpbans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersIpbansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.chat.users.ipbans.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminChatUsersSetmoderatorKey() {
  return ['admin', '/admin/chat/users/setmoderator', 'POST'] as const
}

export function usePostAdminChatUsersSetmoderator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.setmoderator.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.chat.users.setmoderator.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminChatUsersSetmoderatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.chat.users.setmoderator.$post> },
      ) => parseResponse(client.admin.chat.users.setmoderator.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminChatUsersSetmoderatorKey() {
  return ['admin', '/admin/chat/users/setmoderator', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersSetmoderator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.setmoderator.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersSetmoderatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.users.setmoderator.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminChatUsersModeratorsKey() {
  return ['admin', '/admin/chat/users/moderators'] as const
}

export function useGetAdminChatUsersModerators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
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
        ? getGetAdminChatUsersModeratorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.users.moderators.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminChatUsersModerators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
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
        ? getGetAdminChatUsersModeratorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.chat.users.moderators.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminChatUsersModeratorsKey() {
  return ['admin', '/admin/chat/users/moderators', 'OPTIONS'] as const
}

export function useOptionsAdminChatUsersModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.moderators.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminChatUsersModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.chat.users.moderators.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersKey(args: InferRequestType<typeof client.admin.users.$get>) {
  return ['admin', '/admin/users', args] as const
}

export function useGetAdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminUsersKey() {
  return ['admin', '/admin/users', 'OPTIONS'] as const
}

export function useOptionsAdminUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.users.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersDeleteKey() {
  return ['admin', '/admin/users/delete', 'POST'] as const
}

export function usePostAdminUsersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.users.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.users.delete.$post> }) =>
        parseResponse(client.admin.users.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminUsersDeleteKey() {
  return ['admin', '/admin/users/delete', 'OPTIONS'] as const
}

export function useOptionsAdminUsersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.delete.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminUsersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.users.delete.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLogsKey() {
  return ['admin', '/admin/logs'] as const
}

export function useGetAdminLogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLogs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminLogsKey() {
  return ['admin', '/admin/logs', 'OPTIONS'] as const
}

export function useOptionsAdminLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.logs.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLogsWarningsKey() {
  return ['admin', '/admin/logs/warnings'] as const
}

export function useGetAdminLogsWarnings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLogsWarningsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.logs.warnings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLogsWarnings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLogsWarningsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.logs.warnings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminLogsWarningsKey() {
  return ['admin', '/admin/logs/warnings', 'OPTIONS'] as const
}

export function useOptionsAdminLogsWarnings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminLogsWarningsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.logs.warnings.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFollowersKey(
  args: InferRequestType<typeof client.admin.followers.$get>,
) {
  return ['admin', '/admin/followers', args] as const
}

export function useGetAdminFollowers<TError = unknown>(
  args: InferRequestType<typeof client.admin.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFollowers<TError = unknown>(
  args: InferRequestType<typeof client.admin.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminFollowersKey() {
  return ['admin', '/admin/followers', 'OPTIONS'] as const
}

export function useOptionsAdminFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.followers.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFollowersPendingKey() {
  return ['admin', '/admin/followers/pending'] as const
}

export function useGetAdminFollowersPending<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
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
        ? getGetAdminFollowersPendingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.pending.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFollowersPending<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
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
        ? getGetAdminFollowersPendingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.pending.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminFollowersPendingKey() {
  return ['admin', '/admin/followers/pending', 'OPTIONS'] as const
}

export function useOptionsAdminFollowersPending<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFollowersPendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.followers.pending.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFollowersBlockedKey() {
  return ['admin', '/admin/followers/blocked'] as const
}

export function useGetAdminFollowersBlocked<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
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
        ? getGetAdminFollowersBlockedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.blocked.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFollowersBlocked<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
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
        ? getGetAdminFollowersBlockedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.blocked.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminFollowersBlockedKey() {
  return ['admin', '/admin/followers/blocked', 'OPTIONS'] as const
}

export function useOptionsAdminFollowersBlocked<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFollowersBlockedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.followers.blocked.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFollowersDirectoryKey() {
  return ['admin', '/admin/followers/directory'] as const
}

export function useGetAdminFollowersDirectory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
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
        ? getGetAdminFollowersDirectoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.directory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFollowersDirectory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
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
        ? getGetAdminFollowersDirectoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.followers.directory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminFollowersDirectoryKey() {
  return ['admin', '/admin/followers/directory', 'OPTIONS'] as const
}

export function useOptionsAdminFollowersDirectory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.followers.directory.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFollowersDirectoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.followers.directory.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFollowersApproveKey() {
  return ['admin', '/admin/followers/approve', 'POST'] as const
}

export function usePostAdminFollowersApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.approve.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.followers.approve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFollowersApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.followers.approve.$post> },
      ) => parseResponse(client.admin.followers.approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminFollowersApproveKey() {
  return ['admin', '/admin/followers/approve', 'OPTIONS'] as const
}

export function useOptionsAdminFollowersApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.approve.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFollowersApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.followers.approve.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFollowersRemoveKey() {
  return ['admin', '/admin/followers/remove', 'POST'] as const
}

export function usePostAdminFollowersRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.followers.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFollowersRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.followers.remove.$post> },
      ) => parseResponse(client.admin.followers.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminFollowersRemoveKey() {
  return ['admin', '/admin/followers/remove', 'OPTIONS'] as const
}

export function useOptionsAdminFollowersRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.remove.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFollowersRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.followers.remove.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminEmojiUploadKey() {
  return ['admin', '/admin/emoji/upload', 'POST'] as const
}

export function usePostAdminEmojiUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.upload.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.emoji.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEmojiUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.emoji.upload.$post> }) =>
        parseResponse(client.admin.emoji.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminEmojiUploadKey() {
  return ['admin', '/admin/emoji/upload', 'OPTIONS'] as const
}

export function useOptionsAdminEmojiUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.upload.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminEmojiUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.emoji.upload.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminEmojiDeleteKey() {
  return ['admin', '/admin/emoji/delete', 'POST'] as const
}

export function usePostAdminEmojiDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.emoji.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEmojiDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.emoji.delete.$post> }) =>
        parseResponse(client.admin.emoji.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminEmojiDeleteKey() {
  return ['admin', '/admin/emoji/delete', 'OPTIONS'] as const
}

export function useOptionsAdminEmojiDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.delete.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminEmojiDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.emoji.delete.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigAdminpassKey() {
  return ['admin', '/admin/config/adminpass', 'POST'] as const
}

export function usePostAdminConfigAdminpass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.adminpass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.adminpass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigAdminpassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.adminpass.$post> },
      ) => parseResponse(client.admin.config.adminpass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigAdminpassKey() {
  return ['admin', '/admin/config/adminpass', 'OPTIONS'] as const
}

export function useOptionsAdminConfigAdminpass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.adminpass.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigAdminpassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.adminpass.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigStreamkeysKey() {
  return ['admin', '/admin/config/streamkeys', 'POST'] as const
}

export function usePostAdminConfigStreamkeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamkeys.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.streamkeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigStreamkeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.streamkeys.$post> },
      ) => parseResponse(client.admin.config.streamkeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigStreamkeysKey() {
  return ['admin', '/admin/config/streamkeys', 'OPTIONS'] as const
}

export function useOptionsAdminConfigStreamkeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamkeys.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigStreamkeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.streamkeys.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigPagecontentKey() {
  return ['admin', '/admin/config/pagecontent', 'POST'] as const
}

export function usePostAdminConfigPagecontent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.pagecontent.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.pagecontent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigPagecontentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.pagecontent.$post> },
      ) => parseResponse(client.admin.config.pagecontent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigPagecontentKey() {
  return ['admin', '/admin/config/pagecontent', 'OPTIONS'] as const
}

export function useOptionsAdminConfigPagecontent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.pagecontent.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigPagecontentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.pagecontent.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigStreamtitleKey() {
  return ['admin', '/admin/config/streamtitle', 'POST'] as const
}

export function usePostAdminConfigStreamtitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamtitle.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.streamtitle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigStreamtitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.streamtitle.$post> },
      ) => parseResponse(client.admin.config.streamtitle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigStreamtitleKey() {
  return ['admin', '/admin/config/streamtitle', 'OPTIONS'] as const
}

export function useOptionsAdminConfigStreamtitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamtitle.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigStreamtitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.streamtitle.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigNameKey() {
  return ['admin', '/admin/config/name', 'POST'] as const
}

export function usePostAdminConfigName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.name.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.name.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.config.name.$post> }) =>
        parseResponse(client.admin.config.name.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigNameKey() {
  return ['admin', '/admin/config/name', 'OPTIONS'] as const
}

export function useOptionsAdminConfigName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.name.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.name.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigServersummaryKey() {
  return ['admin', '/admin/config/serversummary', 'POST'] as const
}

export function usePostAdminConfigServersummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serversummary.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.serversummary.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigServersummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.serversummary.$post> },
      ) => parseResponse(client.admin.config.serversummary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigServersummaryKey() {
  return ['admin', '/admin/config/serversummary', 'OPTIONS'] as const
}

export function useOptionsAdminConfigServersummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.serversummary.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigServersummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.serversummary.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigOfflinemessageKey() {
  return ['admin', '/admin/config/offlinemessage', 'POST'] as const
}

export function usePostAdminConfigOfflinemessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.offlinemessage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.offlinemessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigOfflinemessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.offlinemessage.$post> },
      ) => parseResponse(client.admin.config.offlinemessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigOfflinemessageKey() {
  return ['admin', '/admin/config/offlinemessage', 'OPTIONS'] as const
}

export function useOptionsAdminConfigOfflinemessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.offlinemessage.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigOfflinemessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.offlinemessage.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigWelcomemessageKey() {
  return ['admin', '/admin/config/welcomemessage', 'POST'] as const
}

export function usePostAdminConfigWelcomemessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.welcomemessage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.welcomemessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigWelcomemessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.welcomemessage.$post> },
      ) => parseResponse(client.admin.config.welcomemessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigWelcomemessageKey() {
  return ['admin', '/admin/config/welcomemessage', 'OPTIONS'] as const
}

export function useOptionsAdminConfigWelcomemessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.welcomemessage.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigWelcomemessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.welcomemessage.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatDisableKey() {
  return ['admin', '/admin/config/chat/disable', 'POST'] as const
}

export function usePostAdminConfigChatDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.chat.disable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.chat.disable.$post> },
      ) => parseResponse(client.admin.config.chat.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatDisableKey() {
  return ['admin', '/admin/config/chat/disable', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.disable.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.chat.disable.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatJoinmessagesenabledKey() {
  return ['admin', '/admin/config/chat/joinmessagesenabled', 'POST'] as const
}

export function usePostAdminConfigChatJoinmessagesenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.joinmessagesenabled.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.joinmessagesenabled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatJoinmessagesenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.chat.joinmessagesenabled.$post> },
      ) => parseResponse(client.admin.config.chat.joinmessagesenabled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatJoinmessagesenabledKey() {
  return ['admin', '/admin/config/chat/joinmessagesenabled', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatJoinmessagesenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.joinmessagesenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatJoinmessagesenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.joinmessagesenabled.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatEstablishedusermodeKey() {
  return ['admin', '/admin/config/chat/establishedusermode', 'POST'] as const
}

export function usePostAdminConfigChatEstablishedusermode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.establishedusermode.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.establishedusermode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatEstablishedusermodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.chat.establishedusermode.$post> },
      ) => parseResponse(client.admin.config.chat.establishedusermode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatEstablishedusermodeKey() {
  return ['admin', '/admin/config/chat/establishedusermode', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatEstablishedusermode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.establishedusermode.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatEstablishedusermodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.establishedusermode.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatForbiddenusernamesKey() {
  return ['admin', '/admin/config/chat/forbiddenusernames', 'POST'] as const
}

export function usePostAdminConfigChatForbiddenusernames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.forbiddenusernames.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.forbiddenusernames.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatForbiddenusernamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.chat.forbiddenusernames.$post> },
      ) => parseResponse(client.admin.config.chat.forbiddenusernames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatForbiddenusernamesKey() {
  return ['admin', '/admin/config/chat/forbiddenusernames', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatForbiddenusernames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.forbiddenusernames.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatForbiddenusernamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.forbiddenusernames.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatSuggestedusernamesKey() {
  return ['admin', '/admin/config/chat/suggestedusernames', 'POST'] as const
}

export function usePostAdminConfigChatSuggestedusernames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.suggestedusernames.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.suggestedusernames.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatSuggestedusernamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.chat.suggestedusernames.$post> },
      ) => parseResponse(client.admin.config.chat.suggestedusernames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatSuggestedusernamesKey() {
  return ['admin', '/admin/config/chat/suggestedusernames', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatSuggestedusernames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.suggestedusernames.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatSuggestedusernamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.suggestedusernames.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatSpamprotectionenabledKey() {
  return ['admin', '/admin/config/chat/spamprotectionenabled', 'POST'] as const
}

export function usePostAdminConfigChatSpamprotectionenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.spamprotectionenabled.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.spamprotectionenabled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatSpamprotectionenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.chat.spamprotectionenabled.$post> },
      ) => parseResponse(client.admin.config.chat.spamprotectionenabled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatSpamprotectionenabledKey() {
  return ['admin', '/admin/config/chat/spamprotectionenabled', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatSpamprotectionenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.spamprotectionenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatSpamprotectionenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.spamprotectionenabled.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatSlurfilterenabledKey() {
  return ['admin', '/admin/config/chat/slurfilterenabled', 'POST'] as const
}

export function usePostAdminConfigChatSlurfilterenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.slurfilterenabled.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.slurfilterenabled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatSlurfilterenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.chat.slurfilterenabled.$post> },
      ) => parseResponse(client.admin.config.chat.slurfilterenabled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatSlurfilterenabledKey() {
  return ['admin', '/admin/config/chat/slurfilterenabled', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatSlurfilterenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.slurfilterenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatSlurfilterenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.slurfilterenabled.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigChatRequireauthenticationKey() {
  return ['admin', '/admin/config/chat/requireauthentication', 'POST'] as const
}

export function usePostAdminConfigChatRequireauthentication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.requireauthentication.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.chat.requireauthentication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigChatRequireauthenticationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.chat.requireauthentication.$post> },
      ) => parseResponse(client.admin.config.chat.requireauthentication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigChatRequireauthenticationKey() {
  return ['admin', '/admin/config/chat/requireauthentication', 'OPTIONS'] as const
}

export function useOptionsAdminConfigChatRequireauthentication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.requireauthentication.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigChatRequireauthenticationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.chat.requireauthentication.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigVideoCodecKey() {
  return ['admin', '/admin/config/video/codec', 'POST'] as const
}

export function usePostAdminConfigVideoCodec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.video.codec.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.video.codec.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigVideoCodecKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.video.codec.$post> },
      ) => parseResponse(client.admin.config.video.codec.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigVideoCodecKey() {
  return ['admin', '/admin/config/video/codec', 'OPTIONS'] as const
}

export function useOptionsAdminConfigVideoCodec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.video.codec.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigVideoCodecKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.video.codec.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigVideoStreamlatencylevelKey() {
  return ['admin', '/admin/config/video/streamlatencylevel', 'POST'] as const
}

export function usePostAdminConfigVideoStreamlatencylevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.video.streamlatencylevel.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.video.streamlatencylevel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigVideoStreamlatencylevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.video.streamlatencylevel.$post> },
      ) => parseResponse(client.admin.config.video.streamlatencylevel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigVideoStreamlatencylevelKey() {
  return ['admin', '/admin/config/video/streamlatencylevel', 'OPTIONS'] as const
}

export function useOptionsAdminConfigVideoStreamlatencylevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.video.streamlatencylevel.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigVideoStreamlatencylevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.video.streamlatencylevel.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigVideoStreamoutputvariantsKey() {
  return ['admin', '/admin/config/video/streamoutputvariants', 'POST'] as const
}

export function usePostAdminConfigVideoStreamoutputvariants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.video.streamoutputvariants.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.video.streamoutputvariants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigVideoStreamoutputvariantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.video.streamoutputvariants.$post> },
      ) => parseResponse(client.admin.config.video.streamoutputvariants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigVideoStreamoutputvariantsKey() {
  return ['admin', '/admin/config/video/streamoutputvariants', 'OPTIONS'] as const
}

export function useOptionsAdminConfigVideoStreamoutputvariants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.video.streamoutputvariants.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigVideoStreamoutputvariantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.video.streamoutputvariants.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigAppearanceKey() {
  return ['admin', '/admin/config/appearance', 'POST'] as const
}

export function usePostAdminConfigAppearance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.appearance.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.appearance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigAppearanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.appearance.$post> },
      ) => parseResponse(client.admin.config.appearance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigAppearanceKey() {
  return ['admin', '/admin/config/appearance', 'OPTIONS'] as const
}

export function useOptionsAdminConfigAppearance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.appearance.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigAppearanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.appearance.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigLogoKey() {
  return ['admin', '/admin/config/logo', 'POST'] as const
}

export function usePostAdminConfigLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.logo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.logo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.config.logo.$post> }) =>
        parseResponse(client.admin.config.logo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigLogoKey() {
  return ['admin', '/admin/config/logo', 'OPTIONS'] as const
}

export function useOptionsAdminConfigLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.logo.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.logo.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFaviconKey() {
  return ['admin', '/admin/config/favicon', 'POST'] as const
}

export function usePostAdminConfigFavicon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.favicon.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFaviconKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.favicon.$post> },
      ) => parseResponse(client.admin.config.favicon.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminConfigFaviconKey() {
  return ['admin', '/admin/config/favicon', 'DELETE'] as const
}

export function useDeleteAdminConfigFavicon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$delete>>>
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
  const swrKey = customKey ?? getDeleteAdminConfigFaviconKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.favicon.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFaviconKey() {
  return ['admin', '/admin/config/favicon', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFavicon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFaviconKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.favicon.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigTagsKey() {
  return ['admin', '/admin/config/tags', 'POST'] as const
}

export function usePostAdminConfigTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.tags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.config.tags.$post> }) =>
        parseResponse(client.admin.config.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigTagsKey() {
  return ['admin', '/admin/config/tags', 'OPTIONS'] as const
}

export function useOptionsAdminConfigTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.tags.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.tags.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFfmpegpathKey() {
  return ['admin', '/admin/config/ffmpegpath', 'POST'] as const
}

export function usePostAdminConfigFfmpegpath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.ffmpegpath.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.ffmpegpath.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFfmpegpathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.ffmpegpath.$post> },
      ) => parseResponse(client.admin.config.ffmpegpath.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFfmpegpathKey() {
  return ['admin', '/admin/config/ffmpegpath', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFfmpegpath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.ffmpegpath.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFfmpegpathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.ffmpegpath.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigWebserverportKey() {
  return ['admin', '/admin/config/webserverport', 'POST'] as const
}

export function usePostAdminConfigWebserverport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverport.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.webserverport.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigWebserverportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.webserverport.$post> },
      ) => parseResponse(client.admin.config.webserverport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigWebserverportKey() {
  return ['admin', '/admin/config/webserverport', 'OPTIONS'] as const
}

export function useOptionsAdminConfigWebserverport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.webserverport.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigWebserverportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.webserverport.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigWebserveripKey() {
  return ['admin', '/admin/config/webserverip', 'POST'] as const
}

export function usePostAdminConfigWebserverip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverip.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.webserverip.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigWebserveripKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.webserverip.$post> },
      ) => parseResponse(client.admin.config.webserverip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigWebserveripKey() {
  return ['admin', '/admin/config/webserverip', 'OPTIONS'] as const
}

export function useOptionsAdminConfigWebserverip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverip.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigWebserveripKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.webserverip.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigRtmpserverportKey() {
  return ['admin', '/admin/config/rtmpserverport', 'POST'] as const
}

export function usePostAdminConfigRtmpserverport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.rtmpserverport.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.rtmpserverport.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigRtmpserverportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.rtmpserverport.$post> },
      ) => parseResponse(client.admin.config.rtmpserverport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigRtmpserverportKey() {
  return ['admin', '/admin/config/rtmpserverport', 'OPTIONS'] as const
}

export function useOptionsAdminConfigRtmpserverport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.rtmpserverport.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigRtmpserverportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.rtmpserverport.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigRtmpserverbindaddressKey() {
  return ['admin', '/admin/config/rtmpserverbindaddress', 'POST'] as const
}

export function usePostAdminConfigRtmpserverbindaddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.rtmpserverbindaddress.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.rtmpserverbindaddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigRtmpserverbindaddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.rtmpserverbindaddress.$post> },
      ) => parseResponse(client.admin.config.rtmpserverbindaddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigRtmpserverbindaddressKey() {
  return ['admin', '/admin/config/rtmpserverbindaddress', 'OPTIONS'] as const
}

export function useOptionsAdminConfigRtmpserverbindaddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.rtmpserverbindaddress.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigRtmpserverbindaddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.rtmpserverbindaddress.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigSockethostoverrideKey() {
  return ['admin', '/admin/config/sockethostoverride', 'POST'] as const
}

export function usePostAdminConfigSockethostoverride<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.sockethostoverride.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.sockethostoverride.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigSockethostoverrideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.sockethostoverride.$post> },
      ) => parseResponse(client.admin.config.sockethostoverride.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigSockethostoverrideKey() {
  return ['admin', '/admin/config/sockethostoverride', 'OPTIONS'] as const
}

export function useOptionsAdminConfigSockethostoverride<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.sockethostoverride.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigSockethostoverrideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.sockethostoverride.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigVideoservingendpointKey() {
  return ['admin', '/admin/config/videoservingendpoint', 'POST'] as const
}

export function usePostAdminConfigVideoservingendpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.videoservingendpoint.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.videoservingendpoint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigVideoservingendpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.videoservingendpoint.$post> },
      ) => parseResponse(client.admin.config.videoservingendpoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigVideoservingendpointKey() {
  return ['admin', '/admin/config/videoservingendpoint', 'OPTIONS'] as const
}

export function useOptionsAdminConfigVideoservingendpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.videoservingendpoint.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigVideoservingendpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.videoservingendpoint.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigNsfwKey() {
  return ['admin', '/admin/config/nsfw', 'POST'] as const
}

export function usePostAdminConfigNsfw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.nsfw.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.nsfw.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigNsfwKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.config.nsfw.$post> }) =>
        parseResponse(client.admin.config.nsfw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigNsfwKey() {
  return ['admin', '/admin/config/nsfw', 'OPTIONS'] as const
}

export function useOptionsAdminConfigNsfw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.nsfw.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigNsfwKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.nsfw.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigAutoplayKey() {
  return ['admin', '/admin/config/autoplay', 'POST'] as const
}

export function usePostAdminConfigAutoplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.autoplay.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.autoplay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigAutoplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.autoplay.$post> },
      ) => parseResponse(client.admin.config.autoplay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigAutoplayKey() {
  return ['admin', '/admin/config/autoplay', 'OPTIONS'] as const
}

export function useOptionsAdminConfigAutoplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.autoplay.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigAutoplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.autoplay.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigDirectoryenabledKey() {
  return ['admin', '/admin/config/directoryenabled', 'POST'] as const
}

export function usePostAdminConfigDirectoryenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.directoryenabled.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.directoryenabled.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigDirectoryenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.directoryenabled.$post> },
      ) => parseResponse(client.admin.config.directoryenabled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigDirectoryenabledKey() {
  return ['admin', '/admin/config/directoryenabled', 'OPTIONS'] as const
}

export function useOptionsAdminConfigDirectoryenabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.directoryenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigDirectoryenabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.directoryenabled.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigSocialhandlesKey() {
  return ['admin', '/admin/config/socialhandles', 'POST'] as const
}

export function usePostAdminConfigSocialhandles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.socialhandles.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.socialhandles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigSocialhandlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.socialhandles.$post> },
      ) => parseResponse(client.admin.config.socialhandles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigSocialhandlesKey() {
  return ['admin', '/admin/config/socialhandles', 'OPTIONS'] as const
}

export function useOptionsAdminConfigSocialhandles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.socialhandles.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigSocialhandlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.socialhandles.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigS3Key() {
  return ['admin', '/admin/config/s3', 'POST'] as const
}

export function usePostAdminConfigS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.s3.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.s3.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.config.s3.$post> }) =>
        parseResponse(client.admin.config.s3.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigS3Key() {
  return ['admin', '/admin/config/s3', 'OPTIONS'] as const
}

export function useOptionsAdminConfigS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.s3.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.s3.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigServerurlKey() {
  return ['admin', '/admin/config/serverurl', 'POST'] as const
}

export function usePostAdminConfigServerurl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serverurl.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.serverurl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigServerurlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.serverurl.$post> },
      ) => parseResponse(client.admin.config.serverurl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigServerurlKey() {
  return ['admin', '/admin/config/serverurl', 'OPTIONS'] as const
}

export function useOptionsAdminConfigServerurl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serverurl.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigServerurlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.config.serverurl.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigExternalactionsKey() {
  return ['admin', '/admin/config/externalactions', 'POST'] as const
}

export function usePostAdminConfigExternalactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.externalactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.externalactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigExternalactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.externalactions.$post> },
      ) => parseResponse(client.admin.config.externalactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigExternalactionsKey() {
  return ['admin', '/admin/config/externalactions', 'OPTIONS'] as const
}

export function useOptionsAdminConfigExternalactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.externalactions.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigExternalactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.externalactions.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigCustomstylesKey() {
  return ['admin', '/admin/config/customstyles', 'POST'] as const
}

export function usePostAdminConfigCustomstyles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.customstyles.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.customstyles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigCustomstylesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.customstyles.$post> },
      ) => parseResponse(client.admin.config.customstyles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigCustomstylesKey() {
  return ['admin', '/admin/config/customstyles', 'OPTIONS'] as const
}

export function useOptionsAdminConfigCustomstyles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.customstyles.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigCustomstylesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.customstyles.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigCustomjavascriptKey() {
  return ['admin', '/admin/config/customjavascript', 'POST'] as const
}

export function usePostAdminConfigCustomjavascript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.customjavascript.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.customjavascript.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigCustomjavascriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.customjavascript.$post> },
      ) => parseResponse(client.admin.config.customjavascript.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigCustomjavascriptKey() {
  return ['admin', '/admin/config/customjavascript', 'OPTIONS'] as const
}

export function useOptionsAdminConfigCustomjavascript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.customjavascript.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigCustomjavascriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.customjavascript.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigHideviewercountKey() {
  return ['admin', '/admin/config/hideviewercount', 'POST'] as const
}

export function usePostAdminConfigHideviewercount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.hideviewercount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.hideviewercount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigHideviewercountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.hideviewercount.$post> },
      ) => parseResponse(client.admin.config.hideviewercount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigHideviewercountKey() {
  return ['admin', '/admin/config/hideviewercount', 'OPTIONS'] as const
}

export function useOptionsAdminConfigHideviewercount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.hideviewercount.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigHideviewercountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.hideviewercount.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigDisablesearchindexingKey() {
  return ['admin', '/admin/config/disablesearchindexing', 'POST'] as const
}

export function usePostAdminConfigDisablesearchindexing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.disablesearchindexing.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.disablesearchindexing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigDisablesearchindexingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.disablesearchindexing.$post> },
      ) => parseResponse(client.admin.config.disablesearchindexing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigDisablesearchindexingKey() {
  return ['admin', '/admin/config/disablesearchindexing', 'OPTIONS'] as const
}

export function useOptionsAdminConfigDisablesearchindexing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.disablesearchindexing.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigDisablesearchindexingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.disablesearchindexing.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationEnableKey() {
  return ['admin', '/admin/config/federation/enable', 'POST'] as const
}

export function usePostAdminConfigFederationEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.enable.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.federation.enable.$post> },
      ) => parseResponse(client.admin.config.federation.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationEnableKey() {
  return ['admin', '/admin/config/federation/enable', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.enable.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.federation.enable.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationPrivateKey() {
  return ['admin', '/admin/config/federation/private', 'POST'] as const
}

export function usePostAdminConfigFederationPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.private.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.federation.private.$post> },
      ) => parseResponse(client.admin.config.federation.private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationPrivateKey() {
  return ['admin', '/admin/config/federation/private', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.private.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.federation.private.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationShowengagementKey() {
  return ['admin', '/admin/config/federation/showengagement', 'POST'] as const
}

export function usePostAdminConfigFederationShowengagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.showengagement.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.showengagement.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationShowengagementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.federation.showengagement.$post> },
      ) => parseResponse(client.admin.config.federation.showengagement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationShowengagementKey() {
  return ['admin', '/admin/config/federation/showengagement', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationShowengagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.showengagement.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationShowengagementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.federation.showengagement.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationEnablequotesKey() {
  return ['admin', '/admin/config/federation/enablequotes', 'POST'] as const
}

export function usePostAdminConfigFederationEnablequotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.enablequotes.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.enablequotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationEnablequotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.federation.enablequotes.$post> },
      ) => parseResponse(client.admin.config.federation.enablequotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationEnablequotesKey() {
  return ['admin', '/admin/config/federation/enablequotes', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationEnablequotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.enablequotes.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationEnablequotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.federation.enablequotes.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationHidefollowersKey() {
  return ['admin', '/admin/config/federation/hidefollowers', 'POST'] as const
}

export function usePostAdminConfigFederationHidefollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.hidefollowers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.hidefollowers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationHidefollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.federation.hidefollowers.$post> },
      ) => parseResponse(client.admin.config.federation.hidefollowers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationHidefollowersKey() {
  return ['admin', '/admin/config/federation/hidefollowers', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationHidefollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.hidefollowers.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationHidefollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.federation.hidefollowers.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationUsernameKey() {
  return ['admin', '/admin/config/federation/username', 'POST'] as const
}

export function usePostAdminConfigFederationUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.username.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.username.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.federation.username.$post> },
      ) => parseResponse(client.admin.config.federation.username.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationUsernameKey() {
  return ['admin', '/admin/config/federation/username', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.username.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.federation.username.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationLivemessageKey() {
  return ['admin', '/admin/config/federation/livemessage', 'POST'] as const
}

export function usePostAdminConfigFederationLivemessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.livemessage.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.livemessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationLivemessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.federation.livemessage.$post> },
      ) => parseResponse(client.admin.config.federation.livemessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationLivemessageKey() {
  return ['admin', '/admin/config/federation/livemessage', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationLivemessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.livemessage.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationLivemessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.federation.livemessage.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigFederationBlockdomainsKey() {
  return ['admin', '/admin/config/federation/blockdomains', 'POST'] as const
}

export function usePostAdminConfigFederationBlockdomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.blockdomains.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.federation.blockdomains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigFederationBlockdomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.admin.config.federation.blockdomains.$post> },
      ) => parseResponse(client.admin.config.federation.blockdomains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigFederationBlockdomainsKey() {
  return ['admin', '/admin/config/federation/blockdomains', 'OPTIONS'] as const
}

export function useOptionsAdminConfigFederationBlockdomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.blockdomains.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigFederationBlockdomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.config.federation.blockdomains.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFederationServersKey() {
  return ['federation', '/federation/servers'] as const
}

export function useGetFederationServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFederationServersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.federation.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFederationServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFederationServersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.federation.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminFederationServersKey() {
  return ['admin', '/admin/federation/servers'] as const
}

export function useGetAdminFederationServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
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
        ? getGetAdminFederationServersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.federation.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFederationServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
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
        ? getGetAdminFederationServersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.federation.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminFederationServersKey() {
  return ['admin', '/admin/federation/servers', 'POST'] as const
}

export function usePostAdminFederationServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.federation.servers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFederationServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.federation.servers.$post> },
      ) => parseResponse(client.admin.federation.servers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminFederationServersKey() {
  return ['admin', '/admin/federation/servers', 'OPTIONS'] as const
}

export function useOptionsAdminFederationServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFederationServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.federation.servers.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminFederationServersIdKey() {
  return ['admin', '/admin/federation/servers/:id', 'DELETE'] as const
}

export function useDeleteAdminFederationServersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminFederationServersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.federation.servers)[':id']['$delete']> },
      ) => parseResponse(client.admin.federation.servers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminFederationServersIdKey() {
  return ['admin', '/admin/federation/servers/:id', 'OPTIONS'] as const
}

export function useOptionsAdminFederationServersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['$options']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFederationServersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.federation.servers)[':id']['$options']> },
      ) => parseResponse(client.admin.federation.servers[':id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminFederationServersIdReorderKey() {
  return ['admin', '/admin/federation/servers/:id/reorder', 'PUT'] as const
}

export function usePutAdminFederationServersIdReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminFederationServersIdReorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>
        },
      ) => parseResponse(client.admin.federation.servers[':id'].reorder.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminFederationServersIdReorderKey() {
  return ['admin', '/admin/federation/servers/:id/reorder', 'OPTIONS'] as const
}

export function useOptionsAdminFederationServersIdReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.federation.servers)[':id']['reorder']['$options']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFederationServersIdReorderKey()
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
            (typeof client.admin.federation.servers)[':id']['reorder']['$options']
          >
        },
      ) =>
        parseResponse(client.admin.federation.servers[':id'].reorder.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFederationFeatureRequestsKey() {
  return ['admin', '/admin/federation/feature-requests'] as const
}

export function useGetAdminFederationFeatureRequests<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
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
        ? getGetAdminFederationFeatureRequestsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.federation['feature-requests'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFederationFeatureRequests<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
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
        ? getGetAdminFederationFeatureRequestsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.federation['feature-requests'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminConfigNotificationsDiscordKey() {
  return ['admin', '/admin/config/notifications/discord', 'POST'] as const
}

export function usePostAdminConfigNotificationsDiscord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.notifications.discord.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.notifications.discord.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigNotificationsDiscordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.notifications.discord.$post> },
      ) => parseResponse(client.admin.config.notifications.discord.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigNotificationsDiscordKey() {
  return ['admin', '/admin/config/notifications/discord', 'OPTIONS'] as const
}

export function useOptionsAdminConfigNotificationsDiscord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.notifications.discord.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigNotificationsDiscordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.notifications.discord.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConfigNotificationsBrowserKey() {
  return ['admin', '/admin/config/notifications/browser', 'POST'] as const
}

export function usePostAdminConfigNotificationsBrowser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.notifications.browser.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.config.notifications.browser.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConfigNotificationsBrowserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.config.notifications.browser.$post> },
      ) => parseResponse(client.admin.config.notifications.browser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminConfigNotificationsBrowserKey() {
  return ['admin', '/admin/config/notifications/browser', 'OPTIONS'] as const
}

export function useOptionsAdminConfigNotificationsBrowser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.notifications.browser.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminConfigNotificationsBrowserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.config.notifications.browser.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminWebhooksKey() {
  return ['admin', '/admin/webhooks'] as const
}

export function useGetAdminWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminWebhooksKey() {
  return ['admin', '/admin/webhooks', 'OPTIONS'] as const
}

export function useOptionsAdminWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.webhooks.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminWebhooksDeleteKey() {
  return ['admin', '/admin/webhooks/delete', 'POST'] as const
}

export function usePostAdminWebhooksDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.webhooks.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWebhooksDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.webhooks.delete.$post> },
      ) => parseResponse(client.admin.webhooks.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminWebhooksDeleteKey() {
  return ['admin', '/admin/webhooks/delete', 'OPTIONS'] as const
}

export function useOptionsAdminWebhooksDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.delete.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminWebhooksDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.webhooks.delete.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminWebhooksCreateKey() {
  return ['admin', '/admin/webhooks/create', 'POST'] as const
}

export function usePostAdminWebhooksCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.webhooks.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWebhooksCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.webhooks.create.$post> },
      ) => parseResponse(client.admin.webhooks.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminWebhooksCreateKey() {
  return ['admin', '/admin/webhooks/create', 'OPTIONS'] as const
}

export function useOptionsAdminWebhooksCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.create.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminWebhooksCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.webhooks.create.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminAccesstokensKey() {
  return ['admin', '/admin/accesstokens'] as const
}

export function useGetAdminAccesstokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminAccesstokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.accesstokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminAccesstokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminAccesstokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.accesstokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminAccesstokensKey() {
  return ['admin', '/admin/accesstokens', 'OPTIONS'] as const
}

export function useOptionsAdminAccesstokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminAccesstokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.accesstokens.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminAccesstokensDeleteKey() {
  return ['admin', '/admin/accesstokens/delete', 'POST'] as const
}

export function usePostAdminAccesstokensDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.accesstokens.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminAccesstokensDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.accesstokens.delete.$post> },
      ) => parseResponse(client.admin.accesstokens.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminAccesstokensDeleteKey() {
  return ['admin', '/admin/accesstokens/delete', 'OPTIONS'] as const
}

export function useOptionsAdminAccesstokensDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.accesstokens.delete.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminAccesstokensDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.accesstokens.delete.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminAccesstokensCreateKey() {
  return ['admin', '/admin/accesstokens/create', 'POST'] as const
}

export function usePostAdminAccesstokensCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.accesstokens.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminAccesstokensCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.accesstokens.create.$post> },
      ) => parseResponse(client.admin.accesstokens.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminAccesstokensCreateKey() {
  return ['admin', '/admin/accesstokens/create', 'OPTIONS'] as const
}

export function useOptionsAdminAccesstokensCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.accesstokens.create.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminAccesstokensCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.accesstokens.create.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminYpResetKey() {
  return ['admin', '/admin/yp/reset', 'POST'] as const
}

export function usePostAdminYpReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.yp.reset.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminYpResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.yp.reset.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminYpResetKey() {
  return ['admin', '/admin/yp/reset', 'OPTIONS'] as const
}

export function useOptionsAdminYpReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.yp.reset.$options>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminYpResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.yp.reset.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminMetricsVideoKey() {
  return ['admin', '/admin/metrics/video'] as const
}

export function useGetAdminMetricsVideo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminMetricsVideoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.metrics.video.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminMetricsVideo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminMetricsVideoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.metrics.video.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminMetricsVideoKey() {
  return ['admin', '/admin/metrics/video', 'OPTIONS'] as const
}

export function useOptionsAdminMetricsVideo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminMetricsVideoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.metrics.video.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFederationSendKey() {
  return ['admin', '/admin/federation/send', 'POST'] as const
}

export function usePostAdminFederationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.federation.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFederationSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.federation.send.$post> },
      ) => parseResponse(client.admin.federation.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAdminFederationSendKey() {
  return ['admin', '/admin/federation/send', 'OPTIONS'] as const
}

export function useOptionsAdminFederationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.send.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFederationSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.federation.send.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFederationActionsKey(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
) {
  return ['admin', '/admin/federation/actions', args] as const
}

export function useGetAdminFederationActions<TError = unknown>(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
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
        ? getGetAdminFederationActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.federation.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFederationActions<TError = unknown>(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
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
        ? getGetAdminFederationActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.federation.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAdminFederationActionsKey() {
  return ['admin', '/admin/federation/actions', 'OPTIONS'] as const
}

export function useOptionsAdminFederationActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAdminFederationActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.federation.actions.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsChatSystemKey() {
  return ['integrations', '/integrations/chat/system', 'POST'] as const
}

export function usePostIntegrationsChatSystem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.system.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.chat.system.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsChatSystemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.chat.system.$post> },
      ) => parseResponse(client.integrations.chat.system.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsChatSystemKey() {
  return ['integrations', '/integrations/chat/system', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChatSystem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.system.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatSystemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.chat.system.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsChatSystemClientClientIdKey() {
  return ['integrations', '/integrations/chat/system/client/:clientId', 'POST'] as const
}

export function usePostIntegrationsChatSystemClientClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsChatSystemClientClientIdKey()
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
            (typeof client.integrations.chat.system.client)[':clientId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.integrations.chat.system.client[':clientId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsChatSystemClientClientIdKey() {
  return ['integrations', '/integrations/chat/system/client/:clientId', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChatSystemClientClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.chat.system.client)[':clientId']['$options']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatSystemClientClientIdKey()
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
            (typeof client.integrations.chat.system.client)[':clientId']['$options']
          >
        },
      ) =>
        parseResponse(
          client.integrations.chat.system.client[':clientId'].$options(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsChatUserKey() {
  return ['integrations', '/integrations/chat/user', 'POST'] as const
}

export function usePostIntegrationsChatUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.user.$post>>>
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
  const swrKey = customKey ?? getPostIntegrationsChatUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.chat.user.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsChatUserKey() {
  return ['integrations', '/integrations/chat/user', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChatUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.user.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.chat.user.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsChatSendKey() {
  return ['integrations', '/integrations/chat/send', 'POST'] as const
}

export function usePostIntegrationsChatSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.chat.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsChatSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.chat.send.$post> },
      ) => parseResponse(client.integrations.chat.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsChatSendKey() {
  return ['integrations', '/integrations/chat/send', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChatSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.send.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.chat.send.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsChatActionKey() {
  return ['integrations', '/integrations/chat/action', 'POST'] as const
}

export function usePostIntegrationsChatAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.action.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.chat.action.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsChatActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.chat.action.$post> },
      ) => parseResponse(client.integrations.chat.action.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsChatActionKey() {
  return ['integrations', '/integrations/chat/action', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChatAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.action.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.chat.action.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsChatMessagevisibilityKey() {
  return ['integrations', '/integrations/chat/messagevisibility', 'POST'] as const
}

export function usePostIntegrationsChatMessagevisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.integrations.chat.messagevisibility.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.chat.messagevisibility.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsChatMessagevisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.chat.messagevisibility.$post> },
      ) => parseResponse(client.integrations.chat.messagevisibility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsChatMessagevisibilityKey() {
  return ['integrations', '/integrations/chat/messagevisibility', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChatMessagevisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.integrations.chat.messagevisibility.$options>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatMessagevisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.integrations.chat.messagevisibility.$options(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsStatusKey() {
  return ['integrations', '/integrations/status'] as const
}

export function useGetIntegrationsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationsStreamtitleKey() {
  return ['integrations', '/integrations/streamtitle', 'POST'] as const
}

export function usePostIntegrationsStreamtitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.streamtitle.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.streamtitle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsStreamtitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.streamtitle.$post> },
      ) => parseResponse(client.integrations.streamtitle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsIntegrationsStreamtitleKey() {
  return ['integrations', '/integrations/streamtitle', 'OPTIONS'] as const
}

export function useOptionsIntegrationsStreamtitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.streamtitle.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsStreamtitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.streamtitle.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsChatKey() {
  return ['integrations', '/integrations/chat'] as const
}

export function useGetIntegrationsChat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsChatKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.chat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsChat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsChatKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.chat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsIntegrationsChatKey() {
  return ['integrations', '/integrations/chat', 'OPTIONS'] as const
}

export function useOptionsIntegrationsChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.chat.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsClientsKey() {
  return ['integrations', '/integrations/clients'] as const
}

export function useGetIntegrationsClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>>
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
        ? getGetIntegrationsClientsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>>
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
        ? getGetIntegrationsClientsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsIntegrationsClientsKey() {
  return ['integrations', '/integrations/clients', 'OPTIONS'] as const
}

export function useOptionsIntegrationsClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$options>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsIntegrationsClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.integrations.clients.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsModerationChatUserUserIdKey(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
) {
  return ['integrations', '/integrations/moderation/chat/user/:userId', args] as const
}

export function useGetIntegrationsModerationChatUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>
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
        ? getGetIntegrationsModerationChatUserUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations.moderation.chat.user[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsModerationChatUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>
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
        ? getGetIntegrationsModerationChatUserUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations.moderation.chat.user[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetModerationChatUserUserIdKey(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
) {
  return ['moderation', '/moderation/chat/user/:userId', args] as const
}

export function useGetModerationChatUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
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
        ? getGetModerationChatUserUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.chat.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModerationChatUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
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
        ? getGetModerationChatUserUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.moderation.chat.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthIndieauthKey() {
  return ['auth', '/auth/indieauth', 'POST'] as const
}

export function usePostAuthIndieauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.indieauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthIndieauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.indieauth.$post> }) =>
        parseResponse(client.auth.indieauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthIndieauthCallbackKey(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
) {
  return ['auth', '/auth/indieauth/callback', args] as const
}

export function useGetAuthIndieauthCallback<TError = unknown>(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
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
        ? getGetAuthIndieauthCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.indieauth.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthIndieauthCallback<TError = unknown>(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
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
        ? getGetAuthIndieauthCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.indieauth.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthProviderIndieauthKey(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
) {
  return ['auth', '/auth/provider/indieauth', args] as const
}

export function useGetAuthProviderIndieauth<TError = unknown>(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
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
        ? getGetAuthProviderIndieauthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.provider.indieauth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthProviderIndieauth<TError = unknown>(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
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
        ? getGetAuthProviderIndieauthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.provider.indieauth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthProviderIndieauthKey() {
  return ['auth', '/auth/provider/indieauth', 'POST'] as const
}

export function usePostAuthProviderIndieauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.provider.indieauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthProviderIndieauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.auth.provider.indieauth.$post> },
      ) => parseResponse(client.auth.provider.indieauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthFediverseKey() {
  return ['auth', '/auth/fediverse', 'POST'] as const
}

export function usePostAuthFediverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.fediverse.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.fediverse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthFediverseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.fediverse.$post> }) =>
        parseResponse(client.auth.fediverse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthFediverseVerifyKey() {
  return ['auth', '/auth/fediverse/verify', 'POST'] as const
}

export function usePostAuthFediverseVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.fediverse.verify.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.fediverse.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthFediverseVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.auth.fediverse.verify.$post> },
      ) => parseResponse(client.auth.fediverse.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
