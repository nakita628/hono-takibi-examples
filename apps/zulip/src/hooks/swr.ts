import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAttachmentsKey() {
  return ['attachments'] as const
}

export function getBotStorageKey() {
  return ['bot_storage'] as const
}

export function getBotsKey() {
  return ['bots'] as const
}

export function getCallsKey() {
  return ['calls'] as const
}

export function getChannelFoldersKey() {
  return ['channel_folders'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getDefaultStreamsKey() {
  return ['default_streams'] as const
}

export function getDevFetchApiKeyKey() {
  return ['dev_fetch_api_key'] as const
}

export function getDevListUsersKey() {
  return ['dev_list_users'] as const
}

export function getDraftsKey() {
  return ['drafts'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getFetchApiKeyKey() {
  return ['fetch_api_key'] as const
}

export function getGetStreamIdKey() {
  return ['get_stream_id'] as const
}

export function getInvitesKey() {
  return ['invites'] as const
}

export function getJwtKey() {
  return ['jwt'] as const
}

export function getMarkAllAsReadKey() {
  return ['mark_all_as_read'] as const
}

export function getMarkStreamAsReadKey() {
  return ['mark_stream_as_read'] as const
}

export function getMarkTopicAsReadKey() {
  return ['mark_topic_as_read'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMobilePushKey() {
  return ['mobile_push'] as const
}

export function getNavigationViewsKey() {
  return ['navigation_views'] as const
}

export function getRealTimeKey() {
  return ['real-time'] as const
}

export function getRealmKey() {
  return ['realm'] as const
}

export function getRegisterKey() {
  return ['register'] as const
}

export function getRegisterClientDeviceKey() {
  return ['register_client_device'] as const
}

export function getRemindersKey() {
  return ['reminders'] as const
}

export function getRemotesKey() {
  return ['remotes'] as const
}

export function getRemoveClientDeviceKey() {
  return ['remove_client_device'] as const
}

export function getRestErrorHandlingKey() {
  return ['rest-error-handling'] as const
}

export function getSavedSnippetsKey() {
  return ['saved_snippets'] as const
}

export function getScheduledMessagesKey() {
  return ['scheduled_messages'] as const
}

export function getServerSettingsKey() {
  return ['server_settings'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getStreamsKey() {
  return ['streams'] as const
}

export function getThumbnailKey() {
  return ['thumbnail'] as const
}

export function getTypingKey() {
  return ['typing'] as const
}

export function getUserGroupsKey() {
  return ['user_groups'] as const
}

export function getUserTopicsKey() {
  return ['user_topics'] as const
}

export function getUserUploadsKey() {
  return ['user_uploads'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getZulipOutgoingWebhookKey() {
  return ['zulip-outgoing-webhook'] as const
}

export function getPostFetchApiKeyKey() {
  return ['fetch_api_key', '/fetch_api_key', 'POST'] as const
}

export function usePostFetchApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fetch_api_key.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fetch_api_key.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFetchApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fetch_api_key.$post> }) =>
        parseResponse(client.fetch_api_key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJwtFetchApiKeyKey() {
  return ['jwt', '/jwt/fetch_api_key', 'POST'] as const
}

export function usePostJwtFetchApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt.fetch_api_key.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.jwt.fetch_api_key.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJwtFetchApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jwt.fetch_api_key.$post> }) =>
        parseResponse(client.jwt.fetch_api_key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDevFetchApiKeyKey() {
  return ['dev_fetch_api_key', '/dev_fetch_api_key', 'POST'] as const
}

export function usePostDevFetchApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_fetch_api_key.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dev_fetch_api_key.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDevFetchApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dev_fetch_api_key.$post> }) =>
        parseResponse(client.dev_fetch_api_key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevListUsersKey() {
  return ['dev_list_users', '/dev_list_users'] as const
}

export function useGetDevListUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevListUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dev_list_users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevListUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevListUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dev_list_users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteEventsKey() {
  return ['events', '/events', 'DELETE'] as const
}

export function useDeleteEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.$delete> }) =>
        parseResponse(client.events.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetStreamIdKey(args: InferRequestType<typeof client.get_stream_id.$get>) {
  return ['get_stream_id', '/get_stream_id', args] as const
}

export function useGetGetStreamId<TError = unknown>(
  args: InferRequestType<typeof client.get_stream_id.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetStreamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_stream_id.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetStreamId<TError = unknown>(
  args: InferRequestType<typeof client.get_stream_id.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetStreamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.get_stream_id.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarkAllAsReadKey() {
  return ['mark_all_as_read', '/mark_all_as_read', 'POST'] as const
}

export function usePostMarkAllAsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mark_all_as_read.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarkAllAsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mark_all_as_read.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarkStreamAsReadKey() {
  return ['mark_stream_as_read', '/mark_stream_as_read', 'POST'] as const
}

export function usePostMarkStreamAsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mark_stream_as_read.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mark_stream_as_read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarkStreamAsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mark_stream_as_read.$post> }) =>
        parseResponse(client.mark_stream_as_read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarkTopicAsReadKey() {
  return ['mark_topic_as_read', '/mark_topic_as_read', 'POST'] as const
}

export function usePostMarkTopicAsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mark_topic_as_read.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mark_topic_as_read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarkTopicAsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mark_topic_as_read.$post> }) =>
        parseResponse(client.mark_topic_as_read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttachmentsKey() {
  return ['attachments', '/attachments'] as const
}

export function useGetAttachments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAttachmentsAttachmentIdKey() {
  return ['attachments', '/attachments/:attachment_id', 'DELETE'] as const
}

export function useDeleteAttachmentsAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachment_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':attachment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttachmentsAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attachments)[':attachment_id']['$delete']> },
      ) => parseResponse(client.attachments[':attachment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotStorageKey(args: InferRequestType<typeof client.bot_storage.$get>) {
  return ['bot_storage', '/bot_storage', args] as const
}

export function useGetBotStorage<TError = unknown>(
  args: InferRequestType<typeof client.bot_storage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBotStorageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bot_storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotStorage<TError = unknown>(
  args: InferRequestType<typeof client.bot_storage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBotStorageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bot_storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBotStorageKey() {
  return ['bot_storage', '/bot_storage', 'PUT'] as const
}

export function usePutBotStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bot_storage.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bot_storage.$put> }) =>
        parseResponse(client.bot_storage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotStorageKey() {
  return ['bot_storage', '/bot_storage', 'DELETE'] as const
}

export function useDeleteBotStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bot_storage.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bot_storage.$delete> }) =>
        parseResponse(client.bot_storage.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDraftsKey() {
  return ['drafts', '/drafts'] as const
}

export function useGetDrafts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drafts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDrafts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDraftsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drafts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDraftsKey() {
  return ['drafts', '/drafts', 'POST'] as const
}

export function usePostDrafts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.drafts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDraftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.drafts.$post> }) =>
        parseResponse(client.drafts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDraftsDraftIdKey() {
  return ['drafts', '/drafts/:draft_id', 'DELETE'] as const
}

export function useDeleteDraftsDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drafts)[':draft_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.drafts)[':draft_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDraftsDraftIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.drafts)[':draft_id']['$delete']> },
      ) => parseResponse(client.drafts[':draft_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDraftsDraftIdKey() {
  return ['drafts', '/drafts/:draft_id', 'PATCH'] as const
}

export function usePatchDraftsDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drafts)[':draft_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.drafts)[':draft_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDraftsDraftIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.drafts)[':draft_id']['$patch']> },
      ) => parseResponse(client.drafts[':draft_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNavigationViewsKey() {
  return ['navigation_views', '/navigation_views'] as const
}

export function useGetNavigationViews<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNavigationViewsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.navigation_views.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNavigationViews<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNavigationViewsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.navigation_views.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNavigationViewsKey() {
  return ['navigation_views', '/navigation_views', 'POST'] as const
}

export function usePostNavigationViews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.navigation_views.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNavigationViewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.navigation_views.$post> }) =>
        parseResponse(client.navigation_views.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNavigationViewsFragmentKey() {
  return ['navigation_views', '/navigation_views/:fragment', 'DELETE'] as const
}

export function useDeleteNavigationViewsFragment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.navigation_views)[':fragment']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.navigation_views)[':fragment']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNavigationViewsFragmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.navigation_views)[':fragment']['$delete']> },
      ) => parseResponse(client.navigation_views[':fragment'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNavigationViewsFragmentKey() {
  return ['navigation_views', '/navigation_views/:fragment', 'PATCH'] as const
}

export function usePatchNavigationViewsFragment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.navigation_views)[':fragment']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.navigation_views)[':fragment']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNavigationViewsFragmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.navigation_views)[':fragment']['$patch']> },
      ) => parseResponse(client.navigation_views[':fragment'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSavedSnippetsKey() {
  return ['saved_snippets', '/saved_snippets'] as const
}

export function useGetSavedSnippets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSavedSnippetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_snippets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedSnippets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSavedSnippetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_snippets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSavedSnippetsKey() {
  return ['saved_snippets', '/saved_snippets', 'POST'] as const
}

export function usePostSavedSnippets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.saved_snippets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSavedSnippetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saved_snippets.$post> }) =>
        parseResponse(client.saved_snippets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSavedSnippetsSavedSnippetIdKey() {
  return ['saved_snippets', '/saved_snippets/:saved_snippet_id', 'DELETE'] as const
}

export function useDeleteSavedSnippetsSavedSnippetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSavedSnippetsSavedSnippetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>
        },
      ) => parseResponse(client.saved_snippets[':saved_snippet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSavedSnippetsSavedSnippetIdKey() {
  return ['saved_snippets', '/saved_snippets/:saved_snippet_id', 'PATCH'] as const
}

export function usePatchSavedSnippetsSavedSnippetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSavedSnippetsSavedSnippetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']> },
      ) => parseResponse(client.saved_snippets[':saved_snippet_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRemindersKey() {
  return ['reminders', '/reminders'] as const
}

export function useGetReminders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRemindersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reminders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReminders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRemindersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reminders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRemindersKey() {
  return ['reminders', '/reminders', 'POST'] as const
}

export function usePostReminders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reminders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemindersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reminders.$post> }) =>
        parseResponse(client.reminders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRemindersReminderIdKey() {
  return ['reminders', '/reminders/:reminder_id', 'DELETE'] as const
}

export function useDeleteRemindersReminderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reminders)[':reminder_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reminders)[':reminder_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRemindersReminderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reminders)[':reminder_id']['$delete']> },
      ) => parseResponse(client.reminders[':reminder_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduledMessagesKey() {
  return ['scheduled_messages', '/scheduled_messages'] as const
}

export function useGetScheduledMessages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduledMessagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scheduled_messages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduledMessages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScheduledMessagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scheduled_messages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScheduledMessagesKey() {
  return ['scheduled_messages', '/scheduled_messages', 'POST'] as const
}

export function usePostScheduledMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scheduled_messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduledMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scheduled_messages.$post> }) =>
        parseResponse(client.scheduled_messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScheduledMessagesScheduledMessageIdKey() {
  return ['scheduled_messages', '/scheduled_messages/:scheduled_message_id', 'DELETE'] as const
}

export function useDeleteScheduledMessagesScheduledMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.scheduled_messages)[':scheduled_message_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScheduledMessagesScheduledMessageIdKey()
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
            (typeof client.scheduled_messages)[':scheduled_message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.scheduled_messages[':scheduled_message_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchScheduledMessagesScheduledMessageIdKey() {
  return ['scheduled_messages', '/scheduled_messages/:scheduled_message_id', 'PATCH'] as const
}

export function usePatchScheduledMessagesScheduledMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScheduledMessagesScheduledMessageIdKey()
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
            (typeof client.scheduled_messages)[':scheduled_message_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.scheduled_messages[':scheduled_message_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDefaultStreamsKey() {
  return ['default_streams', '/default_streams', 'POST'] as const
}

export function usePostDefaultStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.default_streams.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.default_streams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDefaultStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.default_streams.$post> }) =>
        parseResponse(client.default_streams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDefaultStreamsKey() {
  return ['default_streams', '/default_streams', 'DELETE'] as const
}

export function useDeleteDefaultStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.default_streams.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.default_streams.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDefaultStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.default_streams.$delete> }) =>
        parseResponse(client.default_streams.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesKey(args: InferRequestType<typeof client.messages.$get>) {
  return ['messages', '/messages', args] as const
}

export function useGetMessages<TError = unknown>(
  args: InferRequestType<typeof client.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.messages.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMessages<TError = unknown>(
  args: InferRequestType<typeof client.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.messages.$get(args, clientOptions)), restSwrOptions),
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

export function getGetMessagesMessageIdHistoryKey(
  args: InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>,
) {
  return ['messages', '/messages/:message_id/history', args] as const
}

export function useGetMessagesMessageIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
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
        ? getGetMessagesMessageIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':message_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesMessageIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
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
        ? getGetMessagesMessageIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':message_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagesFlagsKey() {
  return ['messages', '/messages/flags', 'POST'] as const
}

