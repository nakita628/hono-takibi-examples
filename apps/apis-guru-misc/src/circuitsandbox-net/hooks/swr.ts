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

export function getRtcKey() {
  return ['rtc'] as const
}

export function getSpacesKey() {
  return ['spaces'] as const
}

export function getTelephonyKey() {
  return ['telephony'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetConversationsKey(args: InferRequestType<typeof client.conversations.$get>) {
  return ['conversations', '/conversations', args] as const
}

export function useGetConversations<TError = unknown>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConversationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversations<TError = unknown>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConversationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsByIdsKey(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
) {
  return ['conversations', '/conversations/byIds', args] as const
}

export function useGetConversationsByIds<TError = unknown>(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
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
        ? getGetConversationsByIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.byIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsByIds<TError = unknown>(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
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
        ? getGetConversationsByIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.byIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsCommunityKey(
  args: InferRequestType<typeof client.conversations.community.$get>,
) {
  return ['conversations', '/conversations/community', args] as const
}

export function useGetConversationsCommunity<TError = unknown>(
  args: InferRequestType<typeof client.conversations.community.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
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
        ? getGetConversationsCommunityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.community.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsCommunity<TError = unknown>(
  args: InferRequestType<typeof client.conversations.community.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
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
        ? getGetConversationsCommunityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.community.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsCommunityKey() {
  return ['conversations', '/conversations/community', 'POST'] as const
}

export function usePostConversationsCommunity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.community.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCommunityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.community.$post> },
      ) => parseResponse(client.conversations.community.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsCommunityConvIdKey() {
  return ['conversations', '/conversations/community/:convId', 'PUT'] as const
}

export function usePutConversationsCommunityConvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.community)[':convId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.community)[':convId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsCommunityConvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.community)[':convId']['$put']> },
      ) => parseResponse(client.conversations.community[':convId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsCommunityConvIdJoinKey() {
  return ['conversations', '/conversations/community/:convId/join', 'POST'] as const
}

export function usePostConversationsCommunityConvIdJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.community)[':convId']['join']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.community)[':convId']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCommunityConvIdJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations.community)[':convId']['join']['$post']>
        },
      ) => parseResponse(client.conversations.community[':convId'].join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsCommunityConvIdParticipantsKey() {
  return ['conversations', '/conversations/community/:convId/participants', 'POST'] as const
}

export function usePostConversationsCommunityConvIdParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations.community)[':convId']['participants']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.community)[':convId']['participants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCommunityConvIdParticipantsKey()
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
            (typeof client.conversations.community)[':convId']['participants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations.community[':convId'].participants.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsCommunityConvIdParticipantsKey() {
  return ['conversations', '/conversations/community/:convId/participants', 'DELETE'] as const
}

export function useDeleteConversationsCommunityConvIdParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations.community)[':convId']['participants']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.community)[':convId']['participants']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsCommunityConvIdParticipantsKey()
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
            (typeof client.conversations.community)[':convId']['participants']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations.community[':convId'].participants.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversationdetailsKey(
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
) {
  return ['conversations', '/conversations/conversationdetails', args] as const
}

export function useGetConversationsConversationdetails<TError = unknown>(
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
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
        ? getGetConversationsConversationdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.conversationdetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversationdetails<TError = unknown>(
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
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
        ? getGetConversationsConversationdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.conversationdetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsDirectKey(
  args: InferRequestType<typeof client.conversations.direct.$get>,
) {
  return ['conversations', '/conversations/direct', args] as const
}

export function useGetConversationsDirect<TError = unknown>(
  args: InferRequestType<typeof client.conversations.direct.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
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
        ? getGetConversationsDirectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.direct.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsDirect<TError = unknown>(
  args: InferRequestType<typeof client.conversations.direct.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
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
        ? getGetConversationsDirectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.direct.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsDirectKey() {
  return ['conversations', '/conversations/direct', 'POST'] as const
}

export function usePostConversationsDirect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.direct.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsDirectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.direct.$post> },
      ) => parseResponse(client.conversations.direct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsFavoriteKey() {
  return ['conversations', '/conversations/favorite'] as const
}

export function useGetConversationsFavorite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
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
        ? getGetConversationsFavoriteKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.favorite.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsFavorite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
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
        ? getGetConversationsFavoriteKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.favorite.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsGroupKey() {
  return ['conversations', '/conversations/group', 'POST'] as const
}

export function usePostConversationsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.group.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.group.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conversations.group.$post> }) =>
        parseResponse(client.conversations.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsGroupConvIdKey() {
  return ['conversations', '/conversations/group/:convId', 'PUT'] as const
}

export function usePutConversationsGroupConvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.group)[':convId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.group)[':convId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsGroupConvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations.group)[':convId']['$put']> },
      ) => parseResponse(client.conversations.group[':convId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsGroupConvIdParticipantsKey() {
  return ['conversations', '/conversations/group/:convId/participants', 'POST'] as const
}

export function usePostConversationsGroupConvIdParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations.group)[':convId']['participants']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsGroupConvIdParticipantsKey()
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
            (typeof client.conversations.group)[':convId']['participants']['$post']
          >
        },
      ) =>
        parseResponse(client.conversations.group[':convId'].participants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsGroupConvIdParticipantsKey() {
  return ['conversations', '/conversations/group/:convId/participants', 'DELETE'] as const
}

export function useDeleteConversationsGroupConvIdParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations.group)[':convId']['participants']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsGroupConvIdParticipantsKey()
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
            (typeof client.conversations.group)[':convId']['participants']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations.group[':convId'].participants.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsLabelLabelIdKey(
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
) {
  return ['conversations', '/conversations/label/:labelId', args] as const
}

