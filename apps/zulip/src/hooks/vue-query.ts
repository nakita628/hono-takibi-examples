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

export function getPostFetchApiKeyMutationKey() {
  return ['fetch_api_key', '/fetch_api_key', 'POST'] as const
}

export function getPostFetchApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fetch_api_key.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fetch_api_key.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFetchApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fetch_api_key.$post>) {
      return parseResponse(client.fetch_api_key.$post(args, options))
    },
  })
}

export function usePostFetchApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fetch_api_key.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fetch_api_key.$post>,
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
  const mutationDefaults = getPostFetchApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJwtFetchApiKeyMutationKey() {
  return ['jwt', '/jwt/fetch_api_key', 'POST'] as const
}

export function getPostJwtFetchApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jwt.fetch_api_key.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.jwt.fetch_api_key.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJwtFetchApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jwt.fetch_api_key.$post>) {
      return parseResponse(client.jwt.fetch_api_key.$post(args, options))
    },
  })
}

export function usePostJwtFetchApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.jwt.fetch_api_key.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.jwt.fetch_api_key.$post>,
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
  const mutationDefaults = getPostJwtFetchApiKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostDevFetchApiKeyMutationKey() {
  return ['dev_fetch_api_key', '/dev_fetch_api_key', 'POST'] as const
}

export function getPostDevFetchApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_fetch_api_key.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dev_fetch_api_key.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevFetchApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dev_fetch_api_key.$post>) {
      return parseResponse(client.dev_fetch_api_key.$post(args, options))
    },
  })
}

export function usePostDevFetchApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dev_fetch_api_key.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dev_fetch_api_key.$post>,
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
  const mutationDefaults = getPostDevFetchApiKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDevListUsersQueryKey() {
  return ['dev_list_users', '/dev_list_users'] as const
}

export function getDevListUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDevListUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dev_list_users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDevListUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
          >,
          ReturnType<typeof getDevListUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dev_list_users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevListUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDevListUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dev_list_users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEventsMutationKey() {
  return ['events', '/events', 'DELETE'] as const
}

export function getDeleteEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$delete>>>>>,
    TError,
    InferRequestType<typeof client.events.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$delete>) {
      return parseResponse(client.events.$delete(args, options))
    },
  })
}

export function useDeleteEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$delete>,
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
  const mutationDefaults = getDeleteEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetStreamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_stream_id.$get>>,
) {
  return ['get_stream_id', '/get_stream_id', toValue(args)] as const
}

export function getGetStreamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_stream_id.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get_stream_id.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetStreamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get_stream_id.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
          >,
          ReturnType<typeof getGetStreamIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get_stream_id.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get_stream_id.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarkAllAsReadMutationKey() {
  return ['mark_all_as_read', '/mark_all_as_read', 'POST'] as const
}

export function getPostMarkAllAsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mark_all_as_read.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMarkAllAsReadMutationKey(),
    async mutationFn() {
      return parseResponse(client.mark_all_as_read.$post(undefined, options))
    },
  })
}

export function usePostMarkAllAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mark_all_as_read.$post>>>
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
  const mutationDefaults = getPostMarkAllAsReadMutationOptions<TError, TOnMutateResult>(
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

export function getPostMarkStreamAsReadMutationKey() {
  return ['mark_stream_as_read', '/mark_stream_as_read', 'POST'] as const
}

export function getPostMarkStreamAsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mark_stream_as_read.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mark_stream_as_read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarkStreamAsReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mark_stream_as_read.$post>) {
      return parseResponse(client.mark_stream_as_read.$post(args, options))
    },
  })
}

export function usePostMarkStreamAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mark_stream_as_read.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mark_stream_as_read.$post>,
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
  const mutationDefaults = getPostMarkStreamAsReadMutationOptions<TError, TOnMutateResult>(
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

export function getPostMarkTopicAsReadMutationKey() {
  return ['mark_topic_as_read', '/mark_topic_as_read', 'POST'] as const
}

export function getPostMarkTopicAsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mark_topic_as_read.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mark_topic_as_read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarkTopicAsReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mark_topic_as_read.$post>) {
      return parseResponse(client.mark_topic_as_read.$post(args, options))
    },
  })
}

export function usePostMarkTopicAsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mark_topic_as_read.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mark_topic_as_read.$post>,
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
  const mutationDefaults = getPostMarkTopicAsReadMutationOptions<TError, TOnMutateResult>(
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

export function getAttachmentsQueryKey() {
  return ['attachments', '/attachments'] as const
}

export function getAttachmentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAttachmentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attachments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
          >,
          ReturnType<typeof getAttachmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAttachmentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.attachments.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAttachmentsAttachmentIdMutationKey() {
  return ['attachments', '/attachments/:attachment_id', 'DELETE'] as const
}

export function getDeleteAttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachments)[':attachment_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attachments)[':attachment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attachments)[':attachment_id']['$delete']>,
    ) {
      return parseResponse(client.attachments[':attachment_id'].$delete(args, options))
    },
  })
}

export function useDeleteAttachmentsAttachmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attachments)[':attachment_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attachments)[':attachment_id']['$delete']>,
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
  const mutationDefaults = getDeleteAttachmentsAttachmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getBotStorageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bot_storage.$get>>,
) {
  return ['bot_storage', '/bot_storage', toValue(args)] as const
}

export function getBotStorageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bot_storage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bot_storage.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBotStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bot_storage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>
          >,
          ReturnType<typeof getBotStorageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBotStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bot_storage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBotStorageMutationKey() {
  return ['bot_storage', '/bot_storage', 'PUT'] as const
}

export function getPutBotStorageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$put>>>>>,
    TError,
    InferRequestType<typeof client.bot_storage.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBotStorageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bot_storage.$put>) {
      return parseResponse(client.bot_storage.$put(args, options))
    },
  })
}

export function usePutBotStorage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.bot_storage.$put>,
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
  const mutationDefaults = getPutBotStorageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBotStorageMutationKey() {
  return ['bot_storage', '/bot_storage', 'DELETE'] as const
}

export function getDeleteBotStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.bot_storage.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotStorageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bot_storage.$delete>) {
      return parseResponse(client.bot_storage.$delete(args, options))
    },
  })
}

export function useDeleteBotStorage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bot_storage.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.bot_storage.$delete>,
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
  const mutationDefaults = getDeleteBotStorageMutationOptions<TError, TOnMutateResult>(
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

export function getDraftsQueryKey() {
  return ['drafts', '/drafts'] as const
}

export function getDraftsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDraftsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drafts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDrafts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
          ReturnType<typeof getDraftsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDraftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDraftsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.drafts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDraftsMutationKey() {
  return ['drafts', '/drafts', 'POST'] as const
}

export function getPostDraftsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$post>>>>>,
    TError,
    InferRequestType<typeof client.drafts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDraftsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.drafts.$post>) {
      return parseResponse(client.drafts.$post(args, options))
    },
  })
}

export function usePostDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drafts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.drafts.$post>,
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
  const mutationDefaults = getPostDraftsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDraftsDraftIdMutationKey() {
  return ['drafts', '/drafts/:draft_id', 'DELETE'] as const
}

export function getDeleteDraftsDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drafts)[':draft_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.drafts)[':draft_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDraftsDraftIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.drafts)[':draft_id']['$delete']>) {
      return parseResponse(client.drafts[':draft_id'].$delete(args, options))
    },
  })
}

export function useDeleteDraftsDraftId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.drafts)[':draft_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.drafts)[':draft_id']['$delete']>,
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
  const mutationDefaults = getDeleteDraftsDraftIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDraftsDraftIdMutationKey() {
  return ['drafts', '/drafts/:draft_id', 'PATCH'] as const
}

export function getPatchDraftsDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drafts)[':draft_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.drafts)[':draft_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDraftsDraftIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.drafts)[':draft_id']['$patch']>) {
      return parseResponse(client.drafts[':draft_id'].$patch(args, options))
    },
  })
}

export function usePatchDraftsDraftId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.drafts)[':draft_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.drafts)[':draft_id']['$patch']>,
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
  const mutationDefaults = getPatchDraftsDraftIdMutationOptions<TError, TOnMutateResult>(
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

export function getNavigationViewsQueryKey() {
  return ['navigation_views', '/navigation_views'] as const
}

export function getNavigationViewsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNavigationViewsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.navigation_views.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNavigationViews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>
            >
          >,
          ReturnType<typeof getNavigationViewsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNavigationViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNavigationViewsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.navigation_views.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNavigationViewsMutationKey() {
  return ['navigation_views', '/navigation_views', 'POST'] as const
}

export function getPostNavigationViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.navigation_views.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNavigationViewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.navigation_views.$post>) {
      return parseResponse(client.navigation_views.$post(args, options))
    },
  })
}

export function usePostNavigationViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.navigation_views.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.navigation_views.$post>,
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
  const mutationDefaults = getPostNavigationViewsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNavigationViewsFragmentMutationKey() {
  return ['navigation_views', '/navigation_views/:fragment', 'DELETE'] as const
}

export function getDeleteNavigationViewsFragmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.navigation_views)[':fragment']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.navigation_views)[':fragment']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNavigationViewsFragmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.navigation_views)[':fragment']['$delete']>,
    ) {
      return parseResponse(client.navigation_views[':fragment'].$delete(args, options))
    },
  })
}

export function useDeleteNavigationViewsFragment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.navigation_views)[':fragment']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.navigation_views)[':fragment']['$delete']>,
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
  const mutationDefaults = getDeleteNavigationViewsFragmentMutationOptions<TError, TOnMutateResult>(
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

export function getPatchNavigationViewsFragmentMutationKey() {
  return ['navigation_views', '/navigation_views/:fragment', 'PATCH'] as const
}

export function getPatchNavigationViewsFragmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.navigation_views)[':fragment']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.navigation_views)[':fragment']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNavigationViewsFragmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.navigation_views)[':fragment']['$patch']>,
    ) {
      return parseResponse(client.navigation_views[':fragment'].$patch(args, options))
    },
  })
}

export function usePatchNavigationViewsFragment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.navigation_views)[':fragment']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.navigation_views)[':fragment']['$patch']>,
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
  const mutationDefaults = getPatchNavigationViewsFragmentMutationOptions<TError, TOnMutateResult>(
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

export function getSavedSnippetsQueryKey() {
  return ['saved_snippets', '/saved_snippets'] as const
}

export function getSavedSnippetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSavedSnippetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_snippets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSavedSnippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
          >,
          ReturnType<typeof getSavedSnippetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedSnippetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSavedSnippetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_snippets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSavedSnippetsMutationKey() {
  return ['saved_snippets', '/saved_snippets', 'POST'] as const
}

export function getPostSavedSnippetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.saved_snippets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSavedSnippetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saved_snippets.$post>) {
      return parseResponse(client.saved_snippets.$post(args, options))
    },
  })
}

export function usePostSavedSnippets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_snippets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.saved_snippets.$post>,
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
  const mutationDefaults = getPostSavedSnippetsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSavedSnippetsSavedSnippetIdMutationKey() {
  return ['saved_snippets', '/saved_snippets/:saved_snippet_id', 'DELETE'] as const
}

export function getDeleteSavedSnippetsSavedSnippetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSavedSnippetsSavedSnippetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>,
    ) {
      return parseResponse(client.saved_snippets[':saved_snippet_id'].$delete(args, options))
    },
  })
}

export function useDeleteSavedSnippetsSavedSnippetId<
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
                Awaited<ReturnType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$delete']>,
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
  const mutationDefaults = getDeleteSavedSnippetsSavedSnippetIdMutationOptions<
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

export function getPatchSavedSnippetsSavedSnippetIdMutationKey() {
  return ['saved_snippets', '/saved_snippets/:saved_snippet_id', 'PATCH'] as const
}

export function getPatchSavedSnippetsSavedSnippetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSavedSnippetsSavedSnippetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>,
    ) {
      return parseResponse(client.saved_snippets[':saved_snippet_id'].$patch(args, options))
    },
  })
}

export function usePatchSavedSnippetsSavedSnippetId<
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
                Awaited<ReturnType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saved_snippets)[':saved_snippet_id']['$patch']>,
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
  const mutationDefaults = getPatchSavedSnippetsSavedSnippetIdMutationOptions<
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

export function getRemindersQueryKey() {
  return ['reminders', '/reminders'] as const
}

export function getRemindersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRemindersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reminders.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReminders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>
          >,
          ReturnType<typeof getRemindersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRemindersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRemindersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reminders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRemindersMutationKey() {
  return ['reminders', '/reminders', 'POST'] as const
}

export function getPostRemindersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$post>>>>>,
    TError,
    InferRequestType<typeof client.reminders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemindersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reminders.$post>) {
      return parseResponse(client.reminders.$post(args, options))
    },
  })
}

export function usePostReminders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reminders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reminders.$post>,
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
  const mutationDefaults = getPostRemindersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRemindersReminderIdMutationKey() {
  return ['reminders', '/reminders/:reminder_id', 'DELETE'] as const
}

export function getDeleteRemindersReminderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reminders)[':reminder_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reminders)[':reminder_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRemindersReminderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reminders)[':reminder_id']['$delete']>) {
      return parseResponse(client.reminders[':reminder_id'].$delete(args, options))
    },
  })
}

export function useDeleteRemindersReminderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reminders)[':reminder_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reminders)[':reminder_id']['$delete']>,
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
  const mutationDefaults = getDeleteRemindersReminderIdMutationOptions<TError, TOnMutateResult>(
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

export function getScheduledMessagesQueryKey() {
  return ['scheduled_messages', '/scheduled_messages'] as const
}

export function getScheduledMessagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getScheduledMessagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scheduled_messages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduledMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>
            >
          >,
          ReturnType<typeof getScheduledMessagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduledMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getScheduledMessagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.scheduled_messages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScheduledMessagesMutationKey() {
  return ['scheduled_messages', '/scheduled_messages', 'POST'] as const
}

export function getPostScheduledMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scheduled_messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduledMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scheduled_messages.$post>) {
      return parseResponse(client.scheduled_messages.$post(args, options))
    },
  })
}

export function usePostScheduledMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scheduled_messages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scheduled_messages.$post>,
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
  const mutationDefaults = getPostScheduledMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteScheduledMessagesScheduledMessageIdMutationKey() {
  return ['scheduled_messages', '/scheduled_messages/:scheduled_message_id', 'DELETE'] as const
}

export function getDeleteScheduledMessagesScheduledMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScheduledMessagesScheduledMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scheduled_messages)[':scheduled_message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.scheduled_messages[':scheduled_message_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteScheduledMessagesScheduledMessageId<
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
                  ReturnType<(typeof client.scheduled_messages)[':scheduled_message_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$delete']>,
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
  const mutationDefaults = getDeleteScheduledMessagesScheduledMessageIdMutationOptions<
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

export function getPatchScheduledMessagesScheduledMessageIdMutationKey() {
  return ['scheduled_messages', '/scheduled_messages/:scheduled_message_id', 'PATCH'] as const
}

export function getPatchScheduledMessagesScheduledMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchScheduledMessagesScheduledMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>,
    ) {
      return parseResponse(client.scheduled_messages[':scheduled_message_id'].$patch(args, options))
    },
  })
}

export function usePatchScheduledMessagesScheduledMessageId<
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
                  ReturnType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scheduled_messages)[':scheduled_message_id']['$patch']>,
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
  const mutationDefaults = getPatchScheduledMessagesScheduledMessageIdMutationOptions<
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

export function getPostDefaultStreamsMutationKey() {
  return ['default_streams', '/default_streams', 'POST'] as const
}

export function getPostDefaultStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.default_streams.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.default_streams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDefaultStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.default_streams.$post>) {
      return parseResponse(client.default_streams.$post(args, options))
    },
  })
}

export function usePostDefaultStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.default_streams.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.default_streams.$post>,
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
  const mutationDefaults = getPostDefaultStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDefaultStreamsMutationKey() {
  return ['default_streams', '/default_streams', 'DELETE'] as const
}

export function getDeleteDefaultStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.default_streams.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.default_streams.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDefaultStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.default_streams.$delete>) {
      return parseResponse(client.default_streams.$delete(args, options))
    },
  })
}

export function useDeleteDefaultStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.default_streams.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.default_streams.$delete>,
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
  const mutationDefaults = getDeleteDefaultStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.$get>>,
) {
  return ['messages', '/messages', toValue(args)] as const
}

export function getMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>
          >,
          ReturnType<typeof getMessagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagesMutationKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function getPostMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    InferRequestType<typeof client.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.$post>) {
      return parseResponse(client.messages.$post(args, options))
    },
  })
}

export function usePostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messages.$post>,
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
  const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMessagesMessageIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>
  >,
) {
  return ['messages', '/messages/:message_id/history', toValue(args)] as const
}

export function getMessagesMessageIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMessageIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':message_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesMessageIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':message_id']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagesMessageIdHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.messages)[':message_id']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMessageIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':message_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagesFlagsMutationKey() {
  return ['messages', '/messages/flags', 'POST'] as const
}

export function getPostMessagesFlagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.flags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.flags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesFlagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.flags.$post>) {
      return parseResponse(client.messages.flags.$post(args, options))
    },
  })
}

export function usePostMessagesFlags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.flags.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messages.flags.$post>,
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
  const mutationDefaults = getPostMessagesFlagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesFlagsNarrowMutationKey() {
  return ['messages', '/messages/flags/narrow', 'POST'] as const
}

export function getPostMessagesFlagsNarrowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.flags.narrow.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messages.flags.narrow.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesFlagsNarrowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.flags.narrow.$post>) {
      return parseResponse(client.messages.flags.narrow.$post(args, options))
    },
  })
}

export function usePostMessagesFlagsNarrow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.flags.narrow.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messages.flags.narrow.$post>,
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
  const mutationDefaults = getPostMessagesFlagsNarrowMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesRenderMutationKey() {
  return ['messages', '/messages/render', 'POST'] as const
}

export function getPostMessagesRenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.render.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.render.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesRenderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.render.$post>) {
      return parseResponse(client.messages.render.$post(args, options))
    },
  })
}

