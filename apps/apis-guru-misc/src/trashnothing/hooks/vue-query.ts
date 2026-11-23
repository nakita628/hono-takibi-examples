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

export function getConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.$get>>,
) {
  return ['conversations', '/conversations', toValue(args)] as const
}

export function getConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
          >,
          ReturnType<typeof getConversationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConversationsArchiveAllMutationKey() {
  return ['conversations', '/conversations/archive-all', 'PUT'] as const
}

export function getPutConversationsArchiveAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['archive-all']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)['archive-all']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsArchiveAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.conversations)['archive-all']['$put']>) {
      return parseResponse(client.conversations['archive-all'].$put(args, options))
    },
  })
}

export function usePutConversationsArchiveAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)['archive-all']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)['archive-all']['$put']>,
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
  const mutationDefaults = getPutConversationsArchiveAllMutationOptions<TError, TOnMutateResult>(
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

export function getPutConversationsMarkAllReadMutationKey() {
  return ['conversations', '/conversations/mark-all-read', 'PUT'] as const
}

export function getPutConversationsMarkAllReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['mark-all-read']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)['mark-all-read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsMarkAllReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)['mark-all-read']['$put']>,
    ) {
      return parseResponse(client.conversations['mark-all-read'].$put(args, options))
    },
  })
}

export function usePutConversationsMarkAllRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)['mark-all-read']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)['mark-all-read']['$put']>,
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
  const mutationDefaults = getPutConversationsMarkAllReadMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.search.$get>>,
) {
  return ['conversations', '/conversations/search', toValue(args)] as const
}

export function getConversationsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
            >
          >,
          ReturnType<typeof getConversationsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteConversationsConversationIdMutationKey() {
  return ['conversations', '/conversations/:conversation_id', 'DELETE'] as const
}

export function getDeleteConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsConversationId<
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
                Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsConversationIdMutationOptions<
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

export function getPutConversationsConversationIdArchiveMutationKey() {
  return ['conversations', '/conversations/:conversation_id/archive', 'PUT'] as const
}

export function getPutConversationsConversationIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['archive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['archive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversationIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['archive']['$put']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].archive.$put(args, options))
    },
  })
}

export function usePutConversationsConversationIdArchive<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['archive']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['archive']['$put']>,
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
  const mutationDefaults = getPutConversationsConversationIdArchiveMutationOptions<
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

export function getPutConversationsConversationIdBlockMutationKey() {
  return ['conversations', '/conversations/:conversation_id/block', 'PUT'] as const
}

export function getPutConversationsConversationIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['block']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['block']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversationIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['block']['$put']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].block.$put(args, options))
    },
  })
}

export function usePutConversationsConversationIdBlock<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['block']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['block']['$put']>,
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
  const mutationDefaults = getPutConversationsConversationIdBlockMutationOptions<
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

export function getPutConversationsConversationIdMarkReadMutationKey() {
  return ['conversations', '/conversations/:conversation_id/mark-read', 'PUT'] as const
}

export function getPutConversationsConversationIdMarkReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':conversation_id']['mark-read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversationIdMarkReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':conversation_id']['mark-read']['$put']
      >,
    ) {
      return parseResponse(
        client.conversations[':conversation_id']['mark-read'].$put(args, options),
      )
    },
  })
}

export function usePutConversationsConversationIdMarkRead<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['mark-read']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['mark-read']['$put']>,
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
  const mutationDefaults = getPutConversationsConversationIdMarkReadMutationOptions<
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

export function getConversationsConversationIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
  >,
) {
  return ['conversations', '/conversations/:conversation_id/messages', toValue(args)] as const
}

export function getConversationsConversationIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversationIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':conversation_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConversationIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversationIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':conversation_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConversationIdReplyMutationKey() {
  return ['conversations', '/conversations/:conversation_id/reply', 'POST'] as const
}

export function getPostConversationsConversationIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].reply.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdReply<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['reply']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
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
  const mutationDefaults = getPostConversationsConversationIdReplyMutationOptions<
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

export function getPostConversationsConversationIdReportMutationKey() {
  return ['conversations', '/conversations/:conversation_id/report', 'POST'] as const
}

export function getPostConversationsConversationIdReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['report']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConversationIdReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['report']['$post']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].report.$post(args, options))
    },
  })
}

export function usePostConversationsConversationIdReport<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['report']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['report']['$post']>,
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
  const mutationDefaults = getPostConversationsConversationIdReportMutationOptions<
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

export function getPutConversationsConversationIdUnarchiveMutationKey() {
  return ['conversations', '/conversations/:conversation_id/unarchive', 'PUT'] as const
}

export function getPutConversationsConversationIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':conversation_id']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversationIdUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':conversation_id']['unarchive']['$put']
      >,
    ) {
      return parseResponse(client.conversations[':conversation_id'].unarchive.$put(args, options))
    },
  })
}

export function usePutConversationsConversationIdUnarchive<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['unarchive']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['unarchive']['$put']>,
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
  const mutationDefaults = getPutConversationsConversationIdUnarchiveMutationOptions<
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

export function getPutConversationsConversationIdUnblockMutationKey() {
  return ['conversations', '/conversations/:conversation_id/unblock', 'PUT'] as const
}

export function getPutConversationsConversationIdUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConversationIdUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>,
    ) {
      return parseResponse(client.conversations[':conversation_id'].unblock.$put(args, options))
    },
  })
}

export function usePutConversationsConversationIdUnblock<
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
                  ReturnType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':conversation_id']['unblock']['$put']>,
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
  const mutationDefaults = getPutConversationsConversationIdUnblockMutationOptions<
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

export function getPostFeedbackMutationKey() {
  return ['feedback', '/feedback', 'POST'] as const
}

export function getPostFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>>,
    TError,
    InferRequestType<typeof client.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feedback.$post>) {
      return parseResponse(client.feedback.$post(args, options))
    },
  })
}

export function usePostFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.feedback.$post>,
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
  const mutationDefaults = getPostFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsMultipleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.multiple.$get>>,
) {
  return ['groups', '/groups/multiple', toValue(args)] as const
}

export function getGroupsMultipleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.multiple.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsMultipleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.multiple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsMultiple<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.multiple.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>
            >
          >,
          ReturnType<typeof getGroupsMultipleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsMultipleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsMultipleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.multiple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsSubscribeMutationKey() {
  return ['groups', '/groups/subscribe', 'POST'] as const
}

export function getPostGroupsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.subscribe.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.groups.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.subscribe.$post>) {
      return parseResponse(client.groups.subscribe.$post(args, options))
    },
  })
}

export function usePostGroupsSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.subscribe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.groups.subscribe.$post>,
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
  const mutationDefaults = getPostGroupsSubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
) {
  return ['groups', '/groups/:group_id', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsGroupIdAnswersMutationKey() {
  return ['groups', '/groups/:group_id/answers', 'POST'] as const
}

export function getPostGroupsGroupIdAnswersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['answers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['answers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdAnswersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['answers']['$post']>,
    ) {
      return parseResponse(client.groups[':group_id'].answers.$post(args, options))
    },
  })
}

export function usePostGroupsGroupIdAnswers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['answers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':group_id']['answers']['$post']>,
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
  const mutationDefaults = getPostGroupsGroupIdAnswersMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupsGroupIdContactMutationKey() {
  return ['groups', '/groups/:group_id/contact', 'POST'] as const
}

export function getPostGroupsGroupIdContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['contact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['contact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['contact']['$post']>,
    ) {
      return parseResponse(client.groups[':group_id'].contact.$post(args, options))
    },
  })
}

export function usePostGroupsGroupIdContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['contact']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':group_id']['contact']['$post']>,
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
  const mutationDefaults = getPostGroupsGroupIdContactMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupsGroupIdUnsubscribeMutationKey() {
  return ['groups', '/groups/:group_id/unsubscribe', 'POST'] as const
}

export function getPostGroupsGroupIdUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdUnsubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>,
    ) {
      return parseResponse(client.groups[':group_id'].unsubscribe.$post(args, options))
    },
  })
}

export function usePostGroupsGroupIdUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':group_id']['unsubscribe']['$post']>,
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
  const mutationDefaults = getPostGroupsGroupIdUnsubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getPostPhotosMutationKey() {
  return ['photos', '/photos', 'POST'] as const
}