export function useGetConversationsLabelLabelId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
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
        ? getGetConversationsLabelLabelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.label[':labelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsLabelLabelId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
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
        ? getGetConversationsLabelLabelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.label[':labelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsMessagesFlagKey() {
  return ['conversations', '/conversations/messages/flag'] as const
}

export function useGetConversationsMessagesFlag<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
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
        ? getGetConversationsMessagesFlagKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.messages.flag.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsMessagesFlag<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
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
        ? getGetConversationsMessagesFlagKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.messages.flag.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsMessagesItemIdKey(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
) {
  return ['conversations', '/conversations/messages/:itemId', args] as const
}

export function useGetConversationsMessagesItemId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
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
        ? getGetConversationsMessagesItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.messages[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsMessagesItemId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
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
        ? getGetConversationsMessagesItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.messages[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsModerateConvIdKey() {
  return ['conversations', '/conversations/moderate/:convId', 'POST'] as const
}

export function usePostConversationsModerateConvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.moderate)[':convId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.moderate)[':convId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsModerateConvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.moderate)[':convId']['$post']> },
      ) => parseResponse(client.conversations.moderate[':convId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsResolveinvitetokenKey(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
) {
  return ['conversations', '/conversations/resolveinvitetoken', args] as const
}

export function useGetConversationsResolveinvitetoken<TError = unknown>(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
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
        ? getGetConversationsResolveinvitetokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.resolveinvitetoken.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsResolveinvitetoken<TError = unknown>(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
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
        ? getGetConversationsResolveinvitetokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.resolveinvitetoken.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsSearchKey(
  args: InferRequestType<typeof client.conversations.search.$get>,
) {
  return ['conversations', '/conversations/search', args] as const
}

export function useGetConversationsSearch<TError = unknown>(
  args: InferRequestType<typeof client.conversations.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
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
        ? getGetConversationsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsSearch<TError = unknown>(
  args: InferRequestType<typeof client.conversations.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
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
        ? getGetConversationsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsUnmoderateConvIdKey() {
  return ['conversations', '/conversations/unmoderate/:convId', 'POST'] as const
}

export function usePostConversationsUnmoderateConvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.unmoderate)[':convId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.unmoderate)[':convId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsUnmoderateConvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.unmoderate)[':convId']['$post']> },
      ) => parseResponse(client.conversations.unmoderate[':convId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConvIdKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
) {
  return ['conversations', '/conversations/:convId', args] as const
}

export function useGetConversationsConvId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
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
        ? getGetConversationsConvIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':convId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConvId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
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
        ? getGetConversationsConvIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':convId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConvIdArchiveKey() {
  return ['conversations', '/conversations/:convId/archive', 'POST'] as const
}

export function usePostConversationsConvIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':convId']['archive']['$post']> },
      ) => parseResponse(client.conversations[':convId'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdArchiveKey() {
  return ['conversations', '/conversations/:convId/archive', 'DELETE'] as const
}

export function useDeleteConversationsConvIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['archive']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['archive']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':convId']['archive']['$delete']>
        },
      ) => parseResponse(client.conversations[':convId'].archive.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConvIdConversationdetailsKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
) {
  return ['conversations', '/conversations/:convId/conversationdetails', args] as const
}