export function usePostMessagesRender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.render.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messages.render.$post>,
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
  const mutationDefaults = getPostMessagesRenderMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesMessageIdReactionsMutationKey() {
  return ['messages', '/messages/:message_id/reactions', 'POST'] as const
}

export function getPostMessagesMessageIdReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['reactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':message_id']['reactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMessageIdReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)[':message_id']['reactions']['$post']>,
    ) {
      return parseResponse(client.messages[':message_id'].reactions.$post(args, options))
    },
  })
}

export function usePostMessagesMessageIdReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['reactions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':message_id']['reactions']['$post']>,
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
  const mutationDefaults = getPostMessagesMessageIdReactionsMutationOptions<
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

export function getDeleteMessagesMessageIdReactionsMutationKey() {
  return ['messages', '/messages/:message_id/reactions', 'DELETE'] as const
}

export function getDeleteMessagesMessageIdReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['reactions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':message_id']['reactions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagesMessageIdReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)[':message_id']['reactions']['$delete']>,
    ) {
      return parseResponse(client.messages[':message_id'].reactions.$delete(args, options))
    },
  })
}

export function useDeleteMessagesMessageIdReactions<
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
                Awaited<ReturnType<(typeof client.messages)[':message_id']['reactions']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':message_id']['reactions']['$delete']>,
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
  const mutationDefaults = getDeleteMessagesMessageIdReactionsMutationOptions<
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

export function getMessagesMessageIdReadReceiptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>
  >,
) {
  return ['messages', '/messages/:message_id/read_receipts', toValue(args)] as const
}

export function getMessagesMessageIdReadReceiptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMessageIdReadReceiptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':message_id'].read_receipts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesMessageIdReadReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':message_id']['read_receipts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>
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
                  ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagesMessageIdReadReceiptsQueryKey>
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
          Awaited<ReturnType<(typeof client.messages)[':message_id']['read_receipts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdReadReceiptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMessageIdReadReceiptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':message_id'].read_receipts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesMatchesNarrowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.matches_narrow.$get>>,
) {
  return ['messages', '/messages/matches_narrow', toValue(args)] as const
}

export function getMessagesMatchesNarrowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.matches_narrow.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMatchesNarrowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.matches_narrow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesMatchesNarrow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.matches_narrow.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
            >
          >,
          ReturnType<typeof getMessagesMatchesNarrowQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.matches_narrow.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMatchesNarrowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMatchesNarrowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.matches_narrow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':message_id']['$get']>>,
) {
  return ['messages', '/messages/:message_id', toValue(args)] as const
}

export function getMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':message_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':message_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':message_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagesMessageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':message_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMessagesMessageIdMutationKey() {
  return ['messages', '/messages/:message_id', 'DELETE'] as const
}

export function getDeleteMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagesMessageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':message_id']['$delete']>) {
      return parseResponse(client.messages[':message_id'].$delete(args, options))
    },
  })
}

export function useDeleteMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':message_id']['$delete']>,
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
  const mutationDefaults = getDeleteMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagesMessageIdMutationKey() {
  return ['messages', '/messages/:message_id', 'PATCH'] as const
}

export function getPatchMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':message_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':message_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagesMessageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':message_id']['$patch']>) {
      return parseResponse(client.messages[':message_id'].$patch(args, options))
    },
  })
}

export function usePatchMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':message_id']['$patch']>,
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
  const mutationDefaults = getPatchMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMessagesMessageIdReportMutationKey() {
  return ['messages', '/messages/:message_id/report', 'POST'] as const
}

export function getPostMessagesMessageIdReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['report']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':message_id']['report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMessageIdReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)[':message_id']['report']['$post']>,
    ) {
      return parseResponse(client.messages[':message_id'].report.$post(args, options))
    },
  })
}

export function usePostMessagesMessageIdReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['report']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':message_id']['report']['$post']>,
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
  const mutationDefaults = getPostMessagesMessageIdReportMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserUploadsMutationKey() {
  return ['user_uploads', '/user_uploads', 'POST'] as const
}

export function getPostUserUploadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_uploads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user_uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_uploads.$post>) {
      return parseResponse(client.user_uploads.$post(args, options))
    },
  })
}

export function usePostUserUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_uploads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user_uploads.$post>,
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
  const mutationDefaults = getPostUserUploadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThumbnailStatusRealmIdStrFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
  >,
) {
  return ['thumbnail', '/thumbnail/status/:realm_id_str/:filename', toValue(args)] as const
}

export function getThumbnailStatusRealmIdStrFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThumbnailStatusRealmIdStrFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.thumbnail.status[':realm_id_str'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThumbnailStatusRealmIdStrFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
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
                  ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getThumbnailStatusRealmIdStrFilenameQueryKey>
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
            ReturnType<(typeof client.thumbnail.status)[':realm_id_str'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThumbnailStatusRealmIdStrFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThumbnailStatusRealmIdStrFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.thumbnail.status[':realm_id_str'][':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUploadsRealmIdStrFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>
  >,
) {
  return ['user_uploads', '/user_uploads/:realm_id_str/:filename', toValue(args)] as const
}

export function getUserUploadsRealmIdStrFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUploadsRealmIdStrFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_uploads[':realm_id_str'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUploadsRealmIdStrFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>
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
                  ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserUploadsRealmIdStrFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.user_uploads)[':realm_id_str'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUploadsRealmIdStrFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUploadsRealmIdStrFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_uploads[':realm_id_str'][':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersUserIdReactivateMutationKey() {
  return ['users', '/users/:user_id/reactivate', 'POST'] as const
}

export function getPostUsersUserIdReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['reactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdReactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].reactivate.$post(args, options))
    },
  })
}

export function usePostUsersUserIdReactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['reactivate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdReactivateMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['status']['$get']>>,
) {
  return ['users', '/users/:user_id/status', toValue(args)] as const
}

export function getUsersUserIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdStatusMutationKey() {
  return ['users', '/users/:user_id/status', 'POST'] as const
}

export function getPostUsersUserIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['status']['$post']>) {
      return parseResponse(client.users[':user_id'].status.$post(args, options))
    },
  })
}

export function usePostUsersUserIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['status']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['status']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdOrEmailPresenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>
  >,
) {
  return ['users', '/users/:user_id_or_email/presence', toValue(args)] as const
}

export function getUsersUserIdOrEmailPresenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOrEmailPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id_or_email'].presence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdOrEmailPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id_or_email']['presence']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOrEmailPresenceQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id_or_email']['presence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOrEmailPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOrEmailPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id_or_email'].presence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersMeMutationKey() {
  return ['users', '/users/me', 'DELETE'] as const
}

export function getDeleteUsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.$delete(undefined, options))
    },
  })
}

export function useDeleteUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$delete>>>>
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
  const mutationDefaults = getDeleteUsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersMeApiKeyRegenerateMutationKey() {
  return ['users', '/users/me/api_key/regenerate', 'POST'] as const
}

export function getPostUsersMeApiKeyRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.api_key.regenerate.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeApiKeyRegenerateMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.api_key.regenerate.$post(undefined, options))
    },
  })
}

export function usePostUsersMeApiKeyRegenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.api_key.regenerate.$post>>
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
  const mutationDefaults = getPostUsersMeApiKeyRegenerateMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeAlertWordsQueryKey() {
  return ['users', '/users/me/alert_words'] as const
}

export function getUsersMeAlertWordsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeAlertWordsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.alert_words.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeAlertWords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeAlertWordsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeAlertWordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeAlertWordsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.alert_words.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMeAlertWordsMutationKey() {
  return ['users', '/users/me/alert_words', 'POST'] as const
}

export function getPostUsersMeAlertWordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.alert_words.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeAlertWordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.alert_words.$post>) {
      return parseResponse(client.users.me.alert_words.$post(args, options))
    },
  })
}

export function usePostUsersMeAlertWords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.alert_words.$post>,
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
  const mutationDefaults = getPostUsersMeAlertWordsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeAlertWordsMutationKey() {
  return ['users', '/users/me/alert_words', 'DELETE'] as const
}

export function getDeleteUsersMeAlertWordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.alert_words.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeAlertWordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.alert_words.$delete>) {
      return parseResponse(client.users.me.alert_words.$delete(args, options))
    },
  })
}

export function useDeleteUsersMeAlertWords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alert_words.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.alert_words.$delete>,
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
  const mutationDefaults = getDeleteUsersMeAlertWordsMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMePresenceMutationKey() {
  return ['users', '/users/me/presence', 'POST'] as const
}

export function getPostUsersMePresenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.presence.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.presence.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMePresenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.presence.$post>) {
      return parseResponse(client.users.me.presence.$post(args, options))
    },
  })
}

export function usePostUsersMePresence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.presence.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.presence.$post>,
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
  const mutationDefaults = getPostUsersMePresenceMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeProfileDataMutationKey() {
  return ['users', '/users/me/profile_data', 'DELETE'] as const
}

export function getDeleteUsersMeProfileDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.profile_data.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.profile_data.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeProfileDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.profile_data.$delete>) {
      return parseResponse(client.users.me.profile_data.$delete(args, options))
    },
  })
}

