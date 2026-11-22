import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmojiQueryKey() {
  return ['emoji', '/emoji'] as const
}

export function getEmojiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmojiQueryKey>
  >({
    queryKey: getEmojiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.emoji.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmoji<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmojiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmojiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmoji<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmojiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmojiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChatQueryKey(args: InferRequestType<typeof client.chat.$get>) {
  return ['chat', '/chat', args] as const
}

export function getChatQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatQueryKey>
  >({
    queryKey: getChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChat<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chat.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChat<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chat.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostChatRegisterMutationKey() {
  return ['chat', '/chat/register', 'POST'] as const
}

export function getPostChatRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.register.$post>) {
      return parseResponse(client.chat.register.$post(args, options))
    },
  })
}

export function usePostChatRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chat.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsChatRegisterMutationKey() {
  return ['chat', '/chat/register', 'OPTIONS'] as const
}

export function getOptionsChatRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.register.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsChatRegisterMutationKey(),
    async mutationFn() {
      return parseResponse(client.chat.register.$options(undefined, options))
    },
  })
}

export function useOptionsChatRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.register.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsChatRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatMessagevisibilityMutationKey() {
  return ['chat', '/chat/messagevisibility', 'POST'] as const
}

export function getPostChatMessagevisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chat.messagevisibility.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.chat.messagevisibility.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatMessagevisibilityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.messagevisibility.$post>) {
      return parseResponse(client.chat.messagevisibility.$post(args, options))
    },
  })
}

export function usePostChatMessagevisibility<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chat.messagevisibility.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.chat.messagevisibility.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatMessagevisibilityMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatUsersSetenabledMutationKey() {
  return ['chat', '/chat/users/setenabled', 'POST'] as const
}

export function getPostChatUsersSetenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.setenabled.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.chat.users.setenabled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatUsersSetenabledMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.users.setenabled.$post>) {
      return parseResponse(client.chat.users.setenabled.$post(args, options))
    },
  })
}

export function usePostChatUsersSetenabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chat.users.setenabled.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.chat.users.setenabled.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChatUsersSetenabledMutationOptions<TError, TOnMutateResult>(
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

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getYpQueryKey() {
  return ['yp', '/yp'] as const
}

export function getYpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getYpQueryKey>
  >({
    queryKey: getYpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.yp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useYp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getYpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getYpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseYp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.yp.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getYpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getYpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSocialplatformsQueryKey() {
  return ['socialplatforms', '/socialplatforms'] as const
}

export function getSocialplatformsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSocialplatformsQueryKey>
  >({
    queryKey: getSocialplatformsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.socialplatforms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSocialplatforms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSocialplatformsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSocialplatformsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSocialplatforms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socialplatforms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSocialplatformsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSocialplatformsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVideoVariantsQueryKey() {
  return ['video', '/video/variants'] as const
}

export function getVideoVariantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVideoVariantsQueryKey>
  >({
    queryKey: getVideoVariantsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.video.variants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVideoVariants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideoVariantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVideoVariantsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVideoVariants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.video.variants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideoVariantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVideoVariantsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRemotefollowMutationKey() {
  return ['remotefollow', '/remotefollow', 'POST'] as const
}

export function getPostRemotefollowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotefollow.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.remotefollow.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemotefollowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.remotefollow.$post>) {
      return parseResponse(client.remotefollow.$post(args, options))
    },
  })
}

export function usePostRemotefollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotefollow.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.remotefollow.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRemotefollowMutationOptions<TError, TOnMutateResult>(
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

export function getFollowersQueryKey(args: InferRequestType<typeof client.followers.$get>) {
  return ['followers', '/followers', args] as const
}

export function getFollowersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.followers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFollowersQueryKey>
  >({
    queryKey: getFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.followers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.followers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.followers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsCmcdQueryKey(args: InferRequestType<typeof client.metrics.cmcd.$get>) {
  return ['metrics', '/metrics/cmcd', args] as const
}

export function getMetricsCmcdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.cmcd.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsCmcdQueryKey>
  >({
    queryKey: getMetricsCmcdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.cmcd.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetricsCmcd<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.cmcd.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCmcdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsCmcdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetricsCmcd<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metrics.cmcd.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetricsCmcdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsCmcdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMetricsCmcdMutationKey() {
  return ['metrics', '/metrics/cmcd', 'POST'] as const
}

export function getPostMetricsCmcdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metrics.cmcd.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsCmcdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metrics.cmcd.$post>) {
      return parseResponse(client.metrics.cmcd.$post(args, options))
    },
  })
}

export function usePostMetricsCmcd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metrics.cmcd.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsCmcdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsMetricsCmcdMutationKey() {
  return ['metrics', '/metrics/cmcd', 'OPTIONS'] as const
}

export function getOptionsMetricsCmcdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsMetricsCmcdMutationKey(),
    async mutationFn() {
      return parseResponse(client.metrics.cmcd.$options(undefined, options))
    },
  })
}

export function useOptionsMetricsCmcd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.cmcd.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsMetricsCmcdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMetricsPlaybackMutationKey() {
  return ['metrics', '/metrics/playback', 'POST'] as const
}

export function getPostMetricsPlaybackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.playback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metrics.playback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsPlaybackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metrics.playback.$post>) {
      return parseResponse(client.metrics.playback.$post(args, options))
    },
  })
}

export function usePostMetricsPlayback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metrics.playback.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.metrics.playback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsPlaybackMutationOptions<TError, TOnMutateResult>(
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

export function getPostNotificationsRegisterMutationKey() {
  return ['notifications', '/notifications/register', 'POST'] as const
}

export function getPostNotificationsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.register.$post>) {
      return parseResponse(client.notifications.register.$post(args, options))
    },
  })
}

export function usePostNotificationsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getAdminStatusQueryKey() {
  return ['admin', '/admin/status'] as const
}

export function getAdminStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminStatusQueryKey>
  >({
    queryKey: getAdminStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminStatusMutationKey() {
  return ['admin', '/admin/status', 'OPTIONS'] as const
}

export function getOptionsAdminStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminStatusMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.status.$options(undefined, options))
    },
  })
}

export function useOptionsAdminStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.status.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminDisconnectMutationKey() {
  return ['admin', '/admin/disconnect', 'POST'] as const
}

export function getPostAdminDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.disconnect.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDisconnectMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.disconnect.$post(undefined, options))
    },
  })
}

export function usePostAdminDisconnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.disconnect.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminDisconnectMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminDisconnectMutationKey() {
  return ['admin', '/admin/disconnect', 'OPTIONS'] as const
}

export function getOptionsAdminDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.disconnect.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminDisconnectMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.disconnect.$options(undefined, options))
    },
  })
}

export function useOptionsAdminDisconnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.disconnect.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminDisconnectMutationOptions<TError, TOnMutateResult>(
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

export function getAdminServerconfigQueryKey() {
  return ['admin', '/admin/serverconfig'] as const
}

export function getAdminServerconfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminServerconfigQueryKey>
  >({
    queryKey: getAdminServerconfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.serverconfig.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminServerconfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminServerconfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminServerconfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminServerconfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminServerconfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminServerconfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminServerconfigMutationKey() {
  return ['admin', '/admin/serverconfig', 'OPTIONS'] as const
}

export function getOptionsAdminServerconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminServerconfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.serverconfig.$options(undefined, options))
    },
  })
}

export function useOptionsAdminServerconfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.serverconfig.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminServerconfigMutationOptions<TError, TOnMutateResult>(
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

export function getAdminViewersOverTimeQueryKey(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
) {
  return ['admin', '/admin/viewersOverTime', args] as const
}

export function getAdminViewersOverTimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewersOverTimeQueryKey>
  >({
    queryKey: getAdminViewersOverTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.viewersOverTime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminViewersOverTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminViewersOverTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminViewersOverTimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminViewersOverTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminViewersOverTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminViewersOverTimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminViewersOverTimeMutationKey() {
  return ['admin', '/admin/viewersOverTime', 'OPTIONS'] as const
}

export function getOptionsAdminViewersOverTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewersOverTime.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminViewersOverTimeMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.viewersOverTime.$options(undefined, options))
    },
  })
}

export function useOptionsAdminViewersOverTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.viewersOverTime.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminViewersOverTimeMutationOptions<TError, TOnMutateResult>(
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

export function getAdminViewersQueryKey() {
  return ['admin', '/admin/viewers'] as const
}

export function getAdminViewersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewersQueryKey>
  >({
    queryKey: getAdminViewersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.viewers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminViewers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminViewersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminViewersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminViewers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminViewersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminViewersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminViewersMutationKey() {
  return ['admin', '/admin/viewers', 'OPTIONS'] as const
}

export function getOptionsAdminViewersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminViewersMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.viewers.$options(undefined, options))
    },
  })
}

export function useOptionsAdminViewers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminViewersMutationOptions<TError, TOnMutateResult>(
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

export function getAdminViewersPlaybackQueryKey() {
  return ['admin', '/admin/viewers/playback'] as const
}

export function getAdminViewersPlaybackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewersPlaybackQueryKey>
  >({
    queryKey: getAdminViewersPlaybackQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.viewers.playback.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminViewersPlayback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminViewersPlaybackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminViewersPlaybackQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminViewersPlayback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminViewersPlaybackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminViewersPlaybackQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminViewersPlaybackMutationKey() {
  return ['admin', '/admin/viewers/playback', 'OPTIONS'] as const
}

export function getOptionsAdminViewersPlaybackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.viewers.playback.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminViewersPlaybackMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.viewers.playback.$options(undefined, options))
    },
  })
}

export function useOptionsAdminViewersPlayback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.viewers.playback.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminViewersPlaybackMutationOptions<TError, TOnMutateResult>(
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

export function getAdminHardwarestatsQueryKey() {
  return ['admin', '/admin/hardwarestats'] as const
}

export function getAdminHardwarestatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminHardwarestatsQueryKey>
  >({
    queryKey: getAdminHardwarestatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.hardwarestats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminHardwarestats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminHardwarestatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminHardwarestatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminHardwarestats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminHardwarestatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminHardwarestatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminHardwarestatsMutationKey() {
  return ['admin', '/admin/hardwarestats', 'OPTIONS'] as const
}

export function getOptionsAdminHardwarestatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminHardwarestatsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.hardwarestats.$options(undefined, options))
    },
  })
}

export function useOptionsAdminHardwarestats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.hardwarestats.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminHardwarestatsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminChatClientsQueryKey() {
  return ['admin', '/admin/chat/clients'] as const
}

