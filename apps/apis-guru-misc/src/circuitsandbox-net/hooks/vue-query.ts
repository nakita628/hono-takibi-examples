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

export function getConversationsByIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.byIds.$get>>,
) {
  return ['conversations', '/conversations/byIds', toValue(args)] as const
}

export function getConversationsByIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.byIds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsByIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.byIds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsByIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.byIds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
            >
          >,
          ReturnType<typeof getConversationsByIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsByIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsByIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.byIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsCommunityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.community.$get>>,
) {
  return ['conversations', '/conversations/community', toValue(args)] as const
}

export function getConversationsCommunityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.community.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsCommunityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.community.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsCommunity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.community.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
            >
          >,
          ReturnType<typeof getConversationsCommunityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCommunityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsCommunityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.community.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsCommunityMutationKey() {
  return ['conversations', '/conversations/community', 'POST'] as const
}

export function getPostConversationsCommunityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.community.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCommunityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.community.$post>) {
      return parseResponse(client.conversations.community.$post(args, options))
    },
  })
}

export function usePostConversationsCommunity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.community.$post>,
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
  const mutationDefaults = getPostConversationsCommunityMutationOptions<TError, TOnMutateResult>(
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

export function getPutConversationsCommunityConvIdMutationKey() {
  return ['conversations', '/conversations/community/:convId', 'PUT'] as const
}

export function getPutConversationsCommunityConvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.community)[':convId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.community)[':convId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsCommunityConvIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.community)[':convId']['$put']>,
    ) {
      return parseResponse(client.conversations.community[':convId'].$put(args, options))
    },
  })
}

export function usePutConversationsCommunityConvId<
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
                Awaited<ReturnType<(typeof client.conversations.community)[':convId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.community)[':convId']['$put']>,
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
  const mutationDefaults = getPutConversationsCommunityConvIdMutationOptions<
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

export function getPostConversationsCommunityConvIdJoinMutationKey() {
  return ['conversations', '/conversations/community/:convId/join', 'POST'] as const
}

export function getPostConversationsCommunityConvIdJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.community)[':convId']['join']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.community)[':convId']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCommunityConvIdJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.community)[':convId']['join']['$post']>,
    ) {
      return parseResponse(client.conversations.community[':convId'].join.$post(args, options))
    },
  })
}

export function usePostConversationsCommunityConvIdJoin<
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
                  ReturnType<(typeof client.conversations.community)[':convId']['join']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.community)[':convId']['join']['$post']>,
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
  const mutationDefaults = getPostConversationsCommunityConvIdJoinMutationOptions<
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

export function getPostConversationsCommunityConvIdParticipantsMutationKey() {
  return ['conversations', '/conversations/community/:convId/participants', 'POST'] as const
}

export function getPostConversationsCommunityConvIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations.community)[':convId']['participants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCommunityConvIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.community)[':convId']['participants']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations.community[':convId'].participants.$post(args, options),
      )
    },
  })
}

export function usePostConversationsCommunityConvIdParticipants<
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
                    (typeof client.conversations.community)[':convId']['participants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations.community)[':convId']['participants']['$post']
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
  const mutationDefaults = getPostConversationsCommunityConvIdParticipantsMutationOptions<
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

export function getDeleteConversationsCommunityConvIdParticipantsMutationKey() {
  return ['conversations', '/conversations/community/:convId/participants', 'DELETE'] as const
}

export function getDeleteConversationsCommunityConvIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations.community)[':convId']['participants']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsCommunityConvIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.community)[':convId']['participants']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations.community[':convId'].participants.$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsCommunityConvIdParticipants<
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
                    (typeof client.conversations.community)[':convId']['participants']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations.community)[':convId']['participants']['$delete']
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
  const mutationDefaults = getDeleteConversationsCommunityConvIdParticipantsMutationOptions<
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

export function getConversationsConversationdetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.conversationdetails.$get>>,
) {
  return ['conversations', '/conversations/conversationdetails', toValue(args)] as const
}

export function getConversationsConversationdetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.conversationdetails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConversationdetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.conversationdetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConversationdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.conversationdetails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
              >
            >
          >,
          ReturnType<typeof getConversationsConversationdetailsQueryKey>
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
          Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConversationdetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConversationdetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.conversationdetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsDirectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.direct.$get>>,
) {
  return ['conversations', '/conversations/direct', toValue(args)] as const
}

export function getConversationsDirectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.direct.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsDirectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.direct.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsDirect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.direct.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
            >
          >,
          ReturnType<typeof getConversationsDirectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsDirectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsDirectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.direct.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsDirectMutationKey() {
  return ['conversations', '/conversations/direct', 'POST'] as const
}

export function getPostConversationsDirectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.direct.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsDirectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.direct.$post>) {
      return parseResponse(client.conversations.direct.$post(args, options))
    },
  })
}

export function usePostConversationsDirect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.direct.$post>,
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
  const mutationDefaults = getPostConversationsDirectMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsFavoriteQueryKey() {
  return ['conversations', '/conversations/favorite'] as const
}

export function getConversationsFavoriteQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConversationsFavoriteQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.favorite.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsFavorite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
            >
          >,
          ReturnType<typeof getConversationsFavoriteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsFavoriteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConversationsFavoriteQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.favorite.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsGroupMutationKey() {
  return ['conversations', '/conversations/group', 'POST'] as const
}

export function getPostConversationsGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.group.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.conversations.group.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.group.$post>) {
      return parseResponse(client.conversations.group.$post(args, options))
    },
  })
}

export function usePostConversationsGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.group.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.group.$post>,
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
  const mutationDefaults = getPostConversationsGroupMutationOptions<TError, TOnMutateResult>(
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

export function getPutConversationsGroupConvIdMutationKey() {
  return ['conversations', '/conversations/group/:convId', 'PUT'] as const
}

export function getPutConversationsGroupConvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.group)[':convId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.group)[':convId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsGroupConvIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.group)[':convId']['$put']>,
    ) {
      return parseResponse(client.conversations.group[':convId'].$put(args, options))
    },
  })
}

export function usePutConversationsGroupConvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.group)[':convId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.group)[':convId']['$put']>,
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
  const mutationDefaults = getPutConversationsGroupConvIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsGroupConvIdParticipantsMutationKey() {
  return ['conversations', '/conversations/group/:convId/participants', 'POST'] as const
}

export function getPostConversationsGroupConvIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsGroupConvIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.group)[':convId']['participants']['$post']
      >,
    ) {
      return parseResponse(client.conversations.group[':convId'].participants.$post(args, options))
    },
  })
}

