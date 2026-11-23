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

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channel_id', keyArgs] as const
}

export function getChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channel_id/messages', keyArgs] as const
}

export function getChannelsChannelIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channel_id/presence', keyArgs] as const
}

export function getChannelsChannelIdPresenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].presence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPresenceQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['presence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].presence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdPresenceHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channel_id/presence/history', keyArgs] as const
}

export function getChannelsChannelIdPresenceHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPresenceHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].presence.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPresenceHistoryQueryKey>
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
            ReturnType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPresenceHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPresenceHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].presence.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.channelSubscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['push', '/push/channelSubscriptions', keyArgs] as const
}

export function getPushChannelSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.channelSubscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushChannelSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push.channelSubscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePushChannelSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.channelSubscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getPushChannelSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.push.channelSubscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushChannelSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushChannelSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push.channelSubscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.push.channelSubscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.push.channelSubscriptions.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPushChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.channels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['push', '/push/channels', keyArgs] as const
}

export function getPushChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push.channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePushChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
          >,
          ReturnType<typeof getPushChannelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPushChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPushDeviceRegistrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.deviceRegistrations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['push', '/push/deviceRegistrations', keyArgs] as const
}

export function getPushDeviceRegistrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.deviceRegistrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushDeviceRegistrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push.deviceRegistrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePushDeviceRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.push.deviceRegistrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
            >
          >,
          ReturnType<typeof getPushDeviceRegistrationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.push.deviceRegistrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushDeviceRegistrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushDeviceRegistrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push.deviceRegistrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.push.deviceRegistrations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.push.deviceRegistrations.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['push', '/push/deviceRegistrations/:device_id', keyArgs] as const
}

export function getPushDeviceRegistrationsDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushDeviceRegistrationsDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push.deviceRegistrations[':device_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPushDeviceRegistrationsDeviceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushDeviceRegistrationsDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushDeviceRegistrationsDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push.deviceRegistrations[':device_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['push', '/push/deviceRegistrations/:device_id/resetUpdateToken', keyArgs] as const
}

export function getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.push.deviceRegistrations[':device_id'].resetUpdateToken.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
    >
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
                    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
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
                    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey>
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
              (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPushDeviceRegistrationsDeviceIdResetUpdateTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.push.deviceRegistrations[':device_id'].resetUpdateToken.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.publish.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.push.publish.$post>,
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

export function getStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['stats', '/stats', keyArgs] as const
}

export function getStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          ReturnType<typeof getStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimeQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.time.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['time', '/time', keyArgs] as const
}

export function getTimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTime<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
          ReturnType<typeof getTimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