export function getAdminChatClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminChatClientsQueryKey>
  >({
    queryKey: getAdminChatClientsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.chat.clients.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminChatClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminChatClientsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminChatClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminChatClientsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminChatClientsMutationKey() {
  return ['admin', '/admin/chat/clients', 'OPTIONS'] as const
}

export function getOptionsAdminChatClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatClientsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.clients.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.clients.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatClientsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminChatMessagesQueryKey() {
  return ['admin', '/admin/chat/messages'] as const
}

export function getAdminChatMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminChatMessagesQueryKey>
  >({
    queryKey: getAdminChatMessagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.chat.messages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminChatMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminChatMessagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminChatMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminChatMessagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminChatMessagesMutationKey() {
  return ['admin', '/admin/chat/messages', 'OPTIONS'] as const
}

export function getOptionsAdminChatMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatMessagesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.messages.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messages.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminChatMessagevisibilityMutationKey() {
  return ['admin', '/admin/chat/messagevisibility', 'POST'] as const
}

export function getPostAdminChatMessagevisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.messagevisibility.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.chat.messagevisibility.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminChatMessagevisibilityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.chat.messagevisibility.$post>) {
      return parseResponse(client.admin.chat.messagevisibility.$post(args, options))
    },
  })
}

export function usePostAdminChatMessagevisibility<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.messagevisibility.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.chat.messagevisibility.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminChatMessagevisibilityMutationOptions<
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

export function getOptionsAdminChatMessagevisibilityMutationKey() {
  return ['admin', '/admin/chat/messagevisibility', 'OPTIONS'] as const
}

export function getOptionsAdminChatMessagevisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.messagevisibility.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatMessagevisibilityMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.messagevisibility.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatMessagevisibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.messagevisibility.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatMessagevisibilityMutationOptions<
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

export function getPostAdminChatUsersSetenabledMutationKey() {
  return ['admin', '/admin/chat/users/setenabled', 'POST'] as const
}

export function getPostAdminChatUsersSetenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.setenabled.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.chat.users.setenabled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminChatUsersSetenabledMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.chat.users.setenabled.$post>) {
      return parseResponse(client.admin.chat.users.setenabled.$post(args, options))
    },
  })
}

export function usePostAdminChatUsersSetenabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.users.setenabled.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.chat.users.setenabled.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminChatUsersSetenabledMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminChatUsersSetenabledMutationKey() {
  return ['admin', '/admin/chat/users/setenabled', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersSetenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.setenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersSetenabledMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.setenabled.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersSetenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.setenabled.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersSetenabledMutationOptions<
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

export function getAdminChatUsersDisabledQueryKey() {
  return ['admin', '/admin/chat/users/disabled'] as const
}

export function getAdminChatUsersDisabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminChatUsersDisabledQueryKey>
  >({
    queryKey: getAdminChatUsersDisabledQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.chat.users.disabled.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminChatUsersDisabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatUsersDisabledQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminChatUsersDisabledQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminChatUsersDisabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.disabled.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatUsersDisabledQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminChatUsersDisabledQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminChatUsersDisabledMutationKey() {
  return ['admin', '/admin/chat/users/disabled', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersDisabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.disabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersDisabledMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.disabled.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersDisabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.disabled.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersDisabledMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminChatUsersIpbansCreateMutationKey() {
  return ['admin', '/admin/chat/users/ipbans/create', 'POST'] as const
}

export function getPostAdminChatUsersIpbansCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.chat.users.ipbans.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.chat.users.ipbans.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminChatUsersIpbansCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.chat.users.ipbans.create.$post>) {
      return parseResponse(client.admin.chat.users.ipbans.create.$post(args, options))
    },
  })
}

export function usePostAdminChatUsersIpbansCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.users.ipbans.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.chat.users.ipbans.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminChatUsersIpbansCreateMutationOptions<
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

export function getOptionsAdminChatUsersIpbansCreateMutationKey() {
  return ['admin', '/admin/chat/users/ipbans/create', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersIpbansCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.ipbans.create.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersIpbansCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.ipbans.create.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersIpbansCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.ipbans.create.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersIpbansCreateMutationOptions<
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

export function getPostAdminChatUsersIpbansRemoveMutationKey() {
  return ['admin', '/admin/chat/users/ipbans/remove', 'POST'] as const
}

export function getPostAdminChatUsersIpbansRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.chat.users.ipbans.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.chat.users.ipbans.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminChatUsersIpbansRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.chat.users.ipbans.remove.$post>) {
      return parseResponse(client.admin.chat.users.ipbans.remove.$post(args, options))
    },
  })
}

export function usePostAdminChatUsersIpbansRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.users.ipbans.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.chat.users.ipbans.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminChatUsersIpbansRemoveMutationOptions<
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

export function getOptionsAdminChatUsersIpbansRemoveMutationKey() {
  return ['admin', '/admin/chat/users/ipbans/remove', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersIpbansRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.ipbans.remove.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersIpbansRemoveMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.ipbans.remove.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersIpbansRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.ipbans.remove.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersIpbansRemoveMutationOptions<
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

export function getAdminChatUsersIpbansQueryKey() {
  return ['admin', '/admin/chat/users/ipbans'] as const
}

export function getAdminChatUsersIpbansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminChatUsersIpbansQueryKey>
  >({
    queryKey: getAdminChatUsersIpbansQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.chat.users.ipbans.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminChatUsersIpbans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatUsersIpbansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminChatUsersIpbansQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminChatUsersIpbans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatUsersIpbansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminChatUsersIpbansQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminChatUsersIpbansMutationKey() {
  return ['admin', '/admin/chat/users/ipbans', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersIpbansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersIpbansMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.ipbans.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersIpbans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.ipbans.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersIpbansMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminChatUsersSetmoderatorMutationKey() {
  return ['admin', '/admin/chat/users/setmoderator', 'POST'] as const
}

export function getPostAdminChatUsersSetmoderatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.setmoderator.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.chat.users.setmoderator.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminChatUsersSetmoderatorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.chat.users.setmoderator.$post>) {
      return parseResponse(client.admin.chat.users.setmoderator.$post(args, options))
    },
  })
}

export function usePostAdminChatUsersSetmoderator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.users.setmoderator.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.chat.users.setmoderator.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminChatUsersSetmoderatorMutationOptions<
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

export function getOptionsAdminChatUsersSetmoderatorMutationKey() {
  return ['admin', '/admin/chat/users/setmoderator', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersSetmoderatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.setmoderator.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersSetmoderatorMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.setmoderator.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersSetmoderator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.setmoderator.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersSetmoderatorMutationOptions<
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

export function getAdminChatUsersModeratorsQueryKey() {
  return ['admin', '/admin/chat/users/moderators'] as const
}

export function getAdminChatUsersModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminChatUsersModeratorsQueryKey>
  >({
    queryKey: getAdminChatUsersModeratorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.chat.users.moderators.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminChatUsersModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatUsersModeratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminChatUsersModeratorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminChatUsersModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.chat.users.moderators.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminChatUsersModeratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminChatUsersModeratorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminChatUsersModeratorsMutationKey() {
  return ['admin', '/admin/chat/users/moderators', 'OPTIONS'] as const
}

export function getOptionsAdminChatUsersModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.chat.users.moderators.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminChatUsersModeratorsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.chat.users.moderators.$options(undefined, options))
    },
  })
}

export function useOptionsAdminChatUsersModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.chat.users.moderators.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminChatUsersModeratorsMutationOptions<
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

export function getAdminUsersQueryKey(args: InferRequestType<typeof client.admin.users.$get>) {
  return ['admin', '/admin/users', args] as const
}

export function getAdminUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >({
    queryKey: getAdminUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminUsersMutationKey() {
  return ['admin', '/admin/users', 'OPTIONS'] as const
}

export function getOptionsAdminUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminUsersMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.users.$options(undefined, options))
    },
  })
}

export function useOptionsAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersDeleteMutationKey() {
  return ['admin', '/admin/users/delete', 'POST'] as const
}

export function getPostAdminUsersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.users.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.users.delete.$post>) {
      return parseResponse(client.admin.users.delete.$post(args, options))
    },
  })
}

export function usePostAdminUsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.users.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminUsersDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminUsersDeleteMutationKey() {
  return ['admin', '/admin/users/delete', 'OPTIONS'] as const
}

export function getOptionsAdminUsersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.delete.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminUsersDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.users.delete.$options(undefined, options))
    },
  })
}

export function useOptionsAdminUsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.delete.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminUsersDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getAdminLogsQueryKey() {
  return ['admin', '/admin/logs'] as const
}

export function getAdminLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminLogsQueryKey>
  >({
    queryKey: getAdminLogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminLogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminLogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminLogsMutationKey() {
  return ['admin', '/admin/logs', 'OPTIONS'] as const
}

export function getOptionsAdminLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminLogsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.logs.$options(undefined, options))
    },
  })
}

export function useOptionsAdminLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$options>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminLogsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminLogsWarningsQueryKey() {
  return ['admin', '/admin/logs/warnings'] as const
}

export function getAdminLogsWarningsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLogsWarningsQueryKey>
  >({
    queryKey: getAdminLogsWarningsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.logs.warnings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminLogsWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLogsWarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminLogsWarningsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminLogsWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLogsWarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminLogsWarningsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminLogsWarningsMutationKey() {
  return ['admin', '/admin/logs/warnings', 'OPTIONS'] as const
}

export function getOptionsAdminLogsWarningsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminLogsWarningsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.logs.warnings.$options(undefined, options))
    },
  })
}

export function useOptionsAdminLogsWarnings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.warnings.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminLogsWarningsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminFollowersQueryKey(
  args: InferRequestType<typeof client.admin.followers.$get>,
) {
  return ['admin', '/admin/followers', args] as const
}

