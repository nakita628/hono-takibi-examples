import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConversationsByIdsQueryKey(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
) {
  return ['conversations', '/conversations/byIds', args] as const
}

export function getConversationsByIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversations.byIds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsByIdsQueryKey>
  >({
    queryKey: getConversationsByIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.byIds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversationsByIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsByIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsByIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsByIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.byIds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsByIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsByIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConversationsCommunityQueryKey(
  args: InferRequestType<typeof client.conversations.community.$get>,
) {
  return ['conversations', '/conversations/community', args] as const
}

export function getConversationsCommunityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.community.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCommunityQueryKey>
  >({
    queryKey: getConversationsCommunityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.community.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsCommunity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.community.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsCommunityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsCommunityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsCommunity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.community.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.community.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsCommunityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsCommunityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
) {
  return ['conversations', '/conversations/conversationdetails', args] as const
}

export function getConversationsConversationdetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConversationdetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.conversationdetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsConversationdetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsConversationdetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConversationdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.conversations.conversationdetails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsConversationdetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsDirectQueryKey(
  args: InferRequestType<typeof client.conversations.direct.$get>,
) {
  return ['conversations', '/conversations/direct', args] as const
}

export function getConversationsDirectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversations.direct.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsDirectQueryKey>
  >({
    queryKey: getConversationsDirectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.direct.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversationsDirect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.direct.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsDirectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsDirectQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsDirect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.direct.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.direct.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsDirectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsDirectQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getConversationsFavoriteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsFavoriteQueryKey>
  >({
    queryKey: getConversationsFavoriteQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.favorite.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsFavorite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsFavoriteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsFavoriteQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsFavorite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.favorite.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsFavoriteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsFavoriteQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
        InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
) {
  return ['conversations', '/conversations/label/:labelId', args] as const
}

export function getConversationsLabelLabelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsLabelLabelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.label[':labelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsLabelLabelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsLabelLabelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsLabelLabelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.label)[':labelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsLabelLabelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsMessagesFlagQueryKey() {
  return ['conversations', '/conversations/messages/flag'] as const
}

export function getConversationsMessagesFlagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsMessagesFlagQueryKey>
  >({
    queryKey: getConversationsMessagesFlagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.messages.flag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getConversationsMessagesFlagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsMessagesFlagQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsMessagesFlag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.conversations.messages.flag.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsMessagesFlagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsMessagesFlagQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConversationsMessagesItemIdQueryKey(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
) {
  return ['conversations', '/conversations/messages/:itemId', args] as const
}

export function getConversationsMessagesItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsMessagesItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.messages[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsMessagesItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsMessagesItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsMessagesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.messages)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsMessagesItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
) {
  return ['conversations', '/conversations/resolveinvitetoken', args] as const
}

export function getConversationsResolveinvitetokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsResolveinvitetokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.resolveinvitetoken.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsResolveinvitetoken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsResolveinvitetokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsResolveinvitetokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsResolveinvitetoken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversations.resolveinvitetoken.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsResolveinvitetokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useConversationsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
) {
  return ['conversations', '/conversations/:convId', args] as const
}

export function getConversationsConvIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsConvIdQueryKey>
  >({
    queryKey: getConversationsConvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':convId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversationsConvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsConvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversationsConvIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversationsConvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversations)[':convId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsConvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversationsConvIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
) {
  return ['conversations', '/conversations/:convId/conversationdetails', args] as const
}

export function getConversationsConvIdConversationdetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConvIdConversationdetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':convId'].conversationdetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsConvIdConversationdetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConvIdConversationdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsConvIdConversationdetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
) {
  return ['conversations', '/conversations/:convId/items', args] as const
}

export function getConversationsConvIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConvIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':convId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsConvIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsConvIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConvIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsConvIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
) {
  return ['conversations', '/conversations/:convId/messages/flag', args] as const
}

export function getConversationsConvIdMessagesFlagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConvIdMessagesFlagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':convId'].messages.flag.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsConvIdMessagesFlagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsConvIdMessagesFlagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConvIdMessagesFlag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getConversationsConvIdMessagesFlagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsConvIdMessagesFlagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
) {
  return ['conversations', '/conversations/:convId/participants', args] as const
}

export function getConversationsConvIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConvIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':convId'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsConvIdParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConvIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsConvIdParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversationsConvIdPinsQueryKey(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
) {
  return ['conversations', '/conversations/:convId/pins', args] as const
}

export function getConversationsConvIdPinsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsConvIdPinsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':convId'].pins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getConversationsConvIdPinsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConversationsConvIdPinsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversationsConvIdPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':convId']['pins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConversationsConvIdPinsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getRtcSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRtcSessionsQueryKey>
  >({
    queryKey: getRtcSessionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rtc.sessions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRtcSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRtcSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRtcSessionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRtcSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rtc.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRtcSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRtcSessionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesQueryKey(args: InferRequestType<typeof client.spaces.$get>) {
  return ['spaces', '/spaces', args] as const
}

export function getSpacesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesQueryKey>
  >({
    queryKey: getSpacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.spaces.create.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.spaces.directory.$get>,
) {
  return ['spaces', '/spaces/directory', args] as const
}

export function getSpacesDirectoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spaces.directory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesDirectoryQueryKey>
  >({
    queryKey: getSpacesDirectoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.directory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesDirectory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.directory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesDirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesDirectoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesDirectory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.directory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.directory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesDirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesDirectoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesExistsNameQueryKey(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
) {
  return ['spaces', '/spaces/exists/:name', args] as const
}

export function getSpacesExistsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesExistsNameQueryKey>
  >({
    queryKey: getSpacesExistsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.exists[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesExistsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesExistsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesExistsNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesExistsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces.exists)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesExistsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesExistsNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.spaces.flagged.$get>,
) {
  return ['spaces', '/spaces/flagged', args] as const
}

export function getSpacesFlaggedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spaces.flagged.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesFlaggedQueryKey>
  >({
    queryKey: getSpacesFlaggedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.flagged.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesFlagged<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.flagged.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesFlaggedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesFlaggedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesFlagged<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.flagged.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.flagged.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesFlaggedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesFlaggedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesIdsQueryKey(args: InferRequestType<typeof client.spaces.ids.$get>) {
  return ['spaces', '/spaces/ids', args] as const
}

export function getSpacesIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spaces.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesIdsQueryKey>
  >({
    queryKey: getSpacesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.ids.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.ids.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.ids.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
) {
  return ['spaces', '/spaces/likes/:itemId', args] as const
}

export function getSpacesLikesItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesLikesItemIdQueryKey>
  >({
    queryKey: getSpacesLikesItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.likes[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesLikesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesLikesItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesLikesItemIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesLikesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces.likes)[':itemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesLikesItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesLikesItemIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getSpacesSearchRecentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSearchRecentQueryKey>
  >({
    queryKey: getSpacesSearchRecentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.search.recent.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSearchRecent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSearchRecentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesSearchRecentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesSearchRecent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.recent.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSearchRecentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesSearchRecentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesSearchStartBasicQueryKey(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
) {
  return ['spaces', '/spaces/search/startBasic', args] as const
}

export function getSpacesSearchStartBasicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSearchStartBasicQueryKey>
  >({
    queryKey: getSpacesSearchStartBasicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.search.startBasic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSearchStartBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSearchStartBasicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSearchStartBasicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSearchStartBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startBasic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSearchStartBasicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSearchStartBasicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSearchStartDetailedQueryKey(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
) {
  return ['spaces', '/spaces/search/startDetailed', args] as const
}

export function getSpacesSearchStartDetailedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSearchStartDetailedQueryKey>
  >({
    queryKey: getSpacesSearchStartDetailedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.search.startDetailed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSearchStartDetailed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesSearchStartDetailedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSearchStartDetailedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSearchStartDetailed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.spaces.search.startDetailed.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSearchStartDetailedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSearchStartDetailedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
) {
  return ['spaces', '/spaces/:id/participants', args] as const
}

export function getSpacesIdParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesIdParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesIdParticipantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdParticipantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdParticipantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesIdParticipantsPendingQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
) {
  return ['spaces', '/spaces/:id/participants/pending', args] as const
}

export function getSpacesIdParticipantsPendingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesIdParticipantsPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].participants.pending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdParticipantsPendingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdParticipantsPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['participants']['pending']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdParticipantsPendingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesIdPinnedTopicsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
) {
  return ['spaces', '/spaces/:id/pinnedTopics', args] as const
}

export function getSpacesIdPinnedTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesIdPinnedTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].pinnedTopics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesIdPinnedTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdPinnedTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdPinnedTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdPinnedTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesIdSearchParticipantsToAddQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
) {
  return ['spaces', '/spaces/:id/searchParticipantsToAdd', args] as const
}

export function getSpacesIdSearchParticipantsToAddQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesIdSearchParticipantsToAddQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].searchParticipantsToAdd.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdSearchParticipantsToAddQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdSearchParticipantsToAdd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdSearchParticipantsToAddQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesIdSearchSpaceParticipantsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
) {
  return ['spaces', '/spaces/:id/searchSpaceParticipants', args] as const
}

export function getSpacesIdSearchSpaceParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesIdSearchSpaceParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].searchSpaceParticipants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdSearchSpaceParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdSearchSpaceParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdSearchSpaceParticipantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/participant/import/', args] as const
}

export function getSpacesSpaceIdParticipantImportIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesSpaceIdParticipantImportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].participant.import.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesSpaceIdParticipantImportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdParticipantImportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdParticipantImportIndex<
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
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSpacesSpaceIdParticipantImportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdParticipantImportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/topic/:topicId', args] as const
}

export function getSpacesSpaceIdTopicTopicIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesSpaceIdTopicTopicIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].topic[':topicId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesSpaceIdTopicTopicIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdTopicTopicIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdTopicTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdTopicTopicIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/topic/:topicId/reply', args] as const
}

export function getSpacesSpaceIdTopicTopicIdReplyQueryOptions<
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesSpaceIdTopicTopicIdReplyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].topic[':topicId'].reply.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdTopicTopicIdReplyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdTopicTopicIdReply<
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdTopicTopicIdReplyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/topics', args] as const
}

export function getSpacesSpaceIdTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpacesSpaceIdTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpacesSpaceIdTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesSpaceIdTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesSpaceIdTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getTelephonyDeviceInfosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelephonyDeviceInfosQueryKey>
  >({
    queryKey: getTelephonyDeviceInfosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.telephony.deviceInfos.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTelephonyDeviceInfos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyDeviceInfosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTelephonyDeviceInfosQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTelephonyDeviceInfos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.telephony.deviceInfos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelephonyDeviceInfosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTelephonyDeviceInfosQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTelephonyTelephonyConversationIdQueryKey() {
  return ['telephony', '/telephony/telephonyConversationId'] as const
}

export function getTelephonyTelephonyConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.telephony.telephonyConversationId.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getTelephonyTelephonyConversationIdQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.telephony.telephonyConversationId.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getTelephonyTelephonyConversationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTelephonyTelephonyConversationIdQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTelephonyTelephonyConversationId<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTelephonyTelephonyConversationIdQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTelephonyTelephonyConversationIdJournalQueryKey(
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
) {
  return ['telephony', '/telephony/:telephonyConversationId/journal', args] as const
}

export function getTelephonyTelephonyConversationIdJournalQueryOptions<
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
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTelephonyTelephonyConversationIdJournalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telephony[':telephonyConversationId'].journal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTelephonyTelephonyConversationIdJournalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTelephonyTelephonyConversationIdJournal<
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
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTelephonyTelephonyConversationIdJournalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersLabelsQueryKey() {
  return ['users', '/users/labels'] as const
}

export function getUsersLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersLabelsQueryKey>
  >({
    queryKey: getUsersLabelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.labels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersLabelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersLabelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.labels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.labels.$post>,
        TOnMutateResult
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

export function getUsersListQueryKey(args: InferRequestType<typeof client.users.list.$get>) {
  return ['users', '/users/list', args] as const
}

export function getUsersListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersListQueryKey>
  >({
    queryKey: getUsersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersPresenceQueryKey(
  args: InferRequestType<typeof client.users.presence.$get>,
) {
  return ['users', '/users/presence', args] as const
}

export function getUsersPresenceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.presence.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersPresenceQueryKey>
  >({
    queryKey: getUsersPresenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.presence.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersPresence<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.presence.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersPresenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersPresenceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersPresence<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.presence.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersPresenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersPresenceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.presence.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.users.presence.$put>,
        TOnMutateResult
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

export function getUsersProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersProfileQueryKey>
  >({
    queryKey: getUsersProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.profile.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.users.profile.$put>,
        TOnMutateResult
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

export function getUsersSupportinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSupportinfoQueryKey>
  >({
    queryKey: getUsersSupportinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.supportinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersSupportinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSupportinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersSupportinfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersSupportinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.supportinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSupportinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersSupportinfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersEmailAddressGetUserByEmailQueryKey(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
) {
  return ['users', '/users/:emailAddress/getUserByEmail', args] as const
}

export function getUsersEmailAddressGetUserByEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersEmailAddressGetUserByEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':emailAddress'].getUserByEmail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersEmailAddressGetUserByEmailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersEmailAddressGetUserByEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersEmailAddressGetUserByEmailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdPresenceQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
) {
  return ['users', '/users/:id/presence', args] as const
}

export function getUsersIdPresenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdPresenceQueryKey>
  >({
    queryKey: getUsersIdPresenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].presence.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersIdPresenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdPresenceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['presence']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdPresenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdPresenceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWebhooksQueryKey() {
  return ['webhooks', '/webhooks'] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
) {
  return ['webhooks', '/webhooks/incoming/user/:userId', args] as const
}

export function getWebhooksIncomingUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhooksIncomingUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.incoming.user[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWebhooksIncomingUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWebhooksIncomingUserUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWebhooksIncomingUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks.incoming.user)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWebhooksIncomingUserUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
) {
  return ['webhooks', '/webhooks/:id', args] as const
}

export function getWebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.webhooks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdQueryKey>
  >({
    queryKey: getWebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
        TOnMutateResult
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
