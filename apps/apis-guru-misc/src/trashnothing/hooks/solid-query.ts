import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getConversationsQueryKey(args: InferRequestType<typeof client.conversations.$get>) {
  return ['conversations', '/conversations', args] as const
}

export function getConversationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsQueryKey>
  >({
    queryKey: getConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.conversations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getConversationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConversationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutConversationsArchiveAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsArchiveAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutConversationsMarkAllRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsMarkAllReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsSearchQueryKey(
  args: InferRequestType<typeof client.conversations.search.$get>,
) {
  return ['conversations', '/conversations/search', args] as const
}

export function getConversationsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversations.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsSearchQueryKey>
  >({
    queryKey: getConversationsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConversationsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.conversations.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConversationsSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConversationsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConversationsConversationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutConversationsConversationIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsConversationIdArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutConversationsConversationIdBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsConversationIdBlockMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutConversationsConversationIdMarkRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsConversationIdMarkReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsConversationIdMessagesQueryKey(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>,
) {
  return ['conversations', '/conversations/:conversation_id/messages', args] as const
}

export function getConversationsConversationIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConversationIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':conversation_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':conversation_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.conversations)[':conversation_id']['messages']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getConversationsConversationIdMessagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsConversationIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostConversationsConversationIdReply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsConversationIdReplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsConversationIdReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsConversationIdReportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutConversationsConversationIdUnarchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsConversationIdUnarchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutConversationsConversationIdUnblock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsConversationIdUnblockMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.feedback.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGroupsMultipleQueryKey(
  args: InferRequestType<typeof client.groups.multiple.$get>,
) {
  return ['groups', '/groups/multiple', args] as const
}

export function getGroupsMultipleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.multiple.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsMultipleQueryKey>
  >({
    queryKey: getGroupsMultipleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.multiple.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupsMultiple<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.multiple.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.multiple.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsMultipleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsMultipleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostGroupsSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.subscribe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.groups.subscribe.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
) {
  return ['groups', '/groups/:group_id', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostGroupsGroupIdAnswers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdAnswersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGroupsGroupIdContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdContactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostGroupsGroupIdUnsubscribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdUnsubscribeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPhotos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.photos.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPhotosMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhotosMultipleQueryKey(
  args: InferRequestType<typeof client.photos.multiple.$get>,
) {
  return ['photos', '/photos/multiple', args] as const
}

export function getPhotosMultipleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.photos.multiple.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhotosMultipleQueryKey>
  >({
    queryKey: getPhotosMultipleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.photos.multiple.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhotosMultiple<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.photos.multiple.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.photos.multiple.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhotosMultipleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPhotosMultipleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeletePhotosPhotoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePhotosPhotoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPhotosPhotoIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPhotosPhotoIdRotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostsQueryKey(args: InferRequestType<typeof client.posts.$get>) {
  return ['posts', '/posts', args] as const
}

export function getPostsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsQueryKey>
  >({
    queryKey: getPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPosts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.posts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPostsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.$post>>>>>,
          TError,
          InferRequestType<typeof client.posts.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostsAllQueryKey(args: InferRequestType<typeof client.posts.all.$get>) {
  return ['posts', '/posts/all', args] as const
}

export function getPostsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posts.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsAllQueryKey>
  >({
    queryKey: getPostsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.posts.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPostsAllQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsAllChangesQueryKey(
  args: InferRequestType<typeof client.posts.all.changes.$get>,
) {
  return ['posts', '/posts/all/changes', args] as const
}

export function getPostsAllChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posts.all.changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsAllChangesQueryKey>
  >({
    queryKey: getPostsAllChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts.all.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostsAllChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.posts.all.changes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.posts.all.changes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostsAllChangesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsAllChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsMultipleQueryKey(
  args: InferRequestType<typeof client.posts.multiple.$get>,
) {
  return ['posts', '/posts/multiple', args] as const
}

export function getPostsMultipleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posts.multiple.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsMultipleQueryKey>
  >({
    queryKey: getPostsMultipleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts.multiple.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostsMultiple<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.posts.multiple.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.multiple.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPostsMultipleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsMultipleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsSearchQueryKey(args: InferRequestType<typeof client.posts.search.$get>) {
  return ['posts', '/posts/search', args] as const
}

export function getPostsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posts.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPostsSearchQueryKey>
  >({
    queryKey: getPostsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.posts.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posts.search.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPostsSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostsPostIdQueryKey(
  args: InferRequestType<(typeof client.posts)[':post_id']['$get']>,
) {
  return ['posts', '/posts/:post_id', args] as const
}

export function getPostsPostIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':post_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsPostIdQueryKey>
  >({
    queryKey: getPostsPostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':post_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPostsPostId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posts)[':post_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostsPostIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsPostIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutPostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':post_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':post_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPostsPostIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePostsPostIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutPostsPostIdBookmark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPostsPostIdBookmarkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePostsPostIdBookmark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePostsPostIdBookmarkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostsPostIdDisplayQueryKey(
  args: InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
) {
  return ['posts', '/posts/:post_id/display', args] as const
}

export function getPostsPostIdDisplayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPostsPostIdDisplayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':post_id'].display.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostsPostIdDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':post_id']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.posts)[':post_id']['display']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostsPostIdDisplayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutPostsPostIdPromise<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPostsPostIdPromiseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPostsPostIdReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostsPostIdReplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPostsPostIdReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostsPostIdReportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutPostsPostIdSatisfy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPostsPostIdSatisfyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPostsPostIdShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostsPostIdShareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutPostsPostIdUnpromise<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPostsPostIdUnpromiseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutPostsPostIdWithdraw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPostsPostIdWithdrawMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStoriesQueryKey(args: InferRequestType<typeof client.stories.$get>) {
  return ['stories', '/stories', args] as const
}

export function getStoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoriesQueryKey>
  >({
    queryKey: getStoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stories.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStoriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stories.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.stories.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStoriesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStoriesStoryIdQueryKey(
  args: InferRequestType<(typeof client.stories)[':story_id']['$get']>,
) {
  return ['stories', '/stories/:story_id', args] as const
}

export function getStoriesStoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stories)[':story_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoriesStoryIdQueryKey>
  >({
    queryKey: getStoriesStoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stories[':story_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStoriesStoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stories)[':story_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stories)[':story_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStoriesStoryIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStoriesStoryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutStoriesStoryIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStoriesStoryIdLikeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutStoriesStoryIdUnlike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStoriesStoryIdUnlikeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStoriesStoryIdViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStoriesStoryIdViewedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.users.me.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeAlertsQueryKey() {
  return ['users', '/users/me/alerts'] as const
}

export function getUsersMeAlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeAlertsQueryKey>
  >({
    queryKey: getUsersMeAlertsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.alerts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeAlerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeAlertsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeAlertsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutUsersMeAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.alerts.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.alerts.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersMeAlertsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersMeAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersMeAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersMeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.email.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.email.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutUsersMeEmailNotBouncing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersMeEmailNotBouncingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeGroupsQueryKey(
  args: InferRequestType<typeof client.users.me.groups.$get>,
) {
  return ['users', '/users/me/groups', args] as const
}

export function getUsersMeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeGroupsQueryKey>
  >({
    queryKey: getUsersMeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.groups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.groups.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUsersMeLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.location.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.location.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersMeLocationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeNoticesQueryKey(
  args: InferRequestType<typeof client.users.me.notices.$get>,
) {
  return ['users', '/users/me/notices', args] as const
}

export function getUsersMeNoticesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.notices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeNoticesQueryKey>
  >({
    queryKey: getUsersMeNoticesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.notices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.notices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.notices.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeNoticesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeNoticesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersMePostLocationsQueryKey() {
  return ['users', '/users/me/post-locations'] as const
}

export function getUsersMePostLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getUsersMePostLocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me['post-locations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersMePostLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.me)['post-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMePostLocationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutUsersMePostLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersMePostLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMePostsQueryKey(args: InferRequestType<typeof client.users.me.posts.$get>) {
  return ['users', '/users/me/posts', args] as const
}

export function getUsersMePostsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.posts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMePostsQueryKey>
  >({
    queryKey: getUsersMePostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.posts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMePosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.posts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMePostsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMePostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersMePostsSearchQueryKey(
  args: InferRequestType<typeof client.users.me.posts.search.$get>,
) {
  return ['users', '/users/me/posts/search', args] as const
}

export function getUsersMePostsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.me.posts.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMePostsSearchQueryKey>
  >({
    queryKey: getUsersMePostsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.posts.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMePostsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.posts.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.posts.search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMePostsSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMePostsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersMeProfileImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeProfileImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeProfileImagesQueryKey() {
  return ['users', '/users/me/profile-images'] as const
}

export function getUsersMeProfileImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getUsersMeProfileImagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me['profile-images'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersMeProfileImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.me)['profile-images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeProfileImagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersMeResendVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeResendVerificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersMeResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.report.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.report.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersReportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdDisplayQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
) {
  return ['users', '/users/:user_id/display', args] as const
}

export function getUsersUserIdDisplayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdDisplayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].display.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['display']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdDisplayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersUserIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdFeedbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdFeedbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdPostsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
) {
  return ['users', '/users/:user_id/posts', args] as const
}

export function getUsersUserIdPostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].posts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['posts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdPostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdPostsSearchQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
) {
  return ['users', '/users/:user_id/posts/search', args] as const
}

export function getUsersUserIdPostsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdPostsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].posts.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdPostsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['posts']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['posts']['search']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdPostsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdProfileImageQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
) {
  return ['users', '/users/:user_id/profile-image', args] as const
}

export function getUsersUserIdProfileImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdProfileImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id']['profile-image'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdProfileImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['profile-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['profile-image']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdProfileImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