export function getAdminFollowersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.followers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFollowersQueryKey>
  >({
    queryKey: getAdminFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.followers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.followers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.followers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminFollowersMutationKey() {
  return ['admin', '/admin/followers', 'OPTIONS'] as const
}

export function getOptionsAdminFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFollowersMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.followers.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFollowers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFollowersMutationOptions<TError, TOnMutateResult>(
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

export function getAdminFollowersPendingQueryKey() {
  return ['admin', '/admin/followers/pending'] as const
}

export function getAdminFollowersPendingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFollowersPendingQueryKey>
  >({
    queryKey: getAdminFollowersPendingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.followers.pending.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminFollowersPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminFollowersPendingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminFollowersPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminFollowersPendingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminFollowersPendingMutationKey() {
  return ['admin', '/admin/followers/pending', 'OPTIONS'] as const
}

export function getOptionsAdminFollowersPendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.pending.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFollowersPendingMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.followers.pending.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFollowersPending<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.followers.pending.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFollowersPendingMutationOptions<TError, TOnMutateResult>(
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

export function getAdminFollowersBlockedQueryKey() {
  return ['admin', '/admin/followers/blocked'] as const
}

export function getAdminFollowersBlockedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFollowersBlockedQueryKey>
  >({
    queryKey: getAdminFollowersBlockedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.followers.blocked.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminFollowersBlocked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersBlockedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminFollowersBlockedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminFollowersBlocked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersBlockedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminFollowersBlockedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminFollowersBlockedMutationKey() {
  return ['admin', '/admin/followers/blocked', 'OPTIONS'] as const
}

export function getOptionsAdminFollowersBlockedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.blocked.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFollowersBlockedMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.followers.blocked.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFollowersBlocked<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.followers.blocked.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFollowersBlockedMutationOptions<TError, TOnMutateResult>(
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

export function getAdminFollowersDirectoryQueryKey() {
  return ['admin', '/admin/followers/directory'] as const
}

export function getAdminFollowersDirectoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFollowersDirectoryQueryKey>
  >({
    queryKey: getAdminFollowersDirectoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.followers.directory.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminFollowersDirectory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersDirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminFollowersDirectoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminFollowersDirectory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.directory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFollowersDirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminFollowersDirectoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminFollowersDirectoryMutationKey() {
  return ['admin', '/admin/followers/directory', 'OPTIONS'] as const
}

export function getOptionsAdminFollowersDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.followers.directory.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFollowersDirectoryMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.followers.directory.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFollowersDirectory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.followers.directory.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFollowersDirectoryMutationOptions<
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

export function getPostAdminFollowersApproveMutationKey() {
  return ['admin', '/admin/followers/approve', 'POST'] as const
}

export function getPostAdminFollowersApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.approve.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.followers.approve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFollowersApproveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.followers.approve.$post>) {
      return parseResponse(client.admin.followers.approve.$post(args, options))
    },
  })
}

export function usePostAdminFollowersApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.approve.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.followers.approve.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminFollowersApproveMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminFollowersApproveMutationKey() {
  return ['admin', '/admin/followers/approve', 'OPTIONS'] as const
}

export function getOptionsAdminFollowersApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.approve.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFollowersApproveMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.followers.approve.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFollowersApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.followers.approve.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFollowersApproveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminFollowersRemoveMutationKey() {
  return ['admin', '/admin/followers/remove', 'POST'] as const
}

export function getPostAdminFollowersRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.followers.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFollowersRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.followers.remove.$post>) {
      return parseResponse(client.admin.followers.remove.$post(args, options))
    },
  })
}

export function usePostAdminFollowersRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.followers.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminFollowersRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminFollowersRemoveMutationKey() {
  return ['admin', '/admin/followers/remove', 'OPTIONS'] as const
}

export function getOptionsAdminFollowersRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.followers.remove.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFollowersRemoveMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.followers.remove.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFollowersRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.followers.remove.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFollowersRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminEmojiUploadMutationKey() {
  return ['admin', '/admin/emoji/upload', 'POST'] as const
}

export function getPostAdminEmojiUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.emoji.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEmojiUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.emoji.upload.$post>) {
      return parseResponse(client.admin.emoji.upload.$post(args, options))
    },
  })
}

export function usePostAdminEmojiUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.upload.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.emoji.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminEmojiUploadMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminEmojiUploadMutationKey() {
  return ['admin', '/admin/emoji/upload', 'OPTIONS'] as const
}

export function getOptionsAdminEmojiUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.upload.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminEmojiUploadMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.emoji.upload.$options(undefined, options))
    },
  })
}

export function useOptionsAdminEmojiUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.upload.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminEmojiUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminEmojiDeleteMutationKey() {
  return ['admin', '/admin/emoji/delete', 'POST'] as const
}

export function getPostAdminEmojiDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.emoji.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEmojiDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.emoji.delete.$post>) {
      return parseResponse(client.admin.emoji.delete.$post(args, options))
    },
  })
}

export function usePostAdminEmojiDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.emoji.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminEmojiDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminEmojiDeleteMutationKey() {
  return ['admin', '/admin/emoji/delete', 'OPTIONS'] as const
}

export function getOptionsAdminEmojiDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.delete.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminEmojiDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.emoji.delete.$options(undefined, options))
    },
  })
}

export function useOptionsAdminEmojiDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.emoji.delete.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminEmojiDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigAdminpassMutationKey() {
  return ['admin', '/admin/config/adminpass', 'POST'] as const
}

export function getPostAdminConfigAdminpassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.adminpass.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.adminpass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigAdminpassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.adminpass.$post>) {
      return parseResponse(client.admin.config.adminpass.$post(args, options))
    },
  })
}

export function usePostAdminConfigAdminpass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.adminpass.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.adminpass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigAdminpassMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigAdminpassMutationKey() {
  return ['admin', '/admin/config/adminpass', 'OPTIONS'] as const
}

export function getOptionsAdminConfigAdminpassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.adminpass.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigAdminpassMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.adminpass.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigAdminpass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.adminpass.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigAdminpassMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigStreamkeysMutationKey() {
  return ['admin', '/admin/config/streamkeys', 'POST'] as const
}

export function getPostAdminConfigStreamkeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamkeys.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.streamkeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigStreamkeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.streamkeys.$post>) {
      return parseResponse(client.admin.config.streamkeys.$post(args, options))
    },
  })
}

export function usePostAdminConfigStreamkeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamkeys.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.streamkeys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigStreamkeysMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigStreamkeysMutationKey() {
  return ['admin', '/admin/config/streamkeys', 'OPTIONS'] as const
}

export function getOptionsAdminConfigStreamkeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamkeys.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigStreamkeysMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.streamkeys.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigStreamkeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.streamkeys.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigStreamkeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigPagecontentMutationKey() {
  return ['admin', '/admin/config/pagecontent', 'POST'] as const
}

export function getPostAdminConfigPagecontentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.pagecontent.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.pagecontent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigPagecontentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.pagecontent.$post>) {
      return parseResponse(client.admin.config.pagecontent.$post(args, options))
    },
  })
}

export function usePostAdminConfigPagecontent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.pagecontent.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.pagecontent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigPagecontentMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigPagecontentMutationKey() {
  return ['admin', '/admin/config/pagecontent', 'OPTIONS'] as const
}

export function getOptionsAdminConfigPagecontentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.pagecontent.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigPagecontentMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.pagecontent.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigPagecontent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.pagecontent.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigPagecontentMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigStreamtitleMutationKey() {
  return ['admin', '/admin/config/streamtitle', 'POST'] as const
}

export function getPostAdminConfigStreamtitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamtitle.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.streamtitle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigStreamtitleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.streamtitle.$post>) {
      return parseResponse(client.admin.config.streamtitle.$post(args, options))
    },
  })
}

export function usePostAdminConfigStreamtitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamtitle.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.streamtitle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigStreamtitleMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigStreamtitleMutationKey() {
  return ['admin', '/admin/config/streamtitle', 'OPTIONS'] as const
}

export function getOptionsAdminConfigStreamtitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.streamtitle.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigStreamtitleMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.streamtitle.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigStreamtitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.streamtitle.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigStreamtitleMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigNameMutationKey() {
  return ['admin', '/admin/config/name', 'POST'] as const
}

export function getPostAdminConfigNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.name.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.config.name.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.name.$post>) {
      return parseResponse(client.admin.config.name.$post(args, options))
    },
  })
}

export function usePostAdminConfigName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.name.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.name.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigNameMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigNameMutationKey() {
  return ['admin', '/admin/config/name', 'OPTIONS'] as const
}

export function getOptionsAdminConfigNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.name.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigNameMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.name.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.name.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigServersummaryMutationKey() {
  return ['admin', '/admin/config/serversummary', 'POST'] as const
}

export function getPostAdminConfigServersummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serversummary.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.serversummary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigServersummaryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.serversummary.$post>) {
      return parseResponse(client.admin.config.serversummary.$post(args, options))
    },
  })
}

export function usePostAdminConfigServersummary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.serversummary.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.serversummary.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigServersummaryMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigServersummaryMutationKey() {
  return ['admin', '/admin/config/serversummary', 'OPTIONS'] as const
}

export function getOptionsAdminConfigServersummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.serversummary.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigServersummaryMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.serversummary.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigServersummary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.serversummary.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigServersummaryMutationOptions<
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

export function getPostAdminConfigOfflinemessageMutationKey() {
  return ['admin', '/admin/config/offlinemessage', 'POST'] as const
}

export function getPostAdminConfigOfflinemessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.offlinemessage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.offlinemessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigOfflinemessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.offlinemessage.$post>) {
      return parseResponse(client.admin.config.offlinemessage.$post(args, options))
    },
  })
}

export function usePostAdminConfigOfflinemessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.offlinemessage.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.offlinemessage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigOfflinemessageMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigOfflinemessageMutationKey() {
  return ['admin', '/admin/config/offlinemessage', 'OPTIONS'] as const
}

export function getOptionsAdminConfigOfflinemessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.offlinemessage.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigOfflinemessageMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.offlinemessage.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigOfflinemessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.offlinemessage.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigOfflinemessageMutationOptions<
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

export function getPostAdminConfigWelcomemessageMutationKey() {
  return ['admin', '/admin/config/welcomemessage', 'POST'] as const
}

export function getPostAdminConfigWelcomemessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.welcomemessage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.welcomemessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigWelcomemessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.welcomemessage.$post>) {
      return parseResponse(client.admin.config.welcomemessage.$post(args, options))
    },
  })
}

export function usePostAdminConfigWelcomemessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.welcomemessage.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.welcomemessage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigWelcomemessageMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigWelcomemessageMutationKey() {
  return ['admin', '/admin/config/welcomemessage', 'OPTIONS'] as const
}

export function getOptionsAdminConfigWelcomemessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.welcomemessage.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigWelcomemessageMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.welcomemessage.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigWelcomemessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.welcomemessage.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigWelcomemessageMutationOptions<
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

export function getPostAdminConfigChatDisableMutationKey() {
  return ['admin', '/admin/config/chat/disable', 'POST'] as const
}