export function getPostPhotosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.$post>>>>>,
    TError,
    InferRequestType<typeof client.photos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhotosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.photos.$post>) {
      return parseResponse(client.photos.$post(args, options))
    },
  })
}

export function usePostPhotos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.photos.$post>,
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
  const mutationDefaults = getPostPhotosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhotosMultipleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.photos.multiple.$get>>,
) {
  return ['photos', '/photos/multiple', toValue(args)] as const
}

export function getPhotosMultipleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.photos.multiple.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhotosMultipleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.photos.multiple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhotosMultiple<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.photos.multiple.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>
            >
          >,
          ReturnType<typeof getPhotosMultipleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhotosMultipleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhotosMultipleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.photos.multiple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePhotosPhotoIdMutationKey() {
  return ['photos', '/photos/:photo_id', 'DELETE'] as const
}

export function getDeletePhotosPhotoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.photos)[':photo_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.photos)[':photo_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhotosPhotoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.photos)[':photo_id']['$delete']>) {
      return parseResponse(client.photos[':photo_id'].$delete(args, options))
    },
  })
}

export function useDeletePhotosPhotoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.photos)[':photo_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.photos)[':photo_id']['$delete']>,
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
  const mutationDefaults = getDeletePhotosPhotoIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPhotosPhotoIdRotateMutationKey() {
  return ['photos', '/photos/:photo_id/rotate', 'POST'] as const
}

export function getPostPhotosPhotoIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.photos)[':photo_id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.photos)[':photo_id']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhotosPhotoIdRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.photos)[':photo_id']['rotate']['$post']>,
    ) {
      return parseResponse(client.photos[':photo_id'].rotate.$post(args, options))
    },
  })
}

export function usePostPhotosPhotoIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.photos)[':photo_id']['rotate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.photos)[':photo_id']['rotate']['$post']>,
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
  const mutationDefaults = getPostPhotosPhotoIdRotateMutationOptions<TError, TOnMutateResult>(
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

export function getPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.$get>>,
) {
  return ['posts', '/posts', toValue(args)] as const
}

export function getPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePosts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
          ReturnType<typeof getPostsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPostsMutationKey() {
  return ['posts', '/posts', 'POST'] as const
}

export function getPostPostsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$post>>>>>,
    TError,
    InferRequestType<typeof client.posts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.posts.$post>) {
      return parseResponse(client.posts.$post(args, options))
    },
  })
}

export function usePostPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$post>>>>>,
          TError,
          InferRequestType<typeof client.posts.$post>,
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
  const mutationDefaults = getPostPostsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.all.$get>>,
) {
  return ['posts', '/posts/all', toValue(args)] as const
}

export function getPostsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePostsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>
          >,
          ReturnType<typeof getPostsAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsAllChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.all.changes.$get>>,
) {
  return ['posts', '/posts/all/changes', toValue(args)] as const
}

export function getPostsAllChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.all.changes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsAllChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts.all.changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsAllChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.all.changes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>
            >
          >,
          ReturnType<typeof getPostsAllChangesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsAllChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsAllChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts.all.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsMultipleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.multiple.$get>>,
) {
  return ['posts', '/posts/multiple', toValue(args)] as const
}

export function getPostsMultipleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.multiple.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsMultipleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts.multiple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsMultiple<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.multiple.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
          >,
          ReturnType<typeof getPostsMultipleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsMultipleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsMultipleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts.multiple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.search.$get>>,
) {
  return ['posts', '/posts/search', toValue(args)] as const
}

export function getPostsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePostsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posts.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
          >,
          ReturnType<typeof getPostsSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostsPostIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':post_id']['$get']>>,
) {
  return ['posts', '/posts/:post_id', toValue(args)] as const
}

export function getPostsPostIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':post_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsPostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':post_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsPostId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':post_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
            >
          >,
          ReturnType<typeof getPostsPostIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsPostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsPostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':post_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPostsPostIdMutationKey() {
  return ['posts', '/posts/:post_id', 'PUT'] as const
}