export function usePostConversationsGroupConvIdParticipants<
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
                    (typeof client.conversations.group)[':convId']['participants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$post']>,
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
  const mutationDefaults = getPostConversationsGroupConvIdParticipantsMutationOptions<
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

export function getDeleteConversationsGroupConvIdParticipantsMutationKey() {
  return ['conversations', '/conversations/group/:convId/participants', 'DELETE'] as const
}

export function getDeleteConversationsGroupConvIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsGroupConvIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations.group)[':convId']['participants']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations.group[':convId'].participants.$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsGroupConvIdParticipants<
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
                    (typeof client.conversations.group)[':convId']['participants']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations.group)[':convId']['participants']['$delete']
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
  const mutationDefaults = getDeleteConversationsGroupConvIdParticipantsMutationOptions<
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

export function getConversationsLabelLabelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>>,
) {
  return ['conversations', '/conversations/label/:labelId', toValue(args)] as const
}

export function getConversationsLabelLabelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsLabelLabelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.label[':labelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsLabelLabelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsLabelLabelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsLabelLabelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsLabelLabelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.label[':labelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsMessagesFlagQueryKey() {
  return ['conversations', '/conversations/messages/flag'] as const
}

export function getConversationsMessagesFlagQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConversationsMessagesFlagQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.messages.flag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsMessagesFlag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
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
                Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>
              >
            >
          >,
          ReturnType<typeof getConversationsMessagesFlagQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsMessagesFlagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConversationsMessagesFlagQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.messages.flag.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsMessagesItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>
  >,
) {
  return ['conversations', '/conversations/messages/:itemId', toValue(args)] as const
}

export function getConversationsMessagesItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsMessagesItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.messages[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsMessagesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsMessagesItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsMessagesItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsMessagesItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.messages[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsModerateConvIdMutationKey() {
  return ['conversations', '/conversations/moderate/:convId', 'POST'] as const
}

export function getPostConversationsModerateConvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.moderate)[':convId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.moderate)[':convId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsModerateConvIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.moderate)[':convId']['$post']>,
    ) {
      return parseResponse(client.conversations.moderate[':convId'].$post(args, options))
    },
  })
}

export function usePostConversationsModerateConvId<
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
                Awaited<ReturnType<(typeof client.conversations.moderate)[':convId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.moderate)[':convId']['$post']>,
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
  const mutationDefaults = getPostConversationsModerateConvIdMutationOptions<
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

export function getConversationsResolveinvitetokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.resolveinvitetoken.$get>>,
) {
  return ['conversations', '/conversations/resolveinvitetoken', toValue(args)] as const
}

export function getConversationsResolveinvitetokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.resolveinvitetoken.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsResolveinvitetokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.resolveinvitetoken.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsResolveinvitetoken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.resolveinvitetoken.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
              >
            >
          >,
          ReturnType<typeof getConversationsResolveinvitetokenQueryKey>
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
          Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsResolveinvitetokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsResolveinvitetokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.resolveinvitetoken.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getPostConversationsUnmoderateConvIdMutationKey() {
  return ['conversations', '/conversations/unmoderate/:convId', 'POST'] as const
}

export function getPostConversationsUnmoderateConvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.unmoderate)[':convId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.unmoderate)[':convId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsUnmoderateConvIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.unmoderate)[':convId']['$post']>,
    ) {
      return parseResponse(client.conversations.unmoderate[':convId'].$post(args, options))
    },
  })
}

export function usePostConversationsUnmoderateConvId<
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
                Awaited<ReturnType<(typeof client.conversations.unmoderate)[':convId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.unmoderate)[':convId']['$post']>,
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
  const mutationDefaults = getPostConversationsUnmoderateConvIdMutationOptions<
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

export function getConversationsConvIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations)[':convId']['$get']>>,
) {
  return ['conversations', '/conversations/:convId', toValue(args)] as const
}

export function getConversationsConvIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations)[':convId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':convId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations)[':convId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsConvIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':convId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConvIdArchiveMutationKey() {
  return ['conversations', '/conversations/:convId/archive', 'POST'] as const
}

export function getPostConversationsConvIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['archive']['$post']>,
    ) {
      return parseResponse(client.conversations[':convId'].archive.$post(args, options))
    },
  })
}

export function usePostConversationsConvIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['archive']['$post']>,
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
  const mutationDefaults = getPostConversationsConvIdArchiveMutationOptions<
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

export function getDeleteConversationsConvIdArchiveMutationKey() {
  return ['conversations', '/conversations/:convId/archive', 'DELETE'] as const
}

export function getDeleteConversationsConvIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['archive']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['archive']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['archive']['$delete']>,
    ) {
      return parseResponse(client.conversations[':convId'].archive.$delete(args, options))
    },
  })
}

export function useDeleteConversationsConvIdArchive<
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
                Awaited<ReturnType<(typeof client.conversations)[':convId']['archive']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['archive']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsConvIdArchiveMutationOptions<
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

export function getConversationsConvIdConversationdetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
  >,
) {
  return ['conversations', '/conversations/:convId/conversationdetails', toValue(args)] as const
}

export function getConversationsConvIdConversationdetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConvIdConversationdetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':convId'].conversationdetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConvIdConversationdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
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
                    (typeof client.conversations)[':convId']['conversationdetails']['$get']
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
                    (typeof client.conversations)[':convId']['conversationdetails']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConvIdConversationdetailsQueryKey>
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
            ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdConversationdetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConvIdConversationdetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':convId'].conversationdetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConvIdFavoriteMutationKey() {
  return ['conversations', '/conversations/:convId/favorite', 'POST'] as const
}

export function getPostConversationsConvIdFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['favorite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['favorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['favorite']['$post']>,
    ) {
      return parseResponse(client.conversations[':convId'].favorite.$post(args, options))
    },
  })
}

