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

export function getFeedbackKey() {
  return ['feedback'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getPhotosKey() {
  return ['photos'] as const
}

export function getPostsKey() {
  return ['posts'] as const
}

export function getStoriesKey() {
  return ['stories'] as const
}

export function getUsersKey() {
  return ['users'] as const
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

export function getPutConversationsArchiveAllKey() {
  return ['conversations', '/conversations/archive-all', 'PUT'] as const
}

export function usePutConversationsArchiveAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['archive-all']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)['archive-all']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsArchiveAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations)['archive-all']['$put']> },
      ) => parseResponse(client.conversations['archive-all'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsMarkAllReadKey() {
  return ['conversations', '/conversations/mark-all-read', 'PUT'] as const
}

export function usePutConversationsMarkAllRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['mark-all-read']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)['mark-all-read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsMarkAllReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations)['mark-all-read']['$put']> },
      ) => parseResponse(client.conversations['mark-all-read'].$put(arg, clientOptions)),
      restMutationOptions,
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

export function getDeleteConversationsConversationIdKey() {
  return ['conversations', '/conversations/:conversation_id', 'DELETE'] as const
}

export function useDeleteConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']> },
      ) => parseResponse(client.conversations[':conversation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsConversationIdArchiveKey() {
  return ['conversations', '/conversations/:conversation_id/archive', 'PUT'] as const
}

export function usePutConversationsConversationIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['archive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversationIdArchiveKey()
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
            (typeof client.conversations)[':conversation_id']['archive']['$put']
          >
        },
      ) => parseResponse(client.conversations[':conversation_id'].archive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsConversationIdBlockKey() {
  return ['conversations', '/conversations/:conversation_id/block', 'PUT'] as const
}

export function usePutConversationsConversationIdBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['block']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['block']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversationIdBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['block']['$put']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].block.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsConversationIdMarkReadKey() {
  return ['conversations', '/conversations/:conversation_id/mark-read', 'PUT'] as const
}

export function usePutConversationsConversationIdMarkRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':conversation_id']['mark-read']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['mark-read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversationIdMarkReadKey()
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
            (typeof client.conversations)[':conversation_id']['mark-read']['$put']
          >
        },
      ) =>
        parseResponse(
          client.conversations[':conversation_id']['mark-read'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsConversationIdMessagesKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>,
) {
  return ['conversations', '/conversations/:conversation_id/messages', args] as const
}

export function useGetConversationsConversationIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
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
        ? getGetConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':conversation_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsConversationIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
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
        ? getGetConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations[':conversation_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsConversationIdReplyKey() {
  return ['conversations', '/conversations/:conversation_id/reply', 'POST'] as const
}

export function usePostConversationsConversationIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>
        },
      ) => parseResponse(client.conversations[':conversation_id'].reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsConversationIdReportKey() {
  return ['conversations', '/conversations/:conversation_id/report', 'POST'] as const
}

export function usePostConversationsConversationIdReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['report']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['report']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsConversationIdReportKey()
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
            (typeof client.conversations)[':conversation_id']['report']['$post']
          >
        },
      ) => parseResponse(client.conversations[':conversation_id'].report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsConversationIdUnarchiveKey() {
  return ['conversations', '/conversations/:conversation_id/unarchive', 'PUT'] as const
}

export function usePutConversationsConversationIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversations)[':conversation_id']['unarchive']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversationIdUnarchiveKey()
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
            (typeof client.conversations)[':conversation_id']['unarchive']['$put']
          >
        },
      ) =>
        parseResponse(client.conversations[':conversation_id'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsConversationIdUnblockKey() {
  return ['conversations', '/conversations/:conversation_id/unblock', 'PUT'] as const
}

export function usePutConversationsConversationIdUnblock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsConversationIdUnblockKey()
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
            (typeof client.conversations)[':conversation_id']['unblock']['$put']
          >
        },
      ) => parseResponse(client.conversations[':conversation_id'].unblock.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedbackKey() {
  return ['feedback', '/feedback', 'POST'] as const
}

export function usePostFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feedback.$post> }) =>
        parseResponse(client.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function useGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGroupsMultipleKey(
  args: InferRequestType<typeof client.groups.multiple.$get>,
) {
  return ['groups', '/groups/multiple', args] as const
}

export function useGetGroupsMultiple<TError = unknown>(
  args: InferRequestType<typeof client.groups.multiple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsMultipleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.multiple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsMultiple<TError = unknown>(
  args: InferRequestType<typeof client.groups.multiple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsMultipleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.multiple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsSubscribeKey() {
  return ['groups', '/groups/subscribe', 'POST'] as const
}

export function usePostGroupsSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.subscribe.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.groups.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.subscribe.$post> }) =>
        parseResponse(client.groups.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
) {
  return ['groups', '/groups/:group_id', args] as const
}

export function useGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdAnswersKey() {
  return ['groups', '/groups/:group_id/answers', 'POST'] as const
}

export function usePostGroupsGroupIdAnswers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['answers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['answers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdAnswersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':group_id']['answers']['$post']> },
      ) => parseResponse(client.groups[':group_id'].answers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsGroupIdContactKey() {
  return ['groups', '/groups/:group_id/contact', 'POST'] as const
}

export function usePostGroupsGroupIdContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['contact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['contact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':group_id']['contact']['$post']> },
      ) => parseResponse(client.groups[':group_id'].contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsGroupIdUnsubscribeKey() {
  return ['groups', '/groups/:group_id/unsubscribe', 'POST'] as const
}

export function usePostGroupsGroupIdUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':group_id']['unsubscribe']['$post']> },
      ) => parseResponse(client.groups[':group_id'].unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhotosKey() {
  return ['photos', '/photos', 'POST'] as const
}

export function usePostPhotos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.photos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhotosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.photos.$post> }) =>
        parseResponse(client.photos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhotosMultipleKey(
  args: InferRequestType<typeof client.photos.multiple.$get>,
) {
  return ['photos', '/photos/multiple', args] as const
}

export function useGetPhotosMultiple<TError = unknown>(
  args: InferRequestType<typeof client.photos.multiple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhotosMultipleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.photos.multiple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhotosMultiple<TError = unknown>(
  args: InferRequestType<typeof client.photos.multiple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhotosMultipleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.photos.multiple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePhotosPhotoIdKey() {
  return ['photos', '/photos/:photo_id', 'DELETE'] as const
}

export function useDeletePhotosPhotoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.photos)[':photo_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.photos)[':photo_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhotosPhotoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.photos)[':photo_id']['$delete']> },
      ) => parseResponse(client.photos[':photo_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhotosPhotoIdRotateKey() {
  return ['photos', '/photos/:photo_id/rotate', 'POST'] as const
}

export function usePostPhotosPhotoIdRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.photos)[':photo_id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.photos)[':photo_id']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhotosPhotoIdRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.photos)[':photo_id']['rotate']['$post']> },
      ) => parseResponse(client.photos[':photo_id'].rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostsKey(args: InferRequestType<typeof client.posts.$get>) {
  return ['posts', '/posts', args] as const
}

export function useGetPosts<TError = unknown>(
  args: InferRequestType<typeof client.posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.posts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPosts<TError = unknown>(
  args: InferRequestType<typeof client.posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.posts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPostsKey() {
  return ['posts', '/posts', 'POST'] as const
}

export function usePostPosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.posts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.posts.$post> }) =>
        parseResponse(client.posts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostsAllKey(args: InferRequestType<typeof client.posts.all.$get>) {
  return ['posts', '/posts/all', args] as const
}

export function useGetPostsAll<TError = unknown>(
  args: InferRequestType<typeof client.posts.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsAll<TError = unknown>(
  args: InferRequestType<typeof client.posts.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsAllChangesKey(
  args: InferRequestType<typeof client.posts.all.changes.$get>,
) {
  return ['posts', '/posts/all/changes', args] as const
}

export function useGetPostsAllChanges<TError = unknown>(
  args: InferRequestType<typeof client.posts.all.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
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
        ? getGetPostsAllChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.all.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsAllChanges<TError = unknown>(
  args: InferRequestType<typeof client.posts.all.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
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
        ? getGetPostsAllChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.all.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsMultipleKey(args: InferRequestType<typeof client.posts.multiple.$get>) {
  return ['posts', '/posts/multiple', args] as const
}

export function useGetPostsMultiple<TError = unknown>(
  args: InferRequestType<typeof client.posts.multiple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsMultipleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.multiple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsMultiple<TError = unknown>(
  args: InferRequestType<typeof client.posts.multiple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsMultipleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.multiple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsSearchKey(args: InferRequestType<typeof client.posts.search.$get>) {
  return ['posts', '/posts/search', args] as const
}

export function useGetPostsSearch<TError = unknown>(
  args: InferRequestType<typeof client.posts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsSearch<TError = unknown>(
  args: InferRequestType<typeof client.posts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostsPostIdKey(
  args: InferRequestType<(typeof client.posts)[':post_id']['$get']>,
) {
  return ['posts', '/posts/:post_id', args] as const
}

export function useGetPostsPostId<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':post_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPostsPostIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':post_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsPostId<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':post_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPostsPostIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':post_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPostsPostIdKey() {
  return ['posts', '/posts/:post_id', 'PUT'] as const
}

export function usePutPostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['$put']> },
      ) => parseResponse(client.posts[':post_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePostsPostIdKey() {
  return ['posts', '/posts/:post_id', 'DELETE'] as const
}

export function useDeletePostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['$delete']> },
      ) => parseResponse(client.posts[':post_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPostsPostIdBookmarkKey() {
  return ['posts', '/posts/:post_id/bookmark', 'PUT'] as const
}

export function usePutPostsPostIdBookmark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['bookmark']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsPostIdBookmarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$put']> },
      ) => parseResponse(client.posts[':post_id'].bookmark.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePostsPostIdBookmarkKey() {
  return ['posts', '/posts/:post_id/bookmark', 'DELETE'] as const
}

export function useDeletePostsPostIdBookmark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['bookmark']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostsPostIdBookmarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$delete']> },
      ) => parseResponse(client.posts[':post_id'].bookmark.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostsPostIdDisplayKey(
  args: InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
) {
  return ['posts', '/posts/:post_id/display', args] as const
}

export function useGetPostsPostIdDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
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
        ? getGetPostsPostIdDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':post_id'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsPostIdDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
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
        ? getGetPostsPostIdDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':post_id'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPostsPostIdPromiseKey() {
  return ['posts', '/posts/:post_id/promise', 'PUT'] as const
}

export function usePutPostsPostIdPromise<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['promise']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['promise']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsPostIdPromiseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['promise']['$put']> },
      ) => parseResponse(client.posts[':post_id'].promise.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostsPostIdReplyKey() {
  return ['posts', '/posts/:post_id/reply', 'POST'] as const
}

export function usePostPostsPostIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostsPostIdReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['reply']['$post']> },
      ) => parseResponse(client.posts[':post_id'].reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostsPostIdReportKey() {
  return ['posts', '/posts/:post_id/report', 'POST'] as const
}

export function usePostPostsPostIdReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['report']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['report']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostsPostIdReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['report']['$post']> },
      ) => parseResponse(client.posts[':post_id'].report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPostsPostIdSatisfyKey() {
  return ['posts', '/posts/:post_id/satisfy', 'PUT'] as const
}

export function usePutPostsPostIdSatisfy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['satisfy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['satisfy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsPostIdSatisfyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['satisfy']['$put']> },
      ) => parseResponse(client.posts[':post_id'].satisfy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostsPostIdShareKey() {
  return ['posts', '/posts/:post_id/share', 'POST'] as const
}

export function usePostPostsPostIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['share']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostsPostIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['share']['$post']> },
      ) => parseResponse(client.posts[':post_id'].share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPostsPostIdUnpromiseKey() {
  return ['posts', '/posts/:post_id/unpromise', 'PUT'] as const
}

export function usePutPostsPostIdUnpromise<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['unpromise']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['unpromise']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsPostIdUnpromiseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['unpromise']['$put']> },
      ) => parseResponse(client.posts[':post_id'].unpromise.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPostsPostIdWithdrawKey() {
  return ['posts', '/posts/:post_id/withdraw', 'PUT'] as const
}

export function usePutPostsPostIdWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['withdraw']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':post_id']['withdraw']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsPostIdWithdrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':post_id']['withdraw']['$put']> },
      ) => parseResponse(client.posts[':post_id'].withdraw.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoriesKey(args: InferRequestType<typeof client.stories.$get>) {
  return ['stories', '/stories', args] as const
}

export function useGetStories<TError = unknown>(
  args: InferRequestType<typeof client.stories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stories.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStories<TError = unknown>(
  args: InferRequestType<typeof client.stories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stories.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostStoriesKey() {
  return ['stories', '/stories', 'POST'] as const
}

export function usePostStories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.stories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stories.$post> }) =>
        parseResponse(client.stories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoriesStoryIdKey(
  args: InferRequestType<(typeof client.stories)[':story_id']['$get']>,
) {
  return ['stories', '/stories/:story_id', args] as const
}

export function useGetStoriesStoryId<TError = unknown>(
  args: InferRequestType<(typeof client.stories)[':story_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStoriesStoryIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stories[':story_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoriesStoryId<TError = unknown>(
  args: InferRequestType<(typeof client.stories)[':story_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStoriesStoryIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stories[':story_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStoriesStoryIdLikeKey() {
  return ['stories', '/stories/:story_id/like', 'PUT'] as const
}

export function usePutStoriesStoryIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stories)[':story_id']['like']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stories)[':story_id']['like']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStoriesStoryIdLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stories)[':story_id']['like']['$put']> },
      ) => parseResponse(client.stories[':story_id'].like.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutStoriesStoryIdUnlikeKey() {
  return ['stories', '/stories/:story_id/unlike', 'PUT'] as const
}

export function usePutStoriesStoryIdUnlike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stories)[':story_id']['unlike']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stories)[':story_id']['unlike']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStoriesStoryIdUnlikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stories)[':story_id']['unlike']['$put']> },
      ) => parseResponse(client.stories[':story_id'].unlike.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoriesStoryIdViewedKey() {
  return ['stories', '/stories/:story_id/viewed', 'POST'] as const
}

export function usePostStoriesStoryIdViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stories)[':story_id']['viewed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stories)[':story_id']['viewed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoriesStoryIdViewedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stories)[':story_id']['viewed']['$post']> },
      ) => parseResponse(client.stories[':story_id'].viewed.$post(arg, clientOptions)),
      restMutationOptions,
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

