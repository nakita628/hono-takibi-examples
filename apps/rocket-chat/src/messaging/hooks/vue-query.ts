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

export function usePostApiV1ChatDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatReact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.react']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['chat.react']['$post']>,
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
  const mutationDefaults = getPostApiV1ChatReactMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatUpdateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatReportMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatReportMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatFollowMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatFollowMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatUnfollowMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatUnfollowMessageMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChatGetMessageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getMessage', keyArgs] as const
}

export function getApiV1ChatGetMessageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getMessage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getMessage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetMessageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.getMessage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getMessage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetThreadsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getThreadsList', keyArgs] as const
}

export function getApiV1ChatGetThreadsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetThreadsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getThreadsList'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetThreadsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetThreadsListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadsList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetThreadsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetThreadsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getThreadsList'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetDeletedMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getDeletedMessages', keyArgs] as const
}

export function getApiV1ChatGetDeletedMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetDeletedMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getDeletedMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetDeletedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetDeletedMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getDeletedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetDeletedMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetDeletedMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getDeletedMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetDiscussionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getDiscussions', keyArgs] as const
}

export function getApiV1ChatGetDiscussionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetDiscussionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getDiscussions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetDiscussions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetDiscussionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getDiscussions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetDiscussionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetDiscussionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getDiscussions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetMentionedMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getMentionedMessages', keyArgs] as const
}

export function getApiV1ChatGetMentionedMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetMentionedMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getMentionedMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetMentionedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetMentionedMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getMentionedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetMentionedMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetMentionedMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getMentionedMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetMessageReadReceiptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getMessageReadReceipts', keyArgs] as const
}

export function getApiV1ChatGetMessageReadReceiptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetMessageReadReceiptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getMessageReadReceipts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetMessageReadReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetMessageReadReceiptsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getMessageReadReceipts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetMessageReadReceiptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetMessageReadReceiptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getMessageReadReceipts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetPinnedMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getPinnedMessages', keyArgs] as const
}

export function getApiV1ChatGetPinnedMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetPinnedMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getPinnedMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetPinnedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetPinnedMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getPinnedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetPinnedMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetPinnedMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getPinnedMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ChatGetMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatGetMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChatGetStarredMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getStarredMessages', keyArgs] as const
}

export function getApiV1ChatGetStarredMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetStarredMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getStarredMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetStarredMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetStarredMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getStarredMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetStarredMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetStarredMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getStarredMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetThreadMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getThreadMessages', keyArgs] as const
}

export function getApiV1ChatGetThreadMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetThreadMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getThreadMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetThreadMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetThreadMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getThreadMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetThreadMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetThreadMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getThreadMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ChatReadThread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatReadThreadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChatIgnoreUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.ignoreUser', keyArgs] as const
}

export function getApiV1ChatIgnoreUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatIgnoreUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.ignoreUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatIgnoreUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatIgnoreUserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.ignoreUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatIgnoreUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatIgnoreUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.ignoreUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ChatPinMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatPinMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatUnPinMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatUnPinMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatPostMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatPostMessageMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChatSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.search']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.search', keyArgs] as const
}

export function getApiV1ChatSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ChatSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatSendMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatStarMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatStarMessageMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1ChatUnStarMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChatUnStarMessageMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChatSyncThreadsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.syncThreadsList', keyArgs] as const
}

export function getApiV1ChatSyncThreadsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatSyncThreadsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.syncThreadsList'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatSyncThreadsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatSyncThreadsListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadsList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSyncThreadsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatSyncThreadsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.syncThreadsList'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatSyncThreadMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.syncThreadMessages', keyArgs] as const
}

export function getApiV1ChatSyncThreadMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatSyncThreadMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.syncThreadMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatSyncThreadMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatSyncThreadMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.syncThreadMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSyncThreadMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatSyncThreadMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.syncThreadMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatSyncMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.syncMessages', keyArgs] as const
}

export function getApiV1ChatSyncMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatSyncMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.syncMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatSyncMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.syncMessages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatSyncMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.syncMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatSyncMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatSyncMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.syncMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChatGetURLPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/chat.getURLPreview', keyArgs] as const
}

export function getApiV1ChatGetURLPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChatGetURLPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['chat.getURLPreview'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChatGetURLPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChatGetURLPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['chat.getURLPreview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChatGetURLPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChatGetURLPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['chat.getURLPreview'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ImBlockUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ImBlockUserMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1DmClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.close']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['dm.close']['$post']>,
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
  const mutationDefaults = getPostApiV1DmCloseMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DmCountersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.counters', keyArgs] as const
}

export function getApiV1DmCountersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmCountersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.counters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmCounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.counters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DmCountersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.counters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmCountersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmCountersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.counters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1DmCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['dm.create']['$post']>,
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
  const mutationDefaults = getPostApiV1DmCreateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1DmDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['dm.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1DmDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DmFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.files']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.files', keyArgs] as const
}

export function getApiV1DmFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1DmFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DmHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.history']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.history', keyArgs] as const
}

export function getApiV1DmHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DmHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DmListEveryoneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.list.everyone', keyArgs] as const
}

export function getApiV1DmListEveryoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmListEveryoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.list.everyone'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmListEveryone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.list.everyone']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DmListEveryoneQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['dm.list.everyone']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmListEveryoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmListEveryoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.list.everyone'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DmListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.list', keyArgs] as const
}

export function getApiV1DmListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1DmListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DmMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.members', keyArgs] as const
}

export function getApiV1DmMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DmMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DmMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.messages', keyArgs] as const
}

export function getApiV1DmMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.messages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DmMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.messages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DmMessagesOthersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/dm.messages.others', keyArgs] as const
}

export function getApiV1DmMessagesOthersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DmMessagesOthersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['dm.messages.others'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DmMessagesOthers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['dm.messages.others']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DmMessagesOthersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['dm.messages.others']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DmMessagesOthersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DmMessagesOthersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['dm.messages.others'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1DmOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['dm.open']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['dm.open']['$post']>,
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
  const mutationDefaults = getPostApiV1DmOpenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1DmSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DmSetTopicMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AutotranslateGetProviderUiMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/autotranslate.getProviderUiMetadata', keyArgs] as const
}

export function getApiV1AutotranslateGetProviderUiMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AutotranslateGetProviderUiMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['autotranslate.getProviderUiMetadata'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AutotranslateGetProviderUiMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AutotranslateGetProviderUiMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getProviderUiMetadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotranslateGetProviderUiMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AutotranslateGetProviderUiMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['autotranslate.getProviderUiMetadata'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AutotranslateGetSupportedLanguagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/autotranslate.getSupportedLanguages', keyArgs] as const
}

export function getApiV1AutotranslateGetSupportedLanguagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AutotranslateGetSupportedLanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['autotranslate.getSupportedLanguages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AutotranslateGetSupportedLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AutotranslateGetSupportedLanguagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['autotranslate.getSupportedLanguages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AutotranslateGetSupportedLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AutotranslateGetSupportedLanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['autotranslate.getSupportedLanguages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1AutotranslateSaveSettings<
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
                Awaited<ReturnType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['autotranslate.saveSettings']['$post']>,
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
  const mutationDefaults = getPostApiV1AutotranslateSaveSettingsMutationOptions<
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

export function usePostApiV1AutotranslateTranslateMessage<
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
                  ReturnType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['autotranslate.translateMessage']['$post']>,
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
  const mutationDefaults = getPostApiV1AutotranslateTranslateMessageMutationOptions<
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