export function usePostConversationsConvIdFavorite<
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
                Awaited<ReturnType<(typeof client.conversations)[':convId']['favorite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['favorite']['$post']>,
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
  const mutationDefaults = getPostConversationsConvIdFavoriteMutationOptions<
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

export function getDeleteConversationsConvIdFavoriteMutationKey() {
  return ['conversations', '/conversations/:convId/favorite', 'DELETE'] as const
}

export function getDeleteConversationsConvIdFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['favorite']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['favorite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['favorite']['$delete']>,
    ) {
      return parseResponse(client.conversations[':convId'].favorite.$delete(args, options))
    },
  })
}

export function useDeleteConversationsConvIdFavorite<
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
                Awaited<ReturnType<(typeof client.conversations)[':convId']['favorite']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['favorite']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsConvIdFavoriteMutationOptions<
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

export function getConversationsConvIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>
  >,
) {
  return ['conversations', '/conversations/:convId/items', toValue(args)] as const
}

export function getConversationsConvIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConvIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':convId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConvIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsConvIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConvIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':convId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConvIdLabelMutationKey() {
  return ['conversations', '/conversations/:convId/label', 'POST'] as const
}

export function getPostConversationsConvIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['label']['$post']>,
    ) {
      return parseResponse(client.conversations[':convId'].label.$post(args, options))
    },
  })
}

export function usePostConversationsConvIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['label']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['label']['$post']>,
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
  const mutationDefaults = getPostConversationsConvIdLabelMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConversationsConvIdLabelLabelIdMutationKey() {
  return ['conversations', '/conversations/:convId/label/:labelId', 'DELETE'] as const
}

export function getDeleteConversationsConvIdLabelLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':convId']['label'][':labelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdLabelLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['label'][':labelId']['$delete']
      >,
    ) {
      return parseResponse(client.conversations[':convId'].label[':labelId'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsConvIdLabelLabelId<
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
                    (typeof client.conversations)[':convId']['label'][':labelId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['label'][':labelId']['$delete']
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
  const mutationDefaults = getDeleteConversationsConvIdLabelLabelIdMutationOptions<
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

export function getPostConversationsConvIdMessagesMutationKey() {
  return ['conversations', '/conversations/:convId/messages', 'POST'] as const
}

export function getPostConversationsConvIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['messages']['$post']>,
    ) {
      return parseResponse(client.conversations[':convId'].messages.$post(args, options))
    },
  })
}

export function usePostConversationsConvIdMessages<
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
                Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['messages']['$post']>,
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
  const mutationDefaults = getPostConversationsConvIdMessagesMutationOptions<
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

export function getConversationsConvIdMessagesFlagQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
  >,
) {
  return ['conversations', '/conversations/:convId/messages/flag', toValue(args)] as const
}

export function getConversationsConvIdMessagesFlagQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConvIdMessagesFlagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':convId'].messages.flag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConvIdMessagesFlag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
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
                  ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConvIdMessagesFlagQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdMessagesFlagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConvIdMessagesFlagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':convId'].messages.flag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConversationsConvIdMessagesItemIdMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId', 'PUT'] as const
}

export function getPutConversationsConvIdMessagesItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsConvIdMessagesItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['$put']
      >,
    ) {
      return parseResponse(client.conversations[':convId'].messages[':itemId'].$put(args, options))
    },
  })
}

export function usePutConversationsConvIdMessagesItemId<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$put']>,
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
  const mutationDefaults = getPutConversationsConvIdMessagesItemIdMutationOptions<
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

export function getPostConversationsConvIdMessagesItemIdMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId', 'POST'] as const
}

export function getPostConversationsConvIdMessagesItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdMessagesItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['$post']
      >,
    ) {
      return parseResponse(client.conversations[':convId'].messages[':itemId'].$post(args, options))
    },
  })
}

export function usePostConversationsConvIdMessagesItemId<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['messages'][':itemId']['$post']
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
  const mutationDefaults = getPostConversationsConvIdMessagesItemIdMutationOptions<
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

export function getDeleteConversationsConvIdMessagesItemIdMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId', 'DELETE'] as const
}

export function getDeleteConversationsConvIdMessagesItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdMessagesItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations[':convId'].messages[':itemId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConvIdMessagesItemId<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['messages'][':itemId']['$delete']
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
  const mutationDefaults = getDeleteConversationsConvIdMessagesItemIdMutationOptions<
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

export function getPostConversationsConvIdMessagesItemIdFlagMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/flag', 'POST'] as const
}

export function getPostConversationsConvIdMessagesItemIdFlagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdMessagesItemIdFlagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations[':convId'].messages[':itemId'].flag.$post(args, options),
      )
    },
  })
}

export function usePostConversationsConvIdMessagesItemIdFlag<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
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
  const mutationDefaults = getPostConversationsConvIdMessagesItemIdFlagMutationOptions<
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

export function getDeleteConversationsConvIdMessagesItemIdFlagMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/flag', 'DELETE'] as const
}

export function getDeleteConversationsConvIdMessagesItemIdFlagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdMessagesItemIdFlagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations[':convId'].messages[':itemId'].flag.$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConvIdMessagesItemIdFlag<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
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
  const mutationDefaults = getDeleteConversationsConvIdMessagesItemIdFlagMutationOptions<
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

export function getPostConversationsConvIdMessagesItemIdLikeMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/like', 'POST'] as const
}

export function getPostConversationsConvIdMessagesItemIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdMessagesItemIdLikeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations[':convId'].messages[':itemId'].like.$post(args, options),
      )
    },
  })
}

export function usePostConversationsConvIdMessagesItemIdLike<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
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
  const mutationDefaults = getPostConversationsConvIdMessagesItemIdLikeMutationOptions<
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

export function getDeleteConversationsConvIdMessagesItemIdLikeMutationKey() {
  return ['conversations', '/conversations/:convId/messages/:itemId/like', 'DELETE'] as const
}

export function getDeleteConversationsConvIdMessagesItemIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdMessagesItemIdLikeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations[':convId'].messages[':itemId'].like.$delete(args, options),
      )
    },
  })
}

export function useDeleteConversationsConvIdMessagesItemIdLike<
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
                    (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
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
  const mutationDefaults = getDeleteConversationsConvIdMessagesItemIdLikeMutationOptions<
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

export function getPostConversationsConvIdModeratorsMutationKey() {
  return ['conversations', '/conversations/:convId/moderators', 'POST'] as const
}

export function getPostConversationsConvIdModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['moderators']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['moderators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['moderators']['$post']>,
    ) {
      return parseResponse(client.conversations[':convId'].moderators.$post(args, options))
    },
  })
}

