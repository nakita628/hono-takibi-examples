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

export function getGetConversationsCustomChannels202609Key(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
) {
  return ['conversations', '/conversations/custom-channels/2026-09', args] as const
}

export function useGetConversationsCustomChannels202609<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
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
        ? getGetConversationsCustomChannels202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations['custom-channels']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsCustomChannels202609<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
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
        ? getGetConversationsCustomChannels202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations['custom-channels']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsCustomChannels202609Key() {
  return ['conversations', '/conversations/custom-channels/2026-09', 'POST'] as const
}

export function usePostConversationsCustomChannels202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCustomChannels202609Key()
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
            (typeof client.conversations)['custom-channels']['2026-09']['$post']
          >
        },
      ) =>
        parseResponse(client.conversations['custom-channels']['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsCustomChannels202609ChannelIdKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
) {
  return ['conversations', '/conversations/custom-channels/2026-09/:channelId', args] as const
}

export function useGetConversationsCustomChannels202609ChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsCustomChannels202609ChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteConversationsCustomChannels202609ChannelIdKey() {
  return ['conversations', '/conversations/custom-channels/2026-09/:channelId', 'DELETE'] as const
}

export function useDeleteConversationsCustomChannels202609ChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsCustomChannels202609ChannelIdKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchConversationsCustomChannels202609ChannelIdKey() {
  return ['conversations', '/conversations/custom-channels/2026-09/:channelId', 'PATCH'] as const
}

export function usePatchConversationsCustomChannels202609ChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConversationsCustomChannels202609ChannelIdKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-account-staging-tokens/:accountToken',
    'PATCH',
  ] as const
}

export function usePatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'][
            'channel-account-staging-tokens'
          ][':accountToken'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsCustomChannels202609ChannelIdChannelAccountsKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts',
    args,
  ] as const
}

export function useGetConversationsCustomChannels202609ChannelIdChannelAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdChannelAccountsKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsCustomChannels202609ChannelIdChannelAccounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdChannelAccountsKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsCustomChannels202609ChannelIdChannelAccountsKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts',
    'POST',
  ] as const
}

export function usePostConversationsCustomChannels202609ChannelIdChannelAccounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCustomChannels202609ChannelIdChannelAccountsKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'][
            'channel-accounts'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts/:channelAccountId',
    args,
  ] as const
}

export function useGetConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
            ':channelAccountId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
            ':channelAccountId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts/:channelAccountId',
    'PATCH',
  ] as const
}

export function usePatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
            ':channelAccountId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsCustomChannels202609ChannelIdMessagesKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages',
    'POST',
  ] as const
}

export function usePostConversationsCustomChannels202609ChannelIdMessages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCustomChannels202609ChannelIdMessagesKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'].messages.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsCustomChannels202609ChannelIdMessagesMessageIdKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages/:messageId',
    args,
  ] as const
}

export function useGetConversationsCustomChannels202609ChannelIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdMessagesMessageIdKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId'].messages[
            ':messageId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsCustomChannels202609ChannelIdMessagesMessageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
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
        ? getGetConversationsCustomChannels202609ChannelIdMessagesMessageIdKey(args)
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
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
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
          client.conversations['custom-channels']['2026-09'][':channelId'].messages[
            ':messageId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages/:messageId',
    'PATCH',
  ] as const
}

export function usePatchConversationsCustomChannels202609ChannelIdMessagesMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdKey()
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
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'].messages[
            ':messageId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
