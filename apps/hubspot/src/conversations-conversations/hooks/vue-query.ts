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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/actors/:actorId',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ActorsActorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609ActorsActorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].actors[':actorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ActorsActorIdQueryKey>
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
              (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ActorsActorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609ActorsActorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].actors[':actorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/channel-accounts',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ChannelAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609ChannelAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09']['channel-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ChannelAccountsQueryKey>
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
              (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609ChannelAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09']['channel-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/channel-accounts/:channelAccountId',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ChannelAccountsChannelAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09']['channel-accounts'][':channelAccountId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey
          >
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
              (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsConversations202609ChannelAccountsChannelAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09']['channel-accounts'][
            ':channelAccountId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/channels', toValue(args)] as const
}

export function getConversationsConversations202609ChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609ChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
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
                    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ChannelsQueryKey>
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
            ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609ChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/channels/:channelId',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609ChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].channels[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ChannelsChannelIdQueryKey>
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
              (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609ChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].channels[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609InboxesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/inboxes', toValue(args)] as const
}

export function getConversationsConversations202609InboxesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609InboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].inboxes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
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
                    (typeof client.conversations.conversations)['2026-09']['inboxes']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['inboxes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609InboxesQueryKey>
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
            ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609InboxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609InboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].inboxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609InboxesInboxIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/inboxes/:inboxId',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609InboxesInboxIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609InboxesInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].inboxes[':inboxId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609InboxesInboxIdQueryKey>
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
              (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609InboxesInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609InboxesInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].inboxes[':inboxId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ThreadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/threads', toValue(args)] as const
}

export function getConversationsConversations202609ThreadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609ThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
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
                    (typeof client.conversations.conversations)['2026-09']['threads']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ThreadsQueryKey>
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
            ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609ThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].threads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ThreadsThreadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversations202609ThreadsThreadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ThreadsThreadIdQueryKey>
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
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsThreadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversations202609ThreadsThreadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsConversations202609ThreadsThreadIdMessagesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesQueryKey>
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
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsConversations202609ThreadsThreadIdMessagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].messages.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages/:messageId',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages[
          ':messageId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey
          >
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
              (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsConversations202609ThreadsThreadIdMessagesMessageIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].messages[
            ':messageId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages/:messageId/original-content',
    toValue(args),
  ] as const
}

export function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'][
          'original-content'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
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
                    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'][
            'original-content'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