export function usePostConversationsConvIdModerators<
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
                Awaited<ReturnType<(typeof client.conversations)[':convId']['moderators']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['moderators']['$post']>,
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
  const mutationDefaults = getPostConversationsConvIdModeratorsMutationOptions<
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

export function getDeleteConversationsConvIdModeratorsMutationKey() {
  return ['conversations', '/conversations/:convId/moderators', 'DELETE'] as const
}

export function getDeleteConversationsConvIdModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['moderators']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['moderators']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['moderators']['$delete']>,
    ) {
      return parseResponse(client.conversations[':convId'].moderators.$delete(args, options))
    },
  })
}

export function useDeleteConversationsConvIdModerators<
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
                  ReturnType<(typeof client.conversations)[':convId']['moderators']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['moderators']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsConvIdModeratorsMutationOptions<
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

export function getConversationsConvIdParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>
  >,
) {
  return ['conversations', '/conversations/:convId/participants', toValue(args)] as const
}

export function getConversationsConvIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConvIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':convId'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConvIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>
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
                  ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversationsConvIdParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConvIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':convId'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsConvIdPinsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>
  >,
) {
  return ['conversations', '/conversations/:convId/pins', toValue(args)] as const
}

export function getConversationsConvIdPinsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsConvIdPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':convId'].pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsConvIdPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsConvIdPinsQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsConvIdPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':convId'].pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsConvIdPinsItemIdMutationKey() {
  return ['conversations', '/conversations/:convId/pins/:itemId', 'POST'] as const
}

export function getPostConversationsConvIdPinsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsConvIdPinsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>,
    ) {
      return parseResponse(client.conversations[':convId'].pins[':itemId'].$post(args, options))
    },
  })
}

export function usePostConversationsConvIdPinsItemId<
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
                  ReturnType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>,
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
  const mutationDefaults = getPostConversationsConvIdPinsItemIdMutationOptions<
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

export function getDeleteConversationsConvIdPinsItemIdMutationKey() {
  return ['conversations', '/conversations/:convId/pins/:itemId', 'DELETE'] as const
}

export function getDeleteConversationsConvIdPinsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsConvIdPinsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)[':convId']['pins'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(client.conversations[':convId'].pins[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsConvIdPinsItemId<
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
                  ReturnType<(typeof client.conversations)[':convId']['pins'][':itemId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsConvIdPinsItemIdMutationOptions<
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

export function getRtcSessionsQueryKey() {
  return ['rtc', '/rtc/sessions'] as const
}

export function getRtcSessionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRtcSessionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rtc.sessions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRtcSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
          >,
          ReturnType<typeof getRtcSessionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRtcSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRtcSessionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rtc.sessions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.$get>>,
) {
  return ['spaces', '/spaces', toValue(args)] as const
}

export function getSpacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
          ReturnType<typeof getSpacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpacesCreateMutationKey() {
  return ['spaces', '/spaces/create', 'POST'] as const
}

export function getPostSpacesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.spaces.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spaces.create.$post>) {
      return parseResponse(client.spaces.create.$post(args, options))
    },
  })
}

export function usePostSpacesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.spaces.create.$post>,
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
  const mutationDefaults = getPostSpacesCreateMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesDirectoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.directory.$get>>,
) {
  return ['spaces', '/spaces/directory', toValue(args)] as const
}

export function getSpacesDirectoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.directory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesDirectoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.directory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesDirectory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.directory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>
            >
          >,
          ReturnType<typeof getSpacesDirectoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesDirectoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesDirectoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.directory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesExistsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces.exists)[':name']['$get']>>,
) {
  return ['spaces', '/spaces/exists/:name', toValue(args)] as const
}

export function getSpacesExistsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces.exists)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesExistsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.exists[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesExistsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces.exists)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesExistsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesExistsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesExistsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.exists[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpacesFlagItemIdMutationKey() {
  return ['spaces', '/spaces/flag/:itemId', 'PUT'] as const
}

export function getPutSpacesFlagItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.flag)[':itemId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.flag)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesFlagItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces.flag)[':itemId']['$put']>) {
      return parseResponse(client.spaces.flag[':itemId'].$put(args, options))
    },
  })
}

export function usePutSpacesFlagItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.flag)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.flag)[':itemId']['$put']>,
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
  const mutationDefaults = getPutSpacesFlagItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesFlaggedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.flagged.$get>>,
) {
  return ['spaces', '/spaces/flagged', toValue(args)] as const
}

export function getSpacesFlaggedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.flagged.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesFlaggedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.flagged.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesFlagged<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.flagged.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
          >,
          ReturnType<typeof getSpacesFlaggedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesFlaggedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesFlaggedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.flagged.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.ids.$get>>,
) {
  return ['spaces', '/spaces/ids', toValue(args)] as const
}

export function getSpacesIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpacesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
          >,
          ReturnType<typeof getSpacesIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSpacesItemItemIdMutationKey() {
  return ['spaces', '/spaces/item/:itemId', 'DELETE'] as const
}

export function getDeleteSpacesItemItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.item)[':itemId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.item)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesItemItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces.item)[':itemId']['$delete']>) {
      return parseResponse(client.spaces.item[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteSpacesItemItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.item)[':itemId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.item)[':itemId']['$delete']>,
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
  const mutationDefaults = getDeleteSpacesItemItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSpacesLikeItemIdMutationKey() {
  return ['spaces', '/spaces/like/:itemId', 'PUT'] as const
}

export function getPutSpacesLikeItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.like)[':itemId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.like)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesLikeItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces.like)[':itemId']['$put']>) {
      return parseResponse(client.spaces.like[':itemId'].$put(args, options))
    },
  })
}

export function usePutSpacesLikeItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.like)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.like)[':itemId']['$put']>,
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
  const mutationDefaults = getPutSpacesLikeItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesLikesItemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>>,
) {
  return ['spaces', '/spaces/likes/:itemId', toValue(args)] as const
}

export function getSpacesLikesItemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesLikesItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.likes[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesLikesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesLikesItemIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesLikesItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesLikesItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.likes[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpacesSearchAddRecentMutationKey() {
  return ['spaces', '/spaces/search/add/recent', 'PUT'] as const
}

export function getPutSpacesSearchAddRecentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.add.recent.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.spaces.search.add.recent.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesSearchAddRecentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spaces.search.add.recent.$put>) {
      return parseResponse(client.spaces.search.add.recent.$put(args, options))
    },
  })
}

