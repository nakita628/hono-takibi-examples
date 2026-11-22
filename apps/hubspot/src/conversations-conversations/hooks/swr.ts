import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getPostConversationsConversations202609ActorsBatchReadKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/actors/batch/read',
    'POST',
  ] as const
}

export function usePostConversationsConversations202609ActorsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversations202609ActorsBatchReadKey()
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
            (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations.conversations['2026-09'].actors.batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversations202609ActorsActorIdKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/actors/:actorId', args] as const
}

export function useGetConversationsConversations202609ActorsActorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ActorsActorIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
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
          client.conversations.conversations['2026-09'].actors[':actorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ActorsActorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ActorsActorIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
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
          client.conversations.conversations['2026-09'].actors[':actorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ChannelAccountsKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/channel-accounts', args] as const
}

export function useGetConversationsConversations202609ChannelAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ChannelAccountsKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
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
          client.conversations.conversations['2026-09']['channel-accounts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ChannelAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ChannelAccountsKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
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
          client.conversations.conversations['2026-09']['channel-accounts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ChannelAccountsChannelAccountIdKey(
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

export function useGetConversationsConversations202609ChannelAccountsChannelAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ChannelAccountsChannelAccountIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
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
          client.conversations.conversations['2026-09']['channel-accounts'][
            ':channelAccountId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ChannelAccountsChannelAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ChannelAccountsChannelAccountIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
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
          client.conversations.conversations['2026-09']['channel-accounts'][
            ':channelAccountId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ChannelsKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/channels', args] as const
}

export function useGetConversationsConversations202609Channels<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
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
        ? getGetConversationsConversations202609ChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations.conversations['2026-09'].channels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609Channels<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
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
        ? getGetConversationsConversations202609ChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['channels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations.conversations['2026-09'].channels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ChannelsChannelIdKey(
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

export function useGetConversationsConversations202609ChannelsChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ChannelsChannelIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
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
          client.conversations.conversations['2026-09'].channels[':channelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ChannelsChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ChannelsChannelIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
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
          client.conversations.conversations['2026-09'].channels[':channelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609InboxesKey(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
) {
  return ['conversations', '/conversations/conversations/2026-09/inboxes', args] as const
}

export function useGetConversationsConversations202609Inboxes<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
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
        ? getGetConversationsConversations202609InboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations.conversations['2026-09'].inboxes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609Inboxes<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
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
        ? getGetConversationsConversations202609InboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations.conversations['2026-09'].inboxes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609InboxesInboxIdKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/inboxes/:inboxId', args] as const
}

export function useGetConversationsConversations202609InboxesInboxId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609InboxesInboxIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
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
          client.conversations.conversations['2026-09'].inboxes[':inboxId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609InboxesInboxId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609InboxesInboxIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
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
          client.conversations.conversations['2026-09'].inboxes[':inboxId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ThreadsKey(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
) {
  return ['conversations', '/conversations/conversations/2026-09/threads', args] as const
}

export function useGetConversationsConversations202609Threads<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
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
        ? getGetConversationsConversations202609ThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609Threads<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
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
        ? getGetConversationsConversations202609ThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ThreadsThreadIdKey(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
) {
  return ['conversations', '/conversations/conversations/2026-09/threads/:threadId', args] as const
}

export function useGetConversationsConversations202609ThreadsThreadId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ThreadsThreadId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteConversationsConversations202609ThreadsThreadIdKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId',
    'DELETE',
  ] as const
}

export function useDeleteConversationsConversations202609ThreadsThreadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversations202609ThreadsThreadIdKey()
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
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchConversationsConversations202609ThreadsThreadIdKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId',
    'PATCH',
  ] as const
}

export function usePatchConversationsConversations202609ThreadsThreadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConversationsConversations202609ThreadsThreadIdKey()
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
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsConversations202609ThreadsThreadIdAssigneeKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/assignee',
    'PUT',
  ] as const
}

export function usePutConversationsConversations202609ThreadsThreadIdAssignee<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversations202609ThreadsThreadIdAssigneeKey()
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
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
          >
        },
      ) =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].assignee.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConversations202609ThreadsThreadIdAssigneeKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/assignee',
    'DELETE',
  ] as const
}

export function useDeleteConversationsConversations202609ThreadsThreadIdAssignee<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversations202609ThreadsThreadIdAssigneeKey()
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
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].assignee.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversations202609ThreadsThreadIdMessagesKey(
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

export function useGetConversationsConversations202609ThreadsThreadIdMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdMessagesKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ThreadsThreadIdMessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdMessagesKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConversations202609ThreadsThreadIdMessagesKey() {
  return [
    'conversations',
    '/conversations/conversations/2026-09/threads/:threadId/messages',
    'POST',
  ] as const
}

export function usePostConversationsConversations202609ThreadsThreadIdMessages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversations202609ThreadsThreadIdMessagesKey()
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
            (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations.conversations['2026-09'].threads[':threadId'].messages.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdKey(
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

export function useGetConversationsConversations202609ThreadsThreadIdMessagesMessageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].messages[
            ':messageId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ThreadsThreadIdMessagesMessageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdKey(args)
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].messages[
            ':messageId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentKey(
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

export function useGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContent<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentKey(
            args,
          )
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'][
            'original-content'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContent<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentKey(
            args,
          )
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
                (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
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
          client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'][
            'original-content'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