export function useGetConversationsConvIdConversationdetails<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
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
        ? getGetConversationsConvIdConversationdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations[':convId'].conversationdetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConvIdConversationdetails<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
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
        ? getGetConversationsConvIdConversationdetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.conversations[':convId'].conversationdetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConvIdFavoriteKey() {
  return ['conversations', '/conversations/:convId/favorite', 'POST'] as const
}

export function usePostConversationsConvIdFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['favorite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['favorite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':convId']['favorite']['$post']> },
      ) => parseResponse(client.conversations[':convId'].favorite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdFavoriteKey() {
  return ['conversations', '/conversations/:convId/favorite', 'DELETE'] as const
}

export function useDeleteConversationsConvIdFavorite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['favorite']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['favorite']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':convId']['favorite']['$delete']>
        },
      ) => parseResponse(client.conversations[':convId'].favorite.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConvIdItemsKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
) {
  return ['conversations', '/conversations/:convId/items', args] as const
}

export function useGetConversationsConvIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
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
        ? getGetConversationsConvIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':convId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConvIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
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
        ? getGetConversationsConvIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':convId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConvIdLabelKey() {
  return ['conversations', '/conversations/:convId/label', 'POST'] as const
}

export function usePostConversationsConvIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['label']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['label']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':convId']['label']['$post']> },
      ) => parseResponse(client.conversations[':convId'].label.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdLabelLabelIdKey() {
  return ['conversations', '/conversations/:convId/label/:labelId', 'DELETE'] as const
}

export function useDeleteConversationsConvIdLabelLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':convId']['label'][':labelId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['label'][':labelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdLabelLabelIdKey()
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
            (typeof client.conversations)[':convId']['label'][':labelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].label[':labelId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConvIdMessagesKey() {
  return ['conversations', '/conversations/:convId/messages', 'POST'] as const
}

export function usePostConversationsConvIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':convId']['messages']['$post']> },
      ) => parseResponse(client.conversations[':convId'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConvIdMessagesFlagKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
) {
  return ['conversations', '/conversations/:convId/messages/flag', args] as const
}

export function useGetConversationsConvIdMessagesFlag<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
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
        ? getGetConversationsConvIdMessagesFlagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':convId'].messages.flag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConvIdMessagesFlag<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
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
        ? getGetConversationsConvIdMessagesFlagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':convId'].messages.flag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversationsConvIdMessagesItemIdKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId', 'PUT'] as const
}

export function usePutConversationsConvIdMessagesItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':convId']['messages'][':itemId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConvIdMessagesItemIdKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['$put']
          >
        },
      ) =>
        parseResponse(client.conversations[':convId'].messages[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConvIdMessagesItemIdKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId', 'POST'] as const
}

export function usePostConversationsConvIdMessagesItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':convId']['messages'][':itemId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdMessagesItemIdKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].messages[':itemId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdMessagesItemIdKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId', 'DELETE'] as const
}

export function useDeleteConversationsConvIdMessagesItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':convId']['messages'][':itemId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdMessagesItemIdKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].messages[':itemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConvIdMessagesItemIdFlagKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/flag', 'POST'] as const
}

export function usePostConversationsConvIdMessagesItemIdFlag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdMessagesItemIdFlagKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].messages[':itemId'].flag.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdMessagesItemIdFlagKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/flag', 'DELETE'] as const
}

export function useDeleteConversationsConvIdMessagesItemIdFlag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdMessagesItemIdFlagKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].messages[':itemId'].flag.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConvIdMessagesItemIdLikeKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/like', 'POST'] as const
}

export function usePostConversationsConvIdMessagesItemIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdMessagesItemIdLikeKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].messages[':itemId'].like.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdMessagesItemIdLikeKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/like', 'DELETE'] as const
}

export function useDeleteConversationsConvIdMessagesItemIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdMessagesItemIdLikeKey()
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
            (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':convId'].messages[':itemId'].like.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConvIdModeratorsKey() {
  return ['conversations', '/conversations/:convId/moderators', 'POST'] as const
}

export function usePostConversationsConvIdModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['moderators']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['moderators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':convId']['moderators']['$post']>
        },
      ) => parseResponse(client.conversations[':convId'].moderators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdModeratorsKey() {
  return ['conversations', '/conversations/:convId/moderators', 'DELETE'] as const
}

export function useDeleteConversationsConvIdModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['moderators']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['moderators']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':convId']['moderators']['$delete']>
        },
      ) => parseResponse(client.conversations[':convId'].moderators.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConvIdParticipantsKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
) {
  return ['conversations', '/conversations/:convId/participants', args] as const
}