export function usePutSpacesSearchAddRecent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.add.recent.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.spaces.search.add.recent.$put>,
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
  const mutationDefaults = getPutSpacesSearchAddRecentMutationOptions<TError, TOnMutateResult>(
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

export function getPutSpacesSearchCancelSearchIdMutationKey() {
  return ['spaces', '/spaces/search/cancel/:searchId', 'PUT'] as const
}

export function getPutSpacesSearchCancelSearchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces.search.cancel)[':searchId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.search.cancel)[':searchId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesSearchCancelSearchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces.search.cancel)[':searchId']['$put']>,
    ) {
      return parseResponse(client.spaces.search.cancel[':searchId'].$put(args, options))
    },
  })
}

export function usePutSpacesSearchCancelSearchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.search.cancel)[':searchId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.search.cancel)[':searchId']['$put']>,
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
  const mutationDefaults = getPutSpacesSearchCancelSearchIdMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesSearchRecentQueryKey() {
  return ['spaces', '/spaces/search/recent'] as const
}

export function getSpacesSearchRecentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSpacesSearchRecentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.search.recent.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSearchRecent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>
            >
          >,
          ReturnType<typeof getSpacesSearchRecentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSearchRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSpacesSearchRecentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.search.recent.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSearchStartBasicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.search.startBasic.$get>>,
) {
  return ['spaces', '/spaces/search/startBasic', toValue(args)] as const
}

export function getSpacesSearchStartBasicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.search.startBasic.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSearchStartBasicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.search.startBasic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSearchStartBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.search.startBasic.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
            >
          >,
          ReturnType<typeof getSpacesSearchStartBasicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSearchStartBasicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSearchStartBasicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.search.startBasic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSearchStartDetailedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.search.startDetailed.$get>>,
) {
  return ['spaces', '/spaces/search/startDetailed', toValue(args)] as const
}

export function getSpacesSearchStartDetailedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.search.startDetailed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSearchStartDetailedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.search.startDetailed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSearchStartDetailed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.search.startDetailed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>
              >
            >
          >,
          ReturnType<typeof getSpacesSearchStartDetailedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSearchStartDetailedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSearchStartDetailedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.search.startDetailed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpacesTopicTopicIdUpdateTagsMutationKey() {
  return ['spaces', '/spaces/topic/:topicId/updateTags', 'PUT'] as const
}

export function getPutSpacesTopicTopicIdUpdateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesTopicTopicIdUpdateTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>,
    ) {
      return parseResponse(client.spaces.topic[':topicId'].updateTags.$put(args, options))
    },
  })
}

export function usePutSpacesTopicTopicIdUpdateTags<
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
                Awaited<ReturnType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>,
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
  const mutationDefaults = getPutSpacesTopicTopicIdUpdateTagsMutationOptions<
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

export function getPutSpacesUnflagItemIdMutationKey() {
  return ['spaces', '/spaces/unflag/:itemId', 'PUT'] as const
}

export function getPutSpacesUnflagItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.unflag)[':itemId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.unflag)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesUnflagItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces.unflag)[':itemId']['$put']>) {
      return parseResponse(client.spaces.unflag[':itemId'].$put(args, options))
    },
  })
}

export function usePutSpacesUnflagItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.unflag)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.unflag)[':itemId']['$put']>,
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
  const mutationDefaults = getPutSpacesUnflagItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSpacesUnlikeItemIdMutationKey() {
  return ['spaces', '/spaces/unlike/:itemId', 'PUT'] as const
}

export function getPutSpacesUnlikeItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.unlike)[':itemId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces.unlike)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesUnlikeItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces.unlike)[':itemId']['$put']>) {
      return parseResponse(client.spaces.unlike[':itemId'].$put(args, options))
    },
  })
}

export function usePutSpacesUnlikeItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces.unlike)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces.unlike)[':itemId']['$put']>,
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
  const mutationDefaults = getPutSpacesUnlikeItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSpacesIdMutationKey() {
  return ['spaces', '/spaces/:id', 'PUT'] as const
}

export function getPutSpacesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['$put']>) {
      return parseResponse(client.spaces[':id'].$put(args, options))
    },
  })
}

export function usePutSpacesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['$put']>,
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
  const mutationDefaults = getPutSpacesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSpacesIdMutationKey() {
  return ['spaces', '/spaces/:id', 'DELETE'] as const
}

export function getDeleteSpacesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['$delete']>) {
      return parseResponse(client.spaces[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSpacesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSpacesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSpacesIdJoinMutationKey() {
  return ['spaces', '/spaces/:id/join', 'POST'] as const
}

export function getPostSpacesIdJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['join']['$post']>) {
      return parseResponse(client.spaces[':id'].join.$post(args, options))
    },
  })
}

export function usePostSpacesIdJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['join']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['join']['$post']>,
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
  const mutationDefaults = getPostSpacesIdJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostSpacesIdLabelsAssignMutationKey() {
  return ['spaces', '/spaces/:id/labels/assign', 'POST'] as const
}

export function getPostSpacesIdLabelsAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['labels']['assign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['labels']['assign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdLabelsAssignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['labels']['assign']['$post']>,
    ) {
      return parseResponse(client.spaces[':id'].labels.assign.$post(args, options))
    },
  })
}

export function usePostSpacesIdLabelsAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['labels']['assign']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['labels']['assign']['$post']>,
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
  const mutationDefaults = getPostSpacesIdLabelsAssignMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSpacesIdLabelsUnassignMutationKey() {
  return ['spaces', '/spaces/:id/labels/unassign', 'DELETE'] as const
}

export function getDeleteSpacesIdLabelsUnassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdLabelsUnassignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>,
    ) {
      return parseResponse(client.spaces[':id'].labels.unassign.$delete(args, options))
    },
  })
}

export function useDeleteSpacesIdLabelsUnassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>,
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
  const mutationDefaults = getDeleteSpacesIdLabelsUnassignMutationOptions<TError, TOnMutateResult>(
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

export function getPostSpacesIdLeaveMutationKey() {
  return ['spaces', '/spaces/:id/leave', 'POST'] as const
}

export function getPostSpacesIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['leave']['$post']>) {
      return parseResponse(client.spaces[':id'].leave.$post(args, options))
    },
  })
}