export function useDeleteUsersMeProfileData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.profile_data.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.profile_data.$delete>,
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
  const mutationDefaults = getDeleteUsersMeProfileDataMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersMeProfileDataMutationKey() {
  return ['users', '/users/me/profile_data', 'PATCH'] as const
}

export function getPatchUsersMeProfileDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.profile_data.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.profile_data.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeProfileDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.profile_data.$patch>) {
      return parseResponse(client.users.me.profile_data.$patch(args, options))
    },
  })
}

export function usePatchUsersMeProfileData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.profile_data.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.profile_data.$patch>,
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
  const mutationDefaults = getPatchUsersMeProfileDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMeStatusMutationKey() {
  return ['users', '/users/me/status', 'POST'] as const
}

export function getPostUsersMeStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.status.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.status.$post>) {
      return parseResponse(client.users.me.status.$post(args, options))
    },
  })
}

export function usePostUsersMeStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.status.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.status.$post>,
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
  const mutationDefaults = getPostUsersMeStatusMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeStreamIdTopicsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>
  >,
) {
  return ['users', '/users/me/:stream_id/topics', toValue(args)] as const
}

export function getUsersMeStreamIdTopicsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeStreamIdTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me[':stream_id'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeStreamIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users.me)[':stream_id']['topics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeStreamIdTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.users.me)[':stream_id']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeStreamIdTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeStreamIdTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me[':stream_id'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.subscriptions.$get>>,
) {
  return ['users', '/users/me/subscriptions', toValue(args)] as const
}

export function getUsersMeSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMeSubscriptionsMutationKey() {
  return ['users', '/users/me/subscriptions', 'POST'] as const
}

export function getPostUsersMeSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.subscriptions.$post>) {
      return parseResponse(client.users.me.subscriptions.$post(args, options))
    },
  })
}

export function usePostUsersMeSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.subscriptions.$post>,
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
  const mutationDefaults = getPostUsersMeSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeSubscriptionsMutationKey() {
  return ['users', '/users/me/subscriptions', 'DELETE'] as const
}

export function getDeleteUsersMeSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.subscriptions.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.subscriptions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.subscriptions.$delete>) {
      return parseResponse(client.users.me.subscriptions.$delete(args, options))
    },
  })
}

export function useDeleteUsersMeSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.subscriptions.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.subscriptions.$delete>,
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
  const mutationDefaults = getDeleteUsersMeSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersMeSubscriptionsMutedTopicsMutationKey() {
  return ['users', '/users/me/subscriptions/muted_topics', 'PATCH'] as const
}

export function getPatchUsersMeSubscriptionsMutedTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.users.me.subscriptions.muted_topics.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.subscriptions.muted_topics.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeSubscriptionsMutedTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.users.me.subscriptions.muted_topics.$patch>,
    ) {
      return parseResponse(client.users.me.subscriptions.muted_topics.$patch(args, options))
    },
  })
}

export function usePatchUsersMeSubscriptionsMutedTopics<
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
                Awaited<ReturnType<typeof client.users.me.subscriptions.muted_topics.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.subscriptions.muted_topics.$patch>,
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
  const mutationDefaults = getPatchUsersMeSubscriptionsMutedTopicsMutationOptions<
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

export function getPostMobilePushTestNotificationMutationKey() {
  return ['mobile_push', '/mobile_push/test_notification', 'POST'] as const
}

export function getPostMobilePushTestNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mobile_push.test_notification.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mobile_push.test_notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMobilePushTestNotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mobile_push.test_notification.$post>) {
      return parseResponse(client.mobile_push.test_notification.$post(args, options))
    },
  })
}

export function usePostMobilePushTestNotification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mobile_push.test_notification.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mobile_push.test_notification.$post>,
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
  const mutationDefaults = getPostMobilePushTestNotificationMutationOptions<
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

export function getPostMobilePushE2eeTestNotificationMutationKey() {
  return ['mobile_push', '/mobile_push/e2ee/test_notification', 'POST'] as const
}

export function getPostMobilePushE2eeTestNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mobile_push.e2ee.test_notification.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.mobile_push.e2ee.test_notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMobilePushE2eeTestNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.mobile_push.e2ee.test_notification.$post>,
    ) {
      return parseResponse(client.mobile_push.e2ee.test_notification.$post(args, options))
    },
  })
}

export function usePostMobilePushE2eeTestNotification<
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
                Awaited<ReturnType<typeof client.mobile_push.e2ee.test_notification.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mobile_push.e2ee.test_notification.$post>,
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
  const mutationDefaults = getPostMobilePushE2eeTestNotificationMutationOptions<
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

export function getPostMobilePushRegisterMutationKey() {
  return ['mobile_push', '/mobile_push/register', 'POST'] as const
}

export function getPostMobilePushRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mobile_push.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mobile_push.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMobilePushRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mobile_push.register.$post>) {
      return parseResponse(client.mobile_push.register.$post(args, options))
    },
  })
}

export function usePostMobilePushRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mobile_push.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.mobile_push.register.$post>,
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
  const mutationDefaults = getPostMobilePushRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostRemotesPushE2eeRegisterMutationKey() {
  return ['remotes', '/remotes/push/e2ee/register', 'POST'] as const
}

export function getPostRemotesPushE2eeRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.remotes.push.e2ee.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.remotes.push.e2ee.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemotesPushE2eeRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.remotes.push.e2ee.register.$post>) {
      return parseResponse(client.remotes.push.e2ee.register.$post(args, options))
    },
  })
}

export function usePostRemotesPushE2eeRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.remotes.push.e2ee.register.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.remotes.push.e2ee.register.$post>,
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
  const mutationDefaults = getPostRemotesPushE2eeRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostRegisterClientDeviceMutationKey() {
  return ['register_client_device', '/register_client_device', 'POST'] as const
}

export function getPostRegisterClientDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.register_client_device.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterClientDeviceMutationKey(),
    async mutationFn() {
      return parseResponse(client.register_client_device.$post(undefined, options))
    },
  })
}

export function usePostRegisterClientDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.register_client_device.$post>>>
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
  const mutationDefaults = getPostRegisterClientDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getPostRemoveClientDeviceMutationKey() {
  return ['remove_client_device', '/remove_client_device', 'POST'] as const
}

export function getPostRemoveClientDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.remove_client_device.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.remove_client_device.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoveClientDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.remove_client_device.$post>) {
      return parseResponse(client.remove_client_device.$post(args, options))
    },
  })
}

export function usePostRemoveClientDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.remove_client_device.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.remove_client_device.$post>,
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
  const mutationDefaults = getPostRemoveClientDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserTopicsMutationKey() {
  return ['user_topics', '/user_topics', 'POST'] as const
}

export function getPostUserTopicsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_topics.$post>>>>>,
    TError,
    InferRequestType<typeof client.user_topics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserTopicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_topics.$post>) {
      return parseResponse(client.user_topics.$post(args, options))
    },
  })
}

export function usePostUserTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_topics.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user_topics.$post>,
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
  const mutationDefaults = getPostUserTopicsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersMeMutedUsersMutedUserIdMutationKey() {
  return ['users', '/users/me/muted_users/:muted_user_id', 'POST'] as const
}

export function getPostUsersMeMutedUsersMutedUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeMutedUsersMutedUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>,
    ) {
      return parseResponse(client.users.me.muted_users[':muted_user_id'].$post(args, options))
    },
  })
}

export function usePostUsersMeMutedUsersMutedUserId<
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
                Awaited<ReturnType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$post']>,
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
  const mutationDefaults = getPostUsersMeMutedUsersMutedUserIdMutationOptions<
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

export function getDeleteUsersMeMutedUsersMutedUserIdMutationKey() {
  return ['users', '/users/me/muted_users/:muted_user_id', 'DELETE'] as const
}

export function getDeleteUsersMeMutedUsersMutedUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeMutedUsersMutedUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>,
    ) {
      return parseResponse(client.users.me.muted_users[':muted_user_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersMeMutedUsersMutedUserId<
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
                  ReturnType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.muted_users)[':muted_user_id']['$delete']>,
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
  const mutationDefaults = getDeleteUsersMeMutedUsersMutedUserIdMutationOptions<
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

export function getPostUsersMeApnsDeviceTokenMutationKey() {
  return ['users', '/users/me/apns_device_token', 'POST'] as const
}

export function getPostUsersMeApnsDeviceTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.apns_device_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.apns_device_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeApnsDeviceTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.apns_device_token.$post>) {
      return parseResponse(client.users.me.apns_device_token.$post(args, options))
    },
  })
}

export function usePostUsersMeApnsDeviceToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.apns_device_token.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.apns_device_token.$post>,
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
  const mutationDefaults = getPostUsersMeApnsDeviceTokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeApnsDeviceTokenMutationKey() {
  return ['users', '/users/me/apns_device_token', 'DELETE'] as const
}

export function getDeleteUsersMeApnsDeviceTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.apns_device_token.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.apns_device_token.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeApnsDeviceTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.apns_device_token.$delete>) {
      return parseResponse(client.users.me.apns_device_token.$delete(args, options))
    },
  })
}

export function useDeleteUsersMeApnsDeviceToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.apns_device_token.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.apns_device_token.$delete>,
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
  const mutationDefaults = getDeleteUsersMeApnsDeviceTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMeAndroidGcmRegIdMutationKey() {
  return ['users', '/users/me/android_gcm_reg_id', 'POST'] as const
}

export function getPostUsersMeAndroidGcmRegIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.android_gcm_reg_id.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.android_gcm_reg_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeAndroidGcmRegIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.android_gcm_reg_id.$post>) {
      return parseResponse(client.users.me.android_gcm_reg_id.$post(args, options))
    },
  })
}

export function usePostUsersMeAndroidGcmRegId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.android_gcm_reg_id.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.android_gcm_reg_id.$post>,
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
  const mutationDefaults = getPostUsersMeAndroidGcmRegIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeAndroidGcmRegIdMutationKey() {
  return ['users', '/users/me/android_gcm_reg_id', 'DELETE'] as const
}

export function getDeleteUsersMeAndroidGcmRegIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.android_gcm_reg_id.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.android_gcm_reg_id.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeAndroidGcmRegIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.android_gcm_reg_id.$delete>) {
      return parseResponse(client.users.me.android_gcm_reg_id.$delete(args, options))
    },
  })
}

export function useDeleteUsersMeAndroidGcmRegId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.android_gcm_reg_id.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.android_gcm_reg_id.$delete>,
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
  const mutationDefaults = getDeleteUsersMeAndroidGcmRegIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdSubscriptionsStreamIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/subscriptions/:stream_id', toValue(args)] as const
}

export function getUsersUserIdSubscriptionsStreamIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdSubscriptionsStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].subscriptions[':stream_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdSubscriptionsStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
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
                    (typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']
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
                    (typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdSubscriptionsStreamIdQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['subscriptions'][':stream_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSubscriptionsStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdSubscriptionsStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].subscriptions[':stream_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>>,
) {
  return ['users', '/users/:user_id/channels', toValue(args)] as const
}

export function getUsersUserIdChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRealmEmojiEmojiNameMutationKey() {
  return ['realm', '/realm/emoji/:emoji_name', 'POST'] as const
}

export function getPostRealmEmojiEmojiNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.emoji)[':emoji_name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmEmojiEmojiNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$post']>) {
      return parseResponse(client.realm.emoji[':emoji_name'].$post(args, options))
    },
  })
}

export function usePostRealmEmojiEmojiName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.emoji)[':emoji_name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$post']>,
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
  const mutationDefaults = getPostRealmEmojiEmojiNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRealmEmojiEmojiNameMutationKey() {
  return ['realm', '/realm/emoji/:emoji_name', 'DELETE'] as const
}

export function getDeleteRealmEmojiEmojiNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.emoji)[':emoji_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmEmojiEmojiNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$delete']>,
    ) {
      return parseResponse(client.realm.emoji[':emoji_name'].$delete(args, options))
    },
  })
}

export function useDeleteRealmEmojiEmojiName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.emoji)[':emoji_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.emoji)[':emoji_name']['$delete']>,
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
  const mutationDefaults = getDeleteRealmEmojiEmojiNameMutationOptions<TError, TOnMutateResult>(
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

export function getRealmEmojiQueryKey() {
  return ['realm', '/realm/emoji'] as const
}

export function getRealmEmojiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRealmEmojiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.realm.emoji.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmEmoji<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>
          >,
          ReturnType<typeof getRealmEmojiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.emoji.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRealmEmojiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRealmEmojiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.realm.emoji.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmPresenceQueryKey() {
  return ['realm', '/realm/presence'] as const
}

export function getRealmPresenceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRealmPresenceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.realm.presence.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmPresence<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
          >,
          ReturnType<typeof getRealmPresenceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.presence.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRealmPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRealmPresenceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.realm.presence.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmDomainsQueryKey() {
  return ['realm', '/realm/domains'] as const
}

export function getRealmDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRealmDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.realm.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
          >,
          ReturnType<typeof getRealmDomainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRealmDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.realm.domains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRealmDomainsMutationKey() {
  return ['realm', '/realm/domains', 'POST'] as const
}

export function getPostRealmDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.realm.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.domains.$post>) {
      return parseResponse(client.realm.domains.$post(args, options))
    },
  })
}

export function usePostRealmDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.realm.domains.$post>,
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
  const mutationDefaults = getPostRealmDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRealmDomainsDomainMutationKey() {
  return ['realm', '/realm/domains/:domain', 'DELETE'] as const
}

export function getDeleteRealmDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.domains)[':domain']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.domains)[':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmDomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.realm.domains)[':domain']['$delete']>) {
      return parseResponse(client.realm.domains[':domain'].$delete(args, options))
    },
  })
}

export function useDeleteRealmDomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.domains)[':domain']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.domains)[':domain']['$delete']>,
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
  const mutationDefaults = getDeleteRealmDomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRealmDomainsDomainMutationKey() {
  return ['realm', '/realm/domains/:domain', 'PATCH'] as const
}

export function getPatchRealmDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.domains)[':domain']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.domains)[':domain']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRealmDomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.realm.domains)[':domain']['$patch']>) {
      return parseResponse(client.realm.domains[':domain'].$patch(args, options))
    },
  })
}

export function usePatchRealmDomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.domains)[':domain']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.domains)[':domain']['$patch']>,
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
  const mutationDefaults = getPatchRealmDomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealmDeactivateMutationKey() {
  return ['realm', '/realm/deactivate', 'POST'] as const
}

export function getPostRealmDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.deactivate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.realm.deactivate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmDeactivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.deactivate.$post>) {
      return parseResponse(client.realm.deactivate.$post(args, options))
    },
  })
}

export function usePostRealmDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.deactivate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realm.deactivate.$post>,
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
  const mutationDefaults = getPostRealmDeactivateMutationOptions<TError, TOnMutateResult>(
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

export function getRealmProfileFieldsQueryKey() {
  return ['realm', '/realm/profile_fields'] as const
}

export function getRealmProfileFieldsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRealmProfileFieldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.realm.profile_fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmProfileFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>
            >
          >,
          ReturnType<typeof getRealmProfileFieldsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRealmProfileFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRealmProfileFieldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.realm.profile_fields.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRealmProfileFieldsMutationKey() {
  return ['realm', '/realm/profile_fields', 'POST'] as const
}

export function getPostRealmProfileFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.realm.profile_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmProfileFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.profile_fields.$post>) {
      return parseResponse(client.realm.profile_fields.$post(args, options))
    },
  })
}

export function usePostRealmProfileFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realm.profile_fields.$post>,
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
  const mutationDefaults = getPostRealmProfileFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRealmProfileFieldsMutationKey() {
  return ['realm', '/realm/profile_fields', 'PATCH'] as const
}

export function getPatchRealmProfileFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.realm.profile_fields.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRealmProfileFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.profile_fields.$patch>) {
      return parseResponse(client.realm.profile_fields.$patch(args, options))
    },
  })
}

export function usePatchRealmProfileFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.profile_fields.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realm.profile_fields.$patch>,
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
  const mutationDefaults = getPatchRealmProfileFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRealmProfileFieldsFieldIdMutationKey() {
  return ['realm', '/realm/profile_fields/:field_id', 'DELETE'] as const
}

export function getDeleteRealmProfileFieldsFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.profile_fields)[':field_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmProfileFieldsFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$delete']>,
    ) {
      return parseResponse(client.realm.profile_fields[':field_id'].$delete(args, options))
    },
  })
}

export function useDeleteRealmProfileFieldsFieldId<
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
                Awaited<ReturnType<(typeof client.realm.profile_fields)[':field_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$delete']>,
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
  const mutationDefaults = getDeleteRealmProfileFieldsFieldIdMutationOptions<
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

export function getPatchRealmProfileFieldsFieldIdMutationKey() {
  return ['realm', '/realm/profile_fields/:field_id', 'PATCH'] as const
}

export function getPatchRealmProfileFieldsFieldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.profile_fields)[':field_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRealmProfileFieldsFieldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$patch']>,
    ) {
      return parseResponse(client.realm.profile_fields[':field_id'].$patch(args, options))
    },
  })
}

export function usePatchRealmProfileFieldsFieldId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.profile_fields)[':field_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.profile_fields)[':field_id']['$patch']>,
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
  const mutationDefaults = getPatchRealmProfileFieldsFieldIdMutationOptions<
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

export function getPatchRealmUserSettingsDefaultsMutationKey() {
  return ['realm', '/realm/user_settings_defaults', 'PATCH'] as const
}

export function getPatchRealmUserSettingsDefaultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.realm.user_settings_defaults.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.realm.user_settings_defaults.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRealmUserSettingsDefaultsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.user_settings_defaults.$patch>) {
      return parseResponse(client.realm.user_settings_defaults.$patch(args, options))
    },
  })
}

export function usePatchRealmUserSettingsDefaults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.realm.user_settings_defaults.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.realm.user_settings_defaults.$patch>,
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
  const mutationDefaults = getPatchRealmUserSettingsDefaultsMutationOptions<
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

export function getPostUsersMeAvatarMutationKey() {
  return ['users', '/users/me/avatar', 'POST'] as const
}

export function getPostUsersMeAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.avatar.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.avatar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeAvatarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.avatar.$post>) {
      return parseResponse(client.users.me.avatar.$post(args, options))
    },
  })
}

