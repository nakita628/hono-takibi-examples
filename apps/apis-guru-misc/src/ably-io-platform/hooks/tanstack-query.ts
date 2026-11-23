import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChannelsKey() {
  return ['channels'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getPushKey() {
  return ['push'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getTimeKey() {
  return ['time'] as const
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id', keyArgs] as const
}

export function getChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdQueryKey>
  >({
    queryKey: getChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChannelsChannelIdMessagesQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id/messages', keyArgs] as const
}

export function getChannelsChannelIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
  >({
    queryKey: getChannelsChannelIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
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
      ...getChannelsChannelIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
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
      ...getChannelsChannelIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdMessagesMutationKey() {
  return ['channels', '/channels/:channel_id/messages', 'POST'] as const
}

export function getPostChannelsChannelIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].messages.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChannelsChannelIdMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdPresenceQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id/presence', keyArgs] as const
}

export function getChannelsChannelIdPresenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPresenceQueryKey>
  >({
    queryKey: getChannelsChannelIdPresenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].presence.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdPresenceQueryKey>
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
      ...getChannelsChannelIdPresenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdPresenceQueryKey>
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
      ...getChannelsChannelIdPresenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChannelsChannelIdPresenceHistoryQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channel_id/presence/history', keyArgs] as const
}

export function getChannelsChannelIdPresenceHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPresenceHistoryQueryKey>
  >({
    queryKey: getChannelsChannelIdPresenceHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].presence.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChannelsChannelIdPresenceHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdPresenceHistoryQueryKey>
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
      ...getChannelsChannelIdPresenceHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChannelsChannelIdPresenceHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelIdPresenceHistoryQueryKey>
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
      ...getChannelsChannelIdPresenceHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostKeysKeyNameRequestTokenMutationKey() {
  return ['keys', '/keys/:keyName/requestToken', 'POST'] as const
}

export function getPostKeysKeyNameRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':keyName']['requestToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':keyName']['requestToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysKeyNameRequestTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.keys)[':keyName']['requestToken']['$post']>,
    ) {
      return parseResponse(client.keys[':keyName'].requestToken.$post(args, options))
    },
  })
}

export function usePostKeysKeyNameRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.keys)[':keyName']['requestToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.keys)[':keyName']['requestToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeysKeyNameRequestTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPushChannelSubscriptionsQueryKey(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/channelSubscriptions', keyArgs] as const
}

export function getPushChannelSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushChannelSubscriptionsQueryKey>
  >({
    queryKey: getPushChannelSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push.channelSubscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePushChannelSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushChannelSubscriptionsQueryKey>
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
      ...getPushChannelSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePushChannelSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushChannelSubscriptionsQueryKey>
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
      ...getPushChannelSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPushChannelSubscriptionsMutationKey() {
  return ['push', '/push/channelSubscriptions', 'POST'] as const
}

export function getPostPushChannelSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.push.channelSubscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPushChannelSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push.channelSubscriptions.$post>) {
      return parseResponse(client.push.channelSubscriptions.$post(args, options))
    },
  })
}

export function usePostPushChannelSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.push.channelSubscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPushChannelSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePushChannelSubscriptionsMutationKey() {
  return ['push', '/push/channelSubscriptions', 'DELETE'] as const
}

export function getDeletePushChannelSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.push.channelSubscriptions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeletePushChannelSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push.channelSubscriptions.$delete>) {
      return parseResponse(client.push.channelSubscriptions.$delete(args, options))
    },
  })
}

export function useDeletePushChannelSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.push.channelSubscriptions.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.push.channelSubscriptions.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePushChannelSubscriptionsMutationOptions<
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

export function getPushChannelsQueryKey(args: InferRequestType<typeof client.push.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/channels', keyArgs] as const
}

export function getPushChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.push.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPushChannelsQueryKey>
  >({
    queryKey: getPushChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePushChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.channels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPushChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPushChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePushChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.channels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPushChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPushChannelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPushDeviceRegistrationsQueryKey(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/deviceRegistrations', keyArgs] as const
}

export function getPushDeviceRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushDeviceRegistrationsQueryKey>
  >({
    queryKey: getPushDeviceRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push.deviceRegistrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePushDeviceRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushDeviceRegistrationsQueryKey>
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
      ...getPushDeviceRegistrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePushDeviceRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushDeviceRegistrationsQueryKey>
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
      ...getPushDeviceRegistrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPushDeviceRegistrationsMutationKey() {
  return ['push', '/push/deviceRegistrations', 'POST'] as const
}

export function getPostPushDeviceRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.push.deviceRegistrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPushDeviceRegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push.deviceRegistrations.$post>) {
      return parseResponse(client.push.deviceRegistrations.$post(args, options))
    },
  })
}