export function usePostSpacesIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['leave']['$post']>,
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
  const mutationDefaults = getPostSpacesIdLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostSpacesIdParticipantMutationKey() {
  return ['spaces', '/spaces/:id/participant', 'POST'] as const
}

export function getPostSpacesIdParticipantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['participant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['participant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdParticipantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['participant']['$post']>,
    ) {
      return parseResponse(client.spaces[':id'].participant.$post(args, options))
    },
  })
}

export function usePostSpacesIdParticipant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['participant']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['participant']['$post']>,
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
  const mutationDefaults = getPostSpacesIdParticipantMutationOptions<TError, TOnMutateResult>(
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

export function getPostSpacesIdParticipantRemoveMutationKey() {
  return ['spaces', '/spaces/:id/participant/remove', 'POST'] as const
}

export function getPostSpacesIdParticipantRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['participant']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['participant']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdParticipantRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['participant']['remove']['$post']>,
    ) {
      return parseResponse(client.spaces[':id'].participant.remove.$post(args, options))
    },
  })
}

export function usePostSpacesIdParticipantRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['participant']['remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['participant']['remove']['$post']>,
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
  const mutationDefaults = getPostSpacesIdParticipantRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdParticipantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>>,
) {
  return ['spaces', '/spaces/:id/participants', toValue(args)] as const
}

export function getSpacesIdParticipantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].participants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].participants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdParticipantsPendingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/participants/pending', toValue(args)] as const
}

export function getSpacesIdParticipantsPendingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdParticipantsPendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].participants.pending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdParticipantsPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>
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
                  ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdParticipantsPendingQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdParticipantsPendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdParticipantsPendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].participants.pending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdPinnedTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>,
) {
  return ['spaces', '/spaces/:id/pinnedTopics', toValue(args)] as const
}

export function getSpacesIdPinnedTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPinnedTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].pinnedTopics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdPinnedTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdPinnedTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPinnedTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPinnedTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].pinnedTopics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdSearchParticipantsToAddQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/searchParticipantsToAdd', toValue(args)] as const
}

export function getSpacesIdSearchParticipantsToAddQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdSearchParticipantsToAddQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].searchParticipantsToAdd.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdSearchParticipantsToAdd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>
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
                  ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdSearchParticipantsToAddQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdSearchParticipantsToAddQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdSearchParticipantsToAddQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].searchParticipantsToAdd.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdSearchSpaceParticipantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/searchSpaceParticipants', toValue(args)] as const
}

export function getSpacesIdSearchSpaceParticipantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdSearchSpaceParticipantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].searchSpaceParticipants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdSearchSpaceParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>
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
                  ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdSearchSpaceParticipantsQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdSearchSpaceParticipantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdSearchSpaceParticipantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].searchSpaceParticipants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpacesIdUpdateTimestampMutationKey() {
  return ['spaces', '/spaces/:id/updateTimestamp', 'PUT'] as const
}

export function getPutSpacesIdUpdateTimestampMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesIdUpdateTimestampMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>,
    ) {
      return parseResponse(client.spaces[':id'].updateTimestamp.$put(args, options))
    },
  })
}

export function usePutSpacesIdUpdateTimestamp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>,
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
  const mutationDefaults = getPutSpacesIdUpdateTimestampMutationOptions<TError, TOnMutateResult>(
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

export function getPutSpacesSpaceIdParticipantMutationKey() {
  return ['spaces', '/spaces/:spaceId/participant', 'PUT'] as const
}

export function getPutSpacesSpaceIdParticipantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['participant']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesSpaceIdParticipantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['participant']['$put']>,
    ) {
      return parseResponse(client.spaces[':spaceId'].participant.$put(args, options))
    },
  })
}

export function usePutSpacesSpaceIdParticipant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['participant']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['participant']['$put']>,
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
  const mutationDefaults = getPutSpacesSpaceIdParticipantMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesSpaceIdParticipantImportIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/participant/import/', toValue(args)] as const
}

export function getSpacesSpaceIdParticipantImportIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdParticipantImportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].participant.import.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSpaceIdParticipantImportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']>
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
                    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
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
                    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdParticipantImportIndexQueryKey>
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
            ReturnType<(typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdParticipantImportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdParticipantImportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].participant.import.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdParticipantRequestMutationKey() {
  return ['spaces', '/spaces/:spaceId/participant/request', 'POST'] as const
}

export function getPostSpacesSpaceIdParticipantRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdParticipantRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>,
    ) {
      return parseResponse(client.spaces[':spaceId'].participant.request.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdParticipantRequest<
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
                  ReturnType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>,
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
  const mutationDefaults = getPostSpacesSpaceIdParticipantRequestMutationOptions<
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

export function getPostSpacesSpaceIdParticipantParticipantIdDenyMutationKey() {
  return ['spaces', '/spaces/:spaceId/participant/:participantId/deny', 'POST'] as const
}

export function getPostSpacesSpaceIdParticipantParticipantIdDenyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdParticipantParticipantIdDenyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].participant[':participantId'].deny.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdParticipantParticipantIdDeny<
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
                    (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
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
  const mutationDefaults = getPostSpacesSpaceIdParticipantParticipantIdDenyMutationOptions<
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

export function getPostSpacesSpaceIdParticipantParticipantIdGrantMutationKey() {
  return ['spaces', '/spaces/:spaceId/participant/:participantId/grant', 'POST'] as const
}

export function getPostSpacesSpaceIdParticipantParticipantIdGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdParticipantParticipantIdGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].participant[':participantId'].grant.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdParticipantParticipantIdGrant<
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
                    (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
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
  const mutationDefaults = getPostSpacesSpaceIdParticipantParticipantIdGrantMutationOptions<
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

export function getPostSpacesSpaceIdTopicMutationKey() {
  return ['spaces', '/spaces/:spaceId/topic', 'POST'] as const
}

export function getPostSpacesSpaceIdTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['topic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':spaceId']['topic']['$post']>) {
      return parseResponse(client.spaces[':spaceId'].topic.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['topic']['$post']>,
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
  const mutationDefaults = getPostSpacesSpaceIdTopicMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesSpaceIdTopicTopicIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/topic/:topicId', toValue(args)] as const
}

export function getSpacesSpaceIdTopicTopicIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdTopicTopicIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].topic[':topicId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSpaceIdTopicTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdTopicTopicIdQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdTopicTopicIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdTopicTopicIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].topic[':topicId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpacesSpaceIdTopicTopicIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/topic/:topicId', 'PUT'] as const
}

export function getPutSpacesSpaceIdTopicTopicIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesSpaceIdTopicTopicIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>,
    ) {
      return parseResponse(client.spaces[':spaceId'].topic[':topicId'].$put(args, options))
    },
  })
}

