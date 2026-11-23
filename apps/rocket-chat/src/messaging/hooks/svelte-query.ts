import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1ChatDeleteMutationKey() {
  return ['api', '/api/v1/chat.delete', 'POST'] as const
}

export function getPostApiV1ChatDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.delete']['$post']>) {
      return parseResponse(client.api.v1['chat.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatReactMutationKey() {
  return ['api', '/api/v1/chat.react', 'POST'] as const
}

export function getPostApiV1ChatReactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.react']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.react']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatReactMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.react']['$post']>) {
      return parseResponse(client.api.v1['chat.react'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatReact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.react']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.react']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatReactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatUpdateMutationKey() {
  return ['api', '/api/v1/chat.update', 'POST'] as const
}

export function getPostApiV1ChatUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.update']['$post']>) {
      return parseResponse(client.api.v1['chat.update'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatReportMessageMutationKey() {
  return ['api', '/api/v1/chat.reportMessage', 'POST'] as const
}

export function getPostApiV1ChatReportMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.reportMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.reportMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatReportMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['chat.reportMessage']['$post']>,
    ) {
      return parseResponse(client.api.v1['chat.reportMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatReportMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.reportMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.reportMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatReportMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatFollowMessageMutationKey() {
  return ['api', '/api/v1/chat.followMessage', 'POST'] as const
}

export function getPostApiV1ChatFollowMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.followMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.followMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatFollowMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['chat.followMessage']['$post']>,
    ) {
      return parseResponse(client.api.v1['chat.followMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatFollowMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.followMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.followMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatFollowMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatUnfollowMessageMutationKey() {
  return ['api', '/api/v1/chat.unfollowMessage', 'POST'] as const
}

export function getPostApiV1ChatUnfollowMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.unfollowMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.unfollowMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatUnfollowMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['chat.unfollowMessage']['$post']>,
    ) {
      return parseResponse(client.api.v1['chat.unfollowMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatUnfollowMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.unfollowMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.unfollowMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatUnfollowMessageMutationOptions<
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

export function getApiV1ChatGetMessageQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getMessage', keyArgs] as const
}

export function getApiV1ChatGetMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetMessageQueryKey>
  >({
    queryKey: getApiV1ChatGetMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getMessage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChatGetMessageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ChatGetThreadsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getThreadsList', keyArgs] as const
}

export function getApiV1ChatGetThreadsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetThreadsListQueryKey>
  >({
    queryKey: getApiV1ChatGetThreadsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getThreadsList'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetThreadsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetThreadsListQueryKey>
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
      ...getApiV1ChatGetThreadsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetDeletedMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getDeletedMessages', keyArgs] as const
}

export function getApiV1ChatGetDeletedMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetDeletedMessagesQueryKey>
  >({
    queryKey: getApiV1ChatGetDeletedMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getDeletedMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetDeletedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetDeletedMessagesQueryKey>
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
      ...getApiV1ChatGetDeletedMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetDiscussionsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getDiscussions', keyArgs] as const
}

export function getApiV1ChatGetDiscussionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetDiscussionsQueryKey>
  >({
    queryKey: getApiV1ChatGetDiscussionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getDiscussions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetDiscussions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetDiscussionsQueryKey>
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
      ...getApiV1ChatGetDiscussionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetMentionedMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getMentionedMessages', keyArgs] as const
}

export function getApiV1ChatGetMentionedMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetMentionedMessagesQueryKey>
  >({
    queryKey: getApiV1ChatGetMentionedMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getMentionedMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetMentionedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetMentionedMessagesQueryKey>
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
      ...getApiV1ChatGetMentionedMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetMessageReadReceiptsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getMessageReadReceipts', keyArgs] as const
}

export function getApiV1ChatGetMessageReadReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetMessageReadReceiptsQueryKey>
  >({
    queryKey: getApiV1ChatGetMessageReadReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getMessageReadReceipts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetMessageReadReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetMessageReadReceiptsQueryKey>
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
      ...getApiV1ChatGetMessageReadReceiptsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetPinnedMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getPinnedMessages', keyArgs] as const
}

export function getApiV1ChatGetPinnedMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetPinnedMessagesQueryKey>
  >({
    queryKey: getApiV1ChatGetPinnedMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getPinnedMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetPinnedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetPinnedMessagesQueryKey>
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
      ...getApiV1ChatGetPinnedMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ChatGetMessagesMutationKey() {
  return ['api', '/api/v1/chat.getMessages', 'POST'] as const
}

export function getPostApiV1ChatGetMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getMessages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.getMessages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatGetMessagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.getMessages']['$post']>) {
      return parseResponse(client.api.v1['chat.getMessages'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatGetMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getMessages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.getMessages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatGetMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ChatGetStarredMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getStarredMessages', keyArgs] as const
}

export function getApiV1ChatGetStarredMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetStarredMessagesQueryKey>
  >({
    queryKey: getApiV1ChatGetStarredMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getStarredMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetStarredMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetStarredMessagesQueryKey>
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
      ...getApiV1ChatGetStarredMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetThreadMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getThreadMessages', keyArgs] as const
}

export function getApiV1ChatGetThreadMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetThreadMessagesQueryKey>
  >({
    queryKey: getApiV1ChatGetThreadMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getThreadMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetThreadMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetThreadMessagesQueryKey>
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
      ...getApiV1ChatGetThreadMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ChatReadThreadMutationKey() {
  return ['api', '/api/v1/chat.readThread', 'POST'] as const
}

export function getPostApiV1ChatReadThreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.readThread']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.readThread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatReadThreadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.readThread']['$post']>) {
      return parseResponse(client.api.v1['chat.readThread'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatReadThread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.readThread']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.readThread']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatReadThreadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ChatIgnoreUserQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.ignoreUser', keyArgs] as const
}

export function getApiV1ChatIgnoreUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatIgnoreUserQueryKey>
  >({
    queryKey: getApiV1ChatIgnoreUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.ignoreUser'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatIgnoreUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatIgnoreUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChatIgnoreUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ChatPinMessageMutationKey() {
  return ['api', '/api/v1/chat.pinMessage', 'POST'] as const
}

export function getPostApiV1ChatPinMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.pinMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.pinMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatPinMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.pinMessage']['$post']>) {
      return parseResponse(client.api.v1['chat.pinMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatPinMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.pinMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.pinMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatPinMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatUnPinMessageMutationKey() {
  return ['api', '/api/v1/chat.unPinMessage', 'POST'] as const
}

export function getPostApiV1ChatUnPinMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.unPinMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.unPinMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatUnPinMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.unPinMessage']['$post']>) {
      return parseResponse(client.api.v1['chat.unPinMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatUnPinMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.unPinMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.unPinMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatUnPinMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatPostMessageMutationKey() {
  return ['api', '/api/v1/chat.postMessage', 'POST'] as const
}

export function getPostApiV1ChatPostMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.postMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.postMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatPostMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.postMessage']['$post']>) {
      return parseResponse(client.api.v1['chat.postMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatPostMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.postMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.postMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatPostMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ChatSearchQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.search', keyArgs] as const
}

export function getApiV1ChatSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSearchQueryKey>
  >({
    queryKey: getApiV1ChatSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1ChatSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChatSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ChatSendMessageMutationKey() {
  return ['api', '/api/v1/chat.sendMessage', 'POST'] as const
}

export function getPostApiV1ChatSendMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.sendMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.sendMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatSendMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.sendMessage']['$post']>) {
      return parseResponse(client.api.v1['chat.sendMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.sendMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.sendMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatSendMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatStarMessageMutationKey() {
  return ['api', '/api/v1/chat.starMessage', 'POST'] as const
}

export function getPostApiV1ChatStarMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.starMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.starMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatStarMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['chat.starMessage']['$post']>) {
      return parseResponse(client.api.v1['chat.starMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatStarMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.starMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.starMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatStarMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1ChatUnStarMessageMutationKey() {
  return ['api', '/api/v1/chat.unStarMessage', 'POST'] as const
}

export function getPostApiV1ChatUnStarMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.unStarMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['chat.unStarMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChatUnStarMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['chat.unStarMessage']['$post']>,
    ) {
      return parseResponse(client.api.v1['chat.unStarMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1ChatUnStarMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.unStarMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['chat.unStarMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ChatUnStarMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1ChatSyncThreadsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.syncThreadsList', keyArgs] as const
}

export function getApiV1ChatSyncThreadsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSyncThreadsListQueryKey>
  >({
    queryKey: getApiV1ChatSyncThreadsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.syncThreadsList'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatSyncThreadsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatSyncThreadsListQueryKey>
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
      ...getApiV1ChatSyncThreadsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatSyncThreadMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.syncThreadMessages', keyArgs] as const
}

export function getApiV1ChatSyncThreadMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSyncThreadMessagesQueryKey>
  >({
    queryKey: getApiV1ChatSyncThreadMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.syncThreadMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatSyncThreadMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatSyncThreadMessagesQueryKey>
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
      ...getApiV1ChatSyncThreadMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatSyncMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.syncMessages', keyArgs] as const
}

export function getApiV1ChatSyncMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSyncMessagesQueryKey>
  >({
    queryKey: getApiV1ChatSyncMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.syncMessages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatSyncMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatSyncMessagesQueryKey>
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
      ...getApiV1ChatSyncMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1ChatGetURLPreviewQueryKey(
  args: InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/chat.getURLPreview', keyArgs] as const
}

export function getApiV1ChatGetURLPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetURLPreviewQueryKey>
  >({
    queryKey: getApiV1ChatGetURLPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['chat.getURLPreview'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ChatGetURLPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChatGetURLPreviewQueryKey>
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
      ...getApiV1ChatGetURLPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1ImBlockUserMutationKey() {
  return ['api', '/api/v1/im.blockUser', 'POST'] as const
}

export function getPostApiV1ImBlockUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['im.blockUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['im.blockUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImBlockUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['im.blockUser']['$post']>) {
      return parseResponse(client.api.v1['im.blockUser'].$post(args, options))
    },
  })
}

export function createPostApiV1ImBlockUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['im.blockUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['im.blockUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ImBlockUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1DmCloseMutationKey() {
  return ['api', '/api/v1/dm.close', 'POST'] as const
}

export function getPostApiV1DmCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dm.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DmCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dm.close']['$post']>) {
      return parseResponse(client.api.v1['dm.close'].$post(args, options))
    },
  })
}

export function createPostApiV1DmClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.close']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['dm.close']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1DmCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DmCountersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.counters', keyArgs] as const
}

export function getApiV1DmCountersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmCountersQueryKey>
  >({
    queryKey: getApiV1DmCountersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.counters'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1DmCounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmCountersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmCountersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1DmCreateMutationKey() {
  return ['api', '/api/v1/dm.create', 'POST'] as const
}

export function getPostApiV1DmCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dm.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DmCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dm.create']['$post']>) {
      return parseResponse(client.api.v1['dm.create'].$post(args, options))
    },
  })
}

export function createPostApiV1DmCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['dm.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1DmCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1DmDeleteMutationKey() {
  return ['api', '/api/v1/dm.delete', 'POST'] as const
}

export function getPostApiV1DmDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dm.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DmDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dm.delete']['$post']>) {
      return parseResponse(client.api.v1['dm.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1DmDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['dm.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1DmDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1DmFilesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.files', keyArgs] as const
}

export function getApiV1DmFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmFilesQueryKey>
  >({
    queryKey: getApiV1DmFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.files'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1DmFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DmHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.history', keyArgs] as const
}

export function getApiV1DmHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmHistoryQueryKey>
  >({
    queryKey: getApiV1DmHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.history'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1DmHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DmListEveryoneQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.list.everyone', keyArgs] as const
}

export function getApiV1DmListEveryoneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmListEveryoneQueryKey>
  >({
    queryKey: getApiV1DmListEveryoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.list.everyone'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DmListEveryone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmListEveryoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmListEveryoneQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DmListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.list', keyArgs] as const
}

export function getApiV1DmListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmListQueryKey>
  >({
    queryKey: getApiV1DmListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1DmList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DmMembersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.members', keyArgs] as const
}

export function getApiV1DmMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmMembersQueryKey>
  >({
    queryKey: getApiV1DmMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.members'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1DmMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DmMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.messages', keyArgs] as const
}

export function getApiV1DmMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmMessagesQueryKey>
  >({
    queryKey: getApiV1DmMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.messages'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1DmMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DmMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DmMessagesOthersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/dm.messages.others', keyArgs] as const
}

export function getApiV1DmMessagesOthersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmMessagesOthersQueryKey>
  >({
    queryKey: getApiV1DmMessagesOthersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['dm.messages.others'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DmMessagesOthers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DmMessagesOthersQueryKey>
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
      ...getApiV1DmMessagesOthersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1DmOpenMutationKey() {
  return ['api', '/api/v1/dm.open', 'POST'] as const
}

export function getPostApiV1DmOpenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dm.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DmOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dm.open']['$post']>) {
      return parseResponse(client.api.v1['dm.open'].$post(args, options))
    },
  })
}

export function createPostApiV1DmOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.open']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['dm.open']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1DmOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1DmSetTopicMutationKey() {
  return ['api', '/api/v1/dm.setTopic', 'POST'] as const
}

export function getPostApiV1DmSetTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.setTopic']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dm.setTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DmSetTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dm.setTopic']['$post']>) {
      return parseResponse(client.api.v1['dm.setTopic'].$post(args, options))
    },
  })
}

export function createPostApiV1DmSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['dm.setTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['dm.setTopic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1DmSetTopicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AutotranslateGetProviderUiMetadataQueryKey(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/autotranslate.getProviderUiMetadata', keyArgs] as const
}

export function getApiV1AutotranslateGetProviderUiMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotranslateGetProviderUiMetadataQueryKey>
  >({
    queryKey: getApiV1AutotranslateGetProviderUiMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['autotranslate.getProviderUiMetadata'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutotranslateGetProviderUiMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AutotranslateGetProviderUiMetadataQueryKey>
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
      ...getApiV1AutotranslateGetProviderUiMetadataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AutotranslateGetSupportedLanguagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/autotranslate.getSupportedLanguages', keyArgs] as const
}

export function getApiV1AutotranslateGetSupportedLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotranslateGetSupportedLanguagesQueryKey>
  >({
    queryKey: getApiV1AutotranslateGetSupportedLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['autotranslate.getSupportedLanguages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AutotranslateGetSupportedLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AutotranslateGetSupportedLanguagesQueryKey>
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
      ...getApiV1AutotranslateGetSupportedLanguagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1AutotranslateSaveSettingsMutationKey() {
  return ['api', '/api/v1/autotranslate.saveSettings', 'POST'] as const
}

export function getPostApiV1AutotranslateSaveSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AutotranslateSaveSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>,
    ) {
      return parseResponse(client.api.v1['autotranslate.saveSettings'].$post(args, options))
    },
  })
}

export function createPostApiV1AutotranslateSaveSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AutotranslateSaveSettingsMutationOptions<
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

export function getPostApiV1AutotranslateTranslateMessageMutationKey() {
  return ['api', '/api/v1/autotranslate.translateMessage', 'POST'] as const
}

export function getPostApiV1AutotranslateTranslateMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AutotranslateTranslateMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>,
    ) {
      return parseResponse(client.api.v1['autotranslate.translateMessage'].$post(args, options))
    },
  })
}

export function createPostApiV1AutotranslateTranslateMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AutotranslateTranslateMessageMutationOptions<
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