export function usePostUsersMeAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.avatar.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.avatar.$post>,
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
  const mutationDefaults = getPostUsersMeAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeAvatarMutationKey() {
  return ['users', '/users/me/avatar', 'DELETE'] as const
}

export function getDeleteUsersMeAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.avatar.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeAvatarMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.avatar.$delete(undefined, options))
    },
  })
}

export function useDeleteUsersMeAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.avatar.$delete>>>
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
  const mutationDefaults = getDeleteUsersMeAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMeSubscriptionsPropertiesMutationKey() {
  return ['users', '/users/me/subscriptions/properties', 'POST'] as const
}

export function getPostUsersMeSubscriptionsPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.users.me.subscriptions.properties.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.subscriptions.properties.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeSubscriptionsPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.users.me.subscriptions.properties.$post>,
    ) {
      return parseResponse(client.users.me.subscriptions.properties.$post(args, options))
    },
  })
}

export function usePostUsersMeSubscriptionsProperties<
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
                Awaited<ReturnType<typeof client.users.me.subscriptions.properties.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.subscriptions.properties.$post>,
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
  const mutationDefaults = getPostUsersMeSubscriptionsPropertiesMutationOptions<
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

export function getPatchUsersMeSubscriptionsStreamIdMutationKey() {
  return ['users', '/users/me/subscriptions/:stream_id', 'PATCH'] as const
}

export function getPatchUsersMeSubscriptionsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeSubscriptionsStreamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>,
    ) {
      return parseResponse(client.users.me.subscriptions[':stream_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersMeSubscriptionsStreamId<
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
                Awaited<ReturnType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.subscriptions)[':stream_id']['$patch']>,
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
  const mutationDefaults = getPatchUsersMeSubscriptionsStreamIdMutationOptions<
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

export function getUsersEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':email']['$get']>>,
) {
  return ['users', '/users/:email', toValue(args)] as const
}

export function getUsersEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':email']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':email']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersEmailQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersEmailMutationKey() {
  return ['users', '/users/:email', 'PATCH'] as const
}

export function getPatchUsersEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':email']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':email']['$patch']>) {
      return parseResponse(client.users[':email'].$patch(args, options))
    },
  })
}

export function usePatchUsersEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':email']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':email']['$patch']>,
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
  const mutationDefaults = getPatchUsersEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$delete']>) {
      return parseResponse(client.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$patch']>) {
      return parseResponse(client.users[':user_id'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$patch']>,
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
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getRealmLinkifiersQueryKey() {
  return ['realm', '/realm/linkifiers'] as const
}

export function getRealmLinkifiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRealmLinkifiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.realm.linkifiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmLinkifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>
            >
          >,
          ReturnType<typeof getRealmLinkifiersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRealmLinkifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRealmLinkifiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.realm.linkifiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchRealmLinkifiersMutationKey() {
  return ['realm', '/realm/linkifiers', 'PATCH'] as const
}

export function getPatchRealmLinkifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.realm.linkifiers.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRealmLinkifiersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.linkifiers.$patch>) {
      return parseResponse(client.realm.linkifiers.$patch(args, options))
    },
  })
}

export function usePatchRealmLinkifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.linkifiers.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realm.linkifiers.$patch>,
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
  const mutationDefaults = getPatchRealmLinkifiersMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealmFiltersMutationKey() {
  return ['realm', '/realm/filters', 'POST'] as const
}

export function getPostRealmFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.filters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.realm.filters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmFiltersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.filters.$post>) {
      return parseResponse(client.realm.filters.$post(args, options))
    },
  })
}

export function usePostRealmFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.filters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.realm.filters.$post>,
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
  const mutationDefaults = getPostRealmFiltersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRealmFiltersFilterIdMutationKey() {
  return ['realm', '/realm/filters/:filter_id', 'DELETE'] as const
}

export function getDeleteRealmFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.filters)[':filter_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.filters)[':filter_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realm.filters)[':filter_id']['$delete']>,
    ) {
      return parseResponse(client.realm.filters[':filter_id'].$delete(args, options))
    },
  })
}

export function useDeleteRealmFiltersFilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.filters)[':filter_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.filters)[':filter_id']['$delete']>,
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
  const mutationDefaults = getDeleteRealmFiltersFilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRealmFiltersFilterIdMutationKey() {
  return ['realm', '/realm/filters/:filter_id', 'PATCH'] as const
}

export function getPatchRealmFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.filters)[':filter_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.filters)[':filter_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRealmFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realm.filters)[':filter_id']['$patch']>,
    ) {
      return parseResponse(client.realm.filters[':filter_id'].$patch(args, options))
    },
  })
}

export function usePatchRealmFiltersFilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.realm.filters)[':filter_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.filters)[':filter_id']['$patch']>,
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
  const mutationDefaults = getPatchRealmFiltersFilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealmPlaygroundsMutationKey() {
  return ['realm', '/realm/playgrounds', 'POST'] as const
}

export function getPostRealmPlaygroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.realm.playgrounds.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.realm.playgrounds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmPlaygroundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.realm.playgrounds.$post>) {
      return parseResponse(client.realm.playgrounds.$post(args, options))
    },
  })
}

export function usePostRealmPlaygrounds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.realm.playgrounds.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.realm.playgrounds.$post>,
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
  const mutationDefaults = getPostRealmPlaygroundsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRealmPlaygroundsPlaygroundIdMutationKey() {
  return ['realm', '/realm/playgrounds/:playground_id', 'DELETE'] as const
}

export function getDeleteRealmPlaygroundsPlaygroundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmPlaygroundsPlaygroundIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>,
    ) {
      return parseResponse(client.realm.playgrounds[':playground_id'].$delete(args, options))
    },
  })
}

export function useDeleteRealmPlaygroundsPlaygroundId<
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
                Awaited<ReturnType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.realm.playgrounds)[':playground_id']['$delete']>,
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
  const mutationDefaults = getDeleteRealmPlaygroundsPlaygroundIdMutationOptions<
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

export function getDeleteExportRealmExportIdMutationKey() {
  return ['export', '/export/realm/:export_id', 'DELETE'] as const
}

export function getDeleteExportRealmExportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.realm)[':export_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.export.realm)[':export_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExportRealmExportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.export.realm)[':export_id']['$delete']>,
    ) {
      return parseResponse(client.export.realm[':export_id'].$delete(args, options))
    },
  })
}

export function useDeleteExportRealmExportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.realm)[':export_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.export.realm)[':export_id']['$delete']>,
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
  const mutationDefaults = getDeleteExportRealmExportIdMutationOptions<TError, TOnMutateResult>(
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

export function getExportRealmQueryKey() {
  return ['export', '/export/realm'] as const
}

export function getExportRealmQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExportRealmQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.realm.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExportRealm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>
          >,
          ReturnType<typeof getExportRealmQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExportRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExportRealmQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.export.realm.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExportRealmMutationKey() {
  return ['export', '/export/realm', 'POST'] as const
}

export function getPostExportRealmMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.export.realm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportRealmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.export.realm.$post>) {
      return parseResponse(client.export.realm.$post(args, options))
    },
  })
}

export function usePostExportRealm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.export.realm.$post>,
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
  const mutationDefaults = getPostExportRealmMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportRealmConsentsQueryKey() {
  return ['export', '/export/realm/consents'] as const
}

export function getExportRealmConsentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExportRealmConsentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.realm.consents.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportRealmConsents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
            >
          >,
          ReturnType<typeof getExportRealmConsentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.export.realm.consents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportRealmConsentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExportRealmConsentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.export.realm.consents.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvitesQueryKey() {
  return ['invites', '/invites'] as const
}

export function getInvitesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInvitesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>
          >,
          ReturnType<typeof getInvitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInvitesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.invites.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInvitesMutationKey() {
  return ['invites', '/invites', 'POST'] as const
}

export function getPostInvitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>>,
    TError,
    InferRequestType<typeof client.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invites.$post>) {
      return parseResponse(client.invites.$post(args, options))
    },
  })
}

export function usePostInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invites.$post>,
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
  const mutationDefaults = getPostInvitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvitesMultiuseMutationKey() {
  return ['invites', '/invites/multiuse', 'POST'] as const
}

export function getPostInvitesMultiuseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invites.multiuse.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invites.multiuse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesMultiuseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invites.multiuse.$post>) {
      return parseResponse(client.invites.multiuse.$post(args, options))
    },
  })
}

export function usePostInvitesMultiuse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invites.multiuse.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invites.multiuse.$post>,
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
  const mutationDefaults = getPostInvitesMultiuseMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInvitesInviteIdMutationKey() {
  return ['invites', '/invites/:invite_id', 'DELETE'] as const
}

export function getDeleteInvitesInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':invite_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invites)[':invite_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitesInviteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invites)[':invite_id']['$delete']>) {
      return parseResponse(client.invites[':invite_id'].$delete(args, options))
    },
  })
}