export function usePutSpacesSpaceIdTopicTopicId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>,
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
  const mutationDefaults = getPutSpacesSpaceIdTopicTopicIdMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesSpaceIdTopicTopicIdReplyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply', toValue(args)] as const
}

export function getSpacesSpaceIdTopicTopicIdReplyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdTopicTopicIdReplyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].topic[':topicId'].reply.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSpaceIdTopicTopicIdReply<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
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
                    (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']
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
                    (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdTopicTopicIdReplyQueryKey>
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
            ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdTopicTopicIdReplyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdTopicTopicIdReplyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].topic[':topicId'].reply.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdTopicTopicIdReplyMutationKey() {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply', 'POST'] as const
}

export function getPostSpacesSpaceIdTopicTopicIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdTopicTopicIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].topic[':topicId'].reply.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdTopicTopicIdReply<
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
                    (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']
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
  const mutationDefaults = getPostSpacesSpaceIdTopicTopicIdReplyMutationOptions<
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

export function getPutSpacesSpaceIdTopicTopicIdReplyReplyIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply/:replyId', 'PUT'] as const
}

export function getPutSpacesSpaceIdTopicTopicIdReplyReplyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesSpaceIdTopicTopicIdReplyReplyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].topic[':topicId'].reply[':replyId'].$put(args, options),
      )
    },
  })
}

export function usePutSpacesSpaceIdTopicTopicIdReplyReplyId<
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
                    (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
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
  const mutationDefaults = getPutSpacesSpaceIdTopicTopicIdReplyReplyIdMutationOptions<
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

export function getSpacesSpaceIdTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/topics', toValue(args)] as const
}

export function getSpacesSpaceIdTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSpaceIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpacesSpaceIdWelcomeboxContentMutationKey() {
  return ['spaces', '/spaces/:spaceId/welcomebox/:content', 'PUT'] as const
}

export function getPutSpacesSpaceIdWelcomeboxContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesSpaceIdWelcomeboxContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>,
    ) {
      return parseResponse(client.spaces[':spaceId'].welcomebox[':content'].$put(args, options))
    },
  })
}

export function usePutSpacesSpaceIdWelcomeboxContent<
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
                  ReturnType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>,
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
  const mutationDefaults = getPutSpacesSpaceIdWelcomeboxContentMutationOptions<
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

export function getPutSpacesTopicIdPinMutationKey() {
  return ['spaces', '/spaces/:topicId/pin', 'PUT'] as const
}

export function getPutSpacesTopicIdPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':topicId']['pin']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':topicId']['pin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesTopicIdPinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':topicId']['pin']['$put']>) {
      return parseResponse(client.spaces[':topicId'].pin.$put(args, options))
    },
  })
}

export function usePutSpacesTopicIdPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':topicId']['pin']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':topicId']['pin']['$put']>,
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
  const mutationDefaults = getPutSpacesTopicIdPinMutationOptions<TError, TOnMutateResult>(
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

export function getPutSpacesTopicIdUnpinMutationKey() {
  return ['spaces', '/spaces/:topicId/unpin', 'PUT'] as const
}

export function getPutSpacesTopicIdUnpinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':topicId']['unpin']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':topicId']['unpin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpacesTopicIdUnpinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':topicId']['unpin']['$put']>) {
      return parseResponse(client.spaces[':topicId'].unpin.$put(args, options))
    },
  })
}

export function usePutSpacesTopicIdUnpin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':topicId']['unpin']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spaces)[':topicId']['unpin']['$put']>,
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
  const mutationDefaults = getPutSpacesTopicIdUnpinMutationOptions<TError, TOnMutateResult>(
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

export function getTelephonyDeviceInfosQueryKey() {
  return ['telephony', '/telephony/deviceInfos'] as const
}

export function getTelephonyDeviceInfosQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTelephonyDeviceInfosQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telephony.deviceInfos.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelephonyDeviceInfos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
            >
          >,
          ReturnType<typeof getTelephonyDeviceInfosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyDeviceInfosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTelephonyDeviceInfosQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.telephony.deviceInfos.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTelephonyTelephonyConversationIdQueryKey() {
  return ['telephony', '/telephony/telephonyConversationId'] as const
}

export function getTelephonyTelephonyConversationIdQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTelephonyTelephonyConversationIdQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telephony.telephonyConversationId.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelephonyTelephonyConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
      >
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
                Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
              >
            >
          >,
          ReturnType<typeof getTelephonyTelephonyConversationIdQueryKey>
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
          Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyTelephonyConversationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTelephonyTelephonyConversationIdQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.telephony.telephonyConversationId.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTelephonyTelephonyConversationIdJournalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
  >,
) {
  return ['telephony', '/telephony/:telephonyConversationId/journal', toValue(args)] as const
}

export function getTelephonyTelephonyConversationIdJournalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelephonyTelephonyConversationIdJournalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telephony[':telephonyConversationId'].journal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelephonyTelephonyConversationIdJournal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
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
                    (typeof client.telephony)[':telephonyConversationId']['journal']['$get']
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
                    (typeof client.telephony)[':telephonyConversationId']['journal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTelephonyTelephonyConversationIdJournalQueryKey>
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
            ReturnType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyTelephonyConversationIdJournalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelephonyTelephonyConversationIdJournalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telephony[':telephonyConversationId'].journal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersLabelsQueryKey() {
  return ['users', '/users/labels'] as const
}

export function getUsersLabelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersLabelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.labels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
          >,
          ReturnType<typeof getUsersLabelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersLabelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.labels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersLabelsMutationKey() {
  return ['users', '/users/labels', 'POST'] as const
}

export function getPostUsersLabelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.labels.$post>) {
      return parseResponse(client.users.labels.$post(args, options))
    },
  })
}