export function useGetConversationsConvIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
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
        ? getGetConversationsConvIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':convId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConvIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
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
        ? getGetConversationsConvIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':convId'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsConvIdPinsKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
) {
  return ['conversations', '/conversations/:convId/pins', args] as const
}

export function useGetConversationsConvIdPins<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
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
        ? getGetConversationsConvIdPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':convId'].pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConvIdPins<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
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
        ? getGetConversationsConvIdPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':convId'].pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConvIdPinsItemIdKey() {
  return ['conversations', '/conversations/:convId/pins/:itemId', 'POST'] as const
}

export function usePostConversationsConvIdPinsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConvIdPinsItemIdKey()
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
            (typeof client.conversations)[':convId']['pins'][':itemId']['$post']
          >
        },
      ) => parseResponse(client.conversations[':convId'].pins[':itemId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsConvIdPinsItemIdKey() {
  return ['conversations', '/conversations/:convId/pins/:itemId', 'DELETE'] as const
}

export function useDeleteConversationsConvIdPinsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':convId']['pins'][':itemId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConvIdPinsItemIdKey()
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
            (typeof client.conversations)[':convId']['pins'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(client.conversations[':convId'].pins[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRtcSessionsKey() {
  return ['rtc', '/rtc/sessions'] as const
}

export function useGetRtcSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRtcSessionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rtc.sessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRtcSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRtcSessionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rtc.sessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesKey(args: InferRequestType<typeof client.spaces.$get>) {
  return ['spaces', '/spaces', args] as const
}

export function useGetSpaces<TError = unknown>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.spaces.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSpaces<TError = unknown>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.spaces.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSpacesCreateKey() {
  return ['spaces', '/spaces/create', 'POST'] as const
}

export function usePostSpacesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.spaces.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.spaces.create.$post> }) =>
        parseResponse(client.spaces.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesDirectoryKey(
  args: InferRequestType<typeof client.spaces.directory.$get>,
) {
  return ['spaces', '/spaces/directory', args] as const
}

export function useGetSpacesDirectory<TError = unknown>(
  args: InferRequestType<typeof client.spaces.directory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
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
        ? getGetSpacesDirectoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.directory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesDirectory<TError = unknown>(
  args: InferRequestType<typeof client.spaces.directory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
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
        ? getGetSpacesDirectoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.directory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesExistsNameKey(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
) {
  return ['spaces', '/spaces/exists/:name', args] as const
}

export function useGetSpacesExistsName<TError = unknown>(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
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
        ? getGetSpacesExistsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.exists[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesExistsName<TError = unknown>(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
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
        ? getGetSpacesExistsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.exists[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSpacesFlagItemIdKey() {
  return ['spaces', '/spaces/flag/:itemId', 'PUT'] as const
}

export function usePutSpacesFlagItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.flag)[':itemId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.flag)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesFlagItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces.flag)[':itemId']['$put']> },
      ) => parseResponse(client.spaces.flag[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesFlaggedKey(args: InferRequestType<typeof client.spaces.flagged.$get>) {
  return ['spaces', '/spaces/flagged', args] as const
}

export function useGetSpacesFlagged<TError = unknown>(
  args: InferRequestType<typeof client.spaces.flagged.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesFlaggedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.flagged.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesFlagged<TError = unknown>(
  args: InferRequestType<typeof client.spaces.flagged.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesFlaggedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.flagged.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdsKey(args: InferRequestType<typeof client.spaces.ids.$get>) {
  return ['spaces', '/spaces/ids', args] as const
}

export function useGetSpacesIds<TError = unknown>(
  args: InferRequestType<typeof client.spaces.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIds<TError = unknown>(
  args: InferRequestType<typeof client.spaces.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesItemItemIdKey() {
  return ['spaces', '/spaces/item/:itemId', 'DELETE'] as const
}

export function useDeleteSpacesItemItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.item)[':itemId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.item)[':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesItemItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces.item)[':itemId']['$delete']> },
      ) => parseResponse(client.spaces.item[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesLikeItemIdKey() {
  return ['spaces', '/spaces/like/:itemId', 'PUT'] as const
}

export function usePutSpacesLikeItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.like)[':itemId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.like)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesLikeItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces.like)[':itemId']['$put']> },
      ) => parseResponse(client.spaces.like[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesLikesItemIdKey(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
) {
  return ['spaces', '/spaces/likes/:itemId', args] as const
}

export function useGetSpacesLikesItemId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
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
        ? getGetSpacesLikesItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.likes[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesLikesItemId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
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
        ? getGetSpacesLikesItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.likes[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSpacesSearchAddRecentKey() {
  return ['spaces', '/spaces/search/add/recent', 'PUT'] as const
}

export function usePutSpacesSearchAddRecent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.add.recent.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.spaces.search.add.recent.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesSearchAddRecentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.spaces.search.add.recent.$put> },
      ) => parseResponse(client.spaces.search.add.recent.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesSearchCancelSearchIdKey() {
  return ['spaces', '/spaces/search/cancel/:searchId', 'PUT'] as const
}

export function usePutSpacesSearchCancelSearchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces.search.cancel)[':searchId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.search.cancel)[':searchId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesSearchCancelSearchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces.search.cancel)[':searchId']['$put']> },
      ) => parseResponse(client.spaces.search.cancel[':searchId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSearchRecentKey() {
  return ['spaces', '/spaces/search/recent'] as const
}

export function useGetSpacesSearchRecent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesSearchRecentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.search.recent.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSearchRecent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesSearchRecentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.search.recent.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSearchStartBasicKey(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
) {
  return ['spaces', '/spaces/search/startBasic', args] as const
}

export function useGetSpacesSearchStartBasic<TError = unknown>(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
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
        ? getGetSpacesSearchStartBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.search.startBasic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSearchStartBasic<TError = unknown>(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
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
        ? getGetSpacesSearchStartBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.search.startBasic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSearchStartDetailedKey(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
) {
  return ['spaces', '/spaces/search/startDetailed', args] as const
}

export function useGetSpacesSearchStartDetailed<TError = unknown>(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
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
        ? getGetSpacesSearchStartDetailedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.search.startDetailed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSearchStartDetailed<TError = unknown>(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
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
        ? getGetSpacesSearchStartDetailedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.search.startDetailed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSpacesTopicTopicIdUpdateTagsKey() {
  return ['spaces', '/spaces/topic/:topicId/updateTags', 'PUT'] as const
}

export function usePutSpacesTopicTopicIdUpdateTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesTopicTopicIdUpdateTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>
        },
      ) => parseResponse(client.spaces.topic[':topicId'].updateTags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesUnflagItemIdKey() {
  return ['spaces', '/spaces/unflag/:itemId', 'PUT'] as const
}

export function usePutSpacesUnflagItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.unflag)[':itemId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.unflag)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesUnflagItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces.unflag)[':itemId']['$put']> },
      ) => parseResponse(client.spaces.unflag[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesUnlikeItemIdKey() {
  return ['spaces', '/spaces/unlike/:itemId', 'PUT'] as const
}

export function usePutSpacesUnlikeItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.unlike)[':itemId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces.unlike)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesUnlikeItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces.unlike)[':itemId']['$put']> },
      ) => parseResponse(client.spaces.unlike[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesIdKey() {
  return ['spaces', '/spaces/:id', 'PUT'] as const
}

export function usePutSpacesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['$put']> }) =>
        parseResponse(client.spaces[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdKey() {
  return ['spaces', '/spaces/:id', 'DELETE'] as const
}

export function useDeleteSpacesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['$delete']> },
      ) => parseResponse(client.spaces[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdJoinKey() {
  return ['spaces', '/spaces/:id/join', 'POST'] as const
}

export function usePostSpacesIdJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['join']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['join']['$post']> },
      ) => parseResponse(client.spaces[':id'].join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdLabelsAssignKey() {
  return ['spaces', '/spaces/:id/labels/assign', 'POST'] as const
}

export function usePostSpacesIdLabelsAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['labels']['assign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['labels']['assign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdLabelsAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['labels']['assign']['$post']> },
      ) => parseResponse(client.spaces[':id'].labels.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdLabelsUnassignKey() {
  return ['spaces', '/spaces/:id/labels/unassign', 'DELETE'] as const
}

export function useDeleteSpacesIdLabelsUnassign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdLabelsUnassignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>
        },
      ) => parseResponse(client.spaces[':id'].labels.unassign.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdLeaveKey() {
  return ['spaces', '/spaces/:id/leave', 'POST'] as const
}

export function usePostSpacesIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['leave']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['leave']['$post']> },
      ) => parseResponse(client.spaces[':id'].leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdParticipantKey() {
  return ['spaces', '/spaces/:id/participant', 'POST'] as const
}

export function usePostSpacesIdParticipant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['participant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['participant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdParticipantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['participant']['$post']> },
      ) => parseResponse(client.spaces[':id'].participant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdParticipantRemoveKey() {
  return ['spaces', '/spaces/:id/participant/remove', 'POST'] as const
}

export function usePostSpacesIdParticipantRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['participant']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['participant']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdParticipantRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['participant']['remove']['$post']>
        },
      ) => parseResponse(client.spaces[':id'].participant.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdParticipantsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
) {
  return ['spaces', '/spaces/:id/participants', args] as const
}

export function useGetSpacesIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
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
        ? getGetSpacesIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
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
        ? getGetSpacesIdParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].participants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdParticipantsPendingKey(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
) {
  return ['spaces', '/spaces/:id/participants/pending', args] as const
}

export function useGetSpacesIdParticipantsPending<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
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
        ? getGetSpacesIdParticipantsPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].participants.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdParticipantsPending<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
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
        ? getGetSpacesIdParticipantsPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].participants.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdPinnedTopicsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
) {
  return ['spaces', '/spaces/:id/pinnedTopics', args] as const
}

export function useGetSpacesIdPinnedTopics<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
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
        ? getGetSpacesIdPinnedTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].pinnedTopics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPinnedTopics<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
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
        ? getGetSpacesIdPinnedTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].pinnedTopics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdSearchParticipantsToAddKey(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
) {
  return ['spaces', '/spaces/:id/searchParticipantsToAdd', args] as const
}

export function useGetSpacesIdSearchParticipantsToAdd<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
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
        ? getGetSpacesIdSearchParticipantsToAddKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].searchParticipantsToAdd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdSearchParticipantsToAdd<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
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
        ? getGetSpacesIdSearchParticipantsToAddKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].searchParticipantsToAdd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdSearchSpaceParticipantsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
) {
  return ['spaces', '/spaces/:id/searchSpaceParticipants', args] as const
}

export function useGetSpacesIdSearchSpaceParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
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
        ? getGetSpacesIdSearchSpaceParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].searchSpaceParticipants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdSearchSpaceParticipants<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
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
        ? getGetSpacesIdSearchSpaceParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].searchSpaceParticipants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSpacesIdUpdateTimestampKey() {
  return ['spaces', '/spaces/:id/updateTimestamp', 'PUT'] as const
}

export function usePutSpacesIdUpdateTimestamp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesIdUpdateTimestampKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['updateTimestamp']['$put']> },
      ) => parseResponse(client.spaces[':id'].updateTimestamp.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesSpaceIdParticipantKey() {
  return ['spaces', '/spaces/:spaceId/participant', 'PUT'] as const
}

export function usePutSpacesSpaceIdParticipant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['participant']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesSpaceIdParticipantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':spaceId']['participant']['$put']> },
      ) => parseResponse(client.spaces[':spaceId'].participant.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdParticipantImportIndexKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/participant/import/', args] as const
}

export function useGetSpacesSpaceIdParticipantImportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
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
        ? getGetSpacesSpaceIdParticipantImportIndexKey(args)
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
                (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].participant.import.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdParticipantImportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
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
        ? getGetSpacesSpaceIdParticipantImportIndexKey(args)
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
                (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].participant.import.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdParticipantRequestKey() {
  return ['spaces', '/spaces/:spaceId/participant/request', 'POST'] as const
}

export function usePostSpacesSpaceIdParticipantRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdParticipantRequestKey()
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
            (typeof client.spaces)[':spaceId']['participant']['request']['$post']
          >
        },
      ) => parseResponse(client.spaces[':spaceId'].participant.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesSpaceIdParticipantParticipantIdDenyKey() {
  return ['spaces', '/spaces/:spaceId/participant/:participantId/deny', 'POST'] as const
}

export function usePostSpacesSpaceIdParticipantParticipantIdDeny<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdParticipantParticipantIdDenyKey()
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
            (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].participant[':participantId'].deny.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesSpaceIdParticipantParticipantIdGrantKey() {
  return ['spaces', '/spaces/:spaceId/participant/:participantId/grant', 'POST'] as const
}

export function usePostSpacesSpaceIdParticipantParticipantIdGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdParticipantParticipantIdGrantKey()
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
            (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].participant[':participantId'].grant.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesSpaceIdTopicKey() {
  return ['spaces', '/spaces/:spaceId/topic', 'POST'] as const
}

export function usePostSpacesSpaceIdTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['topic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':spaceId']['topic']['$post']> },
      ) => parseResponse(client.spaces[':spaceId'].topic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdTopicTopicIdKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/topic/:topicId', args] as const
}

export function useGetSpacesSpaceIdTopicTopicId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
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
        ? getGetSpacesSpaceIdTopicTopicIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].topic[':topicId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdTopicTopicId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
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
        ? getGetSpacesSpaceIdTopicTopicIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].topic[':topicId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSpacesSpaceIdTopicTopicIdKey() {
  return ['spaces', '/spaces/:spaceId/topic/:topicId', 'PUT'] as const
}