export function getPostAdminConfigChatDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.chat.disable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.chat.disable.$post>) {
      return parseResponse(client.admin.config.chat.disable.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.chat.disable.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.disable.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatDisableMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigChatDisableMutationKey() {
  return ['admin', '/admin/config/chat/disable', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.disable.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatDisableMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.chat.disable.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigChatDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.disable.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigChatJoinmessagesenabledMutationKey() {
  return ['admin', '/admin/config/chat/joinmessagesenabled', 'POST'] as const
}

export function getPostAdminConfigChatJoinmessagesenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.joinmessagesenabled.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.joinmessagesenabled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatJoinmessagesenabledMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.joinmessagesenabled.$post>,
    ) {
      return parseResponse(client.admin.config.chat.joinmessagesenabled.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatJoinmessagesenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.joinmessagesenabled.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.joinmessagesenabled.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatJoinmessagesenabledMutationOptions<
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

export function getOptionsAdminConfigChatJoinmessagesenabledMutationKey() {
  return ['admin', '/admin/config/chat/joinmessagesenabled', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatJoinmessagesenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.joinmessagesenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatJoinmessagesenabledMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.chat.joinmessagesenabled.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigChatJoinmessagesenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.joinmessagesenabled.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatJoinmessagesenabledMutationOptions<
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

export function getPostAdminConfigChatEstablishedusermodeMutationKey() {
  return ['admin', '/admin/config/chat/establishedusermode', 'POST'] as const
}

export function getPostAdminConfigChatEstablishedusermodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.establishedusermode.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.establishedusermode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatEstablishedusermodeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.establishedusermode.$post>,
    ) {
      return parseResponse(client.admin.config.chat.establishedusermode.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatEstablishedusermode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.establishedusermode.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.establishedusermode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatEstablishedusermodeMutationOptions<
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

export function getOptionsAdminConfigChatEstablishedusermodeMutationKey() {
  return ['admin', '/admin/config/chat/establishedusermode', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatEstablishedusermodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.establishedusermode.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatEstablishedusermodeMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.chat.establishedusermode.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigChatEstablishedusermode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.establishedusermode.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatEstablishedusermodeMutationOptions<
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

export function getPostAdminConfigChatForbiddenusernamesMutationKey() {
  return ['admin', '/admin/config/chat/forbiddenusernames', 'POST'] as const
}

export function getPostAdminConfigChatForbiddenusernamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.forbiddenusernames.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.forbiddenusernames.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatForbiddenusernamesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.forbiddenusernames.$post>,
    ) {
      return parseResponse(client.admin.config.chat.forbiddenusernames.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatForbiddenusernames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.forbiddenusernames.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.forbiddenusernames.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatForbiddenusernamesMutationOptions<
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

export function getOptionsAdminConfigChatForbiddenusernamesMutationKey() {
  return ['admin', '/admin/config/chat/forbiddenusernames', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatForbiddenusernamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.forbiddenusernames.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatForbiddenusernamesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.chat.forbiddenusernames.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigChatForbiddenusernames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.forbiddenusernames.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatForbiddenusernamesMutationOptions<
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

export function getPostAdminConfigChatSuggestedusernamesMutationKey() {
  return ['admin', '/admin/config/chat/suggestedusernames', 'POST'] as const
}

export function getPostAdminConfigChatSuggestedusernamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.suggestedusernames.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.suggestedusernames.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatSuggestedusernamesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.suggestedusernames.$post>,
    ) {
      return parseResponse(client.admin.config.chat.suggestedusernames.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatSuggestedusernames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.suggestedusernames.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.suggestedusernames.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatSuggestedusernamesMutationOptions<
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

export function getOptionsAdminConfigChatSuggestedusernamesMutationKey() {
  return ['admin', '/admin/config/chat/suggestedusernames', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatSuggestedusernamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.suggestedusernames.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatSuggestedusernamesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.chat.suggestedusernames.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigChatSuggestedusernames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.suggestedusernames.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatSuggestedusernamesMutationOptions<
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

export function getPostAdminConfigChatSpamprotectionenabledMutationKey() {
  return ['admin', '/admin/config/chat/spamprotectionenabled', 'POST'] as const
}

export function getPostAdminConfigChatSpamprotectionenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.spamprotectionenabled.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.spamprotectionenabled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatSpamprotectionenabledMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.spamprotectionenabled.$post>,
    ) {
      return parseResponse(client.admin.config.chat.spamprotectionenabled.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatSpamprotectionenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.spamprotectionenabled.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.spamprotectionenabled.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatSpamprotectionenabledMutationOptions<
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

export function getOptionsAdminConfigChatSpamprotectionenabledMutationKey() {
  return ['admin', '/admin/config/chat/spamprotectionenabled', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatSpamprotectionenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.spamprotectionenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatSpamprotectionenabledMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.chat.spamprotectionenabled.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigChatSpamprotectionenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.spamprotectionenabled.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatSpamprotectionenabledMutationOptions<
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

export function getPostAdminConfigChatSlurfilterenabledMutationKey() {
  return ['admin', '/admin/config/chat/slurfilterenabled', 'POST'] as const
}

export function getPostAdminConfigChatSlurfilterenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.slurfilterenabled.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.slurfilterenabled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatSlurfilterenabledMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.slurfilterenabled.$post>,
    ) {
      return parseResponse(client.admin.config.chat.slurfilterenabled.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatSlurfilterenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.slurfilterenabled.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.slurfilterenabled.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatSlurfilterenabledMutationOptions<
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

export function getOptionsAdminConfigChatSlurfilterenabledMutationKey() {
  return ['admin', '/admin/config/chat/slurfilterenabled', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatSlurfilterenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.slurfilterenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatSlurfilterenabledMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.chat.slurfilterenabled.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigChatSlurfilterenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.slurfilterenabled.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatSlurfilterenabledMutationOptions<
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

export function getPostAdminConfigChatRequireauthenticationMutationKey() {
  return ['admin', '/admin/config/chat/requireauthentication', 'POST'] as const
}

export function getPostAdminConfigChatRequireauthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.chat.requireauthentication.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.chat.requireauthentication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigChatRequireauthenticationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.chat.requireauthentication.$post>,
    ) {
      return parseResponse(client.admin.config.chat.requireauthentication.$post(args, options))
    },
  })
}

export function usePostAdminConfigChatRequireauthentication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.chat.requireauthentication.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.chat.requireauthentication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigChatRequireauthenticationMutationOptions<
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

export function getOptionsAdminConfigChatRequireauthenticationMutationKey() {
  return ['admin', '/admin/config/chat/requireauthentication', 'OPTIONS'] as const
}

export function getOptionsAdminConfigChatRequireauthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.chat.requireauthentication.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigChatRequireauthenticationMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.chat.requireauthentication.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigChatRequireauthentication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.chat.requireauthentication.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigChatRequireauthenticationMutationOptions<
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

export function getPostAdminConfigVideoCodecMutationKey() {
  return ['admin', '/admin/config/video/codec', 'POST'] as const
}

export function getPostAdminConfigVideoCodecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.video.codec.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.video.codec.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigVideoCodecMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.video.codec.$post>) {
      return parseResponse(client.admin.config.video.codec.$post(args, options))
    },
  })
}

export function usePostAdminConfigVideoCodec<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.video.codec.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.video.codec.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigVideoCodecMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigVideoCodecMutationKey() {
  return ['admin', '/admin/config/video/codec', 'OPTIONS'] as const
}

export function getOptionsAdminConfigVideoCodecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.video.codec.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigVideoCodecMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.video.codec.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigVideoCodec<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.video.codec.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigVideoCodecMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigVideoStreamlatencylevelMutationKey() {
  return ['admin', '/admin/config/video/streamlatencylevel', 'POST'] as const
}

export function getPostAdminConfigVideoStreamlatencylevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.video.streamlatencylevel.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.video.streamlatencylevel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigVideoStreamlatencylevelMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.video.streamlatencylevel.$post>,
    ) {
      return parseResponse(client.admin.config.video.streamlatencylevel.$post(args, options))
    },
  })
}

export function usePostAdminConfigVideoStreamlatencylevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.video.streamlatencylevel.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.video.streamlatencylevel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigVideoStreamlatencylevelMutationOptions<
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

export function getOptionsAdminConfigVideoStreamlatencylevelMutationKey() {
  return ['admin', '/admin/config/video/streamlatencylevel', 'OPTIONS'] as const
}

export function getOptionsAdminConfigVideoStreamlatencylevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.video.streamlatencylevel.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigVideoStreamlatencylevelMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.video.streamlatencylevel.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigVideoStreamlatencylevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.video.streamlatencylevel.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigVideoStreamlatencylevelMutationOptions<
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

export function getPostAdminConfigVideoStreamoutputvariantsMutationKey() {
  return ['admin', '/admin/config/video/streamoutputvariants', 'POST'] as const
}

export function getPostAdminConfigVideoStreamoutputvariantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.video.streamoutputvariants.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.video.streamoutputvariants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigVideoStreamoutputvariantsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.video.streamoutputvariants.$post>,
    ) {
      return parseResponse(client.admin.config.video.streamoutputvariants.$post(args, options))
    },
  })
}

export function usePostAdminConfigVideoStreamoutputvariants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.video.streamoutputvariants.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.video.streamoutputvariants.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigVideoStreamoutputvariantsMutationOptions<
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

export function getOptionsAdminConfigVideoStreamoutputvariantsMutationKey() {
  return ['admin', '/admin/config/video/streamoutputvariants', 'OPTIONS'] as const
}

export function getOptionsAdminConfigVideoStreamoutputvariantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.video.streamoutputvariants.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigVideoStreamoutputvariantsMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.video.streamoutputvariants.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigVideoStreamoutputvariants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.video.streamoutputvariants.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigVideoStreamoutputvariantsMutationOptions<
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

export function getPostAdminConfigAppearanceMutationKey() {
  return ['admin', '/admin/config/appearance', 'POST'] as const
}

export function getPostAdminConfigAppearanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.appearance.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.appearance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigAppearanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.appearance.$post>) {
      return parseResponse(client.admin.config.appearance.$post(args, options))
    },
  })
}

export function usePostAdminConfigAppearance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.appearance.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.appearance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigAppearanceMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigAppearanceMutationKey() {
  return ['admin', '/admin/config/appearance', 'OPTIONS'] as const
}

export function getOptionsAdminConfigAppearanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.appearance.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigAppearanceMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.appearance.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigAppearance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.appearance.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigAppearanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigLogoMutationKey() {
  return ['admin', '/admin/config/logo', 'POST'] as const
}

export function getPostAdminConfigLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.logo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.config.logo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigLogoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.logo.$post>) {
      return parseResponse(client.admin.config.logo.$post(args, options))
    },
  })
}

export function usePostAdminConfigLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.logo.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.logo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigLogoMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigLogoMutationKey() {
  return ['admin', '/admin/config/logo', 'OPTIONS'] as const
}

export function getOptionsAdminConfigLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.logo.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigLogoMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.logo.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.logo.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigLogoMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigFaviconMutationKey() {
  return ['admin', '/admin/config/favicon', 'POST'] as const
}

export function getPostAdminConfigFaviconMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.favicon.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFaviconMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.favicon.$post>) {
      return parseResponse(client.admin.config.favicon.$post(args, options))
    },
  })
}

export function usePostAdminConfigFavicon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.favicon.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFaviconMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminConfigFaviconMutationKey() {
  return ['admin', '/admin/config/favicon', 'DELETE'] as const
}

export function getDeleteAdminConfigFaviconMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminConfigFaviconMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.favicon.$delete(undefined, options))
    },
  })
}

export function useDeleteAdminConfigFavicon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminConfigFaviconMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigFaviconMutationKey() {
  return ['admin', '/admin/config/favicon', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFaviconMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFaviconMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.favicon.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFavicon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.favicon.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFaviconMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigTagsMutationKey() {
  return ['admin', '/admin/config/tags', 'POST'] as const
}

export function getPostAdminConfigTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.tags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.config.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.tags.$post>) {
      return parseResponse(client.admin.config.tags.$post(args, options))
    },
  })
}