export function getPutPostsPostIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsPostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['$put']>) {
      return parseResponse(client.posts[':post_id'].$put(args, options))
    },
  })
}

export function usePutPostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['$put']>,
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
  const mutationDefaults = getPutPostsPostIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePostsPostIdMutationKey() {
  return ['posts', '/posts/:post_id', 'DELETE'] as const
}

export function getDeletePostsPostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostsPostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['$delete']>) {
      return parseResponse(client.posts[':post_id'].$delete(args, options))
    },
  })
}

export function useDeletePostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['$delete']>,
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
  const mutationDefaults = getDeletePostsPostIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutPostsPostIdBookmarkMutationKey() {
  return ['posts', '/posts/:post_id/bookmark', 'PUT'] as const
}

export function getPutPostsPostIdBookmarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['bookmark']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsPostIdBookmarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$put']>,
    ) {
      return parseResponse(client.posts[':post_id'].bookmark.$put(args, options))
    },
  })
}

export function usePutPostsPostIdBookmark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['bookmark']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$put']>,
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
  const mutationDefaults = getPutPostsPostIdBookmarkMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePostsPostIdBookmarkMutationKey() {
  return ['posts', '/posts/:post_id/bookmark', 'DELETE'] as const
}

export function getDeletePostsPostIdBookmarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['bookmark']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostsPostIdBookmarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$delete']>,
    ) {
      return parseResponse(client.posts[':post_id'].bookmark.$delete(args, options))
    },
  })
}

export function useDeletePostsPostIdBookmark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['bookmark']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['bookmark']['$delete']>,
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
  const mutationDefaults = getDeletePostsPostIdBookmarkMutationOptions<TError, TOnMutateResult>(
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

export function getPostsPostIdDisplayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>>,
) {
  return ['posts', '/posts/:post_id/display', toValue(args)] as const
}

export function getPostsPostIdDisplayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsPostIdDisplayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':post_id'].display.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsPostIdDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostsPostIdDisplayQueryKey>
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
          Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsPostIdDisplayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsPostIdDisplayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':post_id'].display.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPostsPostIdPromiseMutationKey() {
  return ['posts', '/posts/:post_id/promise', 'PUT'] as const
}

export function getPutPostsPostIdPromiseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['promise']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['promise']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsPostIdPromiseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['promise']['$put']>) {
      return parseResponse(client.posts[':post_id'].promise.$put(args, options))
    },
  })
}

export function usePutPostsPostIdPromise<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['promise']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['promise']['$put']>,
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
  const mutationDefaults = getPutPostsPostIdPromiseMutationOptions<TError, TOnMutateResult>(
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

export function getPostPostsPostIdReplyMutationKey() {
  return ['posts', '/posts/:post_id/reply', 'POST'] as const
}

export function getPostPostsPostIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['reply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostsPostIdReplyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['reply']['$post']>) {
      return parseResponse(client.posts[':post_id'].reply.$post(args, options))
    },
  })
}

export function usePostPostsPostIdReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['reply']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['reply']['$post']>,
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
  const mutationDefaults = getPostPostsPostIdReplyMutationOptions<TError, TOnMutateResult>(
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

export function getPostPostsPostIdReportMutationKey() {
  return ['posts', '/posts/:post_id/report', 'POST'] as const
}

export function getPostPostsPostIdReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['report']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostsPostIdReportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['report']['$post']>) {
      return parseResponse(client.posts[':post_id'].report.$post(args, options))
    },
  })
}

export function usePostPostsPostIdReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['report']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['report']['$post']>,
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
  const mutationDefaults = getPostPostsPostIdReportMutationOptions<TError, TOnMutateResult>(
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

export function getPutPostsPostIdSatisfyMutationKey() {
  return ['posts', '/posts/:post_id/satisfy', 'PUT'] as const
}

export function getPutPostsPostIdSatisfyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['satisfy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['satisfy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsPostIdSatisfyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['satisfy']['$put']>) {
      return parseResponse(client.posts[':post_id'].satisfy.$put(args, options))
    },
  })
}