export function getPutUsersMeKey() {
  return ['users', '/users/me', 'PUT'] as const
}

export function usePutUsersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.me.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.$put> }) =>
        parseResponse(client.users.me.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeAlertsKey() {
  return ['users', '/users/me/alerts'] as const
}

export function useGetUsersMeAlerts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeAlertsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.alerts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeAlerts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeAlertsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.alerts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersMeAlertsKey() {
  return ['users', '/users/me/alerts', 'PUT'] as const
}

export function usePutUsersMeAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.alerts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersMeAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.alerts.$put> }) =>
        parseResponse(client.users.me.alerts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeAlertsAlertIdKey() {
  return ['users', '/users/me/alerts/:alert_id', 'DELETE'] as const
}

export function useDeleteUsersMeAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.alerts)[':alert_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.alerts)[':alert_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeAlertsAlertIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.me.alerts)[':alert_id']['$delete']> },
      ) => parseResponse(client.users.me.alerts[':alert_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeEmailKey() {
  return ['users', '/users/me/email', 'POST'] as const
}

export function usePostUsersMeEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.email.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.email.$post> }) =>
        parseResponse(client.users.me.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersMeEmailNotBouncingKey() {
  return ['users', '/users/me/email/not-bouncing', 'PUT'] as const
}

export function usePutUsersMeEmailNotBouncing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.email)['not-bouncing']['$put']>>
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
  const swrKey = customKey ?? getPutUsersMeEmailNotBouncingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.users.me.email['not-bouncing'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeGroupsKey(args: InferRequestType<typeof client.users.me.groups.$get>) {
  return ['users', '/users/me/groups', args] as const
}

export function useGetUsersMeGroups<TError = unknown>(
  args: InferRequestType<typeof client.users.me.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeGroups<TError = unknown>(
  args: InferRequestType<typeof client.users.me.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersMeLocationKey() {
  return ['users', '/users/me/location', 'PUT'] as const
}

export function usePutUsersMeLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.location.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.location.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersMeLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.me.location.$put> }) =>
        parseResponse(client.users.me.location.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeNoticesKey(
  args: InferRequestType<typeof client.users.me.notices.$get>,
) {
  return ['users', '/users/me/notices', args] as const
}

export function useGetUsersMeNotices<TError = unknown>(
  args: InferRequestType<typeof client.users.me.notices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeNoticesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.notices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeNotices<TError = unknown>(
  args: InferRequestType<typeof client.users.me.notices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeNoticesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.notices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMePostLocationsKey() {
  return ['users', '/users/me/post-locations'] as const
}

export function useGetUsersMePostLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
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
        ? getGetUsersMePostLocationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me['post-locations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMePostLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
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
        ? getGetUsersMePostLocationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me['post-locations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersMePostLocationsKey() {
  return ['users', '/users/me/post-locations', 'PUT'] as const
}

export function usePutUsersMePostLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['post-locations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me)['post-locations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersMePostLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.me)['post-locations']['$put']> },
      ) => parseResponse(client.users.me['post-locations'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMePostsKey(args: InferRequestType<typeof client.users.me.posts.$get>) {
  return ['users', '/users/me/posts', args] as const
}

export function useGetUsersMePosts<TError = unknown>(
  args: InferRequestType<typeof client.users.me.posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMePostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMePosts<TError = unknown>(
  args: InferRequestType<typeof client.users.me.posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMePostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMePostsSearchKey(
  args: InferRequestType<typeof client.users.me.posts.search.$get>,
) {
  return ['users', '/users/me/posts/search', args] as const
}

export function useGetUsersMePostsSearch<TError = unknown>(
  args: InferRequestType<typeof client.users.me.posts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
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
        ? getGetUsersMePostsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMePostsSearch<TError = unknown>(
  args: InferRequestType<typeof client.users.me.posts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
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
        ? getGetUsersMePostsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersMeProfileImageKey() {
  return ['users', '/users/me/profile-image', 'POST'] as const
}

export function usePostUsersMeProfileImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['profile-image']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me)['profile-image']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeProfileImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.me)['profile-image']['$post']> },
      ) => parseResponse(client.users.me['profile-image'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeProfileImagesKey() {
  return ['users', '/users/me/profile-images'] as const
}

export function useGetUsersMeProfileImages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
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
        ? getGetUsersMeProfileImagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me['profile-images'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeProfileImages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
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
        ? getGetUsersMeProfileImagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me['profile-images'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersMeResendVerificationKey() {
  return ['users', '/users/me/resend-verification', 'POST'] as const
}

export function usePostUsersMeResendVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['resend-verification']['$post']>>
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
  const swrKey = customKey ?? getPostUsersMeResendVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.users.me['resend-verification'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeResetPasswordKey() {
  return ['users', '/users/me/reset-password', 'POST'] as const
}

export function usePostUsersMeResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['reset-password']['$post']>>
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
  const swrKey = customKey ?? getPostUsersMeResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.users.me['reset-password'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersReportKey() {
  return ['users', '/users/report', 'POST'] as const
}

export function usePostUsersReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.report.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.report.$post> }) =>
        parseResponse(client.users.report.$post(arg, clientOptions)),
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

export function getGetUsersUserIdDisplayKey(
  args: InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
) {
  return ['users', '/users/:user_id/display', args] as const
}

export function useGetUsersUserIdDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
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
        ? getGetUsersUserIdDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
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
        ? getGetUsersUserIdDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdFeedbackKey() {
  return ['users', '/users/:user_id/feedback', 'POST'] as const
}

export function usePostUsersUserIdFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['feedback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['feedback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['feedback']['$post']> },
      ) => parseResponse(client.users[':user_id'].feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdFeedbackKey() {
  return ['users', '/users/:user_id/feedback', 'DELETE'] as const
}

export function useDeleteUsersUserIdFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['feedback']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['feedback']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':user_id']['feedback']['$delete']> },
      ) => parseResponse(client.users[':user_id'].feedback.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPostsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
) {
  return ['users', '/users/:user_id/posts', args] as const
}

export function useGetUsersUserIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
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
        ? getGetUsersUserIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
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
        ? getGetUsersUserIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPostsSearchKey(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
) {
  return ['users', '/users/:user_id/posts/search', args] as const
}

export function useGetUsersUserIdPostsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
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
        ? getGetUsersUserIdPostsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPostsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
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
        ? getGetUsersUserIdPostsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdProfileImageKey(
  args: InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
) {
  return ['users', '/users/:user_id/profile-image', args] as const
}

export function useGetUsersUserIdProfileImage<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
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
        ? getGetUsersUserIdProfileImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id']['profile-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdProfileImage<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
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
        ? getGetUsersUserIdProfileImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':user_id']['profile-image'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