export function usePostMessagesFlags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.flags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.flags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesFlagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.flags.$post> }) =>
        parseResponse(client.messages.flags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesFlagsNarrowKey() {
  return ['messages', '/messages/flags/narrow', 'POST'] as const
}

export function usePostMessagesFlagsNarrow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.flags.narrow.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.flags.narrow.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesFlagsNarrowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messages.flags.narrow.$post> },
      ) => parseResponse(client.messages.flags.narrow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesRenderKey() {
  return ['messages', '/messages/render', 'POST'] as const
}

export function usePostMessagesRender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.render.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.render.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesRenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.render.$post> }) =>
        parseResponse(client.messages.render.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesMessageIdReactionsKey() {
  return ['messages', '/messages/:message_id/reactions', 'POST'] as const
}

export function usePostMessagesMessageIdReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['reactions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':message_id']['reactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesMessageIdReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.messages)[':message_id']['reactions']['$post']> },
      ) => parseResponse(client.messages[':message_id'].reactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMessagesMessageIdReactionsKey() {
  return ['messages', '/messages/:message_id/reactions', 'DELETE'] as const
}

export function useDeleteMessagesMessageIdReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['reactions']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':message_id']['reactions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagesMessageIdReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messages)[':message_id']['reactions']['$delete']>
        },
      ) => parseResponse(client.messages[':message_id'].reactions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesMessageIdReadReceiptsKey(
  args: InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>,
) {
  return ['messages', '/messages/:message_id/read_receipts', args] as const
}

export function useGetMessagesMessageIdReadReceipts<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>>
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
        ? getGetMessagesMessageIdReadReceiptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messages[':message_id'].read_receipts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesMessageIdReadReceipts<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>>
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
        ? getGetMessagesMessageIdReadReceiptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messages[':message_id'].read_receipts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagesMatchesNarrowKey(
  args: InferRequestType<typeof client.messages.matches_narrow.$get>,
) {
  return ['messages', '/messages/matches_narrow', args] as const
}

export function useGetMessagesMatchesNarrow<TError = unknown>(
  args: InferRequestType<typeof client.messages.matches_narrow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
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
        ? getGetMessagesMatchesNarrowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.matches_narrow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesMatchesNarrow<TError = unknown>(
  args: InferRequestType<typeof client.messages.matches_narrow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
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
        ? getGetMessagesMatchesNarrowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.matches_narrow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagesMessageIdKey(
  args: InferRequestType<(typeof client.messages)[':message_id']['$get']>,
) {
  return ['messages', '/messages/:message_id', args] as const
}

export function useGetMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>>
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
        ? getGetMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>>
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
        ? getGetMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagesMessageIdKey() {
  return ['messages', '/messages/:message_id', 'DELETE'] as const
}

export function useDeleteMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)[':message_id']['$delete']> },
      ) => parseResponse(client.messages[':message_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagesMessageIdKey() {
  return ['messages', '/messages/:message_id', 'PATCH'] as const
}

export function usePatchMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':message_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)[':message_id']['$patch']> },
      ) => parseResponse(client.messages[':message_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesMessageIdReportKey() {
  return ['messages', '/messages/:message_id/report', 'POST'] as const
}

export function usePostMessagesMessageIdReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['report']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':message_id']['report']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesMessageIdReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.messages)[':message_id']['report']['$post']> },
      ) => parseResponse(client.messages[':message_id'].report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserUploadsKey() {
  return ['user_uploads', '/user_uploads', 'POST'] as const
}

export function usePostUserUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_uploads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user_uploads.$post> }) =>
        parseResponse(client.user_uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThumbnailStatusRealmIdStrFilenameKey(
  args: InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>,
) {
  return ['thumbnail', '/thumbnail/status/:realm_id_str/:filename', args] as const
}

export function useGetThumbnailStatusRealmIdStrFilename<TError = unknown>(
  args: InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
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
        ? getGetThumbnailStatusRealmIdStrFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.thumbnail.status[':realm_id_str'][':filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThumbnailStatusRealmIdStrFilename<TError = unknown>(
  args: InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
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
        ? getGetThumbnailStatusRealmIdStrFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.thumbnail.status[':realm_id_str'][':filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserUploadsRealmIdStrFilenameKey(
  args: InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>,
) {
  return ['user_uploads', '/user_uploads/:realm_id_str/:filename', args] as const
}

export function useGetUserUploadsRealmIdStrFilename<TError = unknown>(
  args: InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>>
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
        ? getGetUserUploadsRealmIdStrFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_uploads[':realm_id_str'][':filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUploadsRealmIdStrFilename<TError = unknown>(
  args: InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>>
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
        ? getGetUserUploadsRealmIdStrFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_uploads[':realm_id_str'][':filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdReactivateKey() {
  return ['users', '/users/:user_id/reactivate', 'POST'] as const
}

export function usePostUsersUserIdReactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['reactivate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdReactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']> },
      ) => parseResponse(client.users[':user_id'].reactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdStatusKey(
  args: InferRequestType<(typeof client.users)[':user_id']['status']['$get']>,
) {
  return ['users', '/users/:user_id/status', args] as const
}

export function useGetUsersUserIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
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
        ? getGetUsersUserIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
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
        ? getGetUsersUserIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdStatusKey() {
  return ['users', '/users/:user_id/status', 'POST'] as const
}

export function usePostUsersUserIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['status']['$post']> },
      ) => parseResponse(client.users[':user_id'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdOrEmailPresenceKey(
  args: InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>,
) {
  return ['users', '/users/:user_id_or_email/presence', args] as const
}

export function useGetUsersUserIdOrEmailPresence<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
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
        ? getGetUsersUserIdOrEmailPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id_or_email'].presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOrEmailPresence<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
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
        ? getGetUsersUserIdOrEmailPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id_or_email'].presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['users', '/users/me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersMeKey() {
  return ['users', '/users/me', 'DELETE'] as const
}

export function useDeleteUsersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.users.me.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeApiKeyRegenerateKey() {
  return ['users', '/users/me/api_key/regenerate', 'POST'] as const
}

export function usePostUsersMeApiKeyRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.api_key.regenerate.$post>>>
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
  const swrKey = customKey ?? getPostUsersMeApiKeyRegenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.users.me.api_key.regenerate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeAlertWordsKey() {
  return ['users', '/users/me/alert_words'] as const
}

export function useGetUsersMeAlertWords<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeAlertWordsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.alert_words.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeAlertWords<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeAlertWordsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.alert_words.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersMeAlertWordsKey() {
  return ['users', '/users/me/alert_words', 'POST'] as const
}

export function usePostUsersMeAlertWords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.alert_words.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeAlertWordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.alert_words.$post> },
      ) => parseResponse(client.users.me.alert_words.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeAlertWordsKey() {
  return ['users', '/users/me/alert_words', 'DELETE'] as const
}

export function useDeleteUsersMeAlertWords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.alert_words.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeAlertWordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.alert_words.$delete> },
      ) => parseResponse(client.users.me.alert_words.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMePresenceKey() {
  return ['users', '/users/me/presence', 'POST'] as const
}

export function usePostUsersMePresence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.presence.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.presence.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMePresenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.presence.$post> }) =>
        parseResponse(client.users.me.presence.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeProfileDataKey() {
  return ['users', '/users/me/profile_data', 'DELETE'] as const
}

export function useDeleteUsersMeProfileData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.profile_data.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.profile_data.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeProfileDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.profile_data.$delete> },
      ) => parseResponse(client.users.me.profile_data.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersMeProfileDataKey() {
  return ['users', '/users/me/profile_data', 'PATCH'] as const
}

export function usePatchUsersMeProfileData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.profile_data.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.profile_data.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersMeProfileDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.profile_data.$patch> },
      ) => parseResponse(client.users.me.profile_data.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeStatusKey() {
  return ['users', '/users/me/status', 'POST'] as const
}

export function usePostUsersMeStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.status.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.status.$post> }) =>
        parseResponse(client.users.me.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeStreamIdTopicsKey(
  args: InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>,
) {
  return ['users', '/users/me/:stream_id/topics', args] as const
}

export function useGetUsersMeStreamIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
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
        ? getGetUsersMeStreamIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me[':stream_id'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeStreamIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
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
        ? getGetUsersMeStreamIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me[':stream_id'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeSubscriptionsKey(
  args: InferRequestType<typeof client.users.me.subscriptions.$get>,
) {
  return ['users', '/users/me/subscriptions', args] as const
}

export function useGetUsersMeSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.users.me.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
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
        ? getGetUsersMeSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.users.me.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
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
        ? getGetUsersMeSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersMeSubscriptionsKey() {
  return ['users', '/users/me/subscriptions', 'POST'] as const
}

export function usePostUsersMeSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.subscriptions.$post> },
      ) => parseResponse(client.users.me.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeSubscriptionsKey() {
  return ['users', '/users/me/subscriptions', 'DELETE'] as const
}

export function useDeleteUsersMeSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.subscriptions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.subscriptions.$delete> },
      ) => parseResponse(client.users.me.subscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersMeSubscriptionsMutedTopicsKey() {
  return ['users', '/users/me/subscriptions/muted_topics', 'PATCH'] as const
}

export function usePatchUsersMeSubscriptionsMutedTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.users.me.subscriptions.muted_topics.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.subscriptions.muted_topics.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersMeSubscriptionsMutedTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.users.me.subscriptions.muted_topics.$patch> },
      ) => parseResponse(client.users.me.subscriptions.muted_topics.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMobilePushTestNotificationKey() {
  return ['mobile_push', '/mobile_push/test_notification', 'POST'] as const
}

export function usePostMobilePushTestNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mobile_push.test_notification.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mobile_push.test_notification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMobilePushTestNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mobile_push.test_notification.$post> },
      ) => parseResponse(client.mobile_push.test_notification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMobilePushE2eeTestNotificationKey() {
  return ['mobile_push', '/mobile_push/e2ee/test_notification', 'POST'] as const
}

export function usePostMobilePushE2eeTestNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mobile_push.e2ee.test_notification.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mobile_push.e2ee.test_notification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMobilePushE2eeTestNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mobile_push.e2ee.test_notification.$post> },
      ) => parseResponse(client.mobile_push.e2ee.test_notification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMobilePushRegisterKey() {
  return ['mobile_push', '/mobile_push/register', 'POST'] as const
}

export function usePostMobilePushRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mobile_push.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mobile_push.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMobilePushRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mobile_push.register.$post> },
      ) => parseResponse(client.mobile_push.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemotesPushE2eeRegisterKey() {
  return ['remotes', '/remotes/push/e2ee/register', 'POST'] as const
}

export function usePostRemotesPushE2eeRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.remotes.push.e2ee.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.remotes.push.e2ee.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemotesPushE2eeRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.remotes.push.e2ee.register.$post> },
      ) => parseResponse(client.remotes.push.e2ee.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisterClientDeviceKey() {
  return ['register_client_device', '/register_client_device', 'POST'] as const
}

export function usePostRegisterClientDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.register_client_device.$post>>>
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
  const swrKey = customKey ?? getPostRegisterClientDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.register_client_device.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemoveClientDeviceKey() {
  return ['remove_client_device', '/remove_client_device', 'POST'] as const
}

export function usePostRemoveClientDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.remove_client_device.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.remove_client_device.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoveClientDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.remove_client_device.$post> },
      ) => parseResponse(client.remove_client_device.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserTopicsKey() {
  return ['user_topics', '/user_topics', 'POST'] as const
}

export function usePostUserTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_topics.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user_topics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user_topics.$post> }) =>
        parseResponse(client.user_topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeMutedUsersMutedUserIdKey() {
  return ['users', '/users/me/muted_users/:muted_user_id', 'POST'] as const
}

export function usePostUsersMeMutedUsersMutedUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeMutedUsersMutedUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>
        },
      ) => parseResponse(client.users.me.muted_users[':muted_user_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeMutedUsersMutedUserIdKey() {
  return ['users', '/users/me/muted_users/:muted_user_id', 'DELETE'] as const
}

export function useDeleteUsersMeMutedUsersMutedUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeMutedUsersMutedUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>
        },
      ) => parseResponse(client.users.me.muted_users[':muted_user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeApnsDeviceTokenKey() {
  return ['users', '/users/me/apns_device_token', 'POST'] as const
}

export function usePostUsersMeApnsDeviceToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.apns_device_token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.apns_device_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeApnsDeviceTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.apns_device_token.$post> },
      ) => parseResponse(client.users.me.apns_device_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeApnsDeviceTokenKey() {
  return ['users', '/users/me/apns_device_token', 'DELETE'] as const
}

export function useDeleteUsersMeApnsDeviceToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.apns_device_token.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.apns_device_token.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeApnsDeviceTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.apns_device_token.$delete> },
      ) => parseResponse(client.users.me.apns_device_token.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeAndroidGcmRegIdKey() {
  return ['users', '/users/me/android_gcm_reg_id', 'POST'] as const
}

export function usePostUsersMeAndroidGcmRegId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.android_gcm_reg_id.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.android_gcm_reg_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeAndroidGcmRegIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.android_gcm_reg_id.$post> },
      ) => parseResponse(client.users.me.android_gcm_reg_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeAndroidGcmRegIdKey() {
  return ['users', '/users/me/android_gcm_reg_id', 'DELETE'] as const
}

export function useDeleteUsersMeAndroidGcmRegId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.android_gcm_reg_id.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.android_gcm_reg_id.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeAndroidGcmRegIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.android_gcm_reg_id.$delete> },
      ) => parseResponse(client.users.me.android_gcm_reg_id.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdSubscriptionsStreamIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>,
) {
  return ['users', '/users/:user_id/subscriptions/:stream_id', args] as const
}

export function useGetUsersUserIdSubscriptionsStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
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
        ? getGetUsersUserIdSubscriptionsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].subscriptions[':stream_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdSubscriptionsStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
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
        ? getGetUsersUserIdSubscriptionsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].subscriptions[':stream_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdChannelsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
) {
  return ['users', '/users/:user_id/channels', args] as const
}

export function useGetUsersUserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
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
        ? getGetUsersUserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
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
        ? getGetUsersUserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmEmojiEmojiNameKey() {
  return ['realm', '/realm/emoji/:emoji_name', 'POST'] as const
}

export function usePostRealmEmojiEmojiName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.emoji)[':emoji_name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmEmojiEmojiNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$post']> },
      ) => parseResponse(client.realm.emoji[':emoji_name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmEmojiEmojiNameKey() {
  return ['realm', '/realm/emoji/:emoji_name', 'DELETE'] as const
}

export function useDeleteRealmEmojiEmojiName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.emoji)[':emoji_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmEmojiEmojiNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$delete']> },
      ) => parseResponse(client.realm.emoji[':emoji_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmEmojiKey() {
  return ['realm', '/realm/emoji'] as const
}

export function useGetRealmEmoji<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmEmojiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.emoji.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmEmoji<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmEmojiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.emoji.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmPresenceKey() {
  return ['realm', '/realm/presence'] as const
}

export function useGetRealmPresence<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmPresenceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.presence.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmPresence<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmPresenceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.presence.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRealmDomainsKey() {
  return ['realm', '/realm/domains'] as const
}

export function useGetRealmDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmDomainsKey() {
  return ['realm', '/realm/domains', 'POST'] as const
}

export function usePostRealmDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realm.domains.$post> }) =>
        parseResponse(client.realm.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmDomainsDomainKey() {
  return ['realm', '/realm/domains/:domain', 'DELETE'] as const
}

export function useDeleteRealmDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.domains)[':domain']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.domains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmDomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.realm.domains)[':domain']['$delete']> },
      ) => parseResponse(client.realm.domains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRealmDomainsDomainKey() {
  return ['realm', '/realm/domains/:domain', 'PATCH'] as const
}

export function usePatchRealmDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.domains)[':domain']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.domains)[':domain']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRealmDomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.realm.domains)[':domain']['$patch']> },
      ) => parseResponse(client.realm.domains[':domain'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmDeactivateKey() {
  return ['realm', '/realm/deactivate', 'POST'] as const
}

export function usePostRealmDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.deactivate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.deactivate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realm.deactivate.$post> }) =>
        parseResponse(client.realm.deactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmProfileFieldsKey() {
  return ['realm', '/realm/profile_fields'] as const
}

export function useGetRealmProfileFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmProfileFieldsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.profile_fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmProfileFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmProfileFieldsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.profile_fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRealmProfileFieldsKey() {
  return ['realm', '/realm/profile_fields', 'POST'] as const
}

export function usePostRealmProfileFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.profile_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmProfileFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.realm.profile_fields.$post> },
      ) => parseResponse(client.realm.profile_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRealmProfileFieldsKey() {
  return ['realm', '/realm/profile_fields', 'PATCH'] as const
}

export function usePatchRealmProfileFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.profile_fields.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRealmProfileFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.realm.profile_fields.$patch> },
      ) => parseResponse(client.realm.profile_fields.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmProfileFieldsFieldIdKey() {
  return ['realm', '/realm/profile_fields/:field_id', 'DELETE'] as const
}

export function useDeleteRealmProfileFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.profile_fields)[':field_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmProfileFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$delete']> },
      ) => parseResponse(client.realm.profile_fields[':field_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRealmProfileFieldsFieldIdKey() {
  return ['realm', '/realm/profile_fields/:field_id', 'PATCH'] as const
}

export function usePatchRealmProfileFieldsFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.profile_fields)[':field_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRealmProfileFieldsFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$patch']> },
      ) => parseResponse(client.realm.profile_fields[':field_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRealmUserSettingsDefaultsKey() {
  return ['realm', '/realm/user_settings_defaults', 'PATCH'] as const
}

export function usePatchRealmUserSettingsDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realm.user_settings_defaults.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.user_settings_defaults.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRealmUserSettingsDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.realm.user_settings_defaults.$patch> },
      ) => parseResponse(client.realm.user_settings_defaults.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeAvatarKey() {
  return ['users', '/users/me/avatar', 'POST'] as const
}

export function usePostUsersMeAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.avatar.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.avatar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.avatar.$post> }) =>
        parseResponse(client.users.me.avatar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeAvatarKey() {
  return ['users', '/users/me/avatar', 'DELETE'] as const
}

export function useDeleteUsersMeAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.avatar.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.users.me.avatar.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeSubscriptionsPropertiesKey() {
  return ['users', '/users/me/subscriptions/properties', 'POST'] as const
}

export function usePostUsersMeSubscriptionsProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.users.me.subscriptions.properties.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.subscriptions.properties.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeSubscriptionsPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.subscriptions.properties.$post> },
      ) => parseResponse(client.users.me.subscriptions.properties.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersMeSubscriptionsStreamIdKey() {
  return ['users', '/users/me/subscriptions/:stream_id', 'PATCH'] as const
}

export function usePatchUsersMeSubscriptionsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersMeSubscriptionsStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>
        },
      ) => parseResponse(client.users.me.subscriptions[':stream_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersEmailKey(
  args: InferRequestType<(typeof client.users)[':email']['$get']>,
) {
  return ['users', '/users/:email', args] as const
}

export function useGetUsersEmail<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersEmail<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersEmailKey() {
  return ['users', '/users/:email', 'PATCH'] as const
}

export function usePatchUsersEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':email']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':email']['$patch']> },
      ) => parseResponse(client.users[':email'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$delete']> },
      ) => parseResponse(client.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdKey() {
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function usePatchUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$patch']> },
      ) => parseResponse(client.users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRealmLinkifiersKey() {
  return ['realm', '/realm/linkifiers'] as const
}

export function useGetRealmLinkifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmLinkifiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.linkifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealmLinkifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRealmLinkifiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.realm.linkifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchRealmLinkifiersKey() {
  return ['realm', '/realm/linkifiers', 'PATCH'] as const
}

export function usePatchRealmLinkifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.linkifiers.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRealmLinkifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realm.linkifiers.$patch> }) =>
        parseResponse(client.realm.linkifiers.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmFiltersKey() {
  return ['realm', '/realm/filters', 'POST'] as const
}

export function usePostRealmFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.filters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.filters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realm.filters.$post> }) =>
        parseResponse(client.realm.filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmFiltersFilterIdKey() {
  return ['realm', '/realm/filters/:filter_id', 'DELETE'] as const
}

export function useDeleteRealmFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.filters)[':filter_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.filters)[':filter_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmFiltersFilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.realm.filters)[':filter_id']['$delete']> },
      ) => parseResponse(client.realm.filters[':filter_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRealmFiltersFilterIdKey() {
  return ['realm', '/realm/filters/:filter_id', 'PATCH'] as const
}

export function usePatchRealmFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.filters)[':filter_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.filters)[':filter_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRealmFiltersFilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.realm.filters)[':filter_id']['$patch']> },
      ) => parseResponse(client.realm.filters[':filter_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmPlaygroundsKey() {
  return ['realm', '/realm/playgrounds', 'POST'] as const
}

export function usePostRealmPlaygrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.playgrounds.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.playgrounds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmPlaygroundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.realm.playgrounds.$post> }) =>
        parseResponse(client.realm.playgrounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRealmPlaygroundsPlaygroundIdKey() {
  return ['realm', '/realm/playgrounds/:playground_id', 'DELETE'] as const
}

export function useDeleteRealmPlaygroundsPlaygroundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRealmPlaygroundsPlaygroundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>
        },
      ) => parseResponse(client.realm.playgrounds[':playground_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExportRealmExportIdKey() {
  return ['export', '/export/realm/:export_id', 'DELETE'] as const
}

export function useDeleteExportRealmExportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.realm)[':export_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.export.realm)[':export_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExportRealmExportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.export.realm)[':export_id']['$delete']> },
      ) => parseResponse(client.export.realm[':export_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportRealmKey() {
  return ['export', '/export/realm'] as const
}

export function useGetExportRealm<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportRealmKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.realm.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportRealm<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportRealmKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.realm.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExportRealmKey() {
  return ['export', '/export/realm', 'POST'] as const
}

export function usePostExportRealm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.export.realm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportRealmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.export.realm.$post> }) =>
        parseResponse(client.export.realm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportRealmConsentsKey() {
  return ['export', '/export/realm/consents'] as const
}

export function useGetExportRealmConsents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
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
        ? getGetExportRealmConsentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.realm.consents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportRealmConsents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
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
        ? getGetExportRealmConsentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.realm.consents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvitesKey() {
  return ['invites', '/invites'] as const
}

export function useGetInvites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvitesKey() {
  return ['invites', '/invites', 'POST'] as const
}

export function usePostInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invites.$post> }) =>
        parseResponse(client.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitesMultiuseKey() {
  return ['invites', '/invites/multiuse', 'POST'] as const
}

export function usePostInvitesMultiuse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.multiuse.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invites.multiuse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesMultiuseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invites.multiuse.$post> }) =>
        parseResponse(client.invites.multiuse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInvitesInviteIdKey() {
  return ['invites', '/invites/:invite_id', 'DELETE'] as const
}

export function useDeleteInvitesInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':invite_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvitesInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invites)[':invite_id']['$delete']> },
      ) => parseResponse(client.invites[':invite_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInvitesMultiuseInviteIdKey() {
  return ['invites', '/invites/multiuse/:invite_id', 'DELETE'] as const
}

export function useDeleteInvitesMultiuseInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invites.multiuse)[':invite_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invites.multiuse)[':invite_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvitesMultiuseInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invites.multiuse)[':invite_id']['$delete']> },
      ) => parseResponse(client.invites.multiuse[':invite_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitesInviteIdResendKey() {
  return ['invites', '/invites/:invite_id/resend', 'POST'] as const
}

export function usePostInvitesInviteIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invites)[':invite_id']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':invite_id']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesInviteIdResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invites)[':invite_id']['resend']['$post']> },
      ) => parseResponse(client.invites[':invite_id'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealmTestWelcomeBotCustomMessageKey() {
  return ['realm', '/realm/test_welcome_bot_custom_message', 'POST'] as const
}

export function usePostRealmTestWelcomeBotCustomMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.realm.test_welcome_bot_custom_message.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.realm.test_welcome_bot_custom_message.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealmTestWelcomeBotCustomMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.realm.test_welcome_bot_custom_message.$post> },
      ) => parseResponse(client.realm.test_welcome_bot_custom_message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisterKey() {
  return ['register', '/register', 'POST'] as const
}

export function usePostRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.register.$post> }) =>
        parseResponse(client.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServerSettingsKey() {
  return ['server_settings', '/server_settings'] as const
}

export function useGetServerSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServerSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.server_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServerSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServerSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.server_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSettingsKey() {
  return ['settings', '/settings', 'PATCH'] as const
}

export function usePatchSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.$patch> }) =>
        parseResponse(client.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStreamsStreamIdMembersKey(
  args: InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>,
) {
  return ['streams', '/streams/:stream_id/members', args] as const
}

export function useGetStreamsStreamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
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
        ? getGetStreamsStreamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams[':stream_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsStreamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
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
        ? getGetStreamsStreamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams[':stream_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStreamsKey(args: InferRequestType<typeof client.streams.$get>) {
  return ['streams', '/streams', args] as const
}

export function useGetStreams<TError = unknown>(
  args: InferRequestType<typeof client.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.streams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStreams<TError = unknown>(
  args: InferRequestType<typeof client.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.streams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStreamsStreamIdKey(
  args: InferRequestType<(typeof client.streams)[':stream_id']['$get']>,
) {
  return ['streams', '/streams/:stream_id', args] as const
}

export function useGetStreamsStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':stream_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>>
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
        ? getGetStreamsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams[':stream_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':stream_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>>
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
        ? getGetStreamsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams[':stream_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStreamsStreamIdKey() {
  return ['streams', '/streams/:stream_id', 'DELETE'] as const
}

export function useDeleteStreamsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.streams)[':stream_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStreamsStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.streams)[':stream_id']['$delete']> },
      ) => parseResponse(client.streams[':stream_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStreamsStreamIdKey() {
  return ['streams', '/streams/:stream_id', 'PATCH'] as const
}

export function usePatchStreamsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.streams)[':stream_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStreamsStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.streams)[':stream_id']['$patch']> },
      ) => parseResponse(client.streams[':stream_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStreamsStreamIdEmailAddressKey(
  args: InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>,
) {
  return ['streams', '/streams/:stream_id/email_address', args] as const
}

export function useGetStreamsStreamIdEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
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
        ? getGetStreamsStreamIdEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.streams[':stream_id'].email_address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsStreamIdEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
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
        ? getGetStreamsStreamIdEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.streams[':stream_id'].email_address.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStreamsStreamIdDeleteTopicKey() {
  return ['streams', '/streams/:stream_id/delete_topic', 'POST'] as const
}

export function usePostStreamsStreamIdDeleteTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStreamsStreamIdDeleteTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>
        },
      ) => parseResponse(client.streams[':stream_id'].delete_topic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTypingKey() {
  return ['typing', '/typing', 'POST'] as const
}

export function usePostTyping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typing.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.typing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTypingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.typing.$post> }) =>
        parseResponse(client.typing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesMessageIdTypingKey() {
  return ['messages', '/messages/:message_id/typing', 'POST'] as const
}

export function usePostMessagesMessageIdTyping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['typing']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':message_id']['typing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesMessageIdTypingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.messages)[':message_id']['typing']['$post']> },
      ) => parseResponse(client.messages[':message_id'].typing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsCreateKey() {
  return ['channels', '/channels/create', 'POST'] as const
}

export function usePostChannelsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channels.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.create.$post> }) =>
        parseResponse(client.channels.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserGroupsCreateKey() {
  return ['user_groups', '/user_groups/create', 'POST'] as const
}

export function usePostUserGroupsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_groups.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserGroupsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user_groups.create.$post> }) =>
        parseResponse(client.user_groups.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserGroupsUserGroupIdMembersKey(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>,
) {
  return ['user_groups', '/user_groups/:user_group_id/members', args] as const
}

export function useGetUserGroupsUserGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>>
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
        ? getGetUserGroupsUserGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_groups[':user_group_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGroupsUserGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>>
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
        ? getGetUserGroupsUserGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_groups[':user_group_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserGroupsUserGroupIdMembersKey() {
  return ['user_groups', '/user_groups/:user_group_id/members', 'POST'] as const
}

export function usePostUserGroupsUserGroupIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserGroupsUserGroupIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$post']>
        },
      ) => parseResponse(client.user_groups[':user_group_id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserGroupsUserGroupIdKey() {
  return ['user_groups', '/user_groups/:user_group_id', 'PATCH'] as const
}

export function usePatchUserGroupsUserGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserGroupsUserGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user_groups)[':user_group_id']['$patch']> },
      ) => parseResponse(client.user_groups[':user_group_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserGroupsKey(args: InferRequestType<typeof client.user_groups.$get>) {
  return ['user_groups', '/user_groups', args] as const
}

export function useGetUserGroups<TError = unknown>(
  args: InferRequestType<typeof client.user_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGroups<TError = unknown>(
  args: InferRequestType<typeof client.user_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserGroupsUserGroupIdSubgroupsKey(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>,
) {
  return ['user_groups', '/user_groups/:user_group_id/subgroups', args] as const
}

export function useGetUserGroupsUserGroupIdSubgroups<TError = unknown>(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>>
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
        ? getGetUserGroupsUserGroupIdSubgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_groups[':user_group_id'].subgroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGroupsUserGroupIdSubgroups<TError = unknown>(
  args: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>>
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
        ? getGetUserGroupsUserGroupIdSubgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_groups[':user_group_id'].subgroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserGroupsUserGroupIdSubgroupsKey() {
  return ['user_groups', '/user_groups/:user_group_id/subgroups', 'POST'] as const
}

export function usePostUserGroupsUserGroupIdSubgroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserGroupsUserGroupIdSubgroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>
        },
      ) => parseResponse(client.user_groups[':user_group_id'].subgroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserGroupsUserGroupIdMembersUserIdKey(
  args: InferRequestType<
    (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
  >,
) {
  return ['user_groups', '/user_groups/:user_group_id/members/:user_id', args] as const
}

export function useGetUserGroupsUserGroupIdMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
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
        ? getGetUserGroupsUserGroupIdMembersUserIdKey(args)
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
                (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
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
          client.user_groups[':user_group_id'].members[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGroupsUserGroupIdMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
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
        ? getGetUserGroupsUserGroupIdMembersUserIdKey(args)
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
                (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
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
          client.user_groups[':user_group_id'].members[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserGroupsUserGroupIdDeactivateKey() {
  return ['user_groups', '/user_groups/:user_group_id/deactivate', 'POST'] as const
}

export function usePostUserGroupsUserGroupIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserGroupsUserGroupIdDeactivateKey()
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
            (typeof client.user_groups)[':user_group_id']['deactivate']['$post']
          >
        },
      ) => parseResponse(client.user_groups[':user_group_id'].deactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelFoldersCreateKey() {
  return ['channel_folders', '/channel_folders/create', 'POST'] as const
}

export function usePostChannelFoldersCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel_folders.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelFoldersCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.channel_folders.create.$post> },
      ) => parseResponse(client.channel_folders.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelFoldersKey(
  args: InferRequestType<typeof client.channel_folders.$get>,
) {
  return ['channel_folders', '/channel_folders', args] as const
}

export function useGetChannelFolders<TError = unknown>(
  args: InferRequestType<typeof client.channel_folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel_folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelFolders<TError = unknown>(
  args: InferRequestType<typeof client.channel_folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel_folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchChannelFoldersKey() {
  return ['channel_folders', '/channel_folders', 'PATCH'] as const
}

export function usePatchChannelFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channel_folders.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channel_folders.$patch> }) =>
        parseResponse(client.channel_folders.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChannelFoldersChannelFolderIdKey() {
  return ['channel_folders', '/channel_folders/:channel_folder_id', 'PATCH'] as const
}

export function usePatchChannelFoldersChannelFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelFoldersChannelFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>
        },
      ) => parseResponse(client.channel_folders[':channel_folder_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdApiKeyKey(
  args: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>,
) {
  return ['bots', '/bots/:bot_id/api_key', args] as const
}

export function useGetBotsBotIdApiKey<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
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
        ? getGetBotsBotIdApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':bot_id'].api_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdApiKey<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
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
        ? getGetBotsBotIdApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':bot_id'].api_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBotsBotIdApiKeyRegenerateKey() {
  return ['bots', '/bots/:bot_id/api_key/regenerate', 'POST'] as const
}

export function usePostBotsBotIdApiKeyRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsBotIdApiKeyRegenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>
        },
      ) => parseResponse(client.bots[':bot_id'].api_key.regenerate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRealTimeKey() {
  return ['real-time', '/real-time', 'POST'] as const
}

export function usePostRealTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['real-time']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['real-time']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['real-time']['$post']> }) =>
        parseResponse(client['real-time'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestErrorHandlingKey() {
  return ['rest-error-handling', '/rest-error-handling', 'POST'] as const
}

export function usePostRestErrorHandling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['rest-error-handling']['$post']>>>
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
  const swrKey = customKey ?? getPostRestErrorHandlingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['rest-error-handling'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostZulipOutgoingWebhookKey() {
  return ['zulip-outgoing-webhook', '/zulip-outgoing-webhook', 'POST'] as const
}

export function usePostZulipOutgoingWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['zulip-outgoing-webhook']['$post']>>
        >
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
  const swrKey = customKey ?? getPostZulipOutgoingWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['zulip-outgoing-webhook'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallsBigbluebuttonCreateKey(
  args: InferRequestType<typeof client.calls.bigbluebutton.create.$get>,
) {
  return ['calls', '/calls/bigbluebutton/create', args] as const
}

export function useGetCallsBigbluebuttonCreate<TError = unknown>(
  args: InferRequestType<typeof client.calls.bigbluebutton.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>>
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
        ? getGetCallsBigbluebuttonCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls.bigbluebutton.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallsBigbluebuttonCreate<TError = unknown>(
  args: InferRequestType<typeof client.calls.bigbluebutton.create.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>>
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
        ? getGetCallsBigbluebuttonCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calls.bigbluebutton.create.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallsNextcloudTalkCreateKey() {
  return ['calls', '/calls/nextcloud_talk/create', 'POST'] as const
}

export function usePostCallsNextcloudTalkCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.calls.nextcloud_talk.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.calls.nextcloud_talk.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsNextcloudTalkCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.calls.nextcloud_talk.create.$post> },
      ) => parseResponse(client.calls.nextcloud_talk.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsWebexCreateKey() {
  return ['calls', '/calls/webex/create', 'POST'] as const
}

export function usePostCallsWebexCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.webex.create.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsWebexCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.calls.webex.create.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsGoogleMeetCreateKey() {
  return ['calls', '/calls/google_meet/create', 'POST'] as const
}

export function usePostCallsGoogleMeetCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.calls.google_meet.create.$post>>>
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
  const swrKey = customKey ?? getPostCallsGoogleMeetCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.calls.google_meet.create.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsConstructorgroupsCreateKey() {
  return ['calls', '/calls/constructorgroups/create', 'POST'] as const
}

export function usePostCallsConstructorgroupsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.calls.constructorgroups.create.$post>>
        >
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
  const swrKey = customKey ?? getPostCallsConstructorgroupsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.calls.constructorgroups.create.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