export function usePostPushDeviceRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.push.deviceRegistrations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPushDeviceRegistrationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePushDeviceRegistrationsMutationKey() {
  return ['push', '/push/deviceRegistrations', 'DELETE'] as const
}

export function getDeletePushDeviceRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.push.deviceRegistrations.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeletePushDeviceRegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push.deviceRegistrations.$delete>) {
      return parseResponse(client.push.deviceRegistrations.$delete(args, options))
    },
  })
}

export function useDeletePushDeviceRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.push.deviceRegistrations.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.push.deviceRegistrations.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePushDeviceRegistrationsMutationOptions<TError, TOnMutateResult>(
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

export function getPushDeviceRegistrationsDeviceIdQueryKey(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/deviceRegistrations/:device_id', keyArgs] as const
}

export function getPushDeviceRegistrationsDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushDeviceRegistrationsDeviceIdQueryKey>
  >({
    queryKey: getPushDeviceRegistrationsDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push.deviceRegistrations[':device_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePushDeviceRegistrationsDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushDeviceRegistrationsDeviceIdQueryKey>
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
      ...getPushDeviceRegistrationsDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePushDeviceRegistrationsDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushDeviceRegistrationsDeviceIdQueryKey>
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
      ...getPushDeviceRegistrationsDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPushDeviceRegistrationsDeviceIdMutationKey() {
  return ['push', '/push/deviceRegistrations/:device_id', 'PUT'] as const
}

export function getPutPushDeviceRegistrationsDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPushDeviceRegistrationsDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>,
    ) {
      return parseResponse(client.push.deviceRegistrations[':device_id'].$put(args, options))
    },
  })
}

export function usePutPushDeviceRegistrationsDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPushDeviceRegistrationsDeviceIdMutationOptions<
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

export function getDeletePushDeviceRegistrationsDeviceIdMutationKey() {
  return ['push', '/push/deviceRegistrations/:device_id', 'DELETE'] as const
}

export function getDeletePushDeviceRegistrationsDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePushDeviceRegistrationsDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>,
    ) {
      return parseResponse(client.push.deviceRegistrations[':device_id'].$delete(args, options))
    },
  })
}

export function useDeletePushDeviceRegistrationsDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePushDeviceRegistrationsDeviceIdMutationOptions<
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

export function getPatchPushDeviceRegistrationsDeviceIdMutationKey() {
  return ['push', '/push/deviceRegistrations/:device_id', 'PATCH'] as const
}

export function getPatchPushDeviceRegistrationsDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPushDeviceRegistrationsDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>,
    ) {
      return parseResponse(client.push.deviceRegistrations[':device_id'].$patch(args, options))
    },
  })
}

export function usePatchPushDeviceRegistrationsDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPushDeviceRegistrationsDeviceIdMutationOptions<
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

export function getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['push', '/push/deviceRegistrations/:device_id/resetUpdateToken', keyArgs] as const
}

export function getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey>
  >({
    queryKey: getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.push.deviceRegistrations[':device_id'].resetUpdateToken.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePushDeviceRegistrationsDeviceIdResetUpdateToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey>
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
      ...getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePushDeviceRegistrationsDeviceIdResetUpdateToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey>
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
      ...getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPushPublishMutationKey() {
  return ['push', '/push/publish', 'POST'] as const
}

export function getPostPushPublishMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.publish.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.push.publish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPushPublishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push.publish.$post>) {
      return parseResponse(client.push.publish.$post(args, options))
    },
  })
}

export function usePostPushPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.publish.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.push.publish.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPushPublishMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatsQueryKey(args: InferRequestType<typeof client.stats.$get>) {
  const { header: _, ...keyArgs } = args
  return ['stats', '/stats', keyArgs] as const
}

export function getStatsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >({
    queryKey: getStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTimeQueryKey(args: InferRequestType<typeof client.time.$get>) {
  const { header: _, ...keyArgs } = args
  return ['time', '/time', keyArgs] as const
}

export function getTimeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.time.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimeQueryKey>
  >({
    queryKey: getTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.time.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