export function usePostUsersLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.labels.$post>,
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
  const mutationDefaults = getPostUsersLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersLabelsLabelIdMutationKey() {
  return ['users', '/users/labels/:labelId', 'DELETE'] as const
}

export function getDeleteUsersLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.labels)[':labelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.labels)[':labelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersLabelsLabelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users.labels)[':labelId']['$delete']>) {
      return parseResponse(client.users.labels[':labelId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersLabelsLabelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.labels)[':labelId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.labels)[':labelId']['$delete']>,
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
  const mutationDefaults = getDeleteUsersLabelsLabelIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.list.$get>>,
) {
  return ['users', '/users/list', toValue(args)] as const
}

export function getUsersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
          >,
          ReturnType<typeof getUsersListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersPresenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.presence.$get>>,
) {
  return ['users', '/users/presence', toValue(args)] as const
}

export function getUsersPresenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.presence.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.presence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersPresence<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.presence.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
          >,
          ReturnType<typeof getUsersPresenceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.presence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersPresenceMutationKey() {
  return ['users', '/users/presence', 'PUT'] as const
}

export function getPutUsersPresenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.presence.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersPresenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.presence.$put>) {
      return parseResponse(client.users.presence.$put(args, options))
    },
  })
}

export function usePutUsersPresence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.users.presence.$put>,
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
  const mutationDefaults = getPutUsersPresenceMutationOptions<TError, TOnMutateResult>(
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

export function getUsersProfileQueryKey() {
  return ['users', '/users/profile'] as const
}

export function getUsersProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
          >,
          ReturnType<typeof getUsersProfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersProfileMutationKey() {
  return ['users', '/users/profile', 'PUT'] as const
}

export function getPutUsersProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.users.profile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.profile.$put>) {
      return parseResponse(client.users.profile.$put(args, options))
    },
  })
}

export function usePutUsersProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.users.profile.$put>,
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
  const mutationDefaults = getPutUsersProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersSupportinfoQueryKey() {
  return ['users', '/users/supportinfo'] as const
}

export function getUsersSupportinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersSupportinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.supportinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSupportinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>
            >
          >,
          ReturnType<typeof getUsersSupportinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSupportinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersSupportinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.supportinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersEmailAddressGetUserByEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>
  >,
) {
  return ['users', '/users/:emailAddress/getUserByEmail', toValue(args)] as const
}

export function getUsersEmailAddressGetUserByEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersEmailAddressGetUserByEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':emailAddress'].getUserByEmail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersEmailAddressGetUserByEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>
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
                  ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersEmailAddressGetUserByEmailQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersEmailAddressGetUserByEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersEmailAddressGetUserByEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':emailAddress'].getUserByEmail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  return ['users', '/users/:id', toValue(args)] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdPresenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['presence']['$get']>>,
) {
  return ['users', '/users/:id/presence', toValue(args)] as const
}

export function getUsersIdPresenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['presence']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].presence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['presence']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdPresenceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].presence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksQueryKey() {
  return ['webhooks', '/webhooks'] as const
}

export function getWebhooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'DELETE'] as const
}

export function getDeleteWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksMutationKey(),
    async mutationFn() {
      return parseResponse(client.webhooks.$delete(undefined, options))
    },
  })
}

export function useDeleteWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>
            >
          | undefined,
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
  const mutationDefaults = getDeleteWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebhooksIncomingCreateConversationIdMutationKey() {
  return ['webhooks', '/webhooks/incoming/create/:conversationId', 'POST'] as const
}

export function getPostWebhooksIncomingCreateConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIncomingCreateConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>,
    ) {
      return parseResponse(client.webhooks.incoming.create[':conversationId'].$post(args, options))
    },
  })
}

export function usePostWebhooksIncomingCreateConversationId<
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
                  ReturnType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>,
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
  const mutationDefaults = getPostWebhooksIncomingCreateConversationIdMutationOptions<
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

export function getWebhooksIncomingUserUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/incoming/user/:userId', toValue(args)] as const
}

export function getWebhooksIncomingUserUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIncomingUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.incoming.user[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIncomingUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIncomingUserUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIncomingUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIncomingUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.incoming.user[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksIncomingWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/incoming/:webhookId', 'POST'] as const
}

export function getPostWebhooksIncomingWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.incoming)[':webhookId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIncomingWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$post']>,
    ) {
      return parseResponse(client.webhooks.incoming[':webhookId'].$post(args, options))
    },
  })
}

export function usePostWebhooksIncomingWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.incoming)[':webhookId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$post']>,
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
  const mutationDefaults = getPostWebhooksIncomingWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksIncomingWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/incoming/:webhookId', 'DELETE'] as const
}

export function getDeleteWebhooksIncomingWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIncomingWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>,
    ) {
      return parseResponse(client.webhooks.incoming[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksIncomingWebhookId<
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
                Awaited<ReturnType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIncomingWebhookIdMutationOptions<
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

export function getPostWebhooksPresenceMutationKey() {
  return ['webhooks', '/webhooks/presence', 'POST'] as const
}

export function getPostWebhooksPresenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.presence.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.presence.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksPresenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.presence.$post>) {
      return parseResponse(client.webhooks.presence.$post(args, options))
    },
  })
}

export function usePostWebhooksPresence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.presence.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.presence.$post>,
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
  const mutationDefaults = getPostWebhooksPresenceMutationOptions<TError, TOnMutateResult>(
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

export function getPutWebhooksPresenceIdMutationKey() {
  return ['webhooks', '/webhooks/presence/:id', 'PUT'] as const
}

export function getPutWebhooksPresenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks.presence)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.presence)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksPresenceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.presence)[':id']['$put']>) {
      return parseResponse(client.webhooks.presence[':id'].$put(args, options))
    },
  })
}

export function usePutWebhooksPresenceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks.presence)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks.presence)[':id']['$put']>,
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
  const mutationDefaults = getPutWebhooksPresenceIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id', toValue(args)] as const
}

export function getWebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getWebhooksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'PUT'] as const
}

export function getPutWebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$put']>) {
      return parseResponse(client.webhooks[':id'].$put(args, options))
    },
  })
}

export function usePutWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>) {
      return parseResponse(client.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIdMutationOptions<TError, TOnMutateResult>(
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
