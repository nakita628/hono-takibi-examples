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

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getPostConversationsConversations202609ActorsBatchReadMutationKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/actors/batch/read',
    'POST',
  ] as const
}

export function getPostConversationsConversations202609ActorsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversations202609ActorsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations.conversations['2026-09'].actors.batch.read.$post(args, options),
      )
    },
  })
}

export function usePostConversationsConversations202609ActorsBatchRead<
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
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsConversations202609ActorsBatchReadMutationOptions<
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

export function getConversationsConversations202609ActorsActorIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/actors/:actorId', args] as const
}

export function getConversationsConversations202609ActorsActorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ActorsActorIdQueryKey>
  >({
    queryKey: getConversationsConversations202609ActorsActorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].actors[':actorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609ActorsActorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ActorsActorIdQueryKey>
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
      ...getConversationsConversations202609ActorsActorIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ActorsActorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ActorsActorIdQueryKey>
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
      ...getConversationsConversations202609ActorsActorIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelAccountsQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/channel-accounts', args] as const
}

export function getConversationsConversations202609ChannelAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelAccountsQueryKey>
  >({
    queryKey: getConversationsConversations202609ChannelAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09']['channel-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609ChannelAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ChannelAccountsQueryKey>
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
      ...getConversationsConversations202609ChannelAccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ChannelAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ChannelAccountsQueryKey>
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
      ...getConversationsConversations202609ChannelAccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/channel-accounts/:channelAccountId',
    args,
  ] as const
}

export function getConversationsConversations202609ChannelAccountsChannelAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey>
  >({
    queryKey: getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09']['channel-accounts'][':channelAccountId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useConversationsConversations202609ChannelAccountsChannelAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey
        >
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
      ...getConversationsConversations202609ChannelAccountsChannelAccountIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ChannelAccountsChannelAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey
        >
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
      ...getConversationsConversations202609ChannelAccountsChannelAccountIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelsQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/channels', args] as const
}

export function getConversationsConversations202609ChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelsQueryKey>
  >({
    queryKey: getConversationsConversations202609ChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609Channels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ChannelsQueryKey>
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
      ...getConversationsConversations202609ChannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609Channels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ChannelsQueryKey>
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
      ...getConversationsConversations202609ChannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelsChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/channels/:channelId',
    args,
  ] as const
}

export function getConversationsConversations202609ChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelsChannelIdQueryKey>
  >({
    queryKey: getConversationsConversations202609ChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609ChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ChannelsChannelIdQueryKey>
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
      ...getConversationsConversations202609ChannelsChannelIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ChannelsChannelIdQueryKey>
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
      ...getConversationsConversations202609ChannelsChannelIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609InboxesQueryKey(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
) {
  return ['conversations', '/conversations/conversations/2026-09/inboxes', args] as const
}

export function getConversationsConversations202609InboxesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609InboxesQueryKey>
  >({
    queryKey: getConversationsConversations202609InboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].inboxes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609Inboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['inboxes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609InboxesQueryKey>
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
      ...getConversationsConversations202609InboxesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609Inboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['inboxes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609InboxesQueryKey>
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
      ...getConversationsConversations202609InboxesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609InboxesInboxIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/inboxes/:inboxId', args] as const
}

export function getConversationsConversations202609InboxesInboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609InboxesInboxIdQueryKey>
  >({
    queryKey: getConversationsConversations202609InboxesInboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].inboxes[':inboxId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609InboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609InboxesInboxIdQueryKey>
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
      ...getConversationsConversations202609InboxesInboxIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609InboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609InboxesInboxIdQueryKey>
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
      ...getConversationsConversations202609InboxesInboxIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ThreadsQueryKey(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
) {
  return ['conversations', '/conversations/conversations/2026-09/threads', args] as const
}

export function getConversationsConversations202609ThreadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsQueryKey>
  >({
    queryKey: getConversationsConversations202609ThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609Threads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ThreadsQueryKey>
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
      ...getConversationsConversations202609ThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609Threads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ThreadsQueryKey>
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
      ...getConversationsConversations202609ThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ThreadsThreadIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/threads/:threadId', args] as const
}

export function getConversationsConversations202609ThreadsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsThreadIdQueryKey>
  >({
    queryKey: getConversationsConversations202609ThreadsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609ThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ThreadsThreadIdQueryKey>
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
      ...getConversationsConversations202609ThreadsThreadIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ThreadsThreadIdQueryKey>
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
      ...getConversationsConversations202609ThreadsThreadIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteConversationsConversations202609ThreadsThreadIdMutationKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId',
    'DELETE',
  ] as const
}

export function getDeleteConversationsConversations202609ThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversations202609ThreadsThreadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConversations202609ThreadsThreadId<
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsConversations202609ThreadsThreadIdMutationOptions<
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

export function getPatchConversationsConversations202609ThreadsThreadIdMutationKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId',
    'PATCH',
  ] as const
}

export function getPatchConversationsConversations202609ThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchConversationsConversations202609ThreadsThreadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
      >,
    ) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].$patch(args, options),
      )
    },
  })
}

export function usePatchConversationsConversations202609ThreadsThreadId<
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
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchConversationsConversations202609ThreadsThreadIdMutationOptions<
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

export function getPutConversationsConversations202609ThreadsThreadIdAssigneeMutationKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/assignee',
    'PUT',
  ] as const
}

export function getPutConversationsConversations202609ThreadsThreadIdAssigneeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversations202609ThreadsThreadIdAssigneeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
      >,
    ) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].assignee.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutConversationsConversations202609ThreadsThreadIdAssignee<
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
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutConversationsConversations202609ThreadsThreadIdAssigneeMutationOptions<
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

export function getDeleteConversationsConversations202609ThreadsThreadIdAssigneeMutationKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/assignee',
    'DELETE',
  ] as const
}

export function getDeleteConversationsConversations202609ThreadsThreadIdAssigneeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversations202609ThreadsThreadIdAssigneeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].assignee.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteConversationsConversations202609ThreadsThreadIdAssignee<
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteConversationsConversations202609ThreadsThreadIdAssigneeMutationOptions<
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

export function getConversationsConversations202609ThreadsThreadIdMessagesQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages',
    args,
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesQueryKey>
  >({
    queryKey: getConversationsConversations202609ThreadsThreadIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConversations202609ThreadsThreadIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesQueryKey>
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
      ...getConversationsConversations202609ThreadsThreadIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ThreadsThreadIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesQueryKey>
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
      ...getConversationsConversations202609ThreadsThreadIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConversationsConversations202609ThreadsThreadIdMessagesMutationKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages',
    'POST',
  ] as const
}

export function getPostConversationsConversations202609ThreadsThreadIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversations202609ThreadsThreadIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostConversationsConversations202609ThreadsThreadIdMessages<
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
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostConversationsConversations202609ThreadsThreadIdMessagesMutationOptions<
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

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages/:messageId',
    args,
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey>
  >({
    queryKey: getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages[
          ':messageId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversationsConversations202609ThreadsThreadIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey
        >
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
      ...getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ThreadsThreadIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey
        >
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
      ...getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages/:messageId/original-content',
    args,
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey
    >
  >({
    queryKey:
      getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'][
          'original-content'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey
        >
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
      ...getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey
        >
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
      ...getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