export function usePutPostsPostIdSatisfy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['satisfy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['satisfy']['$put']>,
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
  const mutationDefaults = getPutPostsPostIdSatisfyMutationOptions<TError, TOnMutateResult>(
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

export function getPostPostsPostIdShareMutationKey() {
  return ['posts', '/posts/:post_id/share', 'POST'] as const
}

export function getPostPostsPostIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['share']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['share']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostsPostIdShareMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':post_id']['share']['$post']>) {
      return parseResponse(client.posts[':post_id'].share.$post(args, options))
    },
  })
}

export function usePostPostsPostIdShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['share']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['share']['$post']>,
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
  const mutationDefaults = getPostPostsPostIdShareMutationOptions<TError, TOnMutateResult>(
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

export function getPutPostsPostIdUnpromiseMutationKey() {
  return ['posts', '/posts/:post_id/unpromise', 'PUT'] as const
}

export function getPutPostsPostIdUnpromiseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['unpromise']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['unpromise']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsPostIdUnpromiseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posts)[':post_id']['unpromise']['$put']>,
    ) {
      return parseResponse(client.posts[':post_id'].unpromise.$put(args, options))
    },
  })
}

export function usePutPostsPostIdUnpromise<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['unpromise']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['unpromise']['$put']>,
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
  const mutationDefaults = getPutPostsPostIdUnpromiseMutationOptions<TError, TOnMutateResult>(
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

export function getPutPostsPostIdWithdrawMutationKey() {
  return ['posts', '/posts/:post_id/withdraw', 'PUT'] as const
}

export function getPutPostsPostIdWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':post_id']['withdraw']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':post_id']['withdraw']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsPostIdWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.posts)[':post_id']['withdraw']['$put']>,
    ) {
      return parseResponse(client.posts[':post_id'].withdraw.$put(args, options))
    },
  })
}

export function usePutPostsPostIdWithdraw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':post_id']['withdraw']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['withdraw']['$put']>,
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
  const mutationDefaults = getPutPostsPostIdWithdrawMutationOptions<TError, TOnMutateResult>(
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

export function getStoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stories.$get>>,
) {
  return ['stories', '/stories', toValue(args)] as const
}

export function getStoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>
          >,
          ReturnType<typeof getStoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStoriesMutationKey() {
  return ['stories', '/stories', 'POST'] as const
}

export function getPostStoriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$post>>>>>,
    TError,
    InferRequestType<typeof client.stories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stories.$post>) {
      return parseResponse(client.stories.$post(args, options))
    },
  })
}

export function usePostStories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.stories.$post>,
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
  const mutationDefaults = getPostStoriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStoriesStoryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stories)[':story_id']['$get']>>,
) {
  return ['stories', '/stories/:story_id', toValue(args)] as const
}

export function getStoriesStoryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stories)[':story_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoriesStoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stories[':story_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoriesStoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stories)[':story_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoriesStoryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoriesStoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoriesStoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stories[':story_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStoriesStoryIdLikeMutationKey() {
  return ['stories', '/stories/:story_id/like', 'PUT'] as const
}

export function getPutStoriesStoryIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stories)[':story_id']['like']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stories)[':story_id']['like']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStoriesStoryIdLikeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stories)[':story_id']['like']['$put']>) {
      return parseResponse(client.stories[':story_id'].like.$put(args, options))
    },
  })
}

export function usePutStoriesStoryIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stories)[':story_id']['like']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stories)[':story_id']['like']['$put']>,
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
  const mutationDefaults = getPutStoriesStoryIdLikeMutationOptions<TError, TOnMutateResult>(
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

export function getPutStoriesStoryIdUnlikeMutationKey() {
  return ['stories', '/stories/:story_id/unlike', 'PUT'] as const
}

export function getPutStoriesStoryIdUnlikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stories)[':story_id']['unlike']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stories)[':story_id']['unlike']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStoriesStoryIdUnlikeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stories)[':story_id']['unlike']['$put']>,
    ) {
      return parseResponse(client.stories[':story_id'].unlike.$put(args, options))
    },
  })
}

export function usePutStoriesStoryIdUnlike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stories)[':story_id']['unlike']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stories)[':story_id']['unlike']['$put']>,
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
  const mutationDefaults = getPutStoriesStoryIdUnlikeMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoriesStoryIdViewedMutationKey() {
  return ['stories', '/stories/:story_id/viewed', 'POST'] as const
}

export function getPostStoriesStoryIdViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stories)[':story_id']['viewed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stories)[':story_id']['viewed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoriesStoryIdViewedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stories)[':story_id']['viewed']['$post']>,
    ) {
      return parseResponse(client.stories[':story_id'].viewed.$post(args, options))
    },
  })
}

export function usePostStoriesStoryIdViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stories)[':story_id']['viewed']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stories)[':story_id']['viewed']['$post']>,
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
  const mutationDefaults = getPostStoriesStoryIdViewedMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersMeMutationKey() {
  return ['users', '/users/me', 'PUT'] as const
}

export function getPutUsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$put>>>>>,
    TError,
    InferRequestType<typeof client.users.me.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.$put>) {
      return parseResponse(client.users.me.$put(args, options))
    },
  })
}

export function usePutUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.users.me.$put>,
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
  const mutationDefaults = getPutUsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersMeAlertsQueryKey() {
  return ['users', '/users/me/alerts'] as const
}

export function getUsersMeAlertsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeAlertsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.alerts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMeAlerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeAlertsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeAlertsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.alerts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeAlertsMutationKey() {
  return ['users', '/users/me/alerts', 'PUT'] as const
}

export function getPutUsersMeAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.alerts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.alerts.$put>) {
      return parseResponse(client.users.me.alerts.$put(args, options))
    },
  })
}

export function usePutUsersMeAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.alerts.$put>,
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
  const mutationDefaults = getPutUsersMeAlertsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersMeAlertsAlertIdMutationKey() {
  return ['users', '/users/me/alerts/:alert_id', 'DELETE'] as const
}

export function getDeleteUsersMeAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.alerts)[':alert_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.alerts)[':alert_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.alerts)[':alert_id']['$delete']>,
    ) {
      return parseResponse(client.users.me.alerts[':alert_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersMeAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me.alerts)[':alert_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.alerts)[':alert_id']['$delete']>,
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
  const mutationDefaults = getDeleteUsersMeAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMeEmailMutationKey() {
  return ['users', '/users/me/email', 'POST'] as const
}

export function getPostUsersMeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.email.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.email.$post>) {
      return parseResponse(client.users.me.email.$post(args, options))
    },
  })
}

export function usePostUsersMeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.email.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.email.$post>,
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
  const mutationDefaults = getPostUsersMeEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersMeEmailNotBouncingMutationKey() {
  return ['users', '/users/me/email/not-bouncing', 'PUT'] as const
}

export function getPutUsersMeEmailNotBouncingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.email)['not-bouncing']['$put']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeEmailNotBouncingMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.email['not-bouncing'].$put(undefined, options))
    },
  })
}

export function usePutUsersMeEmailNotBouncing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me.email)['not-bouncing']['$put']>>
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
  const mutationDefaults = getPutUsersMeEmailNotBouncingMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.groups.$get>>,
) {
  return ['users', '/users/me/groups', toValue(args)] as const
}

export function getUsersMeGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeLocationMutationKey() {
  return ['users', '/users/me/location', 'PUT'] as const
}

export function getPutUsersMeLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.location.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.me.location.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeLocationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.location.$put>) {
      return parseResponse(client.users.me.location.$put(args, options))
    },
  })
}

export function usePutUsersMeLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.location.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.location.$put>,
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
  const mutationDefaults = getPutUsersMeLocationMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeNoticesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.notices.$get>>,
) {
  return ['users', '/users/me/notices', toValue(args)] as const
}

export function getUsersMeNoticesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.notices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeNoticesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.notices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.notices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeNoticesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeNoticesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeNoticesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.notices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMePostLocationsQueryKey() {
  return ['users', '/users/me/post-locations'] as const
}

export function getUsersMePostLocationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMePostLocationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me['post-locations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMePostLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMePostLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMePostLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMePostLocationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me['post-locations'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMePostLocationsMutationKey() {
  return ['users', '/users/me/post-locations', 'PUT'] as const
}

export function getPutUsersMePostLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['post-locations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me)['post-locations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMePostLocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users.me)['post-locations']['$put']>) {
      return parseResponse(client.users.me['post-locations'].$put(args, options))
    },
  })
}