export function usePostAdminConfigTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.tags.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigTagsMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigTagsMutationKey() {
  return ['admin', '/admin/config/tags', 'OPTIONS'] as const
}

export function getOptionsAdminConfigTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.tags.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigTagsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.tags.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.tags.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigFfmpegpathMutationKey() {
  return ['admin', '/admin/config/ffmpegpath', 'POST'] as const
}

export function getPostAdminConfigFfmpegpathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.ffmpegpath.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.ffmpegpath.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFfmpegpathMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.ffmpegpath.$post>) {
      return parseResponse(client.admin.config.ffmpegpath.$post(args, options))
    },
  })
}

export function usePostAdminConfigFfmpegpath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.ffmpegpath.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.ffmpegpath.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFfmpegpathMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigFfmpegpathMutationKey() {
  return ['admin', '/admin/config/ffmpegpath', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFfmpegpathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.ffmpegpath.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFfmpegpathMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.ffmpegpath.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFfmpegpath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.ffmpegpath.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFfmpegpathMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigWebserverportMutationKey() {
  return ['admin', '/admin/config/webserverport', 'POST'] as const
}

export function getPostAdminConfigWebserverportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverport.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.webserverport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigWebserverportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.webserverport.$post>) {
      return parseResponse(client.admin.config.webserverport.$post(args, options))
    },
  })
}

export function usePostAdminConfigWebserverport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.webserverport.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.webserverport.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigWebserverportMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigWebserverportMutationKey() {
  return ['admin', '/admin/config/webserverport', 'OPTIONS'] as const
}

export function getOptionsAdminConfigWebserverportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.webserverport.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigWebserverportMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.webserverport.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigWebserverport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.webserverport.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigWebserverportMutationOptions<
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

export function getPostAdminConfigWebserveripMutationKey() {
  return ['admin', '/admin/config/webserverip', 'POST'] as const
}

export function getPostAdminConfigWebserveripMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverip.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.webserverip.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigWebserveripMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.webserverip.$post>) {
      return parseResponse(client.admin.config.webserverip.$post(args, options))
    },
  })
}

export function usePostAdminConfigWebserverip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverip.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.webserverip.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigWebserveripMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigWebserveripMutationKey() {
  return ['admin', '/admin/config/webserverip', 'OPTIONS'] as const
}

export function getOptionsAdminConfigWebserveripMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.webserverip.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigWebserveripMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.webserverip.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigWebserverip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.webserverip.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigWebserveripMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigRtmpserverportMutationKey() {
  return ['admin', '/admin/config/rtmpserverport', 'POST'] as const
}

export function getPostAdminConfigRtmpserverportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.rtmpserverport.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.rtmpserverport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigRtmpserverportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.rtmpserverport.$post>) {
      return parseResponse(client.admin.config.rtmpserverport.$post(args, options))
    },
  })
}

export function usePostAdminConfigRtmpserverport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.rtmpserverport.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.rtmpserverport.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigRtmpserverportMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigRtmpserverportMutationKey() {
  return ['admin', '/admin/config/rtmpserverport', 'OPTIONS'] as const
}

export function getOptionsAdminConfigRtmpserverportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.rtmpserverport.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigRtmpserverportMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.rtmpserverport.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigRtmpserverport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.rtmpserverport.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigRtmpserverportMutationOptions<
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

export function getPostAdminConfigRtmpserverbindaddressMutationKey() {
  return ['admin', '/admin/config/rtmpserverbindaddress', 'POST'] as const
}

export function getPostAdminConfigRtmpserverbindaddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.rtmpserverbindaddress.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.rtmpserverbindaddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigRtmpserverbindaddressMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.rtmpserverbindaddress.$post>,
    ) {
      return parseResponse(client.admin.config.rtmpserverbindaddress.$post(args, options))
    },
  })
}

export function usePostAdminConfigRtmpserverbindaddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.rtmpserverbindaddress.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.rtmpserverbindaddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigRtmpserverbindaddressMutationOptions<
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

export function getOptionsAdminConfigRtmpserverbindaddressMutationKey() {
  return ['admin', '/admin/config/rtmpserverbindaddress', 'OPTIONS'] as const
}

export function getOptionsAdminConfigRtmpserverbindaddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.rtmpserverbindaddress.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigRtmpserverbindaddressMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.rtmpserverbindaddress.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigRtmpserverbindaddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.rtmpserverbindaddress.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigRtmpserverbindaddressMutationOptions<
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

export function getPostAdminConfigSockethostoverrideMutationKey() {
  return ['admin', '/admin/config/sockethostoverride', 'POST'] as const
}

export function getPostAdminConfigSockethostoverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.sockethostoverride.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.sockethostoverride.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigSockethostoverrideMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.sockethostoverride.$post>) {
      return parseResponse(client.admin.config.sockethostoverride.$post(args, options))
    },
  })
}

export function usePostAdminConfigSockethostoverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.sockethostoverride.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.sockethostoverride.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigSockethostoverrideMutationOptions<
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

export function getOptionsAdminConfigSockethostoverrideMutationKey() {
  return ['admin', '/admin/config/sockethostoverride', 'OPTIONS'] as const
}

export function getOptionsAdminConfigSockethostoverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.sockethostoverride.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigSockethostoverrideMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.sockethostoverride.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigSockethostoverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.sockethostoverride.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigSockethostoverrideMutationOptions<
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

export function getPostAdminConfigVideoservingendpointMutationKey() {
  return ['admin', '/admin/config/videoservingendpoint', 'POST'] as const
}

export function getPostAdminConfigVideoservingendpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.videoservingendpoint.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.videoservingendpoint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigVideoservingendpointMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.videoservingendpoint.$post>,
    ) {
      return parseResponse(client.admin.config.videoservingendpoint.$post(args, options))
    },
  })
}

export function usePostAdminConfigVideoservingendpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.videoservingendpoint.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.videoservingendpoint.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigVideoservingendpointMutationOptions<
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

export function getOptionsAdminConfigVideoservingendpointMutationKey() {
  return ['admin', '/admin/config/videoservingendpoint', 'OPTIONS'] as const
}

export function getOptionsAdminConfigVideoservingendpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.videoservingendpoint.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigVideoservingendpointMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.videoservingendpoint.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigVideoservingendpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.videoservingendpoint.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigVideoservingendpointMutationOptions<
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

export function getPostAdminConfigNsfwMutationKey() {
  return ['admin', '/admin/config/nsfw', 'POST'] as const
}

export function getPostAdminConfigNsfwMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.nsfw.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.config.nsfw.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigNsfwMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.nsfw.$post>) {
      return parseResponse(client.admin.config.nsfw.$post(args, options))
    },
  })
}

export function usePostAdminConfigNsfw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.nsfw.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.nsfw.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigNsfwMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigNsfwMutationKey() {
  return ['admin', '/admin/config/nsfw', 'OPTIONS'] as const
}

export function getOptionsAdminConfigNsfwMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.nsfw.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigNsfwMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.nsfw.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigNsfw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.nsfw.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigNsfwMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigAutoplayMutationKey() {
  return ['admin', '/admin/config/autoplay', 'POST'] as const
}

export function getPostAdminConfigAutoplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.autoplay.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.autoplay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigAutoplayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.autoplay.$post>) {
      return parseResponse(client.admin.config.autoplay.$post(args, options))
    },
  })
}

export function usePostAdminConfigAutoplay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.autoplay.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.autoplay.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigAutoplayMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigAutoplayMutationKey() {
  return ['admin', '/admin/config/autoplay', 'OPTIONS'] as const
}

export function getOptionsAdminConfigAutoplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.autoplay.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigAutoplayMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.autoplay.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigAutoplay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.autoplay.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigAutoplayMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigDirectoryenabledMutationKey() {
  return ['admin', '/admin/config/directoryenabled', 'POST'] as const
}

export function getPostAdminConfigDirectoryenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.directoryenabled.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.directoryenabled.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigDirectoryenabledMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.directoryenabled.$post>) {
      return parseResponse(client.admin.config.directoryenabled.$post(args, options))
    },
  })
}

export function usePostAdminConfigDirectoryenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.directoryenabled.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.directoryenabled.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigDirectoryenabledMutationOptions<
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

export function getOptionsAdminConfigDirectoryenabledMutationKey() {
  return ['admin', '/admin/config/directoryenabled', 'OPTIONS'] as const
}

export function getOptionsAdminConfigDirectoryenabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.directoryenabled.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigDirectoryenabledMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.directoryenabled.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigDirectoryenabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.directoryenabled.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigDirectoryenabledMutationOptions<
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

export function getPostAdminConfigSocialhandlesMutationKey() {
  return ['admin', '/admin/config/socialhandles', 'POST'] as const
}

export function getPostAdminConfigSocialhandlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.socialhandles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.socialhandles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigSocialhandlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.socialhandles.$post>) {
      return parseResponse(client.admin.config.socialhandles.$post(args, options))
    },
  })
}

export function usePostAdminConfigSocialhandles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.socialhandles.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.socialhandles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigSocialhandlesMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigSocialhandlesMutationKey() {
  return ['admin', '/admin/config/socialhandles', 'OPTIONS'] as const
}

export function getOptionsAdminConfigSocialhandlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.socialhandles.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigSocialhandlesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.socialhandles.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigSocialhandles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.socialhandles.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigSocialhandlesMutationOptions<
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

export function getPostAdminConfigS3MutationKey() {
  return ['admin', '/admin/config/s3', 'POST'] as const
}

export function getPostAdminConfigS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.s3.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.config.s3.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigS3MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.s3.$post>) {
      return parseResponse(client.admin.config.s3.$post(args, options))
    },
  })
}

export function usePostAdminConfigS3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.s3.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.config.s3.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigS3MutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigS3MutationKey() {
  return ['admin', '/admin/config/s3', 'OPTIONS'] as const
}

export function getOptionsAdminConfigS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.s3.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigS3MutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.s3.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigS3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.s3.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigS3MutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigServerurlMutationKey() {
  return ['admin', '/admin/config/serverurl', 'POST'] as const
}

export function getPostAdminConfigServerurlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serverurl.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.serverurl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigServerurlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.serverurl.$post>) {
      return parseResponse(client.admin.config.serverurl.$post(args, options))
    },
  })
}

export function usePostAdminConfigServerurl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serverurl.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.serverurl.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigServerurlMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigServerurlMutationKey() {
  return ['admin', '/admin/config/serverurl', 'OPTIONS'] as const
}

export function getOptionsAdminConfigServerurlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.serverurl.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigServerurlMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.serverurl.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigServerurl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.serverurl.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigServerurlMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConfigExternalactionsMutationKey() {
  return ['admin', '/admin/config/externalactions', 'POST'] as const
}

export function getPostAdminConfigExternalactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.externalactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.externalactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigExternalactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.externalactions.$post>) {
      return parseResponse(client.admin.config.externalactions.$post(args, options))
    },
  })
}

export function usePostAdminConfigExternalactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.externalactions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.externalactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigExternalactionsMutationOptions<
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

export function getOptionsAdminConfigExternalactionsMutationKey() {
  return ['admin', '/admin/config/externalactions', 'OPTIONS'] as const
}

export function getOptionsAdminConfigExternalactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.externalactions.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigExternalactionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.externalactions.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigExternalactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.externalactions.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigExternalactionsMutationOptions<
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

export function getPostAdminConfigCustomstylesMutationKey() {
  return ['admin', '/admin/config/customstyles', 'POST'] as const
}

export function getPostAdminConfigCustomstylesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.customstyles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.customstyles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigCustomstylesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.customstyles.$post>) {
      return parseResponse(client.admin.config.customstyles.$post(args, options))
    },
  })
}

export function usePostAdminConfigCustomstyles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.customstyles.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.customstyles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigCustomstylesMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminConfigCustomstylesMutationKey() {
  return ['admin', '/admin/config/customstyles', 'OPTIONS'] as const
}

export function getOptionsAdminConfigCustomstylesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.customstyles.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigCustomstylesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.customstyles.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigCustomstyles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.customstyles.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigCustomstylesMutationOptions<
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

export function getPostAdminConfigCustomjavascriptMutationKey() {
  return ['admin', '/admin/config/customjavascript', 'POST'] as const
}

export function getPostAdminConfigCustomjavascriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.customjavascript.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.customjavascript.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigCustomjavascriptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.customjavascript.$post>) {
      return parseResponse(client.admin.config.customjavascript.$post(args, options))
    },
  })
}

export function usePostAdminConfigCustomjavascript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.customjavascript.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.customjavascript.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigCustomjavascriptMutationOptions<
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

export function getOptionsAdminConfigCustomjavascriptMutationKey() {
  return ['admin', '/admin/config/customjavascript', 'OPTIONS'] as const
}

export function getOptionsAdminConfigCustomjavascriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.customjavascript.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigCustomjavascriptMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.customjavascript.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigCustomjavascript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.customjavascript.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigCustomjavascriptMutationOptions<
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

export function getPostAdminConfigHideviewercountMutationKey() {
  return ['admin', '/admin/config/hideviewercount', 'POST'] as const
}

export function getPostAdminConfigHideviewercountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.hideviewercount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.hideviewercount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigHideviewercountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.hideviewercount.$post>) {
      return parseResponse(client.admin.config.hideviewercount.$post(args, options))
    },
  })
}

export function usePostAdminConfigHideviewercount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.hideviewercount.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.hideviewercount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigHideviewercountMutationOptions<
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

export function getOptionsAdminConfigHideviewercountMutationKey() {
  return ['admin', '/admin/config/hideviewercount', 'OPTIONS'] as const
}

export function getOptionsAdminConfigHideviewercountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.hideviewercount.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigHideviewercountMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.hideviewercount.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigHideviewercount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.hideviewercount.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigHideviewercountMutationOptions<
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

export function getPostAdminConfigDisablesearchindexingMutationKey() {
  return ['admin', '/admin/config/disablesearchindexing', 'POST'] as const
}

export function getPostAdminConfigDisablesearchindexingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.disablesearchindexing.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.disablesearchindexing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigDisablesearchindexingMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.disablesearchindexing.$post>,
    ) {
      return parseResponse(client.admin.config.disablesearchindexing.$post(args, options))
    },
  })
}

export function usePostAdminConfigDisablesearchindexing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.disablesearchindexing.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.disablesearchindexing.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigDisablesearchindexingMutationOptions<
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

export function getOptionsAdminConfigDisablesearchindexingMutationKey() {
  return ['admin', '/admin/config/disablesearchindexing', 'OPTIONS'] as const
}

export function getOptionsAdminConfigDisablesearchindexingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.disablesearchindexing.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigDisablesearchindexingMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.disablesearchindexing.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigDisablesearchindexing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.disablesearchindexing.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigDisablesearchindexingMutationOptions<
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

export function getPostAdminConfigFederationEnableMutationKey() {
  return ['admin', '/admin/config/federation/enable', 'POST'] as const
}

export function getPostAdminConfigFederationEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.enable.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.federation.enable.$post>) {
      return parseResponse(client.admin.config.federation.enable.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.enable.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.enable.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationEnableMutationOptions<
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

export function getOptionsAdminConfigFederationEnableMutationKey() {
  return ['admin', '/admin/config/federation/enable', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.enable.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationEnableMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.federation.enable.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFederationEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.enable.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationEnableMutationOptions<
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

export function getPostAdminConfigFederationPrivateMutationKey() {
  return ['admin', '/admin/config/federation/private', 'POST'] as const
}

export function getPostAdminConfigFederationPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.private.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationPrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.federation.private.$post>) {
      return parseResponse(client.admin.config.federation.private.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.private.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.private.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationPrivateMutationOptions<
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

export function getOptionsAdminConfigFederationPrivateMutationKey() {
  return ['admin', '/admin/config/federation/private', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.private.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationPrivateMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.federation.private.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFederationPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.private.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationPrivateMutationOptions<
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

export function getPostAdminConfigFederationShowengagementMutationKey() {
  return ['admin', '/admin/config/federation/showengagement', 'POST'] as const
}

export function getPostAdminConfigFederationShowengagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.showengagement.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.showengagement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationShowengagementMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.federation.showengagement.$post>,
    ) {
      return parseResponse(client.admin.config.federation.showengagement.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationShowengagement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.showengagement.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.showengagement.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationShowengagementMutationOptions<
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

export function getOptionsAdminConfigFederationShowengagementMutationKey() {
  return ['admin', '/admin/config/federation/showengagement', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationShowengagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.showengagement.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationShowengagementMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.federation.showengagement.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigFederationShowengagement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.showengagement.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationShowengagementMutationOptions<
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

export function getPostAdminConfigFederationEnablequotesMutationKey() {
  return ['admin', '/admin/config/federation/enablequotes', 'POST'] as const
}

export function getPostAdminConfigFederationEnablequotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.enablequotes.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.enablequotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationEnablequotesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.federation.enablequotes.$post>,
    ) {
      return parseResponse(client.admin.config.federation.enablequotes.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationEnablequotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.enablequotes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.enablequotes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationEnablequotesMutationOptions<
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

export function getOptionsAdminConfigFederationEnablequotesMutationKey() {
  return ['admin', '/admin/config/federation/enablequotes', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationEnablequotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.enablequotes.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationEnablequotesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.federation.enablequotes.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFederationEnablequotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.enablequotes.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationEnablequotesMutationOptions<
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

export function getPostAdminConfigFederationHidefollowersMutationKey() {
  return ['admin', '/admin/config/federation/hidefollowers', 'POST'] as const
}

export function getPostAdminConfigFederationHidefollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.hidefollowers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.hidefollowers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationHidefollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.federation.hidefollowers.$post>,
    ) {
      return parseResponse(client.admin.config.federation.hidefollowers.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationHidefollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.hidefollowers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.hidefollowers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationHidefollowersMutationOptions<
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

export function getOptionsAdminConfigFederationHidefollowersMutationKey() {
  return ['admin', '/admin/config/federation/hidefollowers', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationHidefollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.hidefollowers.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationHidefollowersMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.config.federation.hidefollowers.$options(undefined, options),
      )
    },
  })
}

export function useOptionsAdminConfigFederationHidefollowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.hidefollowers.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationHidefollowersMutationOptions<
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

export function getPostAdminConfigFederationUsernameMutationKey() {
  return ['admin', '/admin/config/federation/username', 'POST'] as const
}

export function getPostAdminConfigFederationUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.username.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.username.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationUsernameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.config.federation.username.$post>) {
      return parseResponse(client.admin.config.federation.username.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.username.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.username.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationUsernameMutationOptions<
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

export function getOptionsAdminConfigFederationUsernameMutationKey() {
  return ['admin', '/admin/config/federation/username', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.username.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationUsernameMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.federation.username.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFederationUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.username.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationUsernameMutationOptions<
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

export function getPostAdminConfigFederationLivemessageMutationKey() {
  return ['admin', '/admin/config/federation/livemessage', 'POST'] as const
}

export function getPostAdminConfigFederationLivemessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.livemessage.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.livemessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationLivemessageMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.federation.livemessage.$post>,
    ) {
      return parseResponse(client.admin.config.federation.livemessage.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationLivemessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.livemessage.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.livemessage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationLivemessageMutationOptions<
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

export function getOptionsAdminConfigFederationLivemessageMutationKey() {
  return ['admin', '/admin/config/federation/livemessage', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationLivemessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.livemessage.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationLivemessageMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.federation.livemessage.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFederationLivemessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.livemessage.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationLivemessageMutationOptions<
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

export function getPostAdminConfigFederationBlockdomainsMutationKey() {
  return ['admin', '/admin/config/federation/blockdomains', 'POST'] as const
}

export function getPostAdminConfigFederationBlockdomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.federation.blockdomains.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.federation.blockdomains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigFederationBlockdomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.federation.blockdomains.$post>,
    ) {
      return parseResponse(client.admin.config.federation.blockdomains.$post(args, options))
    },
  })
}

export function usePostAdminConfigFederationBlockdomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.federation.blockdomains.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.federation.blockdomains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigFederationBlockdomainsMutationOptions<
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

export function getOptionsAdminConfigFederationBlockdomainsMutationKey() {
  return ['admin', '/admin/config/federation/blockdomains', 'OPTIONS'] as const
}

export function getOptionsAdminConfigFederationBlockdomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.federation.blockdomains.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigFederationBlockdomainsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.federation.blockdomains.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigFederationBlockdomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.federation.blockdomains.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigFederationBlockdomainsMutationOptions<
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

export function getFederationServersQueryKey() {
  return ['federation', '/federation/servers'] as const
}

export function getFederationServersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFederationServersQueryKey>
  >({
    queryKey: getFederationServersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.federation.servers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFederationServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFederationServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFederationServersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFederationServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.federation.servers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFederationServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFederationServersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAdminFederationServersQueryKey() {
  return ['admin', '/admin/federation/servers'] as const
}

export function getAdminFederationServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFederationServersQueryKey>
  >({
    queryKey: getAdminFederationServersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.federation.servers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminFederationServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFederationServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminFederationServersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminFederationServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFederationServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminFederationServersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminFederationServersMutationKey() {
  return ['admin', '/admin/federation/servers', 'POST'] as const
}

export function getPostAdminFederationServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.federation.servers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFederationServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.federation.servers.$post>) {
      return parseResponse(client.admin.federation.servers.$post(args, options))
    },
  })
}

export function usePostAdminFederationServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.federation.servers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminFederationServersMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminFederationServersMutationKey() {
  return ['admin', '/admin/federation/servers', 'OPTIONS'] as const
}

export function getOptionsAdminFederationServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.servers.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFederationServersMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.federation.servers.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFederationServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.federation.servers.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFederationServersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminFederationServersIdMutationKey() {
  return ['admin', '/admin/federation/servers/:id', 'DELETE'] as const
}

export function getDeleteAdminFederationServersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminFederationServersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.federation.servers)[':id']['$delete']>,
    ) {
      return parseResponse(client.admin.federation.servers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminFederationServersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.federation.servers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminFederationServersIdMutationOptions<
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

export function getOptionsAdminFederationServersIdMutationKey() {
  return ['admin', '/admin/federation/servers/:id', 'OPTIONS'] as const
}

export function getOptionsAdminFederationServersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['$options']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFederationServersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.federation.servers)[':id']['$options']>,
    ) {
      return parseResponse(client.admin.federation.servers[':id'].$options(args, options))
    },
  })
}

export function useOptionsAdminFederationServersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['$options']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.federation.servers)[':id']['$options']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFederationServersIdMutationOptions<
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

export function getPutAdminFederationServersIdReorderMutationKey() {
  return ['admin', '/admin/federation/servers/:id/reorder', 'PUT'] as const
}

export function getPutAdminFederationServersIdReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminFederationServersIdReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>,
    ) {
      return parseResponse(client.admin.federation.servers[':id'].reorder.$put(args, options))
    },
  })
}

export function usePutAdminFederationServersIdReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminFederationServersIdReorderMutationOptions<
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

export function getOptionsAdminFederationServersIdReorderMutationKey() {
  return ['admin', '/admin/federation/servers/:id/reorder', 'OPTIONS'] as const
}

export function getOptionsAdminFederationServersIdReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFederationServersIdReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.federation.servers)[':id']['reorder']['$options']
      >,
    ) {
      return parseResponse(client.admin.federation.servers[':id'].reorder.$options(args, options))
    },
  })
}

export function useOptionsAdminFederationServersIdReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$options']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFederationServersIdReorderMutationOptions<
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

export function getAdminFederationFeatureRequestsQueryKey() {
  return ['admin', '/admin/federation/feature-requests'] as const
}

export function getAdminFederationFeatureRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFederationFeatureRequestsQueryKey>
  >({
    queryKey: getAdminFederationFeatureRequestsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.federation['feature-requests'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminFederationFeatureRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFederationFeatureRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdminFederationFeatureRequestsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminFederationFeatureRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.federation)['feature-requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFederationFeatureRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdminFederationFeatureRequestsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdminConfigNotificationsDiscordMutationKey() {
  return ['admin', '/admin/config/notifications/discord', 'POST'] as const
}

export function getPostAdminConfigNotificationsDiscordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.notifications.discord.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.notifications.discord.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigNotificationsDiscordMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.notifications.discord.$post>,
    ) {
      return parseResponse(client.admin.config.notifications.discord.$post(args, options))
    },
  })
}

export function usePostAdminConfigNotificationsDiscord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.notifications.discord.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.notifications.discord.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigNotificationsDiscordMutationOptions<
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

export function getOptionsAdminConfigNotificationsDiscordMutationKey() {
  return ['admin', '/admin/config/notifications/discord', 'OPTIONS'] as const
}

export function getOptionsAdminConfigNotificationsDiscordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.notifications.discord.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigNotificationsDiscordMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.notifications.discord.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigNotificationsDiscord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.notifications.discord.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigNotificationsDiscordMutationOptions<
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

export function getPostAdminConfigNotificationsBrowserMutationKey() {
  return ['admin', '/admin/config/notifications/browser', 'POST'] as const
}

export function getPostAdminConfigNotificationsBrowserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.config.notifications.browser.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.config.notifications.browser.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConfigNotificationsBrowserMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.config.notifications.browser.$post>,
    ) {
      return parseResponse(client.admin.config.notifications.browser.$post(args, options))
    },
  })
}

export function usePostAdminConfigNotificationsBrowser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.config.notifications.browser.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.config.notifications.browser.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminConfigNotificationsBrowserMutationOptions<
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

export function getOptionsAdminConfigNotificationsBrowserMutationKey() {
  return ['admin', '/admin/config/notifications/browser', 'OPTIONS'] as const
}

export function getOptionsAdminConfigNotificationsBrowserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.config.notifications.browser.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminConfigNotificationsBrowserMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.config.notifications.browser.$options(undefined, options))
    },
  })
}

export function useOptionsAdminConfigNotificationsBrowser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.config.notifications.browser.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminConfigNotificationsBrowserMutationOptions<
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

export function getAdminWebhooksQueryKey() {
  return ['admin', '/admin/webhooks'] as const
}

export function getAdminWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWebhooksQueryKey>
  >({
    queryKey: getAdminWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminWebhooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminWebhooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminWebhooksMutationKey() {
  return ['admin', '/admin/webhooks', 'OPTIONS'] as const
}

export function getOptionsAdminWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminWebhooksMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.webhooks.$options(undefined, options))
    },
  })
}

export function useOptionsAdminWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminWebhooksDeleteMutationKey() {
  return ['admin', '/admin/webhooks/delete', 'POST'] as const
}

export function getPostAdminWebhooksDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.webhooks.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWebhooksDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.webhooks.delete.$post>) {
      return parseResponse(client.admin.webhooks.delete.$post(args, options))
    },
  })
}

export function usePostAdminWebhooksDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.webhooks.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminWebhooksDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminWebhooksDeleteMutationKey() {
  return ['admin', '/admin/webhooks/delete', 'OPTIONS'] as const
}

export function getOptionsAdminWebhooksDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.delete.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminWebhooksDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.webhooks.delete.$options(undefined, options))
    },
  })
}

export function useOptionsAdminWebhooksDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.webhooks.delete.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminWebhooksDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminWebhooksCreateMutationKey() {
  return ['admin', '/admin/webhooks/create', 'POST'] as const
}

export function getPostAdminWebhooksCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.webhooks.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWebhooksCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.webhooks.create.$post>) {
      return parseResponse(client.admin.webhooks.create.$post(args, options))
    },
  })
}

export function usePostAdminWebhooksCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.webhooks.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminWebhooksCreateMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminWebhooksCreateMutationKey() {
  return ['admin', '/admin/webhooks/create', 'OPTIONS'] as const
}

export function getOptionsAdminWebhooksCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.create.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminWebhooksCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.webhooks.create.$options(undefined, options))
    },
  })
}

export function useOptionsAdminWebhooksCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.webhooks.create.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminWebhooksCreateMutationOptions<TError, TOnMutateResult>(
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

export function getAdminAccesstokensQueryKey() {
  return ['admin', '/admin/accesstokens'] as const
}

export function getAdminAccesstokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminAccesstokensQueryKey>
  >({
    queryKey: getAdminAccesstokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.accesstokens.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminAccesstokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminAccesstokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminAccesstokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminAccesstokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminAccesstokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminAccesstokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminAccesstokensMutationKey() {
  return ['admin', '/admin/accesstokens', 'OPTIONS'] as const
}

export function getOptionsAdminAccesstokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminAccesstokensMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.accesstokens.$options(undefined, options))
    },
  })
}

export function useOptionsAdminAccesstokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminAccesstokensMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminAccesstokensDeleteMutationKey() {
  return ['admin', '/admin/accesstokens/delete', 'POST'] as const
}

export function getPostAdminAccesstokensDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.accesstokens.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminAccesstokensDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.accesstokens.delete.$post>) {
      return parseResponse(client.admin.accesstokens.delete.$post(args, options))
    },
  })
}

export function usePostAdminAccesstokensDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.accesstokens.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminAccesstokensDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminAccesstokensDeleteMutationKey() {
  return ['admin', '/admin/accesstokens/delete', 'OPTIONS'] as const
}

export function getOptionsAdminAccesstokensDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.accesstokens.delete.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminAccesstokensDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.accesstokens.delete.$options(undefined, options))
    },
  })
}

export function useOptionsAdminAccesstokensDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.accesstokens.delete.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminAccesstokensDeleteMutationOptions<
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

export function getPostAdminAccesstokensCreateMutationKey() {
  return ['admin', '/admin/accesstokens/create', 'POST'] as const
}

export function getPostAdminAccesstokensCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.accesstokens.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminAccesstokensCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.accesstokens.create.$post>) {
      return parseResponse(client.admin.accesstokens.create.$post(args, options))
    },
  })
}

export function usePostAdminAccesstokensCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.accesstokens.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.accesstokens.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminAccesstokensCreateMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminAccesstokensCreateMutationKey() {
  return ['admin', '/admin/accesstokens/create', 'OPTIONS'] as const
}

export function getOptionsAdminAccesstokensCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.accesstokens.create.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminAccesstokensCreateMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.accesstokens.create.$options(undefined, options))
    },
  })
}

export function useOptionsAdminAccesstokensCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.accesstokens.create.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminAccesstokensCreateMutationOptions<
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

export function getPostAdminYpResetMutationKey() {
  return ['admin', '/admin/yp/reset', 'POST'] as const
}

export function getPostAdminYpResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.yp.reset.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminYpResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.yp.reset.$post(undefined, options))
    },
  })
}

export function usePostAdminYpReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.yp.reset.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminYpResetMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminYpResetMutationKey() {
  return ['admin', '/admin/yp/reset', 'OPTIONS'] as const
}

export function getOptionsAdminYpResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.yp.reset.$options>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminYpResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.yp.reset.$options(undefined, options))
    },
  })
}

export function useOptionsAdminYpReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.yp.reset.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminYpResetMutationOptions<TError, TOnMutateResult>(
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

export function getAdminMetricsVideoQueryKey() {
  return ['admin', '/admin/metrics/video'] as const
}

export function getAdminMetricsVideoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminMetricsVideoQueryKey>
  >({
    queryKey: getAdminMetricsVideoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.metrics.video.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminMetricsVideo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminMetricsVideoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminMetricsVideoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminMetricsVideo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminMetricsVideoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminMetricsVideoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsAdminMetricsVideoMutationKey() {
  return ['admin', '/admin/metrics/video', 'OPTIONS'] as const
}

export function getOptionsAdminMetricsVideoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminMetricsVideoMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.metrics.video.$options(undefined, options))
    },
  })
}

export function useOptionsAdminMetricsVideo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.metrics.video.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminMetricsVideoMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminFederationSendMutationKey() {
  return ['admin', '/admin/federation/send', 'POST'] as const
}

export function getPostAdminFederationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.federation.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFederationSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.federation.send.$post>) {
      return parseResponse(client.admin.federation.send.$post(args, options))
    },
  })
}

export function usePostAdminFederationSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.federation.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminFederationSendMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAdminFederationSendMutationKey() {
  return ['admin', '/admin/federation/send', 'OPTIONS'] as const
}

