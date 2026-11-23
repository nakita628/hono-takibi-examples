import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChannelKey() {
  return ['channel'] as const
}

export function getConnKey() {
  return ['conn'] as const
}

export function getConnzKey() {
  return ['connz'] as const
}

export function getConversationKey() {
  return ['conversation'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getManagerKey() {
  return ['manager'] as const
}

export function getMessageKey() {
  return ['message'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMigrateKey() {
  return ['migrate'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getTagKey() {
  return ['tag'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTmpchannelKey() {
  return ['tmpchannel'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVarzKey() {
  return ['varz'] as const
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMigrateResultKey() {
  return ['migrate', '/migrate/result'] as const
}

export function useGetMigrateResult<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMigrateResultKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.migrate.result.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMigrateResult<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMigrateResultKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrate.result.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.migrate.result.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocsKey() {
  return ['docs', '/docs'] as const
}

export function useGetDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocsOpenapiJsonKey() {
  return ['docs', '/docs/openapi.json'] as const
}

export function useGetDocsOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocsOpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocsOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocsOpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docs)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocsHealthKey() {
  return ['docs', '/docs/health'] as const
}

export function useGetDocsHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocsHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocsHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocsHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRouteKey(args: InferRequestType<typeof client.route.$get>) {
  return ['route', '/route', args] as const
}

export function useGetRoute<TError = unknown>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.route.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoute<TError = unknown>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.route.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRouteBatchKey() {
  return ['route', '/route/batch', 'POST'] as const
}

export function usePostRouteBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.batch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.route.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.route.batch.$post> }) =>
        parseResponse(client.route.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserTokenKey() {
  return ['user', '/user/token', 'POST'] as const
}

export function usePostUserToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.token.$post> }) =>
        parseResponse(client.user.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserDeviceQuitKey() {
  return ['user', '/user/device_quit', 'POST'] as const
}

export function usePostUserDeviceQuit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.device_quit.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.device_quit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserDeviceQuitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.device_quit.$post> }) =>
        parseResponse(client.user.device_quit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserOnlinestatusKey() {
  return ['user', '/user/onlinestatus', 'POST'] as const
}

export function usePostUserOnlinestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.onlinestatus.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.onlinestatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserOnlinestatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.onlinestatus.$post> }) =>
        parseResponse(client.user.onlinestatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserSystemuidsKey() {
  return ['user', '/user/systemuids'] as const
}

export function useGetUserSystemuids<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserSystemuidsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.systemuids.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSystemuids<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserSystemuidsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.systemuids.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserSystemuidsAddKey() {
  return ['user', '/user/systemuids_add', 'POST'] as const
}

export function usePostUserSystemuidsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.systemuids_add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSystemuidsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.systemuids_add.$post> }) =>
        parseResponse(client.user.systemuids_add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserSystemuidsRemoveKey() {
  return ['user', '/user/systemuids_remove', 'POST'] as const
}

export function usePostUserSystemuidsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.systemuids_remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSystemuidsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.systemuids_remove.$post> },
      ) => parseResponse(client.user.systemuids_remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserSystemuidsAddToCacheKey() {
  return ['user', '/user/systemuids_add_to_cache', 'POST'] as const
}

export function usePostUserSystemuidsAddToCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.systemuids_add_to_cache.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.systemuids_add_to_cache.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSystemuidsAddToCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.systemuids_add_to_cache.$post> },
      ) => parseResponse(client.user.systemuids_add_to_cache.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserSystemuidsRemoveFromCacheKey() {
  return ['user', '/user/systemuids_remove_from_cache', 'POST'] as const
}

export function usePostUserSystemuidsRemoveFromCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user.systemuids_remove_from_cache.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.systemuids_remove_from_cache.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSystemuidsRemoveFromCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.systemuids_remove_from_cache.$post> },
      ) => parseResponse(client.user.systemuids_remove_from_cache.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserUpdatePluginNoKey() {
  return ['user', '/user/update_plugin_no', 'POST'] as const
}

export function usePostUserUpdatePluginNo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.update_plugin_no.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.update_plugin_no.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUpdatePluginNoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.update_plugin_no.$post> },
      ) => parseResponse(client.user.update_plugin_no.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnRemoveKey() {
  return ['conn', '/conn/remove', 'POST'] as const
}

export function usePostConnRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.remove.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.conn.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conn.remove.$post> }) =>
        parseResponse(client.conn.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnKickKey() {
  return ['conn', '/conn/kick', 'POST'] as const
}

export function usePostConnKick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conn.kick.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.conn.kick.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnKickKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conn.kick.$post> }) =>
        parseResponse(client.conn.kick.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelKey() {
  return ['channel', '/channel', 'POST'] as const
}

export function usePostChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.channel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channel.$post> }) =>
        parseResponse(client.channel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelInfoKey() {
  return ['channel', '/channel/info', 'POST'] as const
}

export function usePostChannelInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channel.info.$post> }) =>
        parseResponse(client.channel.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelDeleteKey() {
  return ['channel', '/channel/delete', 'POST'] as const
}

export function usePostChannelDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channel.delete.$post> }) =>
        parseResponse(client.channel.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelSubscriberAddKey() {
  return ['channel', '/channel/subscriber_add', 'POST'] as const
}

export function usePostChannelSubscriberAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.subscriber_add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelSubscriberAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.subscriber_add.$post> },
      ) => parseResponse(client.channel.subscriber_add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelSubscriberRemoveKey() {
  return ['channel', '/channel/subscriber_remove', 'POST'] as const
}

export function usePostChannelSubscriberRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.subscriber_remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelSubscriberRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.subscriber_remove.$post> },
      ) => parseResponse(client.channel.subscriber_remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelSubscriberRemoveAllKey() {
  return ['channel', '/channel/subscriber_remove_all', 'POST'] as const
}

export function usePostChannelSubscriberRemoveAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.subscriber_remove_all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.subscriber_remove_all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelSubscriberRemoveAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.subscriber_remove_all.$post> },
      ) => parseResponse(client.channel.subscriber_remove_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTmpchannelSubscriberSetKey() {
  return ['tmpchannel', '/tmpchannel/subscriber_set', 'POST'] as const
}

export function usePostTmpchannelSubscriberSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tmpchannel.subscriber_set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tmpchannel.subscriber_set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTmpchannelSubscriberSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tmpchannel.subscriber_set.$post> },
      ) => parseResponse(client.tmpchannel.subscriber_set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageSendKey() {
  return ['message', '/message/send', 'POST'] as const
}

export function usePostMessageSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.send.$post> }) =>
        parseResponse(client.message.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageSendbatchKey() {
  return ['message', '/message/sendbatch', 'POST'] as const
}

export function usePostMessageSendbatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.sendbatch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message.sendbatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageSendbatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.sendbatch.$post> }) =>
        parseResponse(client.message.sendbatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageSyncKey() {
  return ['message', '/message/sync', 'POST'] as const
}

export function usePostMessageSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.sync.$post> }) =>
        parseResponse(client.message.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageSyncackKey() {
  return ['message', '/message/syncack', 'POST'] as const
}

export function usePostMessageSyncack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.syncack.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message.syncack.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageSyncackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.syncack.$post> }) =>
        parseResponse(client.message.syncack.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function usePostMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.$post> }) =>
        parseResponse(client.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageKey() {
  return ['message', '/message', 'POST'] as const
}

export function usePostMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.message.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.$post> }) =>
        parseResponse(client.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageEventKey() {
  return ['message', '/message/event', 'POST'] as const
}

export function usePostMessageEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.event.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message.event.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageEventKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.event.$post> }) =>
        parseResponse(client.message.event.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessageEventsyncKey() {
  return ['message', '/message/eventsync', 'POST'] as const
}

export function usePostMessageEventsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.message.eventsync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.message.eventsync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessageEventsyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.message.eventsync.$post> }) =>
        parseResponse(client.message.eventsync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelMessagesyncKey() {
  return ['channel', '/channel/messagesync', 'POST'] as const
}

export function usePostChannelMessagesync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.messagesync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.messagesync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelMessagesyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channel.messagesync.$post> }) =>
        parseResponse(client.channel.messagesync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelMaxMessageSeqKey(
  args: InferRequestType<typeof client.channel.max_message_seq.$get>,
) {
  return ['channel', '/channel/max_message_seq', args] as const
}

export function useGetChannelMaxMessageSeq<TError = unknown>(
  args: InferRequestType<typeof client.channel.max_message_seq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
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
        ? getGetChannelMaxMessageSeqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel.max_message_seq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelMaxMessageSeq<TError = unknown>(
  args: InferRequestType<typeof client.channel.max_message_seq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
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
        ? getGetChannelMaxMessageSeqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.max_message_seq.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel.max_message_seq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelLastMessageKey(
  args: InferRequestType<typeof client.channel.last_message.$get>,
) {
  return ['channel', '/channel/last_message', args] as const
}

export function useGetChannelLastMessage<TError = unknown>(
  args: InferRequestType<typeof client.channel.last_message.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
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
        ? getGetChannelLastMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel.last_message.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelLastMessage<TError = unknown>(
  args: InferRequestType<typeof client.channel.last_message.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
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
        ? getGetChannelLastMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.channel.last_message.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel.last_message.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsClearUnreadKey() {
  return ['conversations', '/conversations/clearUnread', 'POST'] as const
}

export function usePostConversationsClearUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.clearUnread.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.clearUnread.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsClearUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.clearUnread.$post> },
      ) => parseResponse(client.conversations.clearUnread.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsSetUnreadKey() {
  return ['conversations', '/conversations/setUnread', 'POST'] as const
}

export function usePostConversationsSetUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.setUnread.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.setUnread.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsSetUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.setUnread.$post> },
      ) => parseResponse(client.conversations.setUnread.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsDeleteKey() {
  return ['conversations', '/conversations/delete', 'POST'] as const
}

export function usePostConversationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.delete.$post> },
      ) => parseResponse(client.conversations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationListKey() {
  return ['conversation', '/conversation/list', 'POST'] as const
}

export function usePostConversationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversation.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversation.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conversation.list.$post> }) =>
        parseResponse(client.conversation.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationSyncKey() {
  return ['conversation', '/conversation/sync', 'POST'] as const
}

export function usePostConversationSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversation.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversation.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conversation.sync.$post> }) =>
        parseResponse(client.conversation.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsActivateKey() {
  return ['conversations', '/conversations/activate', 'POST'] as const
}

export function usePostConversationsActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.activate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.activate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.activate.$post> },
      ) => parseResponse(client.conversations.activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnzKey(args: InferRequestType<typeof client.connz.$get>) {
  return ['connz', '/connz', args] as const
}

export function useGetConnz<TError = unknown>(
  args: InferRequestType<typeof client.connz.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnzKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.connz.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConnz<TError = unknown>(
  args: InferRequestType<typeof client.connz.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnzKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connz.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.connz.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVarzKey(args: InferRequestType<typeof client.varz.$get>) {
  return ['varz', '/varz', args] as const
}

export function useGetVarz<TError = unknown>(
  args: InferRequestType<typeof client.varz.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarzKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.varz.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVarz<TError = unknown>(
  args: InferRequestType<typeof client.varz.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarzKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.varz.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChannelBlacklistAddKey() {
  return ['channel', '/channel/blacklist_add', 'POST'] as const
}

export function usePostChannelBlacklistAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.blacklist_add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelBlacklistAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.blacklist_add.$post> },
      ) => parseResponse(client.channel.blacklist_add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelBlacklistSetKey() {
  return ['channel', '/channel/blacklist_set', 'POST'] as const
}

export function usePostChannelBlacklistSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.blacklist_set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelBlacklistSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.blacklist_set.$post> },
      ) => parseResponse(client.channel.blacklist_set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelBlacklistRemoveKey() {
  return ['channel', '/channel/blacklist_remove', 'POST'] as const
}

export function usePostChannelBlacklistRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.blacklist_remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelBlacklistRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.blacklist_remove.$post> },
      ) => parseResponse(client.channel.blacklist_remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelBlacklistRemoveAllKey() {
  return ['channel', '/channel/blacklist_remove_all', 'POST'] as const
}

export function usePostChannelBlacklistRemoveAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.blacklist_remove_all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.blacklist_remove_all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelBlacklistRemoveAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.blacklist_remove_all.$post> },
      ) => parseResponse(client.channel.blacklist_remove_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelWhitelistAddKey() {
  return ['channel', '/channel/whitelist_add', 'POST'] as const
}

export function usePostChannelWhitelistAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.whitelist_add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelWhitelistAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.whitelist_add.$post> },
      ) => parseResponse(client.channel.whitelist_add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelWhitelistSetKey() {
  return ['channel', '/channel/whitelist_set', 'POST'] as const
}

export function usePostChannelWhitelistSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_set.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.whitelist_set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelWhitelistSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.whitelist_set.$post> },
      ) => parseResponse(client.channel.whitelist_set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelWhitelistRemoveKey() {
  return ['channel', '/channel/whitelist_remove', 'POST'] as const
}

export function usePostChannelWhitelistRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.whitelist_remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelWhitelistRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.whitelist_remove.$post> },
      ) => parseResponse(client.channel.whitelist_remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelWhitelistRemoveAllKey() {
  return ['channel', '/channel/whitelist_remove_all', 'POST'] as const
}

export function usePostChannelWhitelistRemoveAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist_remove_all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel.whitelist_remove_all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelWhitelistRemoveAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel.whitelist_remove_all.$post> },
      ) => parseResponse(client.channel.whitelist_remove_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelWhitelistKey(
  args: InferRequestType<typeof client.channel.whitelist.$get>,
) {
  return ['channel', '/channel/whitelist', args] as const
}

export function useGetChannelWhitelist<TError = unknown>(
  args: InferRequestType<typeof client.channel.whitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
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
        ? getGetChannelWhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel.whitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelWhitelist<TError = unknown>(
  args: InferRequestType<typeof client.channel.whitelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
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
        ? getGetChannelWhitelistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.whitelist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel.whitelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagKey(args: InferRequestType<typeof client.tag.$get>) {
  return ['tag', '/tag', args] as const
}

export function useGetTag<TError = unknown>(
  args: InferRequestType<typeof client.tag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tag.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTag<TError = unknown>(
  args: InferRequestType<typeof client.tag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tag.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagRemoveKey() {
  return ['tag', '/tag/remove', 'POST'] as const
}

export function usePostTagRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.remove.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tag.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tag.remove.$post> }) =>
        parseResponse(client.tag.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey() {
  return ['tags', '/tags'] as const
}

export function useGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostManagerLoginKey() {
  return ['manager', '/manager/login', 'POST'] as const
}

export function usePostManagerLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.manager.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.manager.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostManagerLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.manager.login.$post> }) =>
        parseResponse(client.manager.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVarzSettingKey() {
  return ['varz', '/varz/setting'] as const
}

export function useGetVarzSetting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarzSettingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.varz.setting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVarzSetting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarzSettingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.varz.setting.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.varz.setting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