export function usePutUsersMePostLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['post-locations']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me)['post-locations']['$put']>,
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
  const mutationDefaults = getPutUsersMePostLocationsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMePostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.posts.$get>>,
) {
  return ['users', '/users/me/posts', toValue(args)] as const
}

export function getUsersMePostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.posts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMePostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMePosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.posts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
          >,
          ReturnType<typeof getUsersMePostsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMePostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMePostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMePostsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.posts.search.$get>>,
) {
  return ['users', '/users/me/posts/search', toValue(args)] as const
}

export function getUsersMePostsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.posts.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMePostsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.posts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMePostsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.posts.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
            >
          >,
          ReturnType<typeof getUsersMePostsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMePostsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMePostsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.posts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMeProfileImageMutationKey() {
  return ['users', '/users/me/profile-image', 'POST'] as const
}

export function getPostUsersMeProfileImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['profile-image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me)['profile-image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeProfileImageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users.me)['profile-image']['$post']>) {
      return parseResponse(client.users.me['profile-image'].$post(args, options))
    },
  })
}

export function usePostUsersMeProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['profile-image']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me)['profile-image']['$post']>,
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
  const mutationDefaults = getPostUsersMeProfileImageMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeProfileImagesQueryKey() {
  return ['users', '/users/me/profile-images'] as const
}

export function getUsersMeProfileImagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeProfileImagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me['profile-images'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeProfileImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeProfileImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeProfileImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeProfileImagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me['profile-images'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMeResendVerificationMutationKey() {
  return ['users', '/users/me/resend-verification', 'POST'] as const
}

export function getPostUsersMeResendVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['resend-verification']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeResendVerificationMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me['resend-verification'].$post(undefined, options))
    },
  })
}

export function usePostUsersMeResendVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['resend-verification']['$post']>>
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
  const mutationDefaults = getPostUsersMeResendVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMeResetPasswordMutationKey() {
  return ['users', '/users/me/reset-password', 'POST'] as const
}

export function getPostUsersMeResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me)['reset-password']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeResetPasswordMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me['reset-password'].$post(undefined, options))
    },
  })
}

export function usePostUsersMeResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me)['reset-password']['$post']>>
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
  const mutationDefaults = getPostUsersMeResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersReportMutationKey() {
  return ['users', '/users/report', 'POST'] as const
}

export function getPostUsersReportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.report.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.report.$post>) {
      return parseResponse(client.users.report.$post(args, options))
    },
  })
}

export function usePostUsersReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.report.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.report.$post>,
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
  const mutationDefaults = getPostUsersReportMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getUsersUserIdDisplayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['display']['$get']>>,
) {
  return ['users', '/users/:user_id/display', toValue(args)] as const
}

export function getUsersUserIdDisplayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['display']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdDisplayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].display.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['display']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdDisplayQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdDisplayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdDisplayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].display.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdFeedbackMutationKey() {
  return ['users', '/users/:user_id/feedback', 'POST'] as const
}

export function getPostUsersUserIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['feedback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['feedback']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].feedback.$post(args, options))
    },
  })
}

export function usePostUsersUserIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['feedback']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['feedback']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdFeedbackMutationKey() {
  return ['users', '/users/:user_id/feedback', 'DELETE'] as const
}

export function getDeleteUsersUserIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['feedback']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['feedback']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['feedback']['$delete']>,
    ) {
      return parseResponse(client.users[':user_id'].feedback.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['feedback']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['feedback']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>>,
) {
  return ['users', '/users/:user_id/posts', toValue(args)] as const
}

export function getUsersUserIdPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPostsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPostsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>
  >,
) {
  return ['users', '/users/:user_id/posts/search', toValue(args)] as const
}

export function getUsersUserIdPostsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPostsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].posts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPostsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPostsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPostsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPostsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].posts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdProfileImageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>
  >,
) {
  return ['users', '/users/:user_id/profile-image', toValue(args)] as const
}

export function getUsersUserIdProfileImageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdProfileImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id']['profile-image'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdProfileImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdProfileImageQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdProfileImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdProfileImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id']['profile-image'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