export function useDeleteInvitesInviteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites)[':invite_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invites)[':invite_id']['$delete']>,
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
  const mutationDefaults = getDeleteInvitesInviteIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInvitesMultiuseInviteIdMutationKey() {
  return ['invites', '/invites/multiuse/:invite_id', 'DELETE'] as const
}

export function getDeleteInvitesMultiuseInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invites.multiuse)[':invite_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invites.multiuse)[':invite_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitesMultiuseInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invites.multiuse)[':invite_id']['$delete']>,
    ) {
      return parseResponse(client.invites.multiuse[':invite_id'].$delete(args, options))
    },
  })
}

export function useDeleteInvitesMultiuseInviteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites.multiuse)[':invite_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invites.multiuse)[':invite_id']['$delete']>,
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
  const mutationDefaults = getDeleteInvitesMultiuseInviteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvitesInviteIdResendMutationKey() {
  return ['invites', '/invites/:invite_id/resend', 'POST'] as const
}

export function getPostInvitesInviteIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invites)[':invite_id']['resend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invites)[':invite_id']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesInviteIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invites)[':invite_id']['resend']['$post']>,
    ) {
      return parseResponse(client.invites[':invite_id'].resend.$post(args, options))
    },
  })
}

export function usePostInvitesInviteIdResend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites)[':invite_id']['resend']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invites)[':invite_id']['resend']['$post']>,
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
  const mutationDefaults = getPostInvitesInviteIdResendMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealmTestWelcomeBotCustomMessageMutationKey() {
  return ['realm', '/realm/test_welcome_bot_custom_message', 'POST'] as const
}

export function getPostRealmTestWelcomeBotCustomMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.realm.test_welcome_bot_custom_message.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.realm.test_welcome_bot_custom_message.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmTestWelcomeBotCustomMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.realm.test_welcome_bot_custom_message.$post>,
    ) {
      return parseResponse(client.realm.test_welcome_bot_custom_message.$post(args, options))
    },
  })
}

export function usePostRealmTestWelcomeBotCustomMessage<
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
                Awaited<ReturnType<typeof client.realm.test_welcome_bot_custom_message.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.realm.test_welcome_bot_custom_message.$post>,
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
  const mutationDefaults = getPostRealmTestWelcomeBotCustomMessageMutationOptions<
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

export function getPostRegisterMutationKey() {
  return ['register', '/register', 'POST'] as const
}

export function getPostRegisterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    InferRequestType<typeof client.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.register.$post>) {
      return parseResponse(client.register.$post(args, options))
    },
  })
}

export function usePostRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.register.$post>,
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
  const mutationDefaults = getPostRegisterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServerSettingsQueryKey() {
  return ['server_settings', '/server_settings'] as const
}

export function getServerSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServerSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server_settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>
            >
          >,
          ReturnType<typeof getServerSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServerSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServerSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.server_settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSettingsMutationKey() {
  return ['settings', '/settings', 'PATCH'] as const
}

export function getPatchSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$patch>>>>>,
    TError,
    InferRequestType<typeof client.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$patch>) {
      return parseResponse(client.settings.$patch(args, options))
    },
  })
}

export function usePatchSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.$patch>,
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
  const mutationDefaults = getPatchSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStreamsStreamIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>
  >,
) {
  return ['streams', '/streams/:stream_id/members', toValue(args)] as const
}

export function getStreamsStreamIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsStreamIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams[':stream_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamsStreamIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.streams)[':stream_id']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStreamsStreamIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.streams)[':stream_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsStreamIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsStreamIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams[':stream_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
) {
  return ['streams', '/streams', toValue(args)] as const
}

export function getStreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          ReturnType<typeof getStreamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsStreamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.streams)[':stream_id']['$get']>>,
) {
  return ['streams', '/streams/:stream_id', toValue(args)] as const
}

export function getStreamsStreamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.streams)[':stream_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams[':stream_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamsStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.streams)[':stream_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStreamsStreamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams[':stream_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteStreamsStreamIdMutationKey() {
  return ['streams', '/streams/:stream_id', 'DELETE'] as const
}

export function getDeleteStreamsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.streams)[':stream_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStreamsStreamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.streams)[':stream_id']['$delete']>) {
      return parseResponse(client.streams[':stream_id'].$delete(args, options))
    },
  })
}

export function useDeleteStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.streams)[':stream_id']['$delete']>,
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
  const mutationDefaults = getDeleteStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchStreamsStreamIdMutationKey() {
  return ['streams', '/streams/:stream_id', 'PATCH'] as const
}

export function getPatchStreamsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':stream_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.streams)[':stream_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStreamsStreamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.streams)[':stream_id']['$patch']>) {
      return parseResponse(client.streams[':stream_id'].$patch(args, options))
    },
  })
}

export function usePatchStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.streams)[':stream_id']['$patch']>,
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
  const mutationDefaults = getPatchStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
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

export function getStreamsStreamIdEmailAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>
  >,
) {
  return ['streams', '/streams/:stream_id/email_address', toValue(args)] as const
}

export function getStreamsStreamIdEmailAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsStreamIdEmailAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams[':stream_id'].email_address.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamsStreamIdEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.streams)[':stream_id']['email_address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStreamsStreamIdEmailAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.streams)[':stream_id']['email_address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsStreamIdEmailAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsStreamIdEmailAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams[':stream_id'].email_address.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStreamsStreamIdDeleteTopicMutationKey() {
  return ['streams', '/streams/:stream_id/delete_topic', 'POST'] as const
}

export function getPostStreamsStreamIdDeleteTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStreamsStreamIdDeleteTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>,
    ) {
      return parseResponse(client.streams[':stream_id'].delete_topic.$post(args, options))
    },
  })
}

export function usePostStreamsStreamIdDeleteTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.streams)[':stream_id']['delete_topic']['$post']>,
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
  const mutationDefaults = getPostStreamsStreamIdDeleteTopicMutationOptions<
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

export function getPostTypingMutationKey() {
  return ['typing', '/typing', 'POST'] as const
}

export function getPostTypingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typing.$post>>>>>,
    TError,
    InferRequestType<typeof client.typing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTypingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.typing.$post>) {
      return parseResponse(client.typing.$post(args, options))
    },
  })
}

export function usePostTyping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typing.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.typing.$post>,
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
  const mutationDefaults = getPostTypingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMessagesMessageIdTypingMutationKey() {
  return ['messages', '/messages/:message_id/typing', 'POST'] as const
}

export function getPostMessagesMessageIdTypingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':message_id']['typing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':message_id']['typing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMessageIdTypingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)[':message_id']['typing']['$post']>,
    ) {
      return parseResponse(client.messages[':message_id'].typing.$post(args, options))
    },
  })
}

export function usePostMessagesMessageIdTyping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':message_id']['typing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':message_id']['typing']['$post']>,
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
  const mutationDefaults = getPostMessagesMessageIdTypingMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsCreateMutationKey() {
  return ['channels', '/channels/create', 'POST'] as const
}

export function getPostChannelsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.create.$post>) {
      return parseResponse(client.channels.create.$post(args, options))
    },
  })
}

export function usePostChannelsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channels.create.$post>,
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
  const mutationDefaults = getPostChannelsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserGroupsCreateMutationKey() {
  return ['user_groups', '/user_groups/create', 'POST'] as const
}

export function getPostUserGroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user_groups.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserGroupsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_groups.create.$post>) {
      return parseResponse(client.user_groups.create.$post(args, options))
    },
  })
}

export function usePostUserGroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user_groups.create.$post>,
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
  const mutationDefaults = getPostUserGroupsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getUserGroupsUserGroupIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>
  >,
) {
  return ['user_groups', '/user_groups/:user_group_id/members', toValue(args)] as const
}

export function getUserGroupsUserGroupIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserGroupsUserGroupIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_groups[':user_group_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGroupsUserGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>
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
                  ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserGroupsUserGroupIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGroupsUserGroupIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserGroupsUserGroupIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_groups[':user_group_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserGroupsUserGroupIdMembersMutationKey() {
  return ['user_groups', '/user_groups/:user_group_id/members', 'POST'] as const
}

export function getPostUserGroupsUserGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserGroupsUserGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$post']>,
    ) {
      return parseResponse(client.user_groups[':user_group_id'].members.$post(args, options))
    },
  })
}

export function usePostUserGroupsUserGroupIdMembers<
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
                  ReturnType<(typeof client.user_groups)[':user_group_id']['members']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user_groups)[':user_group_id']['members']['$post']>,
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
  const mutationDefaults = getPostUserGroupsUserGroupIdMembersMutationOptions<
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

export function getPatchUserGroupsUserGroupIdMutationKey() {
  return ['user_groups', '/user_groups/:user_group_id', 'PATCH'] as const
}

export function getPatchUserGroupsUserGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserGroupsUserGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_groups)[':user_group_id']['$patch']>,
    ) {
      return parseResponse(client.user_groups[':user_group_id'].$patch(args, options))
    },
  })
}

export function usePatchUserGroupsUserGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user_groups)[':user_group_id']['$patch']>,
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
  const mutationDefaults = getPatchUserGroupsUserGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_groups.$get>>,
) {
  return ['user_groups', '/user_groups', toValue(args)] as const
}

export function getUserGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>
          >,
          ReturnType<typeof getUserGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserGroupsUserGroupIdSubgroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>
  >,
) {
  return ['user_groups', '/user_groups/:user_group_id/subgroups', toValue(args)] as const
}

export function getUserGroupsUserGroupIdSubgroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserGroupsUserGroupIdSubgroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_groups[':user_group_id'].subgroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGroupsUserGroupIdSubgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>
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
                  ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserGroupsUserGroupIdSubgroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGroupsUserGroupIdSubgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserGroupsUserGroupIdSubgroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_groups[':user_group_id'].subgroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserGroupsUserGroupIdSubgroupsMutationKey() {
  return ['user_groups', '/user_groups/:user_group_id/subgroups', 'POST'] as const
}

export function getPostUserGroupsUserGroupIdSubgroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserGroupsUserGroupIdSubgroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>,
    ) {
      return parseResponse(client.user_groups[':user_group_id'].subgroups.$post(args, options))
    },
  })
}

export function usePostUserGroupsUserGroupIdSubgroups<
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
                  ReturnType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user_groups)[':user_group_id']['subgroups']['$post']>,
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
  const mutationDefaults = getPostUserGroupsUserGroupIdSubgroupsMutationOptions<
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

export function getUserGroupsUserGroupIdMembersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']>
  >,
) {
  return ['user_groups', '/user_groups/:user_group_id/members/:user_id', toValue(args)] as const
}

export function getUserGroupsUserGroupIdMembersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserGroupsUserGroupIdMembersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_groups[':user_group_id'].members[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGroupsUserGroupIdMembersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']>
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
                    (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
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
                    (typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserGroupsUserGroupIdMembersUserIdQueryKey>
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
            ReturnType<(typeof client.user_groups)[':user_group_id']['members'][':user_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGroupsUserGroupIdMembersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserGroupsUserGroupIdMembersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_groups[':user_group_id'].members[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserGroupsUserGroupIdDeactivateMutationKey() {
  return ['user_groups', '/user_groups/:user_group_id/deactivate', 'POST'] as const
}

export function getPostUserGroupsUserGroupIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserGroupsUserGroupIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>,
    ) {
      return parseResponse(client.user_groups[':user_group_id'].deactivate.$post(args, options))
    },
  })
}

export function usePostUserGroupsUserGroupIdDeactivate<
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
                  ReturnType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user_groups)[':user_group_id']['deactivate']['$post']>,
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
  const mutationDefaults = getPostUserGroupsUserGroupIdDeactivateMutationOptions<
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

export function getPostChannelFoldersCreateMutationKey() {
  return ['channel_folders', '/channel_folders/create', 'POST'] as const
}

export function getPostChannelFoldersCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.channel_folders.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelFoldersCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel_folders.create.$post>) {
      return parseResponse(client.channel_folders.create.$post(args, options))
    },
  })
}

export function usePostChannelFoldersCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel_folders.create.$post>,
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
  const mutationDefaults = getPostChannelFoldersCreateMutationOptions<TError, TOnMutateResult>(
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

export function getChannelFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel_folders.$get>>,
) {
  return ['channel_folders', '/channel_folders', toValue(args)] as const
}

export function getChannelFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel_folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel_folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel_folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>
            >
          >,
          ReturnType<typeof getChannelFoldersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel_folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchChannelFoldersMutationKey() {
  return ['channel_folders', '/channel_folders', 'PATCH'] as const
}

export function getPatchChannelFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.channel_folders.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channel_folders.$patch>) {
      return parseResponse(client.channel_folders.$patch(args, options))
    },
  })
}

export function usePatchChannelFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channel_folders.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channel_folders.$patch>,
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
  const mutationDefaults = getPatchChannelFoldersMutationOptions<TError, TOnMutateResult>(
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

export function getPatchChannelFoldersChannelFolderIdMutationKey() {
  return ['channel_folders', '/channel_folders/:channel_folder_id', 'PATCH'] as const
}

export function getPatchChannelFoldersChannelFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelFoldersChannelFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>,
    ) {
      return parseResponse(client.channel_folders[':channel_folder_id'].$patch(args, options))
    },
  })
}

export function usePatchChannelFoldersChannelFolderId<
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
                Awaited<ReturnType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel_folders)[':channel_folder_id']['$patch']>,
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
  const mutationDefaults = getPatchChannelFoldersChannelFolderIdMutationOptions<
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

export function getBotsBotIdApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>>,
) {
  return ['bots', '/bots/:bot_id/api_key', toValue(args)] as const
}

export function getBotsBotIdApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotIdApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':bot_id'].api_key.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotIdApiKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['api_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBotsBotIdApiKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotIdApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':bot_id'].api_key.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBotsBotIdApiKeyRegenerateMutationKey() {
  return ['bots', '/bots/:bot_id/api_key/regenerate', 'POST'] as const
}

export function getPostBotsBotIdApiKeyRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsBotIdApiKeyRegenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>,
    ) {
      return parseResponse(client.bots[':bot_id'].api_key.regenerate.$post(args, options))
    },
  })
}

export function usePostBotsBotIdApiKeyRegenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bots)[':bot_id']['api_key']['regenerate']['$post']>,
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
  const mutationDefaults = getPostBotsBotIdApiKeyRegenerateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRealTimeMutationKey() {
  return ['real-time', '/real-time', 'POST'] as const
}

export function getPostRealTimeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['real-time']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['real-time']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealTimeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['real-time']['$post']>) {
      return parseResponse(client['real-time'].$post(args, options))
    },
  })
}

export function usePostRealTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['real-time']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['real-time']['$post']>,
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
  const mutationDefaults = getPostRealTimeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRestErrorHandlingMutationKey() {
  return ['rest-error-handling', '/rest-error-handling', 'POST'] as const
}

export function getPostRestErrorHandlingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['rest-error-handling']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostRestErrorHandlingMutationKey(),
    async mutationFn() {
      return parseResponse(client['rest-error-handling'].$post(undefined, options))
    },
  })
}

export function usePostRestErrorHandling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rest-error-handling']['$post']>>
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
  const mutationDefaults = getPostRestErrorHandlingMutationOptions<TError, TOnMutateResult>(
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

export function getPostZulipOutgoingWebhookMutationKey() {
  return ['zulip-outgoing-webhook', '/zulip-outgoing-webhook', 'POST'] as const
}

export function getPostZulipOutgoingWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['zulip-outgoing-webhook']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostZulipOutgoingWebhookMutationKey(),
    async mutationFn() {
      return parseResponse(client['zulip-outgoing-webhook'].$post(undefined, options))
    },
  })
}

export function usePostZulipOutgoingWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['zulip-outgoing-webhook']['$post']>>
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
  const mutationDefaults = getPostZulipOutgoingWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getCallsBigbluebuttonCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.bigbluebutton.create.$get>>,
) {
  return ['calls', '/calls/bigbluebutton/create', toValue(args)] as const
}

export function getCallsBigbluebuttonCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.bigbluebutton.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsBigbluebuttonCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calls.bigbluebutton.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallsBigbluebuttonCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.bigbluebutton.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>
              >
            >
          >,
          ReturnType<typeof getCallsBigbluebuttonCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.calls.bigbluebutton.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallsBigbluebuttonCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsBigbluebuttonCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calls.bigbluebutton.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCallsNextcloudTalkCreateMutationKey() {
  return ['calls', '/calls/nextcloud_talk/create', 'POST'] as const
}

export function getPostCallsNextcloudTalkCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.calls.nextcloud_talk.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.calls.nextcloud_talk.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsNextcloudTalkCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calls.nextcloud_talk.create.$post>) {
      return parseResponse(client.calls.nextcloud_talk.create.$post(args, options))
    },
  })
}

export function usePostCallsNextcloudTalkCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.calls.nextcloud_talk.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.calls.nextcloud_talk.create.$post>,
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
  const mutationDefaults = getPostCallsNextcloudTalkCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCallsWebexCreateMutationKey() {
  return ['calls', '/calls/webex/create', 'POST'] as const
}

export function getPostCallsWebexCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.webex.create.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCallsWebexCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.calls.webex.create.$post(undefined, options))
    },
  })
}

export function usePostCallsWebexCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.calls.webex.create.$post>>>
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
  const mutationDefaults = getPostCallsWebexCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCallsGoogleMeetCreateMutationKey() {
  return ['calls', '/calls/google_meet/create', 'POST'] as const
}

export function getPostCallsGoogleMeetCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.calls.google_meet.create.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCallsGoogleMeetCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.calls.google_meet.create.$post(undefined, options))
    },
  })
}

export function usePostCallsGoogleMeetCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.calls.google_meet.create.$post>>
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
  const mutationDefaults = getPostCallsGoogleMeetCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCallsConstructorgroupsCreateMutationKey() {
  return ['calls', '/calls/constructorgroups/create', 'POST'] as const
}

export function getPostCallsConstructorgroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.calls.constructorgroups.create.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCallsConstructorgroupsCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.calls.constructorgroups.create.$post(undefined, options))
    },
  })
}

export function usePostCallsConstructorgroupsCreate<
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
                Awaited<ReturnType<typeof client.calls.constructorgroups.create.$post>>
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
  const mutationDefaults = getPostCallsConstructorgroupsCreateMutationOptions<
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