export function usePutSpacesSpaceIdTopicTopicId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesSpaceIdTopicTopicIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>
        },
      ) => parseResponse(client.spaces[':spaceId'].topic[':topicId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdTopicTopicIdReplyKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply', args] as const
}

export function useGetSpacesSpaceIdTopicTopicIdReply<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
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
        ? getGetSpacesSpaceIdTopicTopicIdReplyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].topic[':topicId'].reply.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdTopicTopicIdReply<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
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
        ? getGetSpacesSpaceIdTopicTopicIdReplyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].topic[':topicId'].reply.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdTopicTopicIdReplyKey() {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply', 'POST'] as const
}

export function usePostSpacesSpaceIdTopicTopicIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdTopicTopicIdReplyKey()
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
            (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].topic[':topicId'].reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesSpaceIdTopicTopicIdReplyReplyIdKey() {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply/:replyId', 'PUT'] as const
}

export function usePutSpacesSpaceIdTopicTopicIdReplyReplyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesSpaceIdTopicTopicIdReplyReplyIdKey()
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
            (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].topic[':topicId'].reply[':replyId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdTopicsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/topics', args] as const
}

export function useGetSpacesSpaceIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
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
        ? getGetSpacesSpaceIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
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
        ? getGetSpacesSpaceIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSpacesSpaceIdWelcomeboxContentKey() {
  return ['spaces', '/spaces/:spaceId/welcomebox/:content', 'PUT'] as const
}