export function getOptionsAdminFederationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.send.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFederationSendMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.federation.send.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFederationSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.federation.send.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFederationSendMutationOptions<TError, TOnMutateResult>(
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

export function getAdminFederationActionsQueryKey(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
) {
  return ['admin', '/admin/federation/actions', args] as const
}

export function getAdminFederationActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFederationActionsQueryKey>
  >({
    queryKey: getAdminFederationActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.federation.actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminFederationActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFederationActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdminFederationActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminFederationActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminFederationActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdminFederationActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOptionsAdminFederationActionsMutationKey() {
  return ['admin', '/admin/federation/actions', 'OPTIONS'] as const
}

export function getOptionsAdminFederationActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.federation.actions.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAdminFederationActionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.federation.actions.$options(undefined, options))
    },
  })
}

export function useOptionsAdminFederationActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.federation.actions.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsAdminFederationActionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntegrationsChatSystemMutationKey() {
  return ['integrations', '/integrations/chat/system', 'POST'] as const
}

export function getPostIntegrationsChatSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.system.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.chat.system.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsChatSystemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.chat.system.$post>) {
      return parseResponse(client.integrations.chat.system.$post(args, options))
    },
  })
}

export function usePostIntegrationsChatSystem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.system.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.chat.system.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsChatSystemMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsIntegrationsChatSystemMutationKey() {
  return ['integrations', '/integrations/chat/system', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.system.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatSystemMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.system.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsChatSystem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.chat.system.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatSystemMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntegrationsChatSystemClientClientIdMutationKey() {
  return ['integrations', '/integrations/chat/system/client/:clientId', 'POST'] as const
}

export function getPostIntegrationsChatSystemClientClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsChatSystemClientClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>,
    ) {
      return parseResponse(client.integrations.chat.system.client[':clientId'].$post(args, options))
    },
  })
}

export function usePostIntegrationsChatSystemClientClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsChatSystemClientClientIdMutationOptions<
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

export function getOptionsIntegrationsChatSystemClientClientIdMutationKey() {
  return ['integrations', '/integrations/chat/system/client/:clientId', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatSystemClientClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatSystemClientClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integrations.chat.system.client)[':clientId']['$options']
      >,
    ) {
      return parseResponse(
        client.integrations.chat.system.client[':clientId'].$options(args, options),
      )
    },
  })
}

export function useOptionsIntegrationsChatSystemClientClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.integrations.chat.system.client)[':clientId']['$options']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$options']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatSystemClientClientIdMutationOptions<
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

export function getPostIntegrationsChatUserMutationKey() {
  return ['integrations', '/integrations/chat/user', 'POST'] as const
}

export function getPostIntegrationsChatUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.user.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsChatUserMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.user.$post(undefined, options))
    },
  })
}

export function usePostIntegrationsChatUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.user.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsChatUserMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsIntegrationsChatUserMutationKey() {
  return ['integrations', '/integrations/chat/user', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.user.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatUserMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.user.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsChatUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.chat.user.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatUserMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntegrationsChatSendMutationKey() {
  return ['integrations', '/integrations/chat/send', 'POST'] as const
}

export function getPostIntegrationsChatSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.chat.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsChatSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.chat.send.$post>) {
      return parseResponse(client.integrations.chat.send.$post(args, options))
    },
  })
}

export function usePostIntegrationsChatSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.chat.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsChatSendMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsIntegrationsChatSendMutationKey() {
  return ['integrations', '/integrations/chat/send', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.send.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatSendMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.send.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsChatSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.chat.send.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatSendMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntegrationsChatActionMutationKey() {
  return ['integrations', '/integrations/chat/action', 'POST'] as const
}

export function getPostIntegrationsChatActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.action.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.chat.action.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsChatActionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.chat.action.$post>) {
      return parseResponse(client.integrations.chat.action.$post(args, options))
    },
  })
}

export function usePostIntegrationsChatAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.action.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.chat.action.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsChatActionMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsIntegrationsChatActionMutationKey() {
  return ['integrations', '/integrations/chat/action', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.action.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatActionMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.action.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsChatAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.chat.action.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatActionMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntegrationsChatMessagevisibilityMutationKey() {
  return ['integrations', '/integrations/chat/messagevisibility', 'POST'] as const
}

export function getPostIntegrationsChatMessagevisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.integrations.chat.messagevisibility.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.chat.messagevisibility.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsChatMessagevisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.integrations.chat.messagevisibility.$post>,
    ) {
      return parseResponse(client.integrations.chat.messagevisibility.$post(args, options))
    },
  })
}

export function usePostIntegrationsChatMessagevisibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.integrations.chat.messagevisibility.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.chat.messagevisibility.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsChatMessagevisibilityMutationOptions<
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

export function getOptionsIntegrationsChatMessagevisibilityMutationKey() {
  return ['integrations', '/integrations/chat/messagevisibility', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatMessagevisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.integrations.chat.messagevisibility.$options>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatMessagevisibilityMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.messagevisibility.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsChatMessagevisibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.chat.messagevisibility.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatMessagevisibilityMutationOptions<
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

export function getIntegrationsStatusQueryKey() {
  return ['integrations', '/integrations/status'] as const
}

export function getIntegrationsStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsStatusQueryKey>
  >({
    queryKey: getIntegrationsStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntegrationsStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntegrationsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntegrationsStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostIntegrationsStreamtitleMutationKey() {
  return ['integrations', '/integrations/streamtitle', 'POST'] as const
}

export function getPostIntegrationsStreamtitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.streamtitle.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.streamtitle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsStreamtitleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.streamtitle.$post>) {
      return parseResponse(client.integrations.streamtitle.$post(args, options))
    },
  })
}

export function usePostIntegrationsStreamtitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.streamtitle.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.streamtitle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntegrationsStreamtitleMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsIntegrationsStreamtitleMutationKey() {
  return ['integrations', '/integrations/streamtitle', 'OPTIONS'] as const
}

export function getOptionsIntegrationsStreamtitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.streamtitle.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsStreamtitleMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.streamtitle.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsStreamtitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.streamtitle.$options>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsStreamtitleMutationOptions<
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

export function getIntegrationsChatQueryKey() {
  return ['integrations', '/integrations/chat'] as const
}

export function getIntegrationsChatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsChatQueryKey>
  >({
    queryKey: getIntegrationsChatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.chat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsChat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntegrationsChatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntegrationsChat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntegrationsChatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsIntegrationsChatMutationKey() {
  return ['integrations', '/integrations/chat', 'OPTIONS'] as const
}

export function getOptionsIntegrationsChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsChatMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.chat.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.chat.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsChatMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsClientsQueryKey() {
  return ['integrations', '/integrations/clients'] as const
}

export function getIntegrationsClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsClientsQueryKey>
  >({
    queryKey: getIntegrationsClientsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.clients.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntegrationsClientsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntegrationsClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntegrationsClientsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOptionsIntegrationsClientsMutationKey() {
  return ['integrations', '/integrations/clients', 'OPTIONS'] as const
}

export function getOptionsIntegrationsClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$options>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsIntegrationsClientsMutationKey(),
    async mutationFn() {
      return parseResponse(client.integrations.clients.$options(undefined, options))
    },
  })
}

export function useOptionsIntegrationsClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.clients.$options>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsIntegrationsClientsMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsModerationChatUserUserIdQueryKey(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
) {
  return ['integrations', '/integrations/moderation/chat/user/:userId', args] as const
}

export function getIntegrationsModerationChatUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsModerationChatUserUserIdQueryKey>
  >({
    queryKey: getIntegrationsModerationChatUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.moderation.chat.user[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsModerationChatUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsModerationChatUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIntegrationsModerationChatUserUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsModerationChatUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsModerationChatUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIntegrationsModerationChatUserUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getModerationChatUserUserIdQueryKey(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
) {
  return ['moderation', '/moderation/chat/user/:userId', args] as const
}

export function getModerationChatUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationChatUserUserIdQueryKey>
  >({
    queryKey: getModerationChatUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.chat.user[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useModerationChatUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationChatUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getModerationChatUserUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseModerationChatUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.moderation.chat.user)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModerationChatUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getModerationChatUserUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthIndieauthMutationKey() {
  return ['auth', '/auth/indieauth', 'POST'] as const
}

export function getPostAuthIndieauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.indieauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthIndieauthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.indieauth.$post>) {
      return parseResponse(client.auth.indieauth.$post(args, options))
    },
  })
}

export function usePostAuthIndieauth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.indieauth.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthIndieauthMutationOptions<TError, TOnMutateResult>(
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

export function getAuthIndieauthCallbackQueryKey(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
) {
  return ['auth', '/auth/indieauth/callback', args] as const
}

export function getAuthIndieauthCallbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthIndieauthCallbackQueryKey>
  >({
    queryKey: getAuthIndieauthCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.indieauth.callback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthIndieauthCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthIndieauthCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthIndieauthCallbackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthIndieauthCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.indieauth.callback.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthIndieauthCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthIndieauthCallbackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthProviderIndieauthQueryKey(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
) {
  return ['auth', '/auth/provider/indieauth', args] as const
}

export function getAuthProviderIndieauthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthProviderIndieauthQueryKey>
  >({
    queryKey: getAuthProviderIndieauthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.provider.indieauth.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthProviderIndieauth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthProviderIndieauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthProviderIndieauthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthProviderIndieauth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthProviderIndieauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthProviderIndieauthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthProviderIndieauthMutationKey() {
  return ['auth', '/auth/provider/indieauth', 'POST'] as const
}

export function getPostAuthProviderIndieauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.auth.provider.indieauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthProviderIndieauthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.provider.indieauth.$post>) {
      return parseResponse(client.auth.provider.indieauth.$post(args, options))
    },
  })
}

export function usePostAuthProviderIndieauth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.provider.indieauth.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.provider.indieauth.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthProviderIndieauthMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthFediverseMutationKey() {
  return ['auth', '/auth/fediverse', 'POST'] as const
}

export function getPostAuthFediverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.fediverse.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.fediverse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthFediverseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.fediverse.$post>) {
      return parseResponse(client.auth.fediverse.$post(args, options))
    },
  })
}

export function usePostAuthFediverse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.fediverse.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.fediverse.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthFediverseMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthFediverseVerifyMutationKey() {
  return ['auth', '/auth/fediverse/verify', 'POST'] as const
}

export function getPostAuthFediverseVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.fediverse.verify.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.auth.fediverse.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthFediverseVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.fediverse.verify.$post>) {
      return parseResponse(client.auth.fediverse.verify.$post(args, options))
    },
  })
}

export function usePostAuthFediverseVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.fediverse.verify.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.fediverse.verify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthFediverseVerifyMutationOptions<TError, TOnMutateResult>(
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