export function usePutSpacesSpaceIdWelcomeboxContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesSpaceIdWelcomeboxContentKey()
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
            (typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']
          >
        },
      ) => parseResponse(client.spaces[':spaceId'].welcomebox[':content'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesTopicIdPinKey() {
  return ['spaces', '/spaces/:topicId/pin', 'PUT'] as const
}

export function usePutSpacesTopicIdPin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':topicId']['pin']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':topicId']['pin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesTopicIdPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':topicId']['pin']['$put']> },
      ) => parseResponse(client.spaces[':topicId'].pin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSpacesTopicIdUnpinKey() {
  return ['spaces', '/spaces/:topicId/unpin', 'PUT'] as const
}

export function usePutSpacesTopicIdUnpin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':topicId']['unpin']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':topicId']['unpin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSpacesTopicIdUnpinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':topicId']['unpin']['$put']> },
      ) => parseResponse(client.spaces[':topicId'].unpin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTelephonyDeviceInfosKey() {
  return ['telephony', '/telephony/deviceInfos'] as const
}

export function useGetTelephonyDeviceInfos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
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
        ? getGetTelephonyDeviceInfosKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony.deviceInfos.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelephonyDeviceInfos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
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
        ? getGetTelephonyDeviceInfosKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telephony.deviceInfos.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTelephonyTelephonyConversationIdKey() {
  return ['telephony', '/telephony/telephonyConversationId'] as const
}

export function useGetTelephonyTelephonyConversationId<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
        >
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
        ? getGetTelephonyTelephonyConversationIdKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.telephony.telephonyConversationId.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelephonyTelephonyConversationId<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
        >
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
        ? getGetTelephonyTelephonyConversationIdKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.telephony.telephonyConversationId.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTelephonyTelephonyConversationIdJournalKey(
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
) {
  return ['telephony', '/telephony/:telephonyConversationId/journal', args] as const
}

export function useGetTelephonyTelephonyConversationIdJournal<TError = unknown>(
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
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
        ? getGetTelephonyTelephonyConversationIdJournalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.telephony[':telephonyConversationId'].journal.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelephonyTelephonyConversationIdJournal<TError = unknown>(
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
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
        ? getGetTelephonyTelephonyConversationIdJournalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.telephony[':telephonyConversationId'].journal.$get(args, clientOptions),
        ),
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

export function getGetUsersLabelsKey() {
  return ['users', '/users/labels'] as const
}

export function useGetUsersLabels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersLabelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.labels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersLabels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersLabelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.labels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersLabelsKey() {
  return ['users', '/users/labels', 'POST'] as const
}

export function usePostUsersLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.labels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.labels.$post> }) =>
        parseResponse(client.users.labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersLabelsLabelIdKey() {
  return ['users', '/users/labels/:labelId', 'DELETE'] as const
}

export function useDeleteUsersLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.labels)[':labelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.labels)[':labelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersLabelsLabelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.labels)[':labelId']['$delete']> },
      ) => parseResponse(client.users.labels[':labelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersListKey(args: InferRequestType<typeof client.users.list.$get>) {
  return ['users', '/users/list', args] as const
}

export function useGetUsersList<TError = unknown>(
  args: InferRequestType<typeof client.users.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersList<TError = unknown>(
  args: InferRequestType<typeof client.users.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersPresenceKey(args: InferRequestType<typeof client.users.presence.$get>) {
  return ['users', '/users/presence', args] as const
}

export function useGetUsersPresence<TError = unknown>(
  args: InferRequestType<typeof client.users.presence.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersPresenceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersPresence<TError = unknown>(
  args: InferRequestType<typeof client.users.presence.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersPresenceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersPresenceKey() {
  return ['users', '/users/presence', 'PUT'] as const
}

export function usePutUsersPresence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.presence.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersPresenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.presence.$put> }) =>
        parseResponse(client.users.presence.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersProfileKey() {
  return ['users', '/users/profile'] as const
}

export function useGetUsersProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersProfileKey() {
  return ['users', '/users/profile', 'PUT'] as const
}

export function usePutUsersProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.profile.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.profile.$put> }) =>
        parseResponse(client.users.profile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersSupportinfoKey() {
  return ['users', '/users/supportinfo'] as const
}

export function useGetUsersSupportinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersSupportinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.supportinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSupportinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersSupportinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.supportinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersEmailAddressGetUserByEmailKey(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
) {
  return ['users', '/users/:emailAddress/getUserByEmail', args] as const
}

export function useGetUsersEmailAddressGetUserByEmail<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
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
        ? getGetUsersEmailAddressGetUserByEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':emailAddress'].getUserByEmail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersEmailAddressGetUserByEmail<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
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
        ? getGetUsersEmailAddressGetUserByEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':emailAddress'].getUserByEmail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function useGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdPresenceKey(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
) {
  return ['users', '/users/:id/presence', args] as const
}

export function useGetUsersIdPresence<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
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
        ? getGetUsersIdPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdPresence<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
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
        ? getGetUsersIdPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].presence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksKey() {
  return ['webhooks', '/webhooks'] as const
}

export function useGetWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksKey() {
  return ['webhooks', '/webhooks', 'DELETE'] as const
}

export function useDeleteWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.webhooks.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksIncomingCreateConversationIdKey() {
  return ['webhooks', '/webhooks/incoming/create/:conversationId', 'POST'] as const
}

export function usePostWebhooksIncomingCreateConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIncomingCreateConversationIdKey()
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
            (typeof client.webhooks.incoming.create)[':conversationId']['$post']
          >
        },
      ) =>
        parseResponse(client.webhooks.incoming.create[':conversationId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIncomingUserUserIdKey(
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
) {
  return ['webhooks', '/webhooks/incoming/user/:userId', args] as const
}

export function useGetWebhooksIncomingUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
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
        ? getGetWebhooksIncomingUserUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.incoming.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIncomingUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
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
        ? getGetWebhooksIncomingUserUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.incoming.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksIncomingWebhookIdKey() {
  return ['webhooks', '/webhooks/incoming/:webhookId', 'POST'] as const
}

export function usePostWebhooksIncomingWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.incoming)[':webhookId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIncomingWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$post']> },
      ) => parseResponse(client.webhooks.incoming[':webhookId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIncomingWebhookIdKey() {
  return ['webhooks', '/webhooks/incoming/:webhookId', 'DELETE'] as const
}

export function useDeleteWebhooksIncomingWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIncomingWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$delete']> },
      ) => parseResponse(client.webhooks.incoming[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksPresenceKey() {
  return ['webhooks', '/webhooks/presence', 'POST'] as const
}

export function usePostWebhooksPresence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.presence.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.presence.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksPresenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.presence.$post> }) =>
        parseResponse(client.webhooks.presence.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksPresenceIdKey() {
  return ['webhooks', '/webhooks/presence/:id', 'PUT'] as const
}

export function usePutWebhooksPresenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks.presence)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks.presence)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksPresenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks.presence)[':id']['$put']> },
      ) => parseResponse(client.webhooks.presence[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
) {
  return ['webhooks', '/webhooks/:id', args] as const
}

export function useGetWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'PUT'] as const
}

export function usePutWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$put']> }) =>
        parseResponse(client.webhooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function useDeleteWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
